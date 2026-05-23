import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-left" onClick={() => navigate('/')} role="button" tabIndex={0}>
        <span className="header-home-icon" aria-hidden="true"></span>
        <i className="fas fa-home"></i>
      </div>
      <div className="header-right">
        <i className="fas fa-user-arrow-up"></i>
      </div>
    </header>
  );
}
