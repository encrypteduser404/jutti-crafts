import { ImageFrame } from './ImageFrame';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  position: number;
  total: number;
  onOpen: (position: number, trigger: HTMLButtonElement) => void;
}

export function ProductCard({ product, position, total, onOpen }: ProductCardProps) {
  const image = product.images[0];

  return (
    <article className="product-card">
      <button
        aria-haspopup="dialog"
        aria-label={`Open ${product.editorial ? 'collection' : 'archive'} entry ${String(position + 1).padStart(2, '0')} of ${String(total).padStart(2, '0')}: ${product.name}`}
        className="product-card__trigger"
        onClick={(event) => onOpen(position, event.currentTarget)}
        type="button"
      >
        <ImageFrame
          alt={image?.alt ?? 'Product image pending'}
          aspectRatio={image?.aspectRatio ?? '4 / 5'}
          className="product-card__image"
          height={image?.height ?? 1200}
          loading="lazy"
          objectPosition={image?.objectPosition}
          src={image?.src}
          width={image?.width ?? 960}
        />
        <span
          className={`product-card__caption${product.reference ? '' : ' product-card__caption--without-reference'}`}
        >
          {product.reference && <span className="product-card__reference">{product.reference}</span>}
          <span className="product-card__text">
            {product.editorial && <span className="product-card__type">Collection</span>}
            <span className="product-card__name">{product.name}</span>
            <span className="product-card__description">{product.description}</span>
          </span>
          <span aria-hidden="true" className="product-card__affordance">
            View entry
          </span>
        </span>
      </button>
    </article>
  );
}