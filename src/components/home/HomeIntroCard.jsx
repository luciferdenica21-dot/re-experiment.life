import Card from '../common/Card.jsx';
import kapustaImg from '../../../img/kapusta.png';

export default function HomeIntroCard({ drawerOpen }) {
  return (
    <Card className="mb-9 overflow-hidden px-0 py-0">
      <div className="px-0">
        <img src={kapustaImg} alt="" className="hidden" />
        <h1 className="px-3 pt-4 text-center font-heading text-[clamp(12px,6.5vw,28px)] font-bold uppercase leading-[1.2] tracking-[0.04em] text-brandPink whitespace-nowrap">
          WELCOME <br /> TO <br /> RE-EXPERIMENT
        </h1>
        <div
          className={[
            'overflow-hidden px-4 pb-[15px] pt-3 transition-all duration-200',
            drawerOpen ? 'max-h-0 opacity-0 pt-0 pb-0' : 'max-h-[500px] opacity-100'
          ].join(' ')}
        >
          <p className="mb-3 text-center font-body text-[17px] leading-[1.7] text-[#2d2d2d]">
            A place where clarity emerges — and the right decisions become visible.
            <br />
            We work at the intersection of individual, team, and system: through coaching, structured
            programs, and organizational work.
          </p>
          <div className="rounded-[10px] bg-white/60 px-[14px] py-3">
            <p className="m-0 text-center font-body text-xs leading-[1.7] text-[#5a5a5a]">
              The focus is not on faster action, but on better decisions — grounded, conscious, and
              aligned with what truly matters.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
