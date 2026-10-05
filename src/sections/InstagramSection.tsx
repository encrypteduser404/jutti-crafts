import { ImageFrame } from '../components/ImageFrame';
import { homepageContent } from '../data/homepage';

export function InstagramSection() {
  const { instagram } = homepageContent;

  return (
    <section
      aria-labelledby="instagram-title"
      className="editorial-section instagram-section page-container"
      id="instagram"
    >
      <div className="instagram-heading">
        <p className="eyebrow">{instagram.eyebrow}</p>
        <h2 className="section-heading" id="instagram-title">
          <a href={instagram.href} rel="noreferrer" target="_blank">
            {instagram.handle}
          </a>
        </h2>
      </div>
      <ul aria-label="Jutti Crafts studio imagery" className="instagram-grid">
        {instagram.images.map((image) => (
          <li className={`instagram-grid__item instagram-grid__item--${image.position}`} key={image.alt}>
            <ImageFrame
              alt={image.alt}
              aspectRatio={image.aspectRatio}
              className="instagram-grid__image"
              height={image.height}
              loading="lazy"
              src={image.src}
              width={image.width}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}