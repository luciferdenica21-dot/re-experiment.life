import kapustaImg from '../../img/kapusta.png';
import aboutMeImg from '../../img/aboutme.png';
import whatsappIcon from '../../img/whatsapp.svg';
import messengerIcon from '../../img/messenger.svg';
import arrobaIcon from '../../img/arroba.svg';

export default function AboutPage() {
  return (
    <section id="page-about" className="page active">
      <div className="content-wrapper">
        <div className="about-mobile">
          <img className="about-kapusta" src={kapustaImg} alt="" />
          <div className="about-founder-card">
            <div className="about-founder-text">FOUNDER</div>
            <img className="about-founder-img" src={aboutMeImg} alt="" />
          </div>
          <div className="about-body-card">
            <div className="about-body-text">
              <div>I work at the intersection of human systems, organisational change, and embodied awareness.</div>
              <br />
              <div>
                My professional path began in complex industrial environments — in large-scale projects, operational excellence programmes, and organisational transformations. For more than a decade I have supported international teams in navigating uncertainty, aligning around purpose, and turning strategy into deliberate action.
              </div>
              <br />
              <div>
                Over time I became increasingly interested not only in what organisations do, but in how people experience themselves while doing it. Clarity, ownership, and the capacity to act are not only structural matters — they are deeply personal.
              </div>
              <br />
              <div>This led me to integrate my corporate experience with coaching, gestalt-based approaches, and body-oriented work.</div>
              <br />
              <div>Today I support professionals and leaders who want to:</div>
              <div>• think clearly in complexity</div>
              <div>• restore a sense of inner grounding</div>
              <div>• take responsibility without overwhelm</div>
              <div>• make intentional decisions aligned with their values</div>
              <div>• move from survival mode to meaningful contribution</div>
              <br />
              <div>My work creates a structured yet human space where insight becomes possible and change becomes sustainable.</div>
              <br />
              <div>⸻</div>
              <br />
              <div>Professional background</div>
              <br />
              <div>I have worked in international energy and industrial organisations in roles connected to:</div>
              <div>• operational excellence and performance culture</div>
              <div>• project and programme management</div>
              <div>• change leadership and transformation initiatives</div>
              <div>• capability development and cross-functional collaboration</div>
              <br />
              <div>This experience allows me to understand the real pressures professionals face: tight timelines, competing priorities, organisational politics, and the invisible emotional load of responsibility.</div>
              <br />
              <div>Because of this, my coaching is practical, grounded, and context-aware.</div>
              <br />
              <div>⸻</div>
              <br />
              <div>Coaching approach</div>
              <br />
              <div>My approach combines:</div>
              <div>• Gestalt coaching principles</div>
              <div>• systemic and organisational thinking</div>
              <div>• embodiment and voice work</div>
              <div>• reflective inquiry and structured experimentation</div>
              <br />
              <div>I do not offer quick fixes or motivational pressure. Instead, I support clients in developing agency — the ability to see clearly, choose consciously, and act with integrity.</div>
              <br />
              <div>This process often brings:</div>
              <div>• increased confidence and professional presence</div>
              <div>• better decision-making under pressure</div>
              <div>• healthier boundaries</div>
              <div>• renewed connection to meaning and direction</div>
              <br />
              <div>⸻</div>
              <br />
              <div>Who I work with</div>
              <br />
              <div>I primarily work with:</div>
              <div>• professionals and experts in international organisations</div>
              <div>• women in periods of transition or growth</div>
              <div>• leaders navigating complexity and responsibility</div>
              <div>• people who seek depth, clarity, and sustainable change</div>
              <br />
              <div>Sessions and programmes are offered in English and Russian.</div>
              <br />
              <div>⸻</div>
              <br />
              <div>What matters to me</div>
              <br />
              <div>I believe that real development happens when:</div>
              <div>• thinking and sensing are connected</div>
              <div>• structure and humanity are balanced</div>
              <div>• performance does not exclude wellbeing</div>
              <div>• responsibility grows together with inner stability</div>
              <br />
              <div>My intention is to create environments — in organisations and in individual work — where people can restore clarity, strengthen ownership, and act deliberately.</div>
            </div>
          </div>
          <div className="about-socials">
            <a
              className="about-social-item"
              href="https://wa.me/491634252580"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="about-social-circle" aria-hidden="true">
                <img className="about-social-icon" src={whatsappIcon} alt="" />
              </span>
              <span className="about-social-label">WhatsApp</span>
            </a>
            <a
              className="about-social-item"
              href="https://www.linkedin.com/in/aleksandrademarzo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="about-social-circle" aria-hidden="true">
                <img className="about-social-icon" src={messengerIcon} alt="" />
              </span>
              <span className="about-social-label">LinkedIn</span>
            </a>
            <a className="about-social-item" href="mailto:re.experiment.coach@gmail.com">
              <span className="about-social-circle" aria-hidden="true">
                <img className="about-social-icon" src={arrobaIcon} alt="" />
              </span>
              <span className="about-social-label">Mail</span>
            </a>
          </div>
        </div>
        <div className="about-photo-row page-card">
          <span className="founder-label">FOUNDER</span>
          <img src="aboutme.png" alt="About Me" className="about-photo" />
        </div>
        <div className="about-me-content page-card">
          <div className="about-text">
            <p>I work at the intersection of human systems, organisational change, and embodied awareness.</p>
            <p>
              My professional path began in complex industrial environments — in large-scale projects, operational excellence programmes, and organisational transformations. For more than a decade I have supported international teams in navigating uncertainty, aligning around purpose, and turning strategy into deliberate action.
            </p>
            <p>
              Over time I became increasingly interested not only in what organisations do, but in how people experience themselves while doing it. Clarity, ownership, and the capacity to act are not only structural matters — they are deeply personal.
            </p>
            <p>This led me to integrate my corporate experience with coaching, gestalt-based approaches, and body-oriented work.</p>
            <p>Today I support professionals and leaders who want to:</p>
            <ul>
              <li>think clearly in complexity</li>
              <li>restore a sense of inner grounding</li>
              <li>take responsibility without overwhelm</li>
              <li>make intentional decisions aligned with their values</li>
              <li>move from survival mode to meaningful contribution</li>
            </ul>
            <p>My work creates a structured yet human space where insight becomes possible and change becomes sustainable.</p>

            <h3>Professional background</h3>
            <p>I have worked in international energy and industrial organisations in roles connected to:</p>
            <ul>
              <li>operational excellence and performance culture</li>
              <li>project and programme management</li>
              <li>change leadership and transformation initiatives</li>
              <li>capability development and cross-functional collaboration</li>
            </ul>
            <p>
              This experience allows me to understand the real pressures professionals face: tight timelines, competing priorities, organisational politics, and the invisible emotional load of responsibility. Because of this, my coaching is practical, grounded, and context-aware.
            </p>

            <h3>Coaching approach</h3>
            <p>My approach combines:</p>
            <ul>
              <li>Gestalt coaching principles</li>
              <li>systemic and organisational thinking</li>
              <li>embodiment and voice work</li>
              <li>reflective inquiry and structured experimentation</li>
            </ul>
            <p>
              I do not offer quick fixes or motivational pressure. Instead, I support clients in developing agency — the ability to see clearly, choose consciously, and act with integrity.
            </p>
            <p>This process often brings:</p>
            <ul>
              <li>increased confidence and professional presence</li>
              <li>better decision-making under pressure</li>
              <li>healthier boundaries</li>
              <li>renewed connection to meaning and direction</li>
            </ul>

            <h3>Who I work with</h3>
            <p>I primarily work with:</p>
            <ul>
              <li>professionals and experts in international organisations</li>
              <li>women in periods of transition or growth</li>
              <li>leaders navigating complexity and responsibility</li>
              <li>people who seek depth, clarity, and sustainable change</li>
            </ul>
            <p>Sessions and programmes are offered in English and Russian.</p>

            <h3>What matters to me</h3>
            <p>I believe that real development happens when:</p>
            <ul>
              <li>thinking and sensing are connected</li>
              <li>structure and humanity are balanced</li>
              <li>performance does not exclude wellbeing</li>
              <li>responsibility grows together with inner stability</li>
            </ul>
            <p>
              My intention is to create environments — in organisations and in individual work — where people can restore clarity, strengthen ownership, and act deliberately.
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/aleksandrademarzo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/491634252580" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:re.experiment.coach@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
