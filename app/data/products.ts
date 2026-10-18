/**
 * SINGLE SOURCE OF TRUTH for every product and category on the site.
 * Edit here and the mega menu, listing page, category pages, product pages,
 * SEO metadata and structured data all update automatically.
 *
 * Rules followed:
 *  - Nothing is invented. Anything not confirmed is left empty / "Available on Request".
 *  - `origin` is "India" because the products are Indian-sourced; change per product if needed.
 *  - Product images: add a direct Unsplash / external URL on any product via `image:`.
 *    If omitted, falls back to /images/products/<slug>.jpg (local file).
 */

export type CategorySlug = "fruits" | "fruit-pulp" | "agriculture" | "spices";

export interface Category {
  slug: CategorySlug;
  name: string;
  image: string;
  shortDescription: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: CategorySlug;
  image: string;
  shortDescription: string;
  /** One string per paragraph */
  description: string[];
  origin: string;
  /** Leave empty until confirmed -> shows "Available on Request" */
  grades: string[];
  packaging: string[];
  minimumOrderQuantity: string;
  specifications: string[];
}

export const ON_REQUEST = "Available on Request";

export const categories: Category[] = [
  {
    slug: "fruits",
    name: "Fruits",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Fresh bananas, pomegranates and mangoes for domestic and international buyers.",
    intro:
      "Fresh fruit is a core part of our range. IB Import Export handles enquiries for bananas, pomegranates and mangoes from buyers in India and overseas. Share your requirement and our team will respond with the details available.",
    seoTitle: "Fresh Fruit Exporter in India",
    seoDescription:
      "Explore banana, pomegranate and mango sourcing and export enquiries with IB Import Export, based in Phaltan, Maharashtra, India.",
  },
  {
    slug: "fruit-pulp",
    name: "Fruit Pulp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3cdYyf-5P0c7LmXqqoBwrWCzZeuEzXuacdffM_cjhXAPikSkv6HuIfw&s=10",
    shortDescription: "Strawberry, mango, chikoo, jamun and guava pulps for food and beverage manufacturers.",
    intro:
      "Fruit pulp is widely used as an ingredient in beverages, ice cream, desserts, bakery and confectionery. We take enquiries for six pulps: strawberry, mango, chikoo, jamun, red guava and white guava.",
    seoTitle: "Fruit Pulp Exporter in India",
    seoDescription:
      "Explore mango, strawberry, chikoo, jamun and guava pulp enquiries with IB Import Export, based in Phaltan, Maharashtra, India.",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    image: "https://images.unsplash.com/photo-1620200423727-8127f75d7f53?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Staple agricultural commodities including Basmati rice and onion.",
    intro:
      "Basmati rice and onion are staple commodities with steady demand in kitchens and food businesses around the world. Tell us your quantity and destination and we will respond to your enquiry.",
    seoTitle: "Agricultural Products Exporter in India",
    seoDescription:
      "Explore Basmati rice and onion sourcing and export enquiries with IB Import Export, based in Phaltan, Maharashtra, India.",
  },
  {
    slug: "spices",
    name: "Spices",
    image: "https://plus.unsplash.com/premium_photo-1669130744503-4939a5bcef43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Turmeric, cumin seeds, red chilli powder and coriander seeds from India.",
    intro:
      "India is among the world's leading spice-producing countries. We take enquiries for turmeric, cumin seeds, red chilli powder and coriander seeds for wholesale, food manufacturing and retail buyers.",
    seoTitle: "Indian Spices Exporter",
    seoDescription:
      "Explore turmeric, cumin, red chilli powder and coriander seed enquiries with IB Import Export, based in Phaltan, Maharashtra, India.",
  },
];

type ProductInput = Pick<Product, "name" | "slug" | "categorySlug" | "shortDescription" | "description"> &
  Partial<Pick<Product, "origin" | "grades" | "packaging" | "minimumOrderQuantity" | "specifications" | "image">>;

function define(input: ProductInput): Product {
  const category = categories.find((c) => c.slug === input.categorySlug)!;
  return {
    id: `${input.categorySlug}-${input.slug}`,
    category: category.name,
    // If you pass `image`, that URL is used. Otherwise it falls back to a
    // local file at /images/products/<slug>.jpg
    image: input.image ?? `/images/products/${input.slug}.jpg`,
    origin: "India",
    grades: [],
    packaging: [],
    minimumOrderQuantity: ON_REQUEST,
    specifications: [],
    ...input,
  };
}

