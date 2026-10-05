import { useRef } from 'react';
import { TextLink } from '../components/TextLink';
import { BrandMarkPlaceholder } from '../components/BrandMarkPlaceholder';

export function SiteHeader() {
  const menuRef = useRef<HTMLDialogElement>(null);

  function closeMenu() {
    menuRef.current?.close();
  }

  return (
    <header className="site-header">
      <div className="page-container site-header__inner">
        <nav aria-label="Archive navigation" className="site-navigation site-navigation--left">
          <TextLink href="#archive">Archive</TextLink>
          <TextLink href="#craft">Story / Craft</TextLink>
        </nav>
        <BrandMarkPlaceholder />
        <nav aria-label="Brand and contact navigation" className="site-navigation site-navigation--right">
          <TextLink href="#instagram">Instagram</TextLink>
          <TextLink href="#contact">Inquire</TextLink>
        </nav>
        <button
          aria-haspopup="dialog"
          className="menu-toggle"
          onClick={() => menuRef.current?.showModal()}
          type="button"
        >
          Menu
        </button>
      </div>
      <dialog
        aria-labelledby="mobile-menu-title"
        className="mobile-menu"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            closeMenu();
          }
        }}
        ref={menuRef}
      >
        <div className="mobile-menu__inner">
          <div className="mobile-menu__header">
            <p className="eyebrow" id="mobile-menu-title">Menu</p>
            <button className="mobile-menu__close" onClick={closeMenu} type="button">
              Close
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="mobile-menu__links">
            <TextLink href="#archive" onClick={closeMenu}>Archive</TextLink>
            <TextLink href="#craft" onClick={closeMenu}>Story / Craft</TextLink>
            <TextLink href="#instagram" onClick={closeMenu}>Instagram</TextLink>
            <TextLink href="#contact" onClick={closeMenu}>Inquire</TextLink>
          </nav>
          <BrandMarkPlaceholder />
        </div>
      </dialog>
    </header>
  );
}