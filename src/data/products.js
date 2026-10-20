export const BRAND_INFO = {
  name: "CHANDRIKA",
  subtitle: "ARTIST",
  atelier: "Himachal Pradesh, India",
  instagram: "chandrika_annavarapu",
  instagramUrl: "https://instagram.com/chandrika_annavarapu",
  email: "studiochandrika.co@gmail.com",
  phone: "+91 98487 59103",
  whatsappNumber: "919848759103",
  whatsappUrl: "https://wa.me/919848759103?text=Hi%20Chandrika,%20I%20would%20like%20to%20discuss%20a%20custom%20crochet%20order%20from%20your%20website!",
  customisationBadge: "CUSTOMISATION IS AVAILABLE",
  tagline: "Hand-hooked heirloom fiber art, micro-botanicals, and bespoke crochet keepsakes inspired by the silence of the Himalayas."
};

export const getOrderWhatsAppUrl = (productTitle, category, price) => {
  const message = `Hi Chandrika! I would like to place an order for:
*Product:* ${productTitle}
*Category:* ${category}
*Price Range:* ${price}

Please share the availability and payment/shipping details. Thank you!`;
  return `https://wa.me/919848759103?text=${encodeURIComponent(message)}`;
};

// Wireframe Row Categories (From Image 2)
export const SIGNATURE_CATEGORIES = [
  {
    id: "frames",
    title: "Frames",
    tagline: "Miniature botanical tapestries & gilded antique heirlooms",
    image: "/assets/vintage-frames-basket.jpg",
    alt: "Ornate vintage frames with handcrafted micro-crochet flora",
    description: "Each frame is an intimate sanctuary of slow needlework. Using microscopic crochet hooks and gossamer cotton threads, vibrant blossoms and serene alpine landscape vignettes are meticulously sculpted and enshrined within gilded baroque and wooden shadow frames. Designed to preserve timeless botanical elegance that never wilts.",
    features: [
      "Gilded baroque, vintage brass, and wooden shadowbox frames",
      "Micro-crochet alpine buttercups, pansies, and Himachal wildflowers",
      "Custom sizes ranging from 3\" miniature desk frames to 12\" statement wall pieces",
      "Custom color palettes & personalised engraved inscriptions"
    ],
    highlight: "Custom floral species & frame finishes available"
  },
  {
    id: "action-figures",
    title: "Crochet action figures",
    tagline: "Character art, pop-culture icons & bespoke portrait dolls",
    image: "/assets/crochet-figure-doll.jpg",
    alt: "Handcrafted crochet action figures and character collectibles",
    description: "Bringing your favorite characters and loved ones to life through expressive amigurumi fiber sculpture. From iconic anime heroes and pop-culture legends to custom bride-and-groom mini figurines, every figure is crafted with articulated poses, layered costume textures, and meticulous needle-felted personality.",
    features: [
      "Custom avatar creation from your reference photos",
      "High-density mercerized yarn with internal poseable armature wire",
      "Detailed miniature accessories, capes, armor, and hairstyles",
      "Collector-grade wooden display pedestals with glass cloches"
    ],
    highlight: "Bespoke commissions made to order from photo references"
  },
  {
    id: "painting-postcards",
    title: "painting postcards",
    tagline: "Scenic yarn landscapes, mountain sunsets & forever bouquets",
    image: "/assets/himachal-crochet-bouquet.jpg",
    alt: "Crochet bouquets and scenic mountain painting postcards",
    description: "Where painterly mountain vistas meet three-dimensional fiber texture. Inspired by twilight over Himalayan ridges and tranquil cedar cabins, these postcard-sized fiber canvases capture golden sunsets, pine forests, and ever-blooming crimson bouquets that convey warmth across miles.",
    features: [
      "Textured yarn relief recreating Himachal mountain gradients",
      "Accompanying forever crochet bouquet bundles for milestones",
      "Archival mount paper backing with handwritten calligraphy notes",
      "Ready to display in tabletop acrylic or wooden easel stands"
    ],
    highlight: "The ultimate heartfelt heirloom gift for special occasions"
  }
];

