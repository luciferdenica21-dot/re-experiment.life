import { useLocation, useNavigate } from 'react-router-dom';
import kapustaImg from '../../img/kapusta.png';

export default function OrgTeamPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromDrawer = location.state?.fromDrawer || 'organisations';

  return (
    <section id="page-org-team" className="page active">
      <div className="content-wrapper">
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate('/', { state: { openDrawer: fromDrawer } })}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="team-mobile">
          <img className="team-kapusta" src={kapustaImg} alt="" />
          <div className="team-title-card">
            <div className="team-title-bg" aria-hidden="true"></div>
            <div className="team-title-text">
              Team change/<br />
              growth/<br />
              transformation work
            </div>
          </div>
          <div className="team-body-card">
            <div className="team-body-text">
              <div>Operational Excellence &amp; Team Performance</div>
              <br />
              <div>Consulting formats designed to improve execution, strengthen team performance, and optimize collaboration across the organization.</div>
              <br />
              <div>
                We focus on how work actually happens — across functions, interfaces, and decision points. By addressing structural inefficiencies, communication gaps, and unclear ownership, we help teams operate with greater clarity, speed, and consistency.
              </div>
              <br />
              <div>What this brings to your organization:</div>
              <div>Faster and more reliable execution across projects and operations</div>
              <div>Clear ownership and decision-making structures</div>
              <div>Reduced inefficiencies, rework, and coordination overhead</div>
              <div>Stronger collaboration across teams and functions</div>
              <div>Performance that is measurable, sustainable, and scalable</div>
              <br />
              <div>This is not about adding new layers. It is about making the existing system work — better.</div>
            </div>
          </div>
          <div className="team-contact-card" aria-hidden="true"></div>
        </div>
        <div className="page-card detail-content">
          <h2>Team change / growth / transformation work</h2>
          <p>Support for teams navigating change, growth, or transformation — with clarity, alignment, and sustainable momentum.</p>
          <p>We work at the intersection of individual leadership and collective dynamics, helping teams make better decisions and move forward with shared purpose.</p>
          <button type="button" className="individual-panel-btn contact-link-btn" onClick={() => navigate('/contact')}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
