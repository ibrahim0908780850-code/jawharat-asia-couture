import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowUpLeft, CalendarDays, Check, Clock3, MapPin, Menu, MessageCircle, MoveUpLeft, Send, X } from "lucide-react";
import { atelierPillars, fabricItems, galleryItems, getWhatsAppHref, navigationItems, processSteps, siteConfig, type SiteImage } from "@/lib/site-config";
import { CollectionCard, GalleryTile, LineArrow, PillarIcon, ProcessStep, SectionHeading } from "@/components/atelier";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<SiteImage | null>(null);
  const [formSent, setFormSent] = useState(false);
  const [activeFabric, setActiveFabric] = useState("الكل");
  const [referenceImage, setReferenceImage] = useState<{ name: string; preview: string } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || selectedImage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, selectedImage]);

  const filteredFabrics = useMemo(() => activeFabric === "الكل" ? fabricItems : fabricItems.filter((item) => item.label === activeFabric), [activeFabric]);
  const whatsappHref = getWhatsAppHref();

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!siteConfig.whatsappNumber) {
      event.preventDefault();
      scrollTo("#appointment");
    }
  };

  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const occasion = String(formData.get("occasion") || "").trim();
    const reference = referenceImage?.name ? `صورة مرجعية: ${referenceImage.name} (يرجى إرفاقها داخل المحادثة)` : "صورة مرجعية: لم يتم إرفاق صورة";
    const message = [
      "السلام عليكم، أرغب في حجز موعد لدى جوهرة آسيا لتصميم الأزياء.",
      "",
      `الاسم: ${name}`,
      `طريقة التواصل: ${contact}`,
      `نوع المناسبة: ${occasion}`,
      reference,
    ].join("\\n");
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormSent(true);
  };

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">تخطي إلى المحتوى</a>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#top" className="brand-lockup" aria-label={siteConfig.brandName} onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">ج</span>
            <span><strong>جوهرة آسيا</strong><small>لتصميم الأزياء</small></span>
          </a>
          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            {navigationItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-appointment" href="#appointment">حجز موعد <ArrowLeft size={15} strokeWidth={1.3} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span>{menuOpen ? <X size={22} /> : <Menu size={22} />}</span></button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__inner">
          <div className="mobile-menu__meta"><span>ATELIER 01</span><span>الرياض · ٢٠٢٦</span></div>
          <nav>{navigationItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</a>)}</nav>
          <a className="mobile-menu__cta" href="#appointment" onClick={() => setMenuOpen(false)}>ابدئي رحلتك <ArrowLeft size={18} /></a>
          <p className="mobile-menu__footer">جوهرة آسيا لتصميم الأزياء · الرياض</p>
        </div>
      </div>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media"><img src={siteConfig.images.hero} alt="فستان زفاف فاخر في مشهد تحريري" fetchPriority="high" /></div>
          <div className="hero-shade" />
          <div className="hero-grain" />
          <div className="hero-content container">
            <p className="hero-kicker"><span className="hero-kicker__line" />من الرياض · إلى لحظتك</p>
            <h1 id="hero-title">حيث تبدأ الحكاية…<em>بتصميم لا يشبه سواه</em></h1>
            <p className="hero-copy">فساتين زفاف وسهرة مصممة بعناية،<br className="desktop-only" /> بخامات فاخرة وتفاصيل تعكس شخصيتك.</p>
            <div className="hero-actions"><a className="button button--gold" href="#appointment">احجزي موعدك <ArrowLeft size={17} /></a><a className="button button--ghost" href="#collections">استكشفي التصاميم <ArrowDown size={16} /></a></div>
          </div>
          <div className="hero-edge"><span>JAWAHARAT ASIA</span><span>SCROLL TO DISCOVER</span><ArrowDown size={16} strokeWidth={1.1} /></div>
          <div className="hero-caption"><span>01</span><span className="hero-caption__line" /><span>THE ATELIER EDIT</span></div>
        </section>

        <section className="statement section-dark" id="about">
          <div className="statement__ornament">✦</div>
          <div className="statement__inner container">
            <p className="eyebrow"><span className="eyebrow-line" />فلسفة جوهرة آسيا</p>
            <h2>كل فستان<br /><em>يبدأ بفكرة.</em></h2>
            <p>في جوهرة آسيا، نؤمن أن الفستان المثالي لا يُختار فقط…<br className="desktop-only" /> بل يُصمم ليحكي تفاصيلك.</p>
          </div>
          <span className="statement__side">01 / 08</span>
        </section>

        <section className="collections section-dark" id="collections">
          <div className="container">
            <div className="section-row"><SectionHeading eyebrow="من الأرشيف" title={<>تشكيلتنا<span className="gold-dot">.</span></>} note="ثلاثة مسارات، ومشهد واحد لا يتكرر." /><a href="#featured" className="text-link">شاهدي المختارات <ArrowLeft size={17} /></a></div>
            <div className="collections-grid">{siteConfig.collections.map((item) => <CollectionCard key={item.number} item={item} />)}</div>
          </div>
        </section>

        <section className="bridal section-cream" id="bridal">
          <div className="container">
            <div className="section-row section-row--bridal"><SectionHeading eyebrow="01 / Bridal Collection" title={<>ليلتكِ…<br /><em>تستحق فستانًا استثنائيًا.</em></>} note="نصمم حضورًا يبقى في الذاكرة، بخطوط هادئة وتفاصيل لا تُنسى." /><div className="section-stamp">J<br /><span>ATELIER</span></div></div>
            <div className="editorial-grid editorial-grid--bridal"><GalleryTile item={{ src: siteConfig.images.bridal[0], alt: "فستان زفاف أبيض بذيل طويل", label: "The Veil" }} index={0} onOpen={setSelectedImage} className="editorial-grid__large" /><GalleryTile item={{ src: siteConfig.images.bridal[1], alt: "فستان زفاف كلاسيكي فاخر", label: "Lumière" }} index={1} onOpen={setSelectedImage} className="editorial-grid__small" /><div className="editorial-note"><span>02</span><p>كل تفصيلة<br />تُصنع لكِ.</p><LineArrow /></div><GalleryTile item={{ src: siteConfig.images.bridal[2], alt: "فستان أنيق بتفاصيل ناعمة", label: "Silhouette" }} index={2} onOpen={setSelectedImage} className="editorial-grid__bottom" /></div>
            <div className="section-endline"><span>BRIDAL / 2026</span><a href="#appointment" className="text-link text-link--dark">استشيري المصممة <ArrowLeft size={17} /></a></div>
          </div>
        </section>

        <section className="evening section-dark" id="evening">
          <div className="container"><div className="section-row"><SectionHeading eyebrow="02 / Evening Collection" title={<>تفاصيل<br /><em>تترك أثرًا.</em></>} note="للمساءات التي تستحق أكثر من إطلالة." /><span className="section-index">02 <span>/</span> 08</span></div>
            <div className="evening-layout"><div className="evening-intro"><span className="vertical-label">EVENING / NOIR</span><p>لون، حركة، ونور<br />في كل خطوة.</p><a href="#featured" className="circle-link" aria-label="شاهد المزيد"><ArrowLeft size={24} /></a></div><div className="evening-gallery"><GalleryTile item={{ src: siteConfig.images.evening[0], alt: "فستان سهرة أزرق داكن بتصميم انسيابي", label: "Noir Silk" }} index={0} onOpen={setSelectedImage} className="evening-gallery__main" /><GalleryTile item={{ src: siteConfig.images.evening[1], alt: "فستان سهرة أحمر فاخر", label: "Rouge Atelier" }} index={1} onOpen={setSelectedImage} className="evening-gallery__side" /></div></div>
          </div>
        </section>

        <section className="couture section-cream" id="couture">
          <div className="container"><div className="section-row"><SectionHeading eyebrow="03 / Custom Couture" title={<>صممي فستانك<br /><em>كما تتخيلينه.</em></>} note="من الفكرة الأولى إلى آخر تفصيلة، نعمل معك لصناعة تصميم يعكس ذوقك وشخصيتك." /><div className="couture-aside"><span>THE COUTURE PROCESS</span><span>01 — 05</span></div></div>
            <div className="process-list">{processSteps.map((step) => <ProcessStep key={step.number} {...step} />)}</div>
            <div className="couture-cta"><div><p className="eyebrow"><span className="eyebrow-line" />بداية التفاصيل</p><h3>فكرتكِ هي<br /><em>أول خيط.</em></h3></div><a href="#appointment" className="button button--dark">ابدئي التصميم <ArrowLeft size={17} /></a></div>
          </div>
        </section>

        <section className="fabrics section-dark" id="fabrics">
          <div className="container"><div className="section-row"><SectionHeading eyebrow="The Material Edit" title={<>خامات مختارة<br /><em>بعناية.</em></>} note="مجموعة من الأقمشة والخامات المستوردة، تُختار بما يتناسب مع التصميم والتفاصيل المطلوبة." /><div className="fabric-filters">{["الكل", "أقمشة", "تفاصيل", "خامات فاخرة"].map((filter) => <button key={filter} className={activeFabric === filter ? "is-active" : ""} onClick={() => setActiveFabric(filter)}>{filter}</button>)}</div></div>
            <div className="fabric-gallery">{filteredFabrics.map((item, index) => <GalleryTile key={item.src} item={item} index={index} onOpen={setSelectedImage} />)}</div>
            <div className="fabric-footer"><span>SELECTED MATERIALS / 03</span><span className="fabric-footer__line" /><span>صناعة حضور لا يشبه سواه</span></div>
          </div>
        </section>

        <section className="atelier-reel section-dark" id="atelier-reel">
          <div className="container atelier-reel__layout">
            <div className="atelier-reel__copy">
              <p className="eyebrow"><span className="eyebrow-line" />من قلب الأتيليه</p>
              <h2>التفاصيل<br /><em>تتكلم.</em></h2>
              <p>لقطة قريبة من تطريزاتنا اليدوية؛ لأن جودة الفستان تُرى في التفاصيل التي تلمسينها.</p>
              <a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noreferrer" className="text-link">شاهدي المزيد على TikTok <ArrowUpLeft size={16} /></a>
            </div>
            <div className="atelier-reel__video-wrap">
              <video className="atelier-reel__video" src={siteConfig.images.atelierReel} poster={siteConfig.images.fabrics[0]} autoPlay muted loop playsInline controls aria-label="فيديو تفاصيل تطريز فستان سهرة" />
              <span className="atelier-reel__tag">ATELIER REEL / 01</span>
            </div>
          </div>
        </section>

        <section className="experience section-cream" id="experience">
          <div className="container"><div className="experience-layout"><div className="experience-image"><img src={siteConfig.images.atelier} alt="مساحة أتيليه لفساتين الزفاف" loading="lazy" /><span>THE ATELIER</span></div><div className="experience-copy"><SectionHeading eyebrow="Atelier Experience" title={<>تجربة<br /><em>تبدأ منكِ.</em></>} note="في كل لقاء، نترك مساحة كافية لفكرتك كي تظهر كما هي." /><div className="pillars">{atelierPillars.map((pillar) => <div className="pillar" key={pillar.title}><div className="pillar__icon"><PillarIcon type={pillar.icon} /></div><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></div>)}</div><a href="#appointment" className="text-link text-link--dark">احجزي استشارتك <ArrowLeft size={17} /></a></div></div></div>
        </section>

        <section className="featured section-dark" id="featured">
          <div className="container"><div className="section-row"><SectionHeading eyebrow="From Our Studio" title={<>مختارات<br /><em>من أعمالنا.</em></>} note="صور تحريرية مؤقتة للعرض — تُستبدل بسهولة بأرشيف البوتيك الحقيقي." /><a className="social-handle" href={siteConfig.socialLinks.tiktok} target="_blank" rel="noreferrer"><span className="social-handle__icon">♪</span>@jawaharahasiaa <ArrowUpLeft size={15} /></a></div><div className="featured-grid">{galleryItems.map((item, index) => <GalleryTile key={item.src} item={item} index={index} onOpen={setSelectedImage} className={`featured-grid__${index + 1}`} />)}</div><div className="featured-bottom"><span>JAWAHARAT ASIA / RIYADH</span><a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noreferrer" className="text-link">تابعينا <ArrowLeft size={17} /></a></div></div>
        </section>

        <section className="why section-cream" id="why"><div className="container"><SectionHeading eyebrow="The Jawharat Asia Way" title={<>لماذا جوهرة آسيا<span className="gold-dot">؟</span></>} align="center" /><div className="why-grid"><div className="why-item"><span>01</span><h3>تصميم حسب الطلب</h3><p>لأن حضورك لا يشبه أحدًا، لا ينبغي لفستانك أن يفعل.</p></div><div className="why-item"><span>02</span><h3>خامات وأقمشة مستوردة</h3><p>خامة مختارة بعين دقيقة لتخدم الفكرة قبل الشكل.</p></div><div className="why-item"><span>03</span><h3>اهتمام بالتفاصيل</h3><p>من أول خط إلى آخر غرزة، نمنح التفاصيل وقتها.</p></div><div className="why-item"><span>04</span><h3>تجربة شخصية</h3><p>مساحة هادئة نصغي فيها لكِ ونصمم معكِ.</p></div></div></div></section>

        <section className="social-hub section-dark"><div className="container social-hub__inner"><div><p className="eyebrow"><span className="eyebrow-line" />من يوميات الأتيليه</p><h2>اكتشفي أحدث<br /><em>تصاميمنا.</em></h2></div><div className="social-links"><a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noreferrer"><span>TikTok</span><strong>@jawaharahasiaa</strong><ArrowUpLeft size={18} /></a><a href={siteConfig.socialLinks.snapchat} target="_blank" rel="noreferrer"><span>Snapchat</span><strong>gege_220</strong><ArrowUpLeft size={18} /></a></div></div></section>

        <section className="location section-cream" id="location"><div className="container"><div className="location-layout"><div className="location-copy"><SectionHeading eyebrow="Visit the Atelier" title={<>زورينا<br /><em>في الرياض.</em></>} note="نستقبلكِ في مساحة هادئة صُممت لتبدأ فيها الحكاية." /><div className="location-detail"><MapPin size={19} strokeWidth={1.2} /><div><span>الموقع</span><strong>الرياض، المملكة العربية السعودية</strong></div></div><a className="button button--dark" href={siteConfig.mapUrl} target="_blank" rel="noreferrer">فتح الموقع في Google Maps <ArrowUpLeft size={16} /></a></div><a href={siteConfig.mapUrl} target="_blank" rel="noreferrer" className="map-frame" aria-label="فتح موقع جوهرة آسيا على خرائط Google"><div className="map-grid" /><div className="map-label"><MapPin size={20} fill="currentColor" /><span>جوهرة آسيا<br /><small>الرياض</small></span></div><div className="map-coordinates">24° 42' N<br />46° 40' E</div></a></div></div></section>

        <section className="appointment" id="appointment"><div className="appointment-media"><img src={siteConfig.images.booking} alt="تفاصيل فستان سهرة فاخر" loading="lazy" /></div><div className="appointment-shade" /><div className="appointment-content container"><p className="eyebrow"><span className="eyebrow-line" />حجز موعد خاص</p><h2>فستانكِ<br /><em>يبدأ من هنا.</em></h2><p>احجزي موعدك وابدئي رحلة تصميم فستانك.</p><div className="appointment-actions"><a className="button button--gold" href="#appointment-form">حجز موعد <CalendarDays size={17} /></a><a className="button button--outline-light" href={whatsappHref} onClick={handleWhatsApp}>تواصل عبر WhatsApp <MessageCircle size={17} /></a></div></div></section>

        <section className="appointment-form section-dark" id="appointment-form"><div className="container"><div className="form-layout"><div className="form-intro"><p className="eyebrow"><span className="eyebrow-line" />خطوتك الأولى</p><h2>لنبدأ<br /><em>من فكرتك.</em></h2><p>أرسلي لنا تفاصيل بسيطة عن موعدك، وسنعود إليكِ لتنسيق الاستشارة.</p><div className="form-note"><Clock3 size={17} /><span>الرد يتم خلال أوقات العمل<br /><small>الرياض · بمواعيد مسبقة</small></span></div></div>{formSent ? <div className="form-success"><span><Check size={27} /></span><h3>تم فتح واتساب.</h3><p>تم تجهيز رسالة الحجز وإرسالها إلى محادثة الرقم 0500144730.</p><button className="text-link" onClick={() => { setFormSent(false); setReferenceImage(null); }}>إرسال طلب آخر <ArrowLeft size={17} /></button></div> : <form className="booking-form" onSubmit={handleBookingSubmit}><label>الاسم الكامل<input required name="name" placeholder="اكتبي اسمك هنا" /></label><label>طريقة التواصل<input required name="contact" placeholder="رقم الجوال أو البريد الإلكتروني" /></label><label>ما المناسبة؟<select required name="occasion" defaultValue=""><option value="" disabled>اختاري المناسبة</option><option>فستان زفاف</option><option>فستان سهرة</option><option>تصميم حسب الطلب</option></select></label><div className="reference-upload"><span className="reference-upload__label">صورة مرجعية للتصميم <small>اختياري</small></span><label className="reference-upload__drop"><input type="file" name="referenceImage" accept="image/*" onChange={(event) => { const file = event.target.files?.[0]; if (!file) return; setReferenceImage({ name: file.name, preview: URL.createObjectURL(file) }); }} /><span className="reference-upload__content"><Send size={17} /><strong>اختاري صورة من جهازك</strong><small>JPG أو PNG · تساعدنا على فهم فكرتك</small></span></label>{referenceImage ? <div className="reference-preview"><img src={referenceImage.preview} alt="معاينة الصورة المرجعية" /><span>{referenceImage.name}</span><button type="button" aria-label="إزالة الصورة المرجعية" onClick={() => setReferenceImage(null)}><X size={14} /></button></div> : null}</div><button className="button button--gold button--full" type="submit">إرسال الطلب عبر WhatsApp <Send size={16} /></button><small className="form-privacy">بإرسال الطلب، سيتم فتح WhatsApp برسالة تحتوي على بيانات الحجز. أرفقي الصورة داخل المحادثة.</small></form>}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-top"><a href="#top" className="brand-lockup brand-lockup--footer"><span className="brand-mark">ج</span><span><strong>جوهرة آسيا</strong><small>لتصميم الأزياء</small></span></a><p>نصمم اللحظة التي<br />تشبهكِ تمامًا.</p><a className="footer-backtop" href="#top">العودة للأعلى <MoveUpLeft size={16} /></a></div><div className="footer-grid"><div><span className="footer-label">استكشفي</span>{navigationItems.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div><div><span className="footer-label">تواصلي</span><a href="#appointment">حجز موعد</a><a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noreferrer">TikTok</a><a href={siteConfig.socialLinks.snapchat} target="_blank" rel="noreferrer">Snapchat</a></div><div><span className="footer-label">الموقع</span><a href={siteConfig.mapUrl} target="_blank" rel="noreferrer">الرياض، السعودية</a></div><div className="footer-monogram">ج<span>ASIA</span></div></div><div className="footer-bottom"><span>© 2026 {siteConfig.brandName}</span><span>جميع الحقوق محفوظة.</span><span>صُنع بحب في الرياض</span></div></div></footer>

      <a className="whatsapp-float" href={whatsappHref} onClick={handleWhatsApp} aria-label="التواصل عبر WhatsApp"><MessageCircle size={20} /></a>
      <div className="mobile-sticky-cta"><a href="#appointment">احجزي موعدك <ArrowLeft size={16} /></a><a href={whatsappHref} onClick={handleWhatsApp} aria-label="WhatsApp"><MessageCircle size={19} /></a></div>

      {selectedImage ? <div className="lightbox" role="dialog" aria-modal="true" aria-label="عرض الصورة" onClick={() => setSelectedImage(null)}><button className="lightbox__close" onClick={() => setSelectedImage(null)} aria-label="إغلاق"><X size={22} /></button><img src={selectedImage.src} alt={selectedImage.alt} onClick={(event) => event.stopPropagation()} /><p>{selectedImage.label}</p></div> : null}
    </div>
  );
}
