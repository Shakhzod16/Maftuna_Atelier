import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { to: '/', key: 'nav.home' },
  { to: '/products', key: 'nav.products' },
  { to: '/marketplace', key: 'nav.marketplace' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
];

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container-atelier flex items-center justify-between h-16 px-6 lg:px-20">
        <Link to="/" className="font-heading text-2xl font-semibold tracking-wide text-foreground">
          Maftuna <span className="text-accent">Atelier</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === l.to ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-border/50 animate-fade-in">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${
                  location.pathname === l.to ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {t(l.key)}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
