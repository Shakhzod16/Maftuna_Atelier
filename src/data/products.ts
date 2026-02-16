export interface Product {
  id: string;
  nameKey: string;
  descKey: string;
  category: "national" | "dresses" | "modern" | "custom";
  price?: number;
  images: [string, string];
}

export const products: Product[] = [
  {
    id: "1",
    nameKey: "Milliy libos — oltin kashta",
    descKey: "An'anaviy naqshlar bilan bezatilgan milliy libos.",
    category: "national",
    price: 1500000,
    images: ["/products/national-1.jpg", "/products/national-2.jpg"],
  },
  {
    id: "2",
    nameKey: "Zamonaviy kechki ko'ylak",
    descKey: "Burgundy rangli zamonaviy kechki libos.",
    category: "modern",
    price: 2200000,
    images: ["/products/modern-1.jpg", "/products/modern-2.jpg"],
  },
  {
    id: "3",
    nameKey: "Buyurtma — to'y libosi",
    descKey: "Qo'lda ishlangan nozik detallar bilan to'y libosi.",
    category: "custom",
    price: 3500000,
    images: ["/products/custom-1.jpg", "/products/custom-2.jpg"],
  },
  {
    id: "4",
    nameKey: "Nafis ko'ylak — oltin rang",
    descKey: "Yengil va nafis ko'ylak, bayramlar uchun.",
    category: "dresses",
    price: 1800000,
    images: ["/products/dress-1.jpg", "/products/dress-2.jpg"],
  },
  {
    id: "5",
    nameKey: "Milliy atlas libos",
    descKey: "Rangli atlas gazmoldan tikilgan milliy libos.",
    category: "national",
    price: 1200000,
    images: ["/products/national-2.jpg", "/products/national-1.jpg"],
  },
  {
    id: "6",
    nameKey: "Zamonaviy blazer kostyum",
    descKey: "Rasmiy tadbirlar uchun zamonaviy blazer.",
    category: "modern",
    price: 2500000,
    images: ["/products/modern-2.jpg", "/products/modern-1.jpg"],
  },
  {
    id: "7",
    nameKey: "Buyurtma — bayram libosi",
    descKey: "Maxsus buyurtma asosida tayyorlangan bayram libosi.",
    category: "custom",
    price: 2800000,
    images: ["/products/custom-2.jpg", "/products/custom-1.jpg"],
  },
  {
    id: "8",
    nameKey: "Pushti maxi ko'ylak",
    descKey: "Yengil gazlamadan tikilgan nafis maxi ko'ylak.",
    category: "dresses",
    price: 1600000,
    images: ["/products/dress-2.jpg", "/products/dress-1.jpg"],
  },
];
