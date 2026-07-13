function ProfileFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative flex items-center gap-6 bg-brand-gold p-6 text-slate-900 min-h-[140px] transition-transform duration-150 hover:-translate-y-0.5">
          <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-white">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div className="flex-grow pr-6">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
              Experience & Core Tech
            </h3>
            <p className="text-sm font-semibold text-slate-800 mt-1">
              Java, Spring Boot, Microservices, Kubernetes, PostgreSQL & Cloud deployment strategies.
            </p>
          </div>
          <a
            href="#experience"
            className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center bg-[#222] text-white hover:bg-[#111] transition-colors"
            aria-label="View professional experience"
          >
            <span className="text-lg font-bold">&gt;</span>
          </a>
        </div>

        <div className="relative flex items-center gap-6 bg-brand-mint p-6 text-slate-900 min-h-[140px] transition-transform duration-150 hover:-translate-y-0.5">
          <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-white">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.9c2.79 0 5.437-.472 7.893-1.33A5.78 5.78 0 0019.26 13.5m-15 0l1.24-.58A18.847 18.847 0 0012 11.25c2.25 0 4.426.393 6.444 1.12l1.24.58m-15 0v1.632c0 1.258.747 2.378 1.902 2.87l1.04.442m0 0A18.575 18.575 0 0012 18.25c.677 0 1.343-.036 2-.106m-2-5.9v8.125" />
            </svg>
          </div>
          <div className="flex-grow pr-6">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
              Education & Key Projects
            </h3>
            <p className="text-sm font-semibold text-slate-800 mt-1">
              B.S. in Computer Science & active contributor to open-source developer tooling.
            </p>
          </div>
          <a
            href="#projects"
            className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center bg-[#222] text-white hover:bg-[#111] transition-colors"
            aria-label="View education and projects"
          >
            <span className="text-lg font-bold">&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileFeatures;
