import { useMemo, useState } from 'react';
import kapustaImg from '../../img/kapusta.png';
import whatsappIcon from '../../img/whatsapp.svg';
import arrobaIcon from '../../img/arroba.svg';
import messengerIcon from '../../img/messenger.svg';

const EMAIL_TO = 're.experiment.coach@gmail.com';

function buildMailtoUrl({ to, subject, body }) {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const qs = params.toString();
  return `mailto:${to}${qs ? `?${qs}` : ''}`;
}

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const mailto = useMemo(
    () =>
      buildMailtoUrl({
        to: EMAIL_TO,
        subject: 'RE-EXPERIMENT Message',
        body: message
      }),
    [message]
  );

  return (
    <section id="page-contact" className="page active">
      <div className="content-wrapper">
        <div className="contact-mobile">
          <img className="contact-kapusta" src={kapustaImg} alt="" />
          <div className="contact-title-card">
            <div className="contact-title-bg" aria-hidden="true"></div>
            <div className="contact-title-text">CONTACT</div>
          </div>
          <div className="contact-body-card">
            <div className="contact-channels">
              <a className="contact-channel" href="https://wa.me/491634252580" target="_blank" rel="noopener noreferrer">
                <img className="contact-channel-icon" src={whatsappIcon} alt="" />
                <span className="contact-channel-text">whatsapp</span>
              </a>
              <a className="contact-channel" href={`mailto:${EMAIL_TO}`}>
                <img className="contact-channel-icon" src={arrobaIcon} alt="" />
                <span className="contact-channel-text">e-mail</span>
              </a>
              <button type="button" className="contact-channel contact-channel--chat" data-contact-chat="1">
                <img className="contact-channel-icon" src={messengerIcon} alt="" />
                <span className="contact-channel-text">internal chat</span>
              </button>
            </div>
            <div className="contact-message-card">
              <textarea
                className="contact-message-input"
                placeholder="Text your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="button" className="contact-send-btn" onClick={() => (window.location.href = mailto)}>
              send
            </button>
          </div>
        </div>
        <div className="contact-content page-card">
          <h2>Contact Me</h2>
          <div className="contact-options">
            <a href={`mailto:${EMAIL_TO}`} className="contact-option">
              <i className="fas fa-envelope"></i>
              <span>E-mail</span>
            </a>
            <a href="https://wa.me/491634252580" className="contact-option" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="message-area">
            <textarea placeholder="Text your message here..." rows="4"></textarea>
            <button className="send-button">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}
