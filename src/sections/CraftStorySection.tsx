import { ImageFrame } from '../components/ImageFrame';
import { homepageContent } from '../data/homepage';

export function CraftStorySection() {
  const { craft } = homepageContent;

  return (
    <section aria-labelledby="craft-title" className="editorial-section page-container" id="craft">
      <div className="craft-grid">
        <ImageFrame
          alt={craft.imageAlt}
          aspectRatio="1 / 1"
          className="craft__visual"
          height={1000}
          width={1000}
        />
        <div className="craft__copy">
          <p className="craft__reference">{craft.reference}</p>
          <p className="eyebrow">{craft.eyebrow}</p>
          <h2 className="section-heading" id="craft-title">
            {craft.title}
          </h2>
          <p>{craft.description}</p>
          <p>{craft.missingInformation}</p>
        </div>
      </div>
    </section>
  );
}