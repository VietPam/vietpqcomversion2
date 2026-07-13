function Footer() {
  const footerSections = [
    {
      title: "Blog Matrix",
      links: [
        { label: "Java Guides", href: "#java-guides" },
        { label: "Spring Architecture", href: "#spring-arch" },
        { label: "SQL & Databases", href: "#sql-db" },
        { label: "Microservices Guides", href: "#micro-guides" }
      ]
    },
    {
      title: "Developer Tools",
      links: [
        { label: "Regex Tester", href: "#regex" },
        { label: "JSON Formatter", href: "#json" },
        { label: "YAML Validator", href: "#yaml" },
        { label: "JWT Decoder", href: "#jwt" }
      ]
    },
    {
      title: "About Details",
      links: [
        { label: "Profile Story", href: "#story" },
        { label: "Key Projects", href: "#projects-details" },
        { label: "Tech Stack", href: "#stack" },
        { label: "Contact Info", href: "#contact-details" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-450 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-semibold">
          <p>&copy; {new Date().getFullYear()} vietpq.com. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
