import { TextLink } from '../components/TextLink';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container site-header__inner">
        <TextLink aria-label="Jutti Crafts home" href="#top" className="wordmark">
          Jutti Crafts
        </TextLink>
        <nav aria-label="Primary navigation" className="site-navigation">
          <TextLink href="#featured">Featured</TextLink>
          <TextLink href="#archive">Archive</TextLink>
          <TextLink href="#craft">Craft</TextLink>
          <TextLink href="#instagram">Instagram</TextLink>
        </nav>
      </div>
    </header>
  );
}