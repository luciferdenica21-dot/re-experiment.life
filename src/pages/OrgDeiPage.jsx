import { useLocation, useNavigate } from 'react-router-dom';
import kapustaImg from '../../img/kapusta.png';

export default function OrgDeiPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromDrawer = location.state?.fromDrawer || 'organisations';

  return (
    <section id="page-org-dei" className="page active">
      <div className="content-wrapper">
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate('/', { state: { openDrawer: fromDrawer } })}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="dei-mobile">
          <img className="dei-kapusta" src={kapustaImg} alt="" />
          <div className="dei-title-card">
            <div className="dei-title-bg" aria-hidden="true"></div>
            <div className="dei-title-text">
              DEI activities/<br />
              simulations/<br />
              workshops
            </div>
          </div>
          <div className="dei-body-card">
            <div className="dei-body-text">
              <div>DEI team Workshops &amp; Collaboration Formats</div>
              <br />
              <div>High-impact formats designed to improve how teams think, decide, and work together.</div>
              <br />
              <div>
                DEI (Diversity, Equity, Inclusion &amp; Belonging) is approached here not as a compliance topic, but as a driver of performance. When different perspectives are fully engaged and well-integrated, teams make better decisions, reduce blind spots, and operate with greater precision.
              </div>
              <br />
              <div>
                Through targeted workshops, team growth sessions, and cross-team collaboration work, we address real dynamics — not surface symptoms.
              </div>
              <br />
              <div>What this brings to your organization:</div>
              <div>Better quality decisions through integrated perspectives</div>
              <div>Faster execution with less friction and rework</div>
              <div>Reduced blind spots and stronger risk awareness</div>
              <div>Higher ownership and accountability across teams</div>
              <div>Collaboration that supports performance — not slows it down</div>
              <br />
              <div>
                This is not about alignment for comfort. It is about alignment for clarity, responsibility, and results.
              </div>
            </div>
          </div>
          <div className="dei-contact-card" aria-hidden="true"></div>
        </div>
        <div className="page-card detail-content">
          <h2>DEI activities / simulations / workshops</h2>
          <p>
            Interactive workshops and simulations designed to build awareness, empathy, and practical skills around diversity, equity, and inclusion in your organisation.
          </p>
          <p>
            Sessions are tailored to your team context — creating safe spaces for dialogue, reflection, and meaningful change in how people work together.
          </p>
          <button type="button" className="individual-panel-btn contact-link-btn" onClick={() => navigate('/contact')}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
