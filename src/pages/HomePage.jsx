import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import kapustaImg from '../../img/kapusta.png';

export default function HomePage() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const drawerOpen = Boolean(activeDrawer);
  const location = useLocation();
  const navigate = useNavigate();

  const openFromState = useMemo(() => location.state?.openDrawer || null, [location.state]);

  useEffect(() => {
    if (openFromState) {
      setActiveDrawer(openFromState);
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, navigate, openFromState]);

  useEffect(() => {
    document.body.classList.toggle('drawer-open', drawerOpen);
    document.body.classList.toggle('drawer-individuals', activeDrawer === 'individuals');
    document.body.classList.toggle('drawer-organisations', activeDrawer === 'organisations');

    if (!drawerOpen) {
      document.body.classList.remove('drawer-individuals', 'drawer-organisations');
    }
  }, [activeDrawer, drawerOpen]);

  const toggleDrawer = (panelId) => {
    setActiveDrawer((prev) => (prev === panelId ? null : panelId));
  };

  const go = (to, fromDrawer) => {
    navigate(to, { state: fromDrawer ? { fromDrawer } : null });
    setActiveDrawer(null);
  };

  return (
    <>
      <section id="page-home" className="page active">
        <div className="content-wrapper">
          <div className="title-description-block">
            <img className="kapusta" src={kapustaImg} alt="" />
            <h1 className="main-title">
              WELCOME <br /> TO <br /> RE-EXPERIMENT
            </h1>
            <div className="description">
              <p className="desc-main">
                A place where clarity emerges — and the right decisions become visible.
                <br />
                We work at the intersection of individual, team, and system: through coaching,
                structured programs, and organizational work.
              </p>
              <div className="desc-sub">
                <p>
                  The focus is not on faster action, but on better decisions — grounded, conscious,
                  and aligned with what truly matters.
                </p>
              </div>
            </div>
          </div>

          <div className="button-grid button-grid--primary">
            <button className="nav-button" type="button" onClick={() => toggleDrawer('individuals')}>
              <span className="nav-icon nav-icon--user" aria-hidden="true"></span>
              <i className="fas fa-user"></i>
              <span>FOR INDIVIDUALS</span>
            </button>
            <button className="nav-button" type="button" onClick={() => toggleDrawer('organisations')}>
              <span className="nav-icon nav-icon--group" aria-hidden="true"></span>
              <i className="fas fa-users"></i>
              <span>FOR ORGANISATIONS</span>
            </button>
          </div>

          <div className="home-drawer" id="home-drawer" aria-hidden={!drawerOpen}>
            <div
              className={['sub-buttons-list home-drawer-panel', activeDrawer === 'individuals' ? 'active' : '']
                .filter(Boolean)
                .join(' ')}
              data-panel="individuals"
            >
              <button className="sub-button" type="button" onClick={() => go('/contact', 'individuals')}>
                <span>Online course</span>
              </button>
              <button className="sub-button" type="button" onClick={() => go('/coaching', 'individuals')}>
                <span>1:1 coaching</span>
              </button>
              <button className="sub-button" type="button" onClick={() => go('/agency-cycle', 'individuals')}>
                <span>Agency Cycle</span>
              </button>
              <button className="sub-button" type="button" onClick={() => go('/money-money', 'individuals')}>
                <span>Money Money course</span>
              </button>
            </div>
            <div
              className={['sub-buttons-list home-drawer-panel', activeDrawer === 'organisations' ? 'active' : '']
                .filter(Boolean)
                .join(' ')}
              data-panel="organisations"
            >
              <button className="sub-button" type="button" onClick={() => go('/org-dei', 'organisations')}>
                <span>
                  DEI activities/simulations/<br />
                  workshops
                </span>
              </button>
              <button className="sub-button" type="button" onClick={() => go('/org-team', 'organisations')}>
                <span>
                  Team change/growth/<br />
                  transformation work
                </span>
              </button>
            </div>
          </div>

          <div className="button-grid button-grid--secondary">
            <button className="nav-button" type="button" onClick={() => navigate('/about')}>
              <span className="nav-icon nav-icon--about" aria-hidden="true"></span>
              <i className="fas fa-user-gear"></i>
              <span>ABOUT ME</span>
            </button>
            <button className="nav-button" type="button" onClick={() => navigate('/articles')}>
              <span className="nav-icon nav-icon--articles" aria-hidden="true"></span>
              <i className="fas fa-newspaper"></i>
              <span>ARTICLES</span>
            </button>
            <button className="nav-button" type="button" onClick={() => navigate('/contact')}>
              <span className="nav-icon nav-icon--communicate" aria-hidden="true"></span>
              <i className="fas fa-address-book"></i>
              <span>CONTACT</span>
            </button>
          </div>
        </div>
      </section>

      <div
        className="home-drawer-backdrop"
        id="home-drawer-backdrop"
        aria-hidden={!drawerOpen}
        onClick={() => setActiveDrawer(null)}
      ></div>
    </>
  );
}
