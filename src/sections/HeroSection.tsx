import { ImageFrame } from '../components/ImageFrame';
import { TextLink } from '../components/TextLink';
import { homepageContent } from '../data/homepage';

export function HeroSection() {
  const { hero } = homepageContent;

  return (
    <section aria-labelledby="hero-title" className="hero" id="top">
      <div className="page-container hero__grid">
        <ImageFrame
          alt={hero.imageAlt}
          aspectRatio={hero.aspectRatio}
          className="hero__visual"
          height={hero.imageHeight}
          objectPosition={hero.objectPosition}
          priority
          src={hero.imageSrc}
          width={hero.imageWidth}
        />
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title" id="hero-title">
            {hero.title}
          </h1>
          <p className="hero__description">{hero.description}</p>
          <TextLink className="hero__cta" href="#archive">
            Explore the Archive
          </TextLink>
          <div className="hero__metadata">
            <span>{hero.metadata}</span>
          </div>
        </div>
      </div>
    </section>
  );
}