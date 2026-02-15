import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language, languageNames } from '@/i18n/translations';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/products', label: t.nav.products },
    { to: '/marketplace', label: t.nav.marketplace },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">Maftuna Atelier</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Women's tailoring</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm tracking-wide transition-colors hover:text-primary pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-300 ${
                isActive(link.to) ? 'text-primary after:w-full' : 'text-foreground after:w-0 hover:after:w-full'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Language + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 border border-border rounded px-1">
            {(Object.keys(languageNames) as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-xs transition-colors rounded ${
                  lang === l ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {languageNames[l]}
              </button>
            ))}
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4 animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-lg font-serif ${isActive(link.to) ? 'text-primary' : 'text-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-4 border-t border-border">
            {(Object.keys(languageNames) as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileOpen(false); }}
                className={`px-3 py-1.5 text-xs rounded border ${
                  lang === l ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground'
                }`}
              >
                {languageNames[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
