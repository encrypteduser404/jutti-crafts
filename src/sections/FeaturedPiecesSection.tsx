import { ImageFrame } from '../components/ImageFrame';
import { TextLink } from '../components/TextLink';
import { homepageContent } from '../data/homepage';

export function FeaturedPiecesSection() {
  const { featured } = homepageContent;

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
        {featured.pieces.map((piece, index) => (
          <article
            aria-labelledby={`${piece.id}-title`}
            className={`featured-piece featured-piece--${['one', 'two', 'three'][index]}`}
            key={piece.id}
          >
            <ImageFrame
              alt={piece.imageAlt}
              aspectRatio={piece.aspectRatio}
              className="featured-piece__image"
              height={1200}
              width={960}
            />
            <p className="featured-piece__reference">{piece.reference}</p>
            <h3 className="featured-piece__title" id={`${piece.id}-title`}>
              {piece.title}
            </h3>
            <p className="featured-piece__description">{piece.description}</p>
            <TextLink
              aria-label={`Explore archive for ${piece.reference}`}
              className="featured-piece__link"
              href="#archive"
            >
              Explore archive
            </TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}