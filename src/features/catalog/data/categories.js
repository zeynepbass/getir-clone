const DEFAULT_SUB_CATEGORIES = ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"];

const categories = [
  { id: "1", name: "İndirimler", image: require("@assets/images/categories/indirimler.webp") },
  { id: "2", name: "Su & İçecek", image: require("@assets/images/categories/su-icecek.webp") },
  { id: "3", name: "Meyve & Sebze", image: require("@assets/images/categories/meyve-sebze.webp") },
  { id: "4", name: "Fırından", image: require("@assets/images/categories/firindan.webp") },
  { id: "5", name: "Temel Gıda", image: require("@assets/images/categories/temel-gida.webp") },
  { id: "6", name: "Atıştırmalık", image: require("@assets/images/categories/atistirmalik.webp") },
  { id: "7", name: "Dondurma", image: require("@assets/images/categories/dondurma.webp") },
  { id: "8", name: "Süt Ürünleri", image: require("@assets/images/categories/sut-urunleri.webp") },
  { id: "9", name: "Kahvaltılık", image: require("@assets/images/categories/kahvaltilik.webp") },
  { id: "10", name: "Yiyecek", image: require("@assets/images/categories/yiyecek.webp") },
  { id: "11", name: "Fit & Form", image: require("@assets/images/categories/fit-form.webp") },
  { id: "12", name: "Kişisel Bakım", image: require("@assets/images/categories/kisisel-bakim.webp") },
  { id: "13", name: "Evcil Hayvan", image: require("@assets/images/categories/evcil-hayvan.webp") },
  { id: "14", name: "Bebek", image: require("@assets/images/categories/bebek.webp") },
  { id: "15", name: "Cinsel Sağlık", image: require("@assets/images/categories/cinsel-saglik.webp") },
  { id: "16", name: "Ev Bakım", image: require("@assets/images/categories/ev-bakim.webp") },
  { id: "17", name: "Teknoloji", image: require("@assets/images/categories/teknoloji.webp") },
  { id: "18", name: "Ev & Yaşam", image: require("@assets/images/categories/ev-yasam.webp") },
].map((category) => ({ subCategories: DEFAULT_SUB_CATEGORIES, ...category }));

const categoriesById = Object.fromEntries(categories.map((category) => [category.id, category]));

export const getCategories = () => categories;
export const getCategoryById = (id) => categoriesById[id] ?? categories[0];
