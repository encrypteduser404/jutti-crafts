import { useRef, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailSurface } from '../components/ProductDetailSurface';
import { products } from '../data/products';

export function ProductArchive() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const selectedProduct = selectedPosition === null ? null : products[selectedPosition];

  function openProduct(position: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelectedPosition(position);
  }

  function closeProduct() {
    setSelectedPosition(null);
    triggerRef.current?.focus();
  }

  function navigateProduct(direction: -1 | 1) {
    setSelectedPosition((currentPosition) => {
      if (currentPosition === null) return currentPosition;
      return (currentPosition + direction + products.length) % products.length;
    });
  }

  return (
    <>
      <p aria-label="Collection item count" className="archive__count">
        {String(products.length).padStart(2, '0')} ENTRIES
      </p>
      <div aria-label="Product archive" className="product-archive__grid">
        {products.map((product, position) => (
          <ProductCard
            key={product.id}
            onOpen={openProduct}
            position={position}
            product={product}
            total={products.length}
          />
        ))}
      </div>
      <ProductDetailSurface
        onClose={closeProduct}
        onNavigate={navigateProduct}
        position={selectedPosition ?? 0}
        product={selectedProduct ?? null}
        total={products.length}
      />
    </>
  );
}