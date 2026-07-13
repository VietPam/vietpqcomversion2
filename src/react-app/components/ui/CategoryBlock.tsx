interface CategoryItem {
  title: string;
  href: string;
  badge?: string;
}

interface CategoryBlockProps {
  title: string;
  items: CategoryItem[];
}

function CategoryBlock({ title, items }: CategoryBlockProps) {
  const getBadgeStyle = (badge?: string) => {
    if (!badge) return "";
    switch (badge.toUpperCase()) {
      case "FULL GUIDE":
        return "bg-brand-blue text-white";
      case "SERIES":
        return "bg-brand-gold text-slate-900";
      case "LATEST":
        return "bg-brand-green text-white";
      default:
        return "bg-slate-800 text-white";
    }
  };

  const getIllustration = (categoryTitle: string) => {
    const norm = categoryTitle.toLowerCase();
    if (norm.includes("spring boot")) {
      return (
        <svg className="w-full h-24 bg-[#e8f5e9] text-[#4caf50]" viewBox="0 0 200 100" fill="currentColor">
          <rect width="200" height="100" fill="#f1f9f3" />
          <circle cx="100" cy="50" r="30" fill="#e2f3e7" />
          <path d="M90 40h20v20H90z" fill="#52a673" />
          <path d="M100 25v15M100 60v15M80 50h15M105 50h15" stroke="#52a673" strokeWidth="2" />
        </svg>
      );
    }
    if (norm.includes("weekly")) {
      return (
        <svg className="w-full h-24 bg-[#fffdf0] text-[#fbc02d]" viewBox="0 0 200 100" fill="currentColor">
          <rect width="200" height="100" fill="#fffbe6" />
          <rect x="75" y="25" width="50" height="50" rx="4" fill="#fef4cc" />
          <line x1="85" y1="35" x2="115" y2="35" stroke="#f5c147" strokeWidth="3" strokeLinecap="round" />
          <line x1="85" y1="50" x2="105" y2="50" stroke="#f5c147" strokeWidth="3" strokeLinecap="round" />
          <line x1="85" y1="65" x2="110" y2="65" stroke="#f5c147" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    }
    if (norm.includes("latest articles") || norm.includes("java")) {
      return (
        <svg className="w-full h-24 bg-[#f0f4c3] text-[#afb42b]" viewBox="0 0 200 100" fill="currentColor">
          <rect width="200" height="100" fill="#fafde8" />
          <path d="M70 65c0-10 10-20 30-20s30 10 30 20H70z" fill="#d2df83" />
          <ellipse cx="100" cy="35" rx="15" ry="8" fill="#afb42b" opacity="0.8" />
          <line x1="100" y1="35" x2="100" y2="45" stroke="#afb42b" strokeWidth="2" />
        </svg>
      );
    }
    if (norm.includes("cloud") || norm.includes("microservices")) {
      return (
        <svg className="w-full h-24 bg-[#e1f5fe] text-[#0288d1]" viewBox="0 0 200 100" fill="currentColor">
          <rect width="200" height="100" fill="#f0fafe" />
          <path d="M70 55a15 15 0 0128-4 12 12 0 0122 0 15 15 0 01-6 29H76a15 15 0 01-6-25z" fill="#b3e5fc" />
          <circle cx="100" cy="45" r="10" fill="#2e6da4" opacity="0.6" />
        </svg>
      );
    }
    if (norm.includes("persistence") || norm.includes("database")) {
      return (
        <svg className="w-full h-24 bg-[#efebe9] text-[#5d4037]" viewBox="0 0 200 100" fill="currentColor">
          <rect width="200" height="100" fill="#f6f3f2" />
          <rect x="80" y="25" width="40" height="12" rx="2" fill="#d7ccc8" />
          <rect x="80" y="44" width="40" height="12" rx="2" fill="#d7ccc8" />
          <rect x="80" y="63" width="40" height="12" rx="2" fill="#d7ccc8" />
        </svg>
      );
    }
    return (
      <svg className="w-full h-24 bg-[#eceff1] text-[#455a64]" viewBox="0 0 200 100" fill="currentColor">
        <rect width="200" height="100" fill="#f4f6f7" />
        <polygon points="100,25 130,75 70,75" fill="#cfd8dc" />
        <circle cx="100" cy="55" r="8" fill="#78909c" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col bg-transparent">
      <h3 className="text-lg font-bold tracking-tight text-brand-blue uppercase border-b-2 border-slate-900 pb-1 mb-3">
        {title}
      </h3>
      <div className="w-full aspect-[2/1] overflow-hidden mb-4 bg-slate-100">
        {getIllustration(title)}
      </div>
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between gap-3 py-1 border-b border-slate-100">
            <a
              href={item.href}
              className="text-sm font-medium text-slate-950 hover:underline hover:text-brand-blue transition-colors duration-100"
            >
              {item.title}
            </a>
            {item.badge && (
              <span className={`shrink-0 rounded-none px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${getBadgeStyle(item.badge)}`}>
                {item.badge}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryBlock;
export type { CategoryItem, CategoryBlockProps };
