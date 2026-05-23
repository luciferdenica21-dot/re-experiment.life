import { useNavigate } from 'react-router-dom';

function SubButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-[12px] border-2 border-cardBorder bg-white/75 px-5 py-[15px] text-center text-sm font-semibold text-brandBrown shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#f0ebe0] hover:shadow-[0_4px_10px_rgba(0,0,0,0.10)] active:translate-y-0"
    >
      {children}
    </button>
  );
}

export default function HomeDrawer({ activePanel, onClose }) {
  const navigate = useNavigate();
  const open = Boolean(activePanel);

  const go = (to) => {
    navigate(to, { state: { fromDrawer: activePanel } });
    onClose();
  };

  return (
    <>
      <div
        className={[
          'overflow-hidden transition-all duration-200',
          open ? 'mb-3 max-h-[450px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'
        ].join(' ')}
      >
        <div className={['flex flex-col gap-3', open ? 'pointer-events-auto' : 'pointer-events-none'].join(' ')}>
          {activePanel === 'individuals' && (
            <>
              <SubButton onClick={() => go('/contact')}>Online course</SubButton>
              <SubButton onClick={() => go('/coaching')}>1:1 coaching</SubButton>
              <SubButton onClick={() => go('/agency-cycle')}>Agency Cycle</SubButton>
              <SubButton onClick={() => go('/money-money')}>Money Money course</SubButton>
            </>
          )}
          {activePanel === 'organisations' && (
            <>
              <SubButton onClick={() => go('/org-dei')}>
                DEI activities/simulations/<br />
                workshops
              </SubButton>
              <SubButton onClick={() => go('/org-team')}>
                Team change/growth/<br />
                transformation work
              </SubButton>
            </>
          )}
        </div>
      </div>

      <button
        type="button"
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={[
          'fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-200',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        ].join(' ')}
      />
    </>
  );
}
