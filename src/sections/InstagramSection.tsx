import { ImageFrame } from '../components/ImageFrame';
import { homepageContent } from '../data/homepage';

export function InstagramSection() {
  const { instagram } = homepageContent;

  return (
    <section
      aria-labelledby="instagram-title"
      className="editorial-section page-container"
      id="instagram"
    >
      <div className="instagram-heading">
        <p className="eyebrow">{instagram.eyebrow}</p>
        <h2 className="section-heading" id="instagram-title">
          {instagram.title}
        </h2>
        <p>{instagram.description}</p>
      </div>
      <ul aria-label="Instagram image placeholders" className="instagram-grid">
        {instagram.imageAlts.map((alt) => (
          <li key={alt}>
            <ImageFrame
              alt={alt}
              aspectRatio="1 / 1"
              className="instagram-grid__image"
              height={600}
              width={600}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}