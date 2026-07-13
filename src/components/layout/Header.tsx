import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "About Me", href: "#about", dropdown: false },
    { label: "Technical Blog", href: "#blog", dropdown: true },
    { label: "Developer Tools", href: "#tools", dropdown: false, highlight: true }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#52a673] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded p-1 hover:bg-[#438a5c] lg:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <a href="/" className="flex items-center space-x-2 font-serif text-xl font-bold tracking-tight">
              <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M17 8c-9 2-11.1 8.17-13.18 13.34L5.71 22l.87-2c1.47 0 8.42 0 12.42-4 3-3 3-6 3-6s-3 0-5 0M17 10c1 0 2.5.2 3 .5-.3 1-.9 2.5-2.9 3.5-1.5-1-2.5-2-3-3 .8-.5 2-1 2.9-1z" />
              </svg>
              <span className="tracking-wide">vietpq.com</span>
            </a>
          </div>

          <nav className="hidden space-x-2 lg:flex items-center">
            {navLinks.map((link) => {
              if (link.highlight) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="bg-[#438a5c] rounded-md px-3 py-1.5 text-sm font-semibold tracking-wide hover:bg-[#37704b] transition-colors"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <div key={link.label} className="relative">
                  <a
                    href={link.href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold tracking-wide hover:bg-[#438a5c] transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.dropdown && (
                      <svg className="h-3 w-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="relative flex items-center">
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="absolute right-8 w-40 sm:w-60 rounded border border-transparent bg-white px-3 py-1 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  autoFocus
                />
              )}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="rounded p-1.5 hover:bg-[#438a5c] focus:outline-none"
                aria-label="Search"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <a
              href="#cv"
              className="inline-block rounded border border-white px-3 py-1.5 text-xs font-bold tracking-wider uppercase text-white hover:bg-white hover:text-[#52a673] transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#468f63] bg-[#4b9869]">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  link.highlight ? "bg-[#438a5c] hover:bg-[#37704b]" : "hover:bg-[#3d7c55]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
