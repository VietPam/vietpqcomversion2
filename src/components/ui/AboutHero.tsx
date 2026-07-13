function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full border border-slate-200 overflow-hidden">
        <div className="w-full md:w-3/4 bg-[#283344] px-6 py-6 flex flex-col justify-center text-white min-h-[140px]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#82c39c] mb-1">
            Senior Software Engineer Portfolio
          </span>
          <h1 className="font-serif text-xl md:text-2xl font-bold tracking-wide leading-snug">
            HI, I'M QUANG VIET PHAM — BUILDING ROBUST, PERFORMANCE-DRIVEN JAVA & SPRING ENTERPRISE BACKENDS WITH SCALABLE CLOUD ARCHITECTURES.
          </h1>
          <p className="mt-2 text-xs font-semibold tracking-wider text-slate-300 uppercase">
            Clean Code • Test-Driven Design • Domain-Driven Architecture
          </p>
        </div>
        <div 
          className="w-full md:w-1/4 bg-[#82c39c] px-6 py-4 flex flex-col items-center justify-center text-slate-900 md:-ml-4 min-h-[100px] md:min-h-[140px]"
          style={{ clipPath: "polygon(16px 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-850">
            ENGLISH LEVEL
          </span>
          <span className="font-black text-2xl tracking-wide text-slate-950 mt-1">
            IELTS Certified
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
