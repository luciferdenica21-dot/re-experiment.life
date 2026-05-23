import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

export default function OnlineCoursePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromDrawer = location.state?.fromDrawer || 'individuals';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const successTitle = useMemo(() => {
    const trimmed = String(name || '').trim();
    return trimmed
      ? `Congratulations, ${trimmed}! You now have 3 days access to the course.`
      : 'Congratulations! You now have 3 days access to the course.';
  }, [name]);

  const onStart = () => {
    if (!isValidEmail(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="page-online-course" className="page active">
      <div className="content-wrapper">
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate('/', { state: { openDrawer: fromDrawer } })}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="online-course-mobile">
          <div className="online-course-mobile-title">Online course</div>
          <div className="online-course-mobile-card">
            <span className="online-course-touch" aria-hidden="true"></span>
            <div className="online-course-start-label">START YOUR COURSE</div>
          </div>
        </div>
        <div className="registration-form-content">
          <div className="online-course-title">
            <h2>Online course</h2>
            <div className="online-course-subtitle">registration</div>
          </div>

          {!submitted && (
            <div className="online-course-form" id="online-course-form">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="start-button" type="button" id="online-course-start" onClick={onStart}>
                <i className="fas fa-hand-pointer"></i>
                <span>START</span>
              </button>
            </div>
          )}

          <div
            className="online-course-success"
            id="online-course-success"
            aria-hidden={!submitted}
            style={{ display: submitted ? undefined : 'none' }}
          >
            <div className="success-card">
              <div className="success-card-title" id="online-course-success-title">
                {successTitle}
              </div>
            </div>
            <div className="success-card success-card--row">
              <div className="success-card-title">
                You will receive instructions in your inbox in a few minutes.
              </div>
              <div className="success-card-icon" aria-hidden="true">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="success-card success-card--row">
              <div className="success-card-title">
                But first, please watch this personal message from Sascha
              </div>
              <div className="success-card-icon" aria-hidden="true">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
