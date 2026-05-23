export default function Card({ className = '', children }) {
  return (
    <div
      className={[
        'rounded-[15px] border-2 border-cardBorder bg-white/75 px-5 py-6 shadow-card',
        className
      ].join(' ')}
    >
      {children}
    </div>
  );
}
