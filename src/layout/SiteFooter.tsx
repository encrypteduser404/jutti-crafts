import { Divider } from '../components/Divider';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <Divider />
        <section aria-labelledby="contact-title" className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="contact-section__title" id="contact-title">
              Jutti Crafts
            </h2>
          </div>
          <div className="contact-section__details">
            <p>[Placeholder: approved contact details pending.]</p>
            <p>Jutti Crafts (OPC) Private Limited</p>
            <p>Nagaur, Rajasthan</p>
          </div>
        </section>
      </div>
    </footer>
  );
}