import { ArrowUpLeft, ChevronLeft, Gem, Maximize2, Sparkles, Scissors } from "lucide-react";
import type { ReactNode } from "react";
import type { SiteImage } from "@/lib/site-config";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-logo ${compact ? "brand-logo--compact" : ""}`} aria-label="JAWAHARAH ASIA">
      <svg className="brand-logo__mark" viewBox="0 0 92 74" role="img" aria-label="JAWAHARAH ASIA monogram">
        <path d="M20 10C20 10 20 46 20 53C20 60 16 64 9 64" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
        <circle cx="7" cy="68" r="3.7" fill="currentColor" />
        <path d="M49 10L80 64" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
        <path d="M49 10L38 29" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
      </svg>
      {!compact ? <span className="brand-logo__wordmark">JAWAHARAH <span>ASIA</span></span> : null}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, note, align = "start" }: { eyebrow: string; title: ReactNode; note?: string; align?: "start" | "center" }) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}>
      <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
      <h2>{title}</h2>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}

export function CollectionCard({ item }: { item: { number: string; title: string; subtitle: string; image: string; href: string } }) {
  return (
    <a className="collection-card" href={item.href}>
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="collection-card__wash" />
      <div className="collection-card__top"><span>{item.number}</span><ArrowUpLeft size={22} strokeWidth={1.2} /></div>
      <div className="collection-card__bottom"><p>{item.subtitle}</p><h3>{item.title}</h3></div>
    </a>
  );
}

export function GalleryTile({ item, index, onOpen, className = "" }: { item: SiteImage; index: number; onOpen: (item: SiteImage) => void; className?: string }) {
  return (
    <button className={`gallery-tile ${className}`} onClick={() => onOpen(item)} aria-label={`فتح صورة ${item.alt}`}>
      <img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} />
      <span className="gallery-tile__overlay"><span>{item.label ?? "عرض الصورة"}</span><Maximize2 size={17} strokeWidth={1.3} /></span>
    </button>
  );
}

export function ProcessStep({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="process-step">
      <div className="process-step__number">{number}</div>
      <div><h3>{title}</h3><p>{text}</p></div>
    </div>
  );
}

export function PillarIcon({ type }: { type: string }) {
  if (type === "gem") return <Gem size={23} strokeWidth={1.1} />;
  if (type === "needle") return <Scissors size={23} strokeWidth={1.1} />;
  return <Sparkles size={23} strokeWidth={1.1} />;
}

export function LineArrow() {
  return <span className="line-arrow"><span /><ChevronLeft size={18} strokeWidth={1.1} /></span>;
}
