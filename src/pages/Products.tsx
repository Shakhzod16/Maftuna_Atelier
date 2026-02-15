import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { products, categoryKeys } from '@/data/products';
import { Search, ChevronDown } from 'lucide-react';

const Products = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');
  const [hovered, setHovered] = useState<number | null>(null);

  const categoryLabels: Record<string, string> = {
    all: t.products.all,
    evening: t.categories.evening,
    business: t.categories.business,
    bridal: t.categories.bridal,
    casual: t.categories.casual,
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (filter !== 'all') list = list.filter((p) => p.category === filter);
    if (search) list = list.filter((p) => p.name[lang]?.toLowerCase().includes(search.toLowerCase()));
    if (sort === 'priceAsc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'priceDesc') list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return list;
  }, [filter, search, sort, lang]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-10">{t.products.title}</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-sm rounded border transition-colors ${
                filter === cat ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t.products.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm bg-background border border-border rounded focus:outline-none focus:border-primary w-52"
            />
          </div>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none px-4 py-2 pr-8 text-sm bg-background border border-border rounded focus:outline-none focus:border-primary cursor-pointer"
            >
              <option value="newest">{t.products.newest}</option>
              <option value="priceAsc">{t.products.priceAsc}</option>
              <option value="priceDesc">{t.products.priceDesc}</option>
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group border border-border rounded overflow-hidden bg-background hover:border-primary transition-colors"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(product.id === hovered ? null : product.id)}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={hovered === product.id ? product.img2 : product.img1}
                alt={product.name[lang]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-wide bg-background/90 text-foreground px-4 py-2 rounded">
                  {t.products.quickView}
                </span>
              </div>
            </div>
            <div className="p-4 flex items-start justify-between">
              <div>
                <h3 className="font-serif text-lg text-foreground">{product.name[lang]}</h3>
                <button className="text-xs text-primary underline underline-offset-2 mt-1 hover:opacity-80 transition-opacity">
                  {t.products.viewDetails}
                </button>
              </div>
              <span className="text-sm text-muted-foreground">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
