import { homepageContent } from '../data/homepage';

export function ArchiveSection() {
  const { archive } = homepageContent;

  return (
    <section aria-labelledby="archive-title" className="editorial-section page-container" id="archive">
      <div className="archive-heading">
        <div>
          <p className="eyebrow">{archive.eyebrow}</p>
          <h2 className="section-heading" id="archive-title">
            {archive.title}
          </h2>
        </div>
        <p aria-label="Collection count placeholder" className="archive__count">
          {archive.count}
        </p>
      </div>
      <p className="archive__introduction">{archive.introduction}</p>
      <ol aria-label="Future archive entries" className="archive-index">
        {archive.entrySlots.map((entry) => (
          <li className="archive-index__entry" key={entry.reference}>
            <span className="archive-index__reference">{entry.reference}</span>
            <span>{entry.label}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}