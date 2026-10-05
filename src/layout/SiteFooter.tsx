import { Divider } from '../components/Divider';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <Divider />
        <section aria-labelledby="contact-title" className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Jutti Crafts (OPC) Private Limited</p>
            <h2 className="contact-section__title" id="contact-title">
              Nagaur, Rajasthan
            </h2>
          </div>
          <div className="contact-section__details">
            <p>Official Instagram, email and contact details pending.</p>
          </div>
        </section>
      </div>
    </footer>
  );
}