export default function TitleCard({ className = '', bgClassName = 'bg-white/90', titleClassName = '', title }) {
  return (
    <div className={['relative rounded-[17px]', className].join(' ')}>
      <div className={['absolute inset-0 rounded-[17px]', bgClassName].join(' ')} />
      <div
        className={[
          'relative flex h-full w-full items-center justify-center px-6 font-heading text-[30px] font-bold leading-none text-[#5F6B84]',
          titleClassName
        ].join(' ')}
      >
        {title}
      </div>
    </div>
  );
}
