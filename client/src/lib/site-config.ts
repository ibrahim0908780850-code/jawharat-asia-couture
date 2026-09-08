export const siteConfig = {
  brandName: "جوهرة آسيا لتصميم الأزياء",
  shortName: "جوهرة آسيا",
  city: "الرياض، المملكة العربية السعودية",
  mapUrl: "https://maps.app.goo.gl/T4w6JVce7peN22jS6?g_st=com.google.maps.preview.copy",
  whatsappNumber: "",
  whatsappMessage: "السلام عليكم، أرغب في الاستفسار عن تصميم وتفصيل فستان وحجز موعد.",
  socialLinks: {
    tiktok: "https://www.tiktok.com/@jawaharahasiaa?_r=1&_t=ZS-99Yhf9Mp3yM",
    snapchat: "https://www.snapchat.com/add/gege_220",
  },
  images: {
    hero: "/manus-storage/bridal-mountain_1d51e541.jpg",
    bridal: [
      "/manus-storage/bridal-mountain_1d51e541.jpg",
      "/manus-storage/ballgown_4d316a45.jpg",
      "/manus-storage/luxury-dress_633ad1c6.jpg",
    ],
    evening: [
      "/manus-storage/evening-dark_b6569fcb.jpg",
      "/manus-storage/editorial-red_b3104b39.jpg",
      "/manus-storage/luxury-dress_633ad1c6.jpg",
    ],
    featured: [
      "/manus-storage/evening-dark_b6569fcb.jpg",
      "/manus-storage/bridal-mountain_1d51e541.jpg",
      "/manus-storage/editorial-red_b3104b39.jpg",
      "/manus-storage/ballgown_4d316a45.jpg",
    ],
    fabrics: [
      "/manus-storage/fabric-ivory_ca3cefce.jpg",
      "/manus-storage/fabric-black_60de5fc3.jpg",
      "/manus-storage/luxury-dress_633ad1c6.jpg",
    ],
    atelier: "/manus-storage/atelier_e6426245.jpg",
    booking: "/manus-storage/editorial-red_b3104b39.jpg",
    atelierReel: "/manus-storage/atelier-reel_65f887c3.mp4",
  },
  collections: [
    { number: "01", title: "فساتين الزفاف", subtitle: "Bridal Collection", image: "/manus-storage/bridal-mountain_1d51e541.jpg", href: "#bridal" },
    { number: "02", title: "فساتين السهرة", subtitle: "Evening Collection", image: "/manus-storage/evening-dark_b6569fcb.jpg", href: "#evening" },
    { number: "03", title: "تصاميم حسب الطلب", subtitle: "Custom Couture", image: "/manus-storage/editorial-red_b3104b39.jpg", href: "#couture" },
  ],
};

export function getWhatsAppHref() {
  if (!siteConfig.whatsappNumber) return "#appointment";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}

export type SiteImage = { src: string; alt: string; label?: string };

export const galleryItems: SiteImage[] = [
  { src: siteConfig.images.featured[0], alt: "فستان سهرة داكن بتصميم تحريري", label: "Noir Silk" },
  { src: siteConfig.images.featured[1], alt: "فستان زفاف فاخر بذيل طويل", label: "The Veil" },
  { src: siteConfig.images.featured[2], alt: "فستان سهرة أحمر بتفاصيل راقية", label: "Rouge Atelier" },
  { src: siteConfig.images.featured[3], alt: "فستان زفاف كلاسيكي بإطلالة فخمة", label: "Lumière" },
];

export const fabricItems: SiteImage[] = [
  { src: siteConfig.images.fabrics[0], alt: "تفاصيل قماش شفاف بلون عاجي", label: "أقمشة" },
  { src: siteConfig.images.fabrics[1], alt: "ملمس قماش داكن فاخر", label: "خامات فاخرة" },
  { src: siteConfig.images.fabrics[2], alt: "نسيج فستان بتفاصيل دقيقة", label: "تفاصيل" },
];

export const processSteps = [
  { number: "01", title: "الفكرة", text: "نبدأ من الإحساس الذي تريدين أن يتركه فستانك." },
  { number: "02", title: "اختيار التصميم", text: "نحوّل الإلهام إلى خطوط وتفاصيل تناسبك." },
  { number: "03", title: "الأقمشة والخامات", text: "نختار الخامة التي تمنح التصميم حضوره الحقيقي." },
  { number: "04", title: "التفصيل والتنفيذ", text: "أيادٍ دقيقة تتابع كل غرزة وكل قياس." },
  { number: "05", title: "الفستان النهائي", text: "لحظة تكتمل فيها الحكاية كما تخيلتها." },
];

export const atelierPillars = [
  { title: "استشارة شخصية", text: "نستمع لتفاصيل التصميم الذي تحلمين به.", icon: "sparkle" },
  { title: "اختيار الخامات", text: "نساعدك في اختيار الخامة المناسبة للتصميم.", icon: "gem" },
  { title: "تنفيذ دقيق", text: "نحوّل الفكرة إلى فستان مصمم خصيصًا لكِ.", icon: "needle" },
];

export const navigationItems = [
  { label: "الرئيسية", href: "#top" },
  { label: "التصاميم", href: "#collections" },
  { label: "فساتين الزفاف", href: "#bridal" },
  { label: "فساتين السهرة", href: "#evening" },
  { label: "التفصيل حسب الطلب", href: "#couture" },
  { label: "عن جوهرة آسيا", href: "#about" },
];
