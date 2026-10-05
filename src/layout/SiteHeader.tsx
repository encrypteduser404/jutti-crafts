import { TextLink } from '../components/TextLink';

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="page-container">
        <TextLink aria-current="page" aria-label="Jutti Crafts home" href="/" className="wordmark">
          Jutti Crafts
        </TextLink>
      </nav>
    </header>
  );
}