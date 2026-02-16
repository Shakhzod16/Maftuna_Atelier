import { useTranslation } from 'react-i18next';

const langs = ['uz', 'en', 'ru', 'fr', 'tr'] as const;
const labels: Record<string, string> = { uz: 'UZ', en: 'EN', ru: 'RU', fr: 'FR', tr: 'TR' };

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => i18n.changeLanguage(l)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
            i18n.language === l
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
