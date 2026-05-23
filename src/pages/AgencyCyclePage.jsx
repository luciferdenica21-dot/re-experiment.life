import { useLocation, useNavigate } from 'react-router-dom';
import kapustaImg from '../../img/kapusta.png';

export default function AgencyCyclePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromDrawer = location.state?.fromDrawer || 'individuals';

  return (
    <section id="page-agency-cycle" className="page active">
      <div className="content-wrapper">
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate('/', { state: { openDrawer: fromDrawer } })}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="agency-mobile">
          <img className="agency-kapusta" src={kapustaImg} alt="" />
          <div className="agency-title-card">
            <div className="agency-title-bg" aria-hidden="true"></div>
            <div className="agency-title-text">AGENCY CYCLE</div>
          </div>
          <div className="agency-body-card">
            <div className="agency-body-text">
              <div>
                A seasonal journey to restore clarity, deepen self-trust, and strengthen your sense of direction.
              </div>
              <br />
              <div>
                Agency Cycle is a series of carefully held sessions aligned with the natural rhythm of the year —
                moments to pause, reflect, and realign with what matters most. Each gathering creates space to
                integrate experience, release what no longer serves, and move forward with renewed intention.
              </div>
              <br />
              <div>
                Rather than pushing for constant growth, this work honors cycles — of energy, attention, and identity —
                allowing change to become more sustainable and grounded.
              </div>
              <br />
              <div>What you gain:</div>
              <div>A deeper sense of inner anchoring and continuity</div>
              <div>Clarity in transitions and decision-making points</div>
              <div>Integration of past experiences into meaningful direction</div>
              <div>Strengthened self-trust and personal agency</div>
              <div>A steady, embodied way of moving through complexity</div>
              <br />
              <div>
                This is not a program to improve yourself. It is a space to return to yourself — and act from there
              </div>
            </div>
          </div>
          <button
            type="button"
            className="agency-contact-card contact-link-btn"
            onClick={() => navigate('/contact')}
          >
            Join introduction / installment session
          </button>
        </div>
        <div className="agency-cycle-content page-card">
          <h2>Agency Cycle</h2>
          <p>A seasonal journey to restore clarity, deepen self-trust, and strengthen your sense of direction.</p>
          <p>
            Agency Cycle is a series of carefully held sessions aligned with the natural rhythm of the year — moments to
            pause, reflect, and realign with what matters most. Each gathering creates space to integrate experience,
            release what no longer serves, and move forward with renewed intention.
          </p>
          <p>
            Rather than pushing for constant growth, this work honors cycles — of energy, attention, and identity —
            allowing change to become more sustainable and grounded.
          </p>
          <h3>What you gain:</h3>
          <ul>
            <li>A deeper sense of inner anchoring and continuity</li>
            <li>Clarity in transitions and decision-making points</li>
            <li>Integration of past experiences into meaningful direction</li>
            <li>Strengthened self-trust and personal agency</li>
            <li>A steady, embodied way of moving through complexity</li>
          </ul>
          <p>This is not a program to improve yourself. It is a space to return to yourself — and act from there.</p>
          <button
            type="button"
            className="individual-panel-btn contact-link-btn"
            onClick={() => navigate('/contact')}
          >
            Join introduction / installment session
          </button>
        </div>
      </div>
    </section>
  );
}
