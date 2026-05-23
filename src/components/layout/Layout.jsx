import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const pageIdByPath = {
      '/': 'page-home',
      '/online-course': 'page-online-course',
      '/coaching': 'page-coaching',
      '/agency-cycle': 'page-agency-cycle',
      '/money-money': 'page-money-money',
      '/org-dei': 'page-org-dei',
      '/org-team': 'page-org-team',
      '/about': 'page-about',
      '/articles': 'page-articles',
      '/contact': 'page-contact'
    };

    document.body.dataset.page = pageIdByPath[path] || 'page-home';
  }, [location.pathname]);

  return (
    <div className="mobile-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
