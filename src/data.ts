export type Product = {
  slug: string; name: string; category: 'Paint protection film' | 'Color TPU film' | 'Window film';
  image: string; alt: string; summary: string; description: string; specs?: [string, string][];
  features: string[]; models?: [string, string, string, string, string, string][];
};

const ppf = (slug: string, name: string, image: string, finish: string, thickness: string, warranty: string, extra: string[] = []): Product => ({
  slug, name, image, category: 'Paint protection film', alt: 'Illustrative vehicle image from the paint protection film catalog',
  summary: `${finish} paint protection film`,
  description: `A ${finish.toLowerCase()} film for automotive painted surfaces, presented in the AUTO Tailor paint protection film catalog.`,
  specs: [['Finish', finish], ['Catalog thickness', thickness], ['Catalog warranty period', warranty]],
  features: ['TPU-based construction', 'Heat-assisted scratch repair coating', ...extra],
});

export const products: Product[] = [
  ppf('t75', 'T75', '/images/ppf-t75.webp', 'Gloss', '7.5 mil', '5 years', ['Abrasion resistance']),
  ppf('t85', 'T85', '/images/ppf-t85.webp', 'Gloss', '8.5 mil', '5 years', ['Abrasion resistance']),
  ppf('t75m', 'T75M', '/images/ppf-t75m.webp', 'Matte', '7.5 mil', '5 years', ['Matte appearance']),
  ppf('a75', 'A75', '/images/ppf-t75.webp', 'Gloss', '7.5 mil', '5 years', ['Hydrophobic surface']),
  ppf('a85', 'A85', '/images/ppf-t85.webp', 'Gloss', '8.5 mil', '8 years', ['Hydrophobic surface']),
  ppf('at-super-black', 'AT Super Black', '/images/ppf-black.webp', 'Gloss black', '7.5 mil', '5 years', ['Black color layer']),
  ppf('at-super-matte-black', 'AT Super Matte Black', '/images/ppf-matte-black.webp', 'Matte black', '7.5 mil', '5 years', ['Black color layer']),
  {
    slug: 'color-tpu', name: 'Color TPU film', category: 'Color TPU film', image: '/images/color-wrap.webp', alt: 'Color film being applied to a vehicle',
    summary: 'Color and paint protection in one film',
    description: 'A cast-grade composite TPU color film designed to change the appearance of a vehicle while protecting its paint. The catalog describes gloss and matte application options.',
    specs: [['Catalog roll size', '1.524 × 15 m'], ['Catalog thickness', '7.5 mil ± 5%'], ['Catalog warranty period', '5 years, subject to conditions']],
    features: ['Color layer and TPU base', 'Scratch-repair coating', 'Gloss and matte options'],
  },
  {
    slug: 'ae-window-film', name: 'AE series', category: 'Window film', image: '/images/window-film.webp', alt: 'Vehicle on a road, from the window film catalog',
    summary: 'Nano-ceramic window film', description: 'The AE series uses nano-ceramic particle technology. The catalog lists four shades, with different levels of visible light transmission and solar energy rejection.',
    features: ['Nano-ceramic construction', 'Four listed shades', 'Catalog thickness: 2 mil'],
    models: [['AE 7095','71%','8%','99%','93%','45%'], ['AE 1595','16%','8%','99%','95%','64%'], ['AE 2595','25%','8%','99%','94%','60%'], ['AE 3595','35%','8%','99%','95%','56%']],
  },
  {
    slug: 'at-window-film', name: 'AT series', category: 'Window film', image: '/images/window-dark.webp', alt: 'Gold vehicle from the window film catalog',
    summary: 'Sputtered metal and ceramic window films', description: 'The AT series includes double-silver sputtered films and titanium nitride ceramic films, with multiple shades listed in the catalog.',
    features: ['Double-silver and ceramic options', 'Multiple listed shades', 'Catalog thickness: 2 or 3 mil, depending on model'],
    models: [['AT 70S','73%','9%','99%','85%','55%'],['AT 70','73%','9%','99%','84%','54%'],['AT 40','37%','8%','99%','89%','62%'],['AT 20','22%','10%','99%','91%','69%'],['AT 35CP','33%','12%','99%','90%','63%'],['AT 10CP','10%','12%','99%','92%','65%'],['AT ceramic 40','39%','9%','99%','95%','51%'],['AT ceramic 30','28%','9%','99%','95%','55%']],
  },
  {
    slug: 't-window-film', name: 'T series', category: 'Window film', image: '/images/window-film.webp', alt: 'Vehicle on a road, from the window film catalog',
    summary: 'Nano-ceramic window film', description: 'The T series combines dyed film and nano-ceramic technology. The catalog lists five shades with varying light transmission.',
    features: ['Nano-ceramic construction', 'Five listed shades', 'Catalog thickness: 2 mil'],
    models: [['T 9070','71%','8%','99%','90%','44%'],['T 5090','53%','8%','99%','91%','52%'],['T 3590','35%','8%','99%','89%','55%'],['T 2090','20%','8%','99%','91%','58%'],['T 30590','7%','8%','99%','92%','62%']],
  },
  {
    slug: 'ak-window-film', name: 'AK series', category: 'Window film', image: '/images/window-dark.webp', alt: 'Gold vehicle from the window film catalog',
    summary: 'Metal-ceramic window film', description: 'The AK series combines titanium nitride sputtering and nano-ceramic particle technology, according to the window film catalog.',
    features: ['Metal-ceramic construction', 'Four listed shades', 'Catalog thickness: 2 or 3 mil, depending on model'],
    models: [['AK 6098S','69%','11%','99%','91%','58%'],['AK 1595S','17%','10%','99%','93%','68%'],['AK 2595S','23%','10%','99%','93%','63%'],['AK 3595S','33%','11%','99%','91%','60%']],
  },
];
