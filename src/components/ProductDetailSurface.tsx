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
  const entryType = product?.editorial
    ? product.category === "Men's Collection"
      ? 'Collection'
      : 'Editorial'
    : undefined;

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
              {entryType && <p className="product-detail__type">{entryType}</p>}
              <h2 className="product-detail__title" id="product-detail-title">
                {product.name}
              </h2>
              <p className="product-detail__description">{product.detailedDescription}</p>
              <dl className="product-detail__metadata">
                {product.category && (
                  <div><dt>Category</dt><dd>{product.category}</dd></div>
                )}
                {product.color && (
                  <div><dt>Colour</dt><dd>{product.color}</dd></div>
                )}
                {product.style && (
                  <div><dt>Style</dt><dd>{product.style}</dd></div>
                )}
                {product.detailing && (
                  <div><dt>Detailing</dt><dd>{product.detailing}</dd></div>
                )}
                {product.occasion && (
                  <div><dt>Occasion</dt><dd>{product.occasion}</dd></div>
                )}
              </dl>
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