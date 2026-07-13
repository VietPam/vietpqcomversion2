function PromoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col md:flex-row w-full border border-slate-200 overflow-hidden">
        <div className="w-full md:w-3/4 bg-[#283344] px-6 py-4 flex items-center justify-start text-white">
          <span className="font-serif text-lg md:text-xl font-bold tracking-wide">
            SUMMER MASTERCLASS CAMPAIGN — UNLOCK CRITICAL PROGRAMMING EXPERIENCE
          </span>
        </div>
        <div 
          className="w-full md:w-1/4 bg-[#82c39c] px-6 py-4 flex items-center justify-center text-slate-900 font-extrabold text-2xl tracking-widest md:-ml-4"
          style={{ clipPath: "polygon(16px 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <span>30% OFF</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative flex items-center gap-6 bg-brand-gold p-6 text-slate-900 min-h-[120px] transition-transform duration-150 hover:-translate-y-0.5">
          <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-white">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 6h12l3-6-5 4-4-6-4 6-5-4zm0 10h18v2H3v-2z" />
            </svg>
          </div>
          <div className="flex-grow pr-6">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
              Baeldung Pro
            </h3>
            <p className="text-sm font-semibold text-slate-800 mt-1">
              Advanced Spring Boot courses and production-grade masterclasses.
            </p>
          </div>
          <a
            href="#pro"
            className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center bg-[#222] text-white hover:bg-[#111] transition-colors"
            aria-label="Go to Pro courses"
          >
            <span className="text-lg font-bold">&gt;</span>
          </a>
        </div>

        <div className="relative flex items-center gap-6 bg-brand-mint p-6 text-slate-900 min-h-[120px] transition-transform duration-150 hover:-translate-y-0.5">
          <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-white">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 6h12l3-6-5 4-4-6-4 6-5-4zm0 10h18v2H3v-2z" />
            </svg>
          </div>
          <div className="flex-grow pr-6">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
              All Access Pass
            </h3>
            <p className="text-sm font-semibold text-slate-800 mt-1">
              Gain access to every eBook, guide, and online tutorial we publish.
            </p>
          </div>
          <a
            href="#all-access"
            className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center bg-[#222] text-white hover:bg-[#111] transition-colors"
            aria-label="Go to All Access"
          >
            <span className="text-lg font-bold">&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
