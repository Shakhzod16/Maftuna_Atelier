import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder submit
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-3">{t.contact.title}</h1>
      <p className="text-muted-foreground mb-12 max-w-lg">{t.contact.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{t.contact.phone}</span>
              <a href="tel:+998901234567" className="block text-foreground underline underline-offset-2 hover:text-primary transition-colors">+998 90 123 45 67</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{t.contact.email}</span>
              <a href="mailto:info@maftuna-atelier.com" className="block text-foreground underline underline-offset-2 hover:text-primary transition-colors">info@maftuna-atelier.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{t.contact.address}</span>
              <p className="text-foreground">Tashkent, Uzbekistan</p>
            </div>
          </div>
          <div className="border-t border-border pt-6 space-y-3">
            <a href="https://t.me/maftuna_atelier" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors block">{t.contact.telegram}</a>
            <a href="https://instagram.com/maftuna_atelier" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors block">{t.contact.instagram}</a>
          </div>
          <a
            href="https://maps.google.com?q=Tashkent+Uzbekistan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2.5 border border-foreground text-foreground text-sm rounded hover:bg-foreground hover:text-background transition-colors"
          >
            {t.contact.viewMap}
          </a>
        </div>

        {/* Right form */}
        <form onSubmit={handleSubmit} className="border border-border rounded p-6 lg:p-8 space-y-5">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.contact.name}</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-background border border-border rounded text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.contact.email}</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 bg-background border border-border rounded text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.contact.message}</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 bg-background border border-border rounded text-sm focus:outline-none focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wide rounded hover:opacity-90 transition-opacity"
          >
            <Send size={14} />
            {t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
