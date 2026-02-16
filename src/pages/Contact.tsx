import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Send, Instagram, Mail, MapPin } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.phone.trim()) newErrors.phone = true;
    if (!form.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    toast({ title: t('contact.form_success') });
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section className="section-padding pt-28 bg-background min-h-screen">
      <div className="container-atelier">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">{t('contact.title')}</h1>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ContactItem icon={<Phone size={18} />} label={t('contact.phone')}>
              <a href={`tel:${BUSINESS.phone}`} className="text-foreground hover:text-primary transition-colors">{BUSINESS.phone}</a>
            </ContactItem>
            <ContactItem icon={<Send size={18} />} label={t('contact.telegram')}>
              <a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">@maftune_khanum</a>
            </ContactItem>
            <ContactItem icon={<Instagram size={18} />} label={t('contact.instagram')}>
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">@maftuna.atelier</a>
            </ContactItem>
            <ContactItem icon={<Mail size={18} />} label={t('contact.email')}>
              <a href={`mailto:${BUSINESS.email}`} className="text-foreground hover:text-primary transition-colors">{BUSINESS.email}</a>
            </ContactItem>
            <ContactItem icon={<MapPin size={18} />} label={t('contact.address')}>
              <span className="text-foreground">{t('contact.address_val')}</span>
            </ContactItem>
            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-accent text-accent font-medium text-sm transition-all hover:bg-accent hover:text-accent-foreground"
            >
              <MapPin size={16} />
              {t('contact.map')}
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-elegant space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder={t('contact.form_name')}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full px-5 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground outline-none text-sm transition-all focus:ring-2 focus:ring-accent/30 ${errors.name ? 'ring-2 ring-destructive/50' : ''}`}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder={t('contact.form_phone')}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`w-full px-5 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground outline-none text-sm transition-all focus:ring-2 focus:ring-accent/30 ${errors.phone ? 'ring-2 ring-destructive/50' : ''}`}
              />
            </div>
            <div>
              <textarea
                placeholder={t('contact.form_message')}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={`w-full px-5 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground outline-none text-sm transition-all focus:ring-2 focus:ring-accent/30 resize-none ${errors.message ? 'ring-2 ring-destructive/50' : ''}`}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-elegant-lg hover:scale-[1.02]"
            >
              {t('contact.form_send')}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
      {icon}
    </div>
    <div>
      <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
      {children}
    </div>
  </div>
);

export default Contact;