// Deep-dive Products for "Frames" (From Image 3) & other collections
export const PRODUCTS_CATALOG = [
  {
    id: "crochet-flowers-frames",
    category: "frames",
    subCategory: "Crochet flowers frames",
    title: "Crochet Flowers Frame",
    subtitle: "Micro-crochet garden blossoms in antique baroque frame",
    priceRange: "₹1,450 – ₹3,200",
    image: "/assets/vintage-frames-basket.jpg",
    dimensions: "4.5\" × 5.5\" (Miniature Baroque) & 7\" × 9\" (Statement)",
    materials: "100% fine Egyptian mercerized cotton, antique gold poly-resin frame, velvet backing",
    leadTime: "5–7 business days",
    description: "A breathtaking cluster of micro-crocheted yellow and cream wild botanicals nestled in a gilded rococo frame. Every petal is individually looped with 0.6mm crochet needles to achieve organic lifelike curves.",
    tags: ["Best Seller", "Miniature", "Bespoke Frame"],
    customizable: true
  },
  {
    id: "himachal-flower-frames",
    category: "frames",
    subCategory: "Himachal flower frames",
    title: "Himachal Flower Frame",
    subtitle: "Native Himalayan alpine flora fiber miniature",
    priceRange: "₹1,650 – ₹3,800",
    image: "/assets/himachal-flower-frames.jpg",
    dimensions: "5\" × 7\" (Deep Box Shadow Frame)",
    materials: "High-twist organic wool yarn, sustainably sourced pine wood frame, float glass",
    leadTime: "6–8 business days",
    description: "Inspired by the spontaneous wild blooms dotting the alpine meadows of Manali and Kullu valley. Combines fine yarn crochet edelweiss, blue poppies, and cedar sprigs in a gallery shadowbox.",
    tags: ["Himachal Native", "Alpine Flora", "Shadowbox"],
    customizable: true
  },
  {
    id: "painting-frames",
    category: "frames",
    subCategory: "Painting frames",
    title: "Painting Frames (Cabin in Mountains)",
    subtitle: "Chandrika's signature relief yarn tapestry",
    priceRange: "₹3,400 – ₹7,500",
    image: "/assets/hero-cabin-tapestry.jpg",
    dimensions: "8\" × 10\" & 12\" × 16\" Handcrafted Frame",
    materials: "Hand-spun mountain sheep wool, textured boucle, rustic cedar frame",
    leadTime: "10–14 business days",
    description: "The artist's hallmark masterwork: a 3D textured yarn painting capturing a quiet wooden cabin nestled under snow-dusted Himalayan peaks, surrounded by pine woods under a swirling amber sun.",
    tags: ["Signature Masterpiece", "Heavy Texture", "Original Art"],
    customizable: true
  },
  {
    id: "custom-avatar-doll",
    category: "action-figures",
    subCategory: "Crochet Action Figures",
    title: "Custom Avatar Action Figure",
    subtitle: "Hand-stitched poseable mini-me portrait collectible",
    priceRange: "₹2,200 – ₹4,800",
    image: "/assets/crochet-figure-doll.jpg",
    dimensions: "7\" to 9\" Standing Height",
    materials: "Hypoallergenic cotton-acrylic yarn, copper wire armature, wooden base",
    leadTime: "8–12 business days",
    description: "Personalised action figures created directly from your photos. From signature hairstyles to favorite jackets, spectacles, or wedding outfits, captured in charming tactile crochet stitches.",
    tags: ["Custom Portrait", "Poseable", "Gift Favorite"],
    customizable: true
  },
  {
    id: "pop-culture-figurine",
    category: "action-figures",
    subCategory: "Crochet Action Figures",
    title: "Anime & Pop-Culture Hero Figurine",
    subtitle: "Collector edition fiber action sculptures",
    priceRange: "₹1,800 – ₹3,900",
    image: "/assets/crochet-plush-art.jpg",
    dimensions: "6.5\" Height",
    materials: "Mercerized combed cotton, felt embroidery accents",
    leadTime: "7–10 business days",
    description: "Intricately detailed amigurumi renditions of beloved anime, fantasy, and superhero characters. Includes detachable weapons, miniature capes, and expressive embroidered faces.",
    tags: ["Collectible", "Anime / Pop", "Limited Run"],
    customizable: true
  },
  {
    id: "mountain-sunset-postcard",
    category: "painting-postcards",
    subCategory: "Painting Postcards",
    title: "Alpine Sunset Painting Postcard",
    subtitle: "Tactile miniature landscape on archival linen card",
    priceRange: "₹850 – ₹1,650",
    image: "/assets/texture-mountain-swatch.jpg",
    dimensions: "4\" × 6\" Standard Postcard Size with easel stand",
    materials: "Italian heavy watercolour paper base, micro-yarn embroidery stitches",
    leadTime: "3–5 business days",
    description: "A pocket-sized slice of Himalayan serenity. A radiant mountain twilight captured with graded sunset yarn stitches, mounted on textured heavy deckled-edge paper.",
    tags: ["Postcard Art", "Giftable", "Includes Stand"],
    customizable: true
  },
  {
    id: "himachal-rose-bouquet",
    category: "painting-postcards",
    subCategory: "Painting Postcards",
    title: "Eternal Crimson Rose Bouquet",
    subtitle: "Crochet forever bouquet photographed in Himachal valley",
    priceRange: "₹2,100 – ₹5,400",
    image: "/assets/himachal-crochet-bouquet.jpg",
    dimensions: "12 Stem to 24 Stem Luxury Wrapped Bouquet",
    materials: "Plush velvet yarn, floral wire stems, kraft paper wrapping, silk satin ribbon",
    leadTime: "5–7 business days",
    description: "Lifelike eternal roses hand-crocheted in passionate crimson hues. Never wilts, carries the gentle warmth of handmade fiber art, and arrives elegantly hand-wrapped ready to gift.",
    tags: ["Forever Bloom", "Luxury Gift", "No Maintenance"],
    customizable: true
  }
];
