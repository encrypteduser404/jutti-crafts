import { useEffect, useRef } from 'react';
import { ImageFrame } from './ImageFrame';
import type { Product } from '../types/product';

interface ProductDetailSurfaceProps {
  product: Product | null;
  position: number;
  total: number;
  onClose: () => void;
  onNavigate: (direction: -1 | 1) => void;
}

export function ProductDetailSurface({
  product,
  position,
  total,
  onClose,
  onNavigate,
}: ProductDetailSurfaceProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (product && !dialog.open) dialog.showModal();
    if (!product && dialog.open) dialog.close();
  }, [product]);

  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [product]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <dialog
      aria-labelledby="product-detail-title"
      aria-modal="true"
      className="product-detail"
      role="dialog"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeDialog();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
      ref={dialogRef}
    >
      {product && (
        <div className="product-detail__layout">
          <header className="product-detail__header">
            {product.reference && <p className="product-detail__reference">{product.reference}</p>}
            <button aria-label="Close product details" className="product-detail__close" onClick={closeDialog} type="button">
              Close
            </button>
          </header>
          <div className="product-detail__content">
            <div className="product-detail__intro">
              {product.editorial && <p className="product-detail__type">Collection</p>}
              <h2 className="product-detail__title" id="product-detail-title">
                {product.name}
              </h2>
              <p className="product-detail__description">{product.detailedDescription}</p>
            </div>
            <div aria-label="Product images" className="product-detail__gallery">
              {product.images.map((image, imageIndex) => (
                <ImageFrame
                  alt={image.alt}
                  aspectRatio={image.aspectRatio}
                  className="product-detail__image"
                  height={image.height ?? 1200}
                  objectPosition={image.objectPosition}
                  priority={image.priority ?? imageIndex === 0}
                  src={image.src}
                  width={image.width ?? 960}
                  key={`${product.id}-${image.src}`}
                />
              ))}
            </div>
            <p className="product-detail__inquiry-note" id="inquiry-note">
              Official inquiry destination pending.
            </p>
            <button aria-describedby="inquiry-note" className="product-detail__inquiry" disabled type="button">
              Inquiry details pending
            </button>
          </div>
          <footer className="product-detail__footer">
            <button className="product-detail__navigation" onClick={() => onNavigate(-1)} type="button">
              Previous
            </button>
            <p aria-live="polite" className="product-detail__position">
              {String(position + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
            <button className="product-detail__navigation" onClick={() => onNavigate(1)} type="button">
              Next
            </button>
          </footer>
        </div>
      )}
    </dialog>
  );
}