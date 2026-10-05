import { homepageContent } from '../data/homepage';

export function CuratorialSection() {
  const { introduction } = homepageContent;

  return (
    <section aria-labelledby="curatorial-title" className="editorial-section page-container">
      <div className="curatorial-grid">
        <p className="eyebrow">{introduction.eyebrow}</p>
        <div className="curatorial-copy">
          <h2 className="section-heading" id="curatorial-title">
            {introduction.title}
          </h2>
          <p className="curatorial-copy__body">{introduction.description}</p>
        </div>
      </div>
    </section>
  );
}