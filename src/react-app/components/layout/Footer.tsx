function Footer() {
  const footerSections = [
    {
      title: "Courses",
      links: [
        { label: "Spring Boot Pro", href: "#spring-boot-pro" },
        { label: "Java Masterclass", href: "#java-masterclass" },
        { label: "Testing Enterprise Apps", href: "#testing-enterprise" },
        { label: "Microservices Foundation", href: "#microservices" }
      ]
    },
    {
      title: "Series",
      links: [
        { label: "Java Weekly Review", href: "#java-weekly" },
        { label: "Spring Security Deep Dive", href: "#security-deep" },
        { label: "Kotlin Core", href: "#kotlin-core" },
        { label: "Quarkus vs Spring", href: "#quarkus-spring" }
      ]
    },
    {
      title: "About",
      links: [
        { label: "Our Team", href: "#team" },
        { label: "Editorial Guidelines", href: "#editorial" },
        { label: "Contact Us", href: "#contact" },
        { label: "Write for Us", href: "#write" }
      ]
    },
    {
      title: "eBooks",
      links: [
        { label: "REST with Spring Ebook", href: "#rest-ebook" },
        { label: "Learn Spring Security", href: "#security-ebook" },
        { label: "Spring Study Guides", href: "#study-guides" },
        { label: "Hibernate Ebook", href: "#hibernate-ebook" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
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
          <p>&copy; {new Date().getFullYear()} Baeldung. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
            <a href="#advertise" className="hover:text-white">Advertise</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
