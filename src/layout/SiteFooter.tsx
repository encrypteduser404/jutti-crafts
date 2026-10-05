import { Divider } from '../components/Divider';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <Divider />
        <section aria-labelledby="contact-title" className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Jutti Crafts</p>
            <h2 className="contact-section__title" id="contact-title">
              Nagaur, Rajasthan
            </h2>
          </div>
          <div className="contact-section__details">
            <a href="https://www.instagram.com/jutti.crafts/" rel="noreferrer" target="_blank">
              @jutti.crafts
            </a>
            <p><a href="mailto:jutticrafts2022@gmail.com">jutticrafts2022@gmail.com</a></p>
            <p><a href="tel:9079056675">9079056675</a></p>
          </div>
        </section>
      </div>
    </footer>
  );
}