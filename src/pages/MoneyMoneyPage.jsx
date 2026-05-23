import { useLocation, useNavigate } from 'react-router-dom';
import kapustaImg from '../../img/kapusta.png';

export default function MoneyMoneyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromDrawer = location.state?.fromDrawer || 'individuals';

  return (
    <section id="page-money-money" className="page active">
      <div className="content-wrapper">
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate('/', { state: { openDrawer: fromDrawer } })}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="money-mobile">
          <img className="money-kapusta" src={kapustaImg} alt="" />
          <div className="money-title-card">
            <div className="money-title-bg" aria-hidden="true"></div>
            <div className="money-title-text">
              MONEY MONEY<br />
              COURSE
            </div>
          </div>
          <div className="money-body-card">
            <div className="money-body-text">
              <div>
                A structured space to bring clarity, calm, and conscious direction into your relationship with money.
              </div>
              <br />
              <div>
                This course is not about quick wins or financial pressure. It is a guided process of understanding how you
                relate to money — through habits, beliefs, and decisions — and gently reshaping this relationship into
                something more stable, supportive, and aligned with your life.
              </div>
              <br />
              <div>We work with real numbers, real patterns, and real choices — in a way that builds both awareness and agency.</div>
              <br />
              <div>What you gain:</div>
              <div>Clarity about your financial reality — without avoidance or overwhelm</div>
              <div>A more grounded and confident way of making financial decisions</div>
              <div>Understanding of your personal money patterns and inherited narratives</div>
              <div>A sense of stability and control over your financial life</div>
              <div>The ability to align money with your values, priorities, and future direction</div>
              <br />
              <div>
                This is not about earning more at any cost. It is about relating to money in a way that supports your life — not controls it.
              </div>
            </div>
          </div>
          <button
            type="button"
            className="money-contact-card contact-link-btn"
            onClick={() => navigate('/contact')}
          >
            Join introduction / installment session
          </button>
        </div>
        <div className="money-money-content page-card">
          <h2>Money Money course</h2>
          <p>A structured space to bring clarity, calm, and conscious direction into your relationship with money.</p>
          <p>
            This course is not about quick wins or financial pressure. It is a guided process of understanding how you relate to money — through habits, beliefs, and decisions — and gently reshaping this relationship into something more stable, supportive, and aligned with your life.
          </p>
          <p>We work with real numbers, real patterns, and real choices — in a way that builds both awareness and agency.</p>
          <h3>What you gain:</h3>
          <ul>
            <li>Clarity about your financial reality — without avoidance or overwhelm</li>
            <li>A more grounded and confident way of making financial decisions</li>
            <li>Understanding of your personal money patterns and inherited narratives</li>
            <li>A sense of stability and control over your financial life</li>
            <li>The ability to align money with your values, priorities, and future direction</li>
          </ul>
          <p>This is not about earning more at any cost. It is about relating to money in a way that supports your life — not controls it.</p>
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
