export const siteConfig = {
  brandName: "جوهرة آسيا لتصميم الأزياء",
  shortName: "جوهرة آسيا",
  city: "الرياض، المملكة العربية السعودية",
  mapUrl: "https://maps.app.goo.gl/T4w6JVce7peN22jS6?g_st=com.google.maps.preview.copy",
  whatsappNumber: "966500144730",
  whatsappMessage: "السلام عليكم، أرغب في الاستفسار عن تصميم وتفصيل فستان وحجز موعد.",
  socialLinks: {
    tiktok: "https://www.tiktok.com/@jawaharahasiaa?_r=1&_t=ZS-99Yhf9Mp3yM",
    snapchat: "https://www.snapchat.com/add/gege_220",
  },
  images: {
    hero: "/media/bridal-mountain.jpg",
    bridal: [
      "/media/bridal-real.jpg",
      "/media/ballgown.jpg",
      "/media/luxury-dress.jpg",
    ],
    evening: [
      "/media/evening-dark.jpg",
      "/media/editorial-red.jpg",
      "/media/luxury-dress.jpg",
    ],
    featured: [
      "/media/evening-dark.jpg",
      "/media/bridal-mountain.jpg",
      "/media/editorial-red.jpg",
      "/media/ballgown.jpg",
    ],
    fabrics: [
      "/media/fabric-ivory.jpg",
      "/media/fabric-black.jpg",
      "/media/luxury-dress.jpg",
    ],
    atelier: "/media/atelier-real.jpg",
    booking: "/media/editorial-red.jpg",
    atelierReel: "/media/atelier-reel.mp4",
  },
  collections: [
    { number: "01", title: "فساتين الزفاف", subtitle: "Bridal Collection", image: "/media/bridal-mountain.jpg", href: "#bridal" },
    { number: "02", title: "فساتين السهرة", subtitle: "Evening Collection", image: "/media/evening-dark.jpg", href: "#evening" },
    { number: "03", title: "تصاميم حسب الطلب", subtitle: "Custom Couture", image: "/media/editorial-red.jpg", href: "#couture" },
  ],
};

export function getWhatsAppHref() {
  if (!siteConfig.whatsappNumber) return "#appointment";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}

export type SiteImage = { src: string; alt: string; label?: string };

export const galleryItems: SiteImage[] = [
  { src: siteConfig.images.featured[0], alt: "فستان سهرة داكن بتصميم تحريري", label: "Noir Silk" },
  { src: siteConfig.images.bridal[0], alt: "فساتين زفاف مطرزة داخل الأتيليه", label: "Bridal Atelier" },
  { src: siteConfig.images.featured[2], alt: "فستان سهرة أحمر بتفاصيل راقية", label: "Rouge Atelier" },
  { src: siteConfig.images.atelier, alt: "فستان سهرة مزين بتطريزات يدوية داخل الأتيليه", label: "Atelier Detail" },
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
