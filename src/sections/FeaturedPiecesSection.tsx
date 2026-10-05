import { ImageFrame } from '../components/ImageFrame';
import { TextLink } from '../components/TextLink';
import { homepageContent } from '../data/homepage';
import { products } from '../data/products';

export function FeaturedPiecesSection() {
  const { featured } = homepageContent;
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section aria-labelledby="featured-title" className="editorial-section page-container" id="featured">
      <header className="section-topline">
        <div>
          <p className="eyebrow">{featured.eyebrow}</p>
          <h2 className="section-heading" id="featured-title">
            {featured.title}
          </h2>
        </div>
      </header>
      <div className="featured-grid">
        {featuredProducts.map((product, index) => {
          const image = product.images[0];

          return (
          <article
            aria-labelledby={`${product.id}-title`}
            className={`featured-piece featured-piece--${['first', 'second', 'third'][index] ?? 'first'}`}
            key={product.id}
          >
            <ImageFrame
              alt={image?.alt ?? 'Product image pending'}
              aspectRatio={image?.aspectRatio ?? '4 / 5'}
              className="featured-piece__image"
              height={image?.height ?? 1200}
              objectPosition={image?.objectPosition}
              src={image?.src}
              width={image?.width ?? 960}
            />
            <div
              className={`featured-piece__caption${product.reference ? '' : ' featured-piece__caption--without-reference'}`}
            >
              {product.reference && <p className="featured-piece__reference">{product.reference}</p>}
              <div className="featured-piece__details">
                <h3 className="featured-piece__title" id={`${product.id}-title`}>
                  {product.name}
                </h3>
                <p className="featured-piece__description">{product.description}</p>
                <TextLink
                  aria-label={`Explore archive for ${product.name}`}
                  className="featured-piece__link"
                  href="#archive"
                >
                  View archive entry
                </TextLink>
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}