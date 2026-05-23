export default function HomeNavButton({ iconClassName, label, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'flex w-full flex-col items-center gap-3 rounded-[15px] border-2 border-cardBorder bg-white/75 px-[15px] py-5 text-brandBrown shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200',
        'hover:-translate-y-[2px] hover:bg-[#f0ebe0] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:translate-y-0',
        disabled ? 'pointer-events-none opacity-35 grayscale' : ''
      ].join(' ')}
    >
      <i className={[iconClassName, 'text-[32px] text-brandBrown'].join(' ')} />
      <span className="text-center text-sm font-semibold leading-[1.3]">{label}</span>
    </button>
  );
}
