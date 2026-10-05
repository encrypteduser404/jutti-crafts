import { homepageContent } from '../data/homepage';
import { ProductArchive } from './ProductArchive';

export function ArchiveSection() {
  const { archive } = homepageContent;

  return (
    <section aria-labelledby="archive-title" className="editorial-section page-container" id="archive">
      <div className="archive-heading">
        <div>
          {archive.eyebrow && <p className="eyebrow">{archive.eyebrow}</p>}
          <h2 className="section-heading" id="archive-title">
            {archive.title}
          </h2>
        </div>
      </div>
      <p className="archive__introduction">{archive.introduction}</p>
      <ProductArchive />
    </section>
  );
}