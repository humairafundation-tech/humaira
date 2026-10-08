export function FocusCard({ number, title, text }) {
  return (
    <article className="border-t-[3px] border-gold-line bg-white px-9 pb-9 pt-8">
      <p className="font-serif text-[15px] text-gold-label">{number}</p>
      <h3 className="mt-8 font-serif text-[26px] leading-[30px] text-ink-text">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.75] text-muted">{text}</p>
    </article>
  );
}
