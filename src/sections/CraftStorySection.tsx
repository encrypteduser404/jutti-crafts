import { ImageFrame } from '../components/ImageFrame';
import { homepageContent } from '../data/homepage';

export function CraftStorySection() {
  const { craft } = homepageContent;

  return (
    <section aria-labelledby="craft-title" className="editorial-section page-container" id="craft">
      <div className="craft-grid">
        <ImageFrame
          alt={craft.imageAlt}
          aspectRatio={craft.imageAspectRatio}
          className="craft__visual"
          height={craft.imageHeight}
          width={craft.imageWidth}
          src={craft.imageSrc}
        />
        <div className="craft__copy">
          {craft.eyebrow && <p className="eyebrow">{craft.eyebrow}</p>}
          <h2 className="section-heading" id="craft-title">
            {craft.title}
          </h2>
          <p>{craft.description}</p>
        </div>
      </div>
    </section>
  );
}