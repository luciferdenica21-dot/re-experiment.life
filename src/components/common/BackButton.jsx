import { useNavigate } from 'react-router-dom';

export default function BackButton({ to = '/', state }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(to, { state })}
      className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-brandBrown shadow-card"
      aria-label="Back"
    >
      <i className="fas fa-arrow-left" />
    </button>
  );
}
