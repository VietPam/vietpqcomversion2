interface AboutContentProps {
  onContactClick?: () => void;
}

function AboutContent({ onContactClick }: AboutContentProps) {
  const focusAreas = [
    "Java Core & OOP Architecture",
    "Spring Boot Ecosystem",
    "Software Craftsmanship (SOLID, Design Patterns)",
    "Quality Assurance (Unit Testing, Mockito)"
  ];

  return (
    <section className="bg-brand-gray w-full border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <article className="space-y-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-8">
              About Pham Quang Viet
            </h1>
            <div className="space-y-6 text-base text-slate-700 leading-relaxed max-w-2xl font-medium">
              <p>
                Dedicated to full-stack system architecture, exploring the complexities of the Java ecosystem, and building robust web components. My software engineering practice focuses on designing clean, secure, and maintainable systems utilizing Spring Boot, Spring Security, and RESTful APIs.
              </p>
              <p>
                For professional inquiries, please feel free to reach out via the Contact form:{" "}
                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onContactClick) {
                      e.preventDefault();
                      onContactClick();
                    }
                  }}
                  className="text-brand-blue hover:underline hover:text-[#1e4e77] font-semibold transition"
                >
                  [Contact]
                </a>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
              What I Focus On
            </h2>
            <ul className="space-y-4 pl-2">
              {focusAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-[#52a673] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-800 font-semibold text-base">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
              Me and my Projects
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-start mt-8">
              <div className="w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-48 h-48 rounded-full border border-slate-200 overflow-hidden shadow-sm mx-auto md:mx-0 object-cover bg-slate-100 flex items-center justify-center">
                  <svg className="w-full h-full text-slate-400" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="40" r="20" fill="#cbd5e1" />
                    <path d="M50 65c-20 0-30 10-30 20h60c0-10-10-20-30-20z" fill="#94a3b8" />
                    <rect x="42" y="32" width="16" height="4" rx="2" fill="#475569" />
                  </svg>
                </div>
                <p className="mt-4 text-sm text-slate-500 italic leading-relaxed max-w-[240px]">
                  "Hey! I'm Viet – a software engineer with a strict passion for clean code, system performance optimization, and building automated engines on the web."
                </p>
              </div>

              <div className="w-full md:w-[65%] space-y-6">
                <div className="space-y-2">
                  <p className="text-base text-slate-700 leading-relaxed font-medium">
                    I've built a specialized Vietnamese Stock Market Backtesting Engine to simulate architectural trading frameworks:
                  </p>
                  <a
                    href="#backtest-engine"
                    className="inline-block text-[#52a673] hover:underline font-bold text-sm tracking-wider uppercase transition-colors"
                  >
                    ✓ BACKTEST ENGINE
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-base text-slate-700 leading-relaxed font-medium">
                    Implemented an AI-driven multi-agent chatbot architecture tailored for enterprise scale using Spring Boot and Gemini API:
                  </p>
                  <a
                    href="#zalo-bot"
                    className="inline-block text-[#52a673] hover:underline font-bold text-sm tracking-wider uppercase transition-colors"
                  >
                    ✓ ZALO MULTI-AGENT BOT
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-base text-slate-700 leading-relaxed font-medium">
                    Designed and constructed a feature-dense Lunar Calendar tracking platform utilizing modern frontend layouts:
                  </p>
                  <a
                    href="#lunar-platform"
                    className="inline-block text-[#52a673] hover:underline font-bold text-sm tracking-wider uppercase transition-colors"
                  >
                    ✓ LUNAR CALENDAR PLATFORM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutContent;
