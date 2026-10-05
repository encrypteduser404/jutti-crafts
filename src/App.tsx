import { SiteFooter } from './layout/SiteFooter';
import { SiteHeader } from './layout/SiteHeader';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main" id="main-content" />
        <SiteFooter />
      </div>
    </>
  );
}