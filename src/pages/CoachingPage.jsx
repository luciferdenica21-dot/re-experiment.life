import { useLocation, useNavigate } from 'react-router-dom';
import kapustaImg from '../../img/kapusta.png';

export default function CoachingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromDrawer = location.state?.fromDrawer || 'individuals';

  return (
    <section id="page-coaching" className="page active">
      <div className="content-wrapper">
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate('/', { state: { openDrawer: fromDrawer } })}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="coaching-mobile">
          <img className="coaching-kapusta" src={kapustaImg} alt="" />
          <div className="coaching-title-card">
            <div className="coaching-title-bg" aria-hidden="true"></div>
            <div className="coaching-title-text">1:1 coaching</div>
          </div>
          <div className="coaching-body-card"></div>
          <div className="coaching-body-text">
            <div>A dedicated space to slow down, reconnect, and return to what truly matters.</div>
            <br />
            <div>
              Individual coaching offers more than insight — it creates the conditions for clarity,
              grounded decisions, and meaningful movement forward. In a focused, confidential
              setting, we explore your current challenges, untangle complexity, and bring attention
              back to your inner compass.
            </div>
            <br />
            <div>
              This is a place where you don’t need to perform, prove, or rush. Instead, you begin to
              hear yourself more clearly — and act from that clarity.
            </div>
            <br />
            <div>What you gain:</div>
            <div>. A refined understanding of what you want — beyond expectations and noise</div>
            <div>. The ability to make decisions with calm confidence and precision</div>
            <div>. Release from inner tension, overthinking, and conflicting directions</div>
            <div>. A renewed sense of stability, self-trust, and personal authority</div>
            <div>. Consistent, intentional action aligned with your values</div>
            <br />
            <div>
              Coaching is not about advice. It is about restoring your capacity to see clearly,
              feel deeply, and choose consciously.
            </div>
          </div>
          <button
            type="button"
            className="coaching-contact-card contact-link-btn"
            onClick={() => navigate('/contact')}
          >
            Contact me for chemistry chat
          </button>
        </div>
        <div className="coaching-content page-card">
          <h2>1:1 coaching</h2>
          <p>A dedicated space to slow down, reconnect, and return to what truly matters.</p>
          <p>
            Individual coaching offers more than insight — it creates the conditions for clarity,
            grounded decisions, and meaningful movement forward. In a focused, confidential setting,
            we explore your current challenges, untangle complexity, and bring attention back to your
            inner compass.
          </p>
          <p>
            This is a place where you don't need to perform, prove, or rush. Instead, you begin to
            hear yourself more clearly — and act from that clarity.
          </p>
          <h3>What you gain:</h3>
          <ul>
            <li>A refined understanding of what you want — beyond expectations and noise</li>
            <li>The ability to make decisions with calm confidence and precision</li>
            <li>Release from inner tension, overthinking, and conflicting directions</li>
            <li>A renewed sense of stability, self-trust, and personal authority</li>
            <li>Consistent, intentional action aligned with your values</li>
          </ul>
          <p>
            Coaching is not about advice. It is about restoring your capacity to see clearly, feel deeply,
            and choose consciously.
          </p>
          <button
            type="button"
            className="individual-panel-btn contact-link-btn"
            onClick={() => navigate('/contact')}
          >
            Contact me for chemistry chat
          </button>
        </div>
      </div>
    </section>
  );
}