export const products: Product[] = [
  // ───────── FRUITS ─────────
  define({
    name: "Banana",
    slug: "banana",
    categorySlug: "fruits",
    image: "https://media.istockphoto.com/id/1494763483/photo/banana-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=NKgZvwkV4qwBdRPNyrUMVX2Xtczm65sT-_X5jEySQLg=",
    shortDescription: "Fresh bananas sourced from Indian growers for domestic and international buyers.",
    description: [
      "Bananas are one of the most widely traded fresh fruits in the world, valued for their natural sweetness, convenient size and year-round demand. India is among the largest banana-producing countries, with cultivation across several states including Maharashtra.",
      "IB Import Export accepts banana enquiries from wholesale and import buyers. Please include your required quantity, packing preference and destination in your enquiry, and our team will confirm availability and terms.",
    ],
  }),
  define({
    name: "Pomegranate",
    slug: "pomegranate",
    categorySlug: "fruits",
    image: "https://media.istockphoto.com/id/168837584/photo/pomegranate-and-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=6WHpe5b4skpK-JI2VlMejc9fsD50JNcLokVfbqXPcaU=",
    shortDescription: "Fresh pomegranates from Indian orchards, available for wholesale and export enquiries.",
    description: [
      "Pomegranates are prized for their distinctive sweet-tart flavour and the ruby-coloured arils inside the fruit. Maharashtra is one of the key pomegranate-growing regions of India.",
      "We take pomegranate enquiries from importers, wholesalers and distributors. Send us your quantity, packing and destination requirements and we will respond with the details available.",
    ],
  }),
  define({
    name: "Mango",
    slug: "mango",
    categorySlug: "fruits",
    image: "https://images.unsplash.com/photo-1669207334420-66d0e3450283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Fresh Indian mangoes for wholesale and export buyers, subject to seasonal availability.",
    description: [
      "India is the world's largest producer of mangoes and is known for its wide range of regional varieties. Mangoes are a seasonal fruit, so availability depends on the harvest period.",
      "To enquire about mangoes, tell us the variety you are looking for, your required quantity and your destination market. Our team will confirm what is available and share the terms.",
    ],
  }),

  // ───────── FRUIT PULP ─────────
  define({
    name: "Strawberry Pulp",
    slug: "strawberry-pulp",
    categorySlug: "fruit-pulp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eCTDMfeqcgCndZRumypHegQGhmfEUfS9PhlKjJ7r_Q&s=10",
    shortDescription: "Strawberry pulp for beverage, dessert, ice cream and bakery manufacturers.",
    description: [
      "Fruit pulp is a processed form of fruit that manufacturers use as a base ingredient. Strawberry pulp is commonly used in juices, smoothies, ice cream, yoghurt, desserts and bakery fillings.",
      "Specifications, packaging and quantities are confirmed per enquiry. Contact us with your intended use and volume and we will share the details available.",
    ],
  }),
  define({
    name: "Mango Pulp",
    slug: "mango-pulp",
    categorySlug: "fruit-pulp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGy0g66h4bGQgXe9QZoEOTTIb6xIvhXFSaQ8tbeawqg&s=10",
    shortDescription: "Mango pulp for juice, ice cream, dessert and confectionery manufacturers.",
    description: [
      "Mango pulp is one of the most widely used fruit pulps in the food and beverage industry, found in drinks, ice cream, desserts, sauces and confectionery. India is the world's largest mango-producing country.",
      "Variety, packaging and specifications are confirmed per enquiry. Contact us with your requirements and we will respond with the details available.",
    ],
  }),
  define({
    name: "Chikoo Pulp",
    slug: "chikoo-pulp",
    categorySlug: "fruit-pulp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNL-MF0hm2qzlwENu-EC4MBsmSr5BT9d7G1zGEY9k4w&s",
    shortDescription: "Chikoo (sapota) pulp for ice cream, shakes and dessert manufacturers.",
    description: [
      "Chikoo, also known as sapota, is a tropical fruit with a sweet, malty flavour. Chikoo pulp is used in ice cream, milkshakes, desserts and other sweet preparations.",
      "Please share your required quantity, packaging preference and destination with your enquiry and our team will respond with the details available.",
    ],
  }),
  define({
    name: "Jamun Pulp",
    slug: "jamun-pulp",
    categorySlug: "fruit-pulp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhXPd81DG1KrhiF5yY4wvrQhhDhQ-I-n3h_2WL2fLKg&s=10",
    shortDescription: "Jamun pulp, made from the deep purple Indian fruit, for beverages and desserts.",
    description: [
      "Jamun, also called Indian blackberry or java plum, is a deep purple fruit with a distinctive sweet and tangy taste. Jamun pulp can be used in beverages, ice cream, desserts and speciality food products.",
      "Specifications and packaging are confirmed per enquiry. Contact us with your requirements to receive the details available.",
    ],
  }),
  define({
    name: "Red Guava Pulp",
    slug: "red-guava-pulp",
    categorySlug: "fruit-pulp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnieEi4wGrrd77c7fjZRSzc8QS3ATMYzXPyNXQN1caw&s=10",
    shortDescription: "Red guava pulp for juices, nectars, desserts and confectionery.",
    description: [
      "Red guava, also known as pink guava, has pink to red flesh and an aromatic, sweet flavour. Its pulp is used in juices, nectars, ice cream, desserts and confectionery.",
      "Send us your quantity, packaging and destination requirements and our team will respond with the details available.",
    ],
  }),
  define({
    name: "White Guava Pulp",
    slug: "white-guava-pulp",
    categorySlug: "fruit-pulp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ten7s-JqLVvtrY_rA8gYmpMTbE2MVIyit1yFv0VNGg&s=10",
    shortDescription: "White guava pulp for beverage, dessert and food manufacturing.",
    description: [
      "White guava has pale flesh and a mild, fragrant flavour. White guava pulp is used in juices, nectars, ice cream, desserts and other food and beverage preparations.",
      "Specifications and packaging are confirmed per enquiry. Contact us with your requirements to receive the details available.",
    ],
  }),

  // ───────── AGRICULTURE ─────────
  define({
    name: "Basmati Rice",
    slug: "basmati-rice",
    categorySlug: "agriculture",
    image: "https://images.unsplash.com/photo-1643622357625-c013987d90e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Long-grain aromatic Basmati rice for retail, wholesale and food-service buyers.",
    description: [
      "Basmati is a long-grain, aromatic rice traditionally grown in the Indian subcontinent. It is known for its fragrance and for the slender, elongated grains it produces when cooked.",
      "Grades, packaging and quantities are confirmed per enquiry. Tell us your requirement and destination and we will respond with the details available.",
    ],
  }),
  define({
    name: "Onion",
    slug: "onion",
    categorySlug: "agriculture",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Fresh Indian onions for wholesale, import and food-industry buyers.",
    description: [
      "Onions are a staple ingredient in cuisines around the world. India is one of the world's largest onion producers, and Maharashtra is a leading onion-growing state.",
      "Please include your required quantity, size preference and destination with your enquiry and our team will confirm availability and terms.",
    ],
  }),

  // ───────── SPICES ─────────
  define({
    name: "Turmeric",
    slug: "turmeric",
    categorySlug: "spices",
    image: "https://plus.unsplash.com/premium_photo-1726862790171-0d6208559224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Turmeric from India, valued for its golden-yellow colour and warm, earthy flavour.",
    description: [
      "Turmeric is the dried rhizome of the Curcuma longa plant, used worldwide as a spice and natural colouring in cooking. India is both the largest producer and the largest consumer of turmeric.",
      "We take turmeric enquiries from wholesale, food manufacturing and retail buyers. Tell us the form you need, your quantity and your destination, and we will respond with the details available.",
    ],
  }),
  define({
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    categorySlug: "spices",
    image: "https://plus.unsplash.com/premium_photo-1674654419404-667fcdd0fe13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Whole cumin seeds from India with a warm, earthy aroma.",
    description: [
      "Cumin seeds come from the Cuminum cyminum plant and are a foundation of Indian, Middle Eastern and many other cuisines, used whole or ground. India is among the world's major cumin-producing countries.",
      "Grades, packaging and quantities are confirmed per enquiry. Contact us with your requirement and we will share the details available.",
    ],
  }),
  define({
    name: "Red Chilli Powder",
    slug: "red-chilli-powder",
    categorySlug: "spices",
    image: "https://media.istockphoto.com/id/894400018/photo/red-chilli-powder-in-a-bowl-with-dried-red-chillies-over-colourful-background-or-pile-of-red.webp?a=1&b=1&s=612x612&w=0&k=20&c=P7UwkbYGeuX5RCJz3_hFh8gocsK8btjbVpgB4siOWAg=",
    shortDescription: "Ground red chilli powder for food manufacturers, wholesalers and retail packers.",
    description: [
      "Red chilli powder is made by grinding dried red chillies and is used to add heat and colour to a wide range of dishes and food products. Heat level and colour vary with the type of chilli used.",
      "Because those characteristics matter to buyers, we confirm them per enquiry. Tell us the heat and colour profile you need, along with quantity and destination.",
    ],
  }),
  define({
    name: "Coriander Seeds",
    slug: "coriander-seeds",
    categorySlug: "spices",
    image: "https://plus.unsplash.com/premium_photo-1725997402871-4aea35710632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    shortDescription: "Whole coriander seeds from India with a mild, citrus-like aroma.",
    description: [
      "Coriander seeds are the dried fruits of the Coriandrum sativum plant. They have a mild, slightly citrus-like flavour and are used whole or ground in spice blends, pickles and cooking.",
      "Grades, packaging and quantities are confirmed per enquiry. Contact us with your requirements and we will respond with the details available.",
    ],
  }),
];

/* ───────── Helpers ───────── */
export const categoryHref = (slug: string) => `/products/${slug}`;
export const productHref = (p: Pick<Product, "categorySlug" | "slug">) => `/products/${p.categorySlug}/${p.slug}`;
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProductsByCategory = (slug: string) => products.filter((p) => p.categorySlug === slug);
export const getProduct = (categorySlug: string, slug: string) =>
  products.find((p) => p.categorySlug === categorySlug && p.slug === slug);
export const getRelatedProducts = (product: Product, limit = 3) =>
  products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, limit);