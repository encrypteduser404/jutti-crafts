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
          aspectRatio="4 / 3"
          className="hero__visual"
          height={900}
          priority
          width={1200}
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
          <p className="hero__metadata">{hero.metadata}</p>
        </div>
      </div>
    </section>
  );
}