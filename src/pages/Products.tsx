import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories = ['all', 'national', 'dresses', 'modern', 'custom'] as const;
type Category = (typeof categories)[number];

const Products = () => {
  const { t, i18n } = useTranslation();

  const [category, setCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'default' | 'price_asc' | 'price_desc'>('default');

  const filtered = useMemo(() => {
    let result = products;

    // ✅ category filter
    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    // ✅ search — endi tarjima qilingan matn bo‘yicha qidiradi
    if (search.trim()) {
      const q = search.trim().toLowerCase();

      result = result.filter((p) => {
        const name = t(p.nameKey).toLowerCase();
        const desc = t(p.descKey).toLowerCase();
        return name.includes(q) || desc.includes(q);
      });
    }

    // ✅ sort
    if (sort === 'price_asc') {
      result = [...result].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } else if (sort === 'price_desc') {
      result = [...result].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    return result;
    // ✅ i18n.language qo‘shildi: til o‘zgarsa useMemo qayta hisoblaydi
  }, [category, search, sort, t, i18n.language]);

  return (
    <section className="section-padding pt-28 bg-background min-h-screen">
      <div className="container-atelier">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            {t('products.title')}
          </h1>
          <div className="gold-divider" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`pill-tab ${category === c ? 'pill-tab-active' : 'pill-tab-inactive'}`}
              >
                {t(`products.categories.${c}`)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={t('products.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent/30 transition-all w-48"
              />
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground outline-none cursor-pointer"
            >
              <option value="default">{t('products.sort_default')}</option>
              <option value="price_asc">{t('products.sort_price_asc')}</option>
              <option value="price_desc">{t('products.sort_price_desc')}</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            {t('products.noResults')}
          </p>
        )}
      </div>
    </section>
  );
};

export default Products;
