"use client"

import { useEffect, useRef, useState } from "react"
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Layout,
  Globe,
  Terminal,
  Zap,
  PenTool,
  Code,
  ShoppingCart,
  StickyNote,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  Tablet,
  type LucideIcon,
} from "lucide-react"

/* =========================================================
   TYPES & HELPERS
   ========================================================= */

type AccentKey = "sun" | "bubble" | "grape" | "lime" | "cyan" | "tomato"

const accentStyles: Record<
  AccentKey,
  { bg: string; bgSoft: string; text: string }
> = {
  sun: { bg: "bg-sun", bgSoft: "bg-sun/15", text: "text-ink" },
  bubble: { bg: "bg-bubble", bgSoft: "bg-bubble/15", text: "text-ink" },
  grape: {
    bg: "bg-grape",
    bgSoft: "bg-grape/15",
    text: "text-primary-foreground",
  },
  lime: { bg: "bg-lime", bgSoft: "bg-lime/15", text: "text-ink" },
  cyan: { bg: "bg-cyan", bgSoft: "bg-cyan/15", text: "text-ink" },
  tomato: {
    bg: "bg-tomato",
    bgSoft: "bg-tomato/15",
    text: "text-primary-foreground",
  },
}

const categoryIcons = {
  Layout,
  Sparkles,
  Zap,
  PenTool,
  Code,
  Globe,
  ShoppingCart,
  StickyNote,
}

/* =========================================================
   PREVIEW SCROLL
   ========================================================= */

function ScrollPreview({
  src,
  alt,
  className = "h-[300px]",
  bare = false,
}: {
  src: string
  alt: string
  className?: string
  bare?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const animationRef = useRef<number | null>(null)

  const [targetY, setTargetY] = useState(0)

  const cancelAnimation = () => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }

  const getMaxScroll = () => {
    const container = containerRef.current
    const image = imageRef.current

    if (!container || !image) {
      return 0
    }

    const containerHeight = container.clientHeight
    const imageHeight = image.getBoundingClientRect().height

    return Math.max(0, imageHeight - containerHeight)
  }

  const getCurrentY = () => {
    const image = imageRef.current

    if (!image) {
      return 0
    }

    const transform = window.getComputedStyle(image).transform

    if (!transform || transform === "none") {
      return 0
    }

    const matrix = new DOMMatrix(transform)

    return matrix.m42
  }

  const animateTo = (destination: number, duration = 3000) => {
    cancelAnimation()

    const image = imageRef.current

    if (!image) {
      return
    }

    const startY = getCurrentY()
    const difference = destination - startY

    if (Math.abs(difference) < 1) {
      image.style.transform = `translate3d(0, ${destination}px, 0)`
      return
    }

    const startTime = performance.now()

    const frame = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const currentY = startY + difference * progress

      image.style.transform = `translate3d(0, ${currentY}px, 0)`

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(frame)
      } else {
        animationRef.current = null
      }
    }

    animationRef.current = requestAnimationFrame(frame)
  }

  const handleMouseEnter = () => {
    const maxScroll = getMaxScroll()

    setTargetY(-maxScroll)

    animateTo(-maxScroll, 10000)
  }

  const handleMouseLeave = () => {
    setTargetY(0)

    animateTo(0, 1000)
  }

  useEffect(() => {
    return () => {
      cancelAnimation()
    }
  }, [])

  useEffect(() => {
    const image = imageRef.current

    if (!image) {
      return
    }

    image.style.transform = "translate3d(0, 0, 0)"
    setTargetY(0)
  }, [src])

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative
        w-full
        overflow-hidden
        cursor-pointer
        ${
          bare
            ? "rounded-none border-0 bg-transparent"
            : "rounded-xl border-2 border-ink bg-muted"
        }
        ${className}
      `}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        draggable={false}
        onLoad={() => {
          const image = imageRef.current

          if (!image) {
            return
          }

          image.style.transform = "translate3d(0, 0, 0)"
        }}
        className="
          block
          w-full
          h-auto
          object-contain
          select-none
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-16
          pointer-events-none
          bg-gradient-to-t
          from-black/10
          to-transparent
        "
      />
    </div>
  )
}

/* =========================================================
   DEVICE MOCKUP PARTS
   ========================================================= */

function DevicePlaceholder({
  icon: Icon,
  label,
}: {
  icon: LucideIcon
  label: string
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-muted/60 p-2 text-center">
      <Icon size={20} className="text-muted-foreground" aria-hidden />
      <span className="text-[9px] font-bold leading-tight opacity-70">
        {label}
      </span>
    </div>
  )
}

function MonitorMockup({
  image,
  label,
}: {
  image?: string
  label: string
}) {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="w-full rounded-lg border-[3px] border-ink bg-card p-1 shadow-hard">
        <div className="relative overflow-hidden rounded bg-muted">
          {image ? (
            <ScrollPreview
              src={image}
              alt={label}
              bare
              className="h-64 md:h-80"
            />
          ) : (
            <div className="h-64 md:h-80">
              <DevicePlaceholder icon={Monitor} label={`Aggiungi ${label}`} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-1 h-2.5 w-1/3 rounded-b-md bg-ink" />
      <div className="mt-0.5 h-1 w-2/3 rounded-full bg-ink/20" />
    </div>
  )
}

function TabletMockup({
  image,
  label,
}: {
  image?: string
  label: string
}) {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="w-full rounded-2xl border-[3px] border-ink bg-card p-1.5 shadow-hard">
        <div className="relative overflow-hidden rounded-lg bg-muted">
          {image ? (
            <ScrollPreview
              src={image}
              alt={label}
              bare
              className="h-48 md:h-60"
            />
          ) : (
            <div className="h-48 md:h-60">
              <DevicePlaceholder icon={Tablet} label={`Aggiungi ${label}`} />
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-1 h-1.5 w-6 rounded-full bg-ink/20" />
    </div>
  )
}

function PhoneMockup({
  image,
  label,
}: {
  image?: string
  label: string
}) {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="w-full rounded-[1.5rem] border-[3px] border-ink bg-card p-1.5 shadow-hard">
        <div className="relative overflow-hidden rounded-[1rem] bg-muted">
          <div className="absolute top-1.5 left-1/2 z-10 h-3 w-16 -translate-x-1/2 rounded-full bg-ink" />
          {image ? (
            <ScrollPreview
              src={image}
              alt={label}
              bare
              className="h-44 md:h-56"
            />
          ) : (
            <div className="h-44 md:h-56">
              <DevicePlaceholder icon={Smartphone} label={`Aggiungi ${label}`} />
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-1.5 h-1.5 w-8 rounded-full bg-ink/20" />
    </div>
  )
}

/* =========================================================
   PIXEL MOUSE ICON
   ========================================================= */

function PixelMouseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      <path
        d="M1 1h4v1H4v1H3v1H2v1H1V1z"
        fill="#1a1a2e"
      />
      <path
        d="M1 1l8 8v3h-2L4 9H3L1 11V1z"
        fill="#ffe500"
        stroke="#1a1a2e"
        strokeWidth="0.8"
      />
    </svg>
  )
}

/* =========================================================
   MULTI DEVICE PREVIEW (Desktop)
   ========================================================= */

function MultiDevicePreview({
  desktop,
  tablet,
  mobile,
}: {
  desktop: string
  tablet?: string
  mobile?: string
}) {
  return (
    <div className="relative flex h-[360px] w-full items-end justify-center px-12 md:px-16">
      {/* Smartphone (sinistra, dritto, vicino al computer) */}
      <div className="absolute left-6 md:left-14 bottom-2 z-20 w-[24%] max-w-[130px]">
        <PhoneMockup image={mobile} label="mobile" />
      </div>

      {/* Tablet (destra, dritto) */}
      <div className="absolute right-2 md:right-6 bottom-2 z-10 w-[38%] max-w-[220px]">
        <TabletMockup image={tablet} label="tablet" />
      </div>

      {/* Desktop (centro) */}
      <div className="z-0 w-[70%] max-w-[480px] pb-1">
        <MonitorMockup image={desktop} label="desktop" />
      </div>
    </div>
  )
}

/* =========================================================
   PROJECTS
   ========================================================= */

export function Projects() {
  const [activeLanding, setActiveLanding] = useState(0)
  const [activeMulti, setActiveMulti] = useState(0)
  const [keyboardSection, setKeyboardSection] = useState<"landing" | "multi">(
    "landing"
  )

const landingPages = [
    {
      id: "landing-1",
      title: "Pixa - AI Landing Page Template",
      category: "Landing Page",
      description:
        "Un template moderno e responsive per landing page SaaS, progettato per prodotti, strumenti e piattaforme basati su IA. Ideale per mostrare funzionalità di intelligenza artificiale multimodale, caratteristiche, piani tariffari e API per sviluppatori.",
      image: "./Pixa.png",
      laptopImage: "",
      tabletImage: "./Pixa.png",
      mobileImage: "./PixaPhone.png",
      tags: ["SaaS & AI", "Multimodale", "Developer API"],
      liveUrl: "https://joaquinbrenta.github.io/pixa/",
      githubUrl: "https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/",
      accent: "grape" as AccentKey,
      icon: "Layout" as keyof typeof categoryIcons,
    },
    {
      id: "landing-2",
      title: "AI Coding Assistant Landing Page Template",
      category: "Landing Page",
      description:
        "Un template SaaS elegante e ad alto tasso di conversione per developer tools e assistenti IA. Include layout per funzionalità avanzate, esecuzione locale, gestione versioni, recensioni, pricing e sezione blog.",
      image: "./Saas.png",
      laptopImage: "",
      tabletImage: "./Saas.png",
      mobileImage: "./SaasPhone.png",
      tags: ["Developer Tools", "AI Assistant", "Alta Conversione"],
      liveUrl: "https://joaquinbrenta.github.io/saas/",
      githubUrl: "https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/",
      accent: "grape" as AccentKey,
      icon: "Sparkles" as keyof typeof categoryIcons,
    },
    {
      id: "landing-3",
      title: "Tale - Brand Landing Page",
      category: "Landing Page",
      description:
        "Tale è il template ideale per agenzie SEO e aziende di digital marketing, progettato per scalare i motori di ricerca, catturare l'attenzione dei clienti e massimizzare le conversioni online.",
      image: "./Tale.png",
      laptopImage: "",
      tabletImage: "./Tale.png",
      mobileImage: "./TalePhone.png",
      tags: ["Agenzia SEO", "Digital Marketing", "Lead Generation"],
      liveUrl: "https://joaquinbrenta.github.io/tale/",
      githubUrl: "https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/",
      accent: "grape" as AccentKey,
      icon: "Zap" as keyof typeof categoryIcons,
    },
    {
      id: "landing-4",
      title: "Bistro Restaurants - Restorant & Cafe Bar Landing Page",
      category: "Landing Page",
      description:
        "Un template per landing page pulito, responsive ed elegante, progettato specificamente per ristoranti, bistrot e caffè. Presenta un'atmosfera calda, vetrine con il menu, un modulo di prenotazione tavoli online, testimonianze e dettagli sulla posizione.",
      image: "./Bistro.png",
      laptopImage: "",
      tabletImage: "./Bistro.png",
      mobileImage: "./BistroPhone.png",
      tags: ["Ristorazione", "Menu Digitale", "Prenotazioni"],
      liveUrl: "https://joaquinbrenta.github.io/bistro/",
      githubUrl: "https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/",
      accent: "grape" as AccentKey,
      icon: "PenTool" as keyof typeof categoryIcons,
    },
    {
      id: "landing-5",
      title: "Supreme Car Wash - Detailing Landing Page",
      category: "Landing Page",
      description:
       "Un template per landing page pulito, moderno e professionale, progettato specificamente per autolavaggi, centri di detailing e servizi di cura dell'auto. Include orari di apertura, elenchi dettagliati dei servizi, piani di lavaggio a fasce, un modulo di prenotazione/richiesta online, recensioni dei clienti e una sezione di feedback con valutazione a stelle.",
      image: "./CarWash.png",
      laptopImage: "",
      tabletImage: "./CarWash.png",
      mobileImage: "./CarWashPhone.png",
      tags: ["Automotive", "Servizi Locali", "Booking Online"],
      liveUrl: "https://joaquinbrenta.github.io/car-wash/",
      githubUrl: "https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/",
      accent: "grape" as AccentKey,
      icon: "Code" as keyof typeof categoryIcons,
    },
  ]

  const multiPages = [
    {
      id: "multi-1",
      title: "Ink - Tattoo Studio Web Site",
      category: "Multi-Page Web App",
      description:
        "Un sito web d'impatto per un tatuatore professionista, con un look scuro e grintoso. Include una galleria interattiva filtrabile per stili, un suggestivo video di sfondo nella home e un pratico sistema di prenotazione online.",
      image: "./TattooStudio.png",
      laptopImage: "",
      tabletImage: "./TattooStudio.png",
      mobileImage: "./TattooStudioPhone.png",
      tags: ["Studio Artistico", "Gallery Interattiva", "Brand d'Impatto"],
      liveUrl: "https://portfolio-tattoo-studio.vercel.app/",
      githubUrl: "https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/",
      accent: "grape" as AccentKey,
      icon: "Globe" as keyof typeof categoryIcons,
    },
    {
      id: "multi-2",
      title: "Liberty - NFT Marketplace Web Site",
      category: "Marketplace",
      description:
        "Un marketplace NFT moderno e dinamico per collezionare, comprare e vendere opere d'arte digitali. Offre una galleria interattiva per esplorare le collezioni, profili utente personalizzati e un'esperienza di navigazione fluida e sicura.",
      image: "./Liberty.png",
      laptopImage: "",
      tabletImage: "./Liberty.png",
      mobileImage: "./LibertyPhone.png",
      tags: ["Web3 & Crypto", "Collezioni Digitali", "E-commerce"],
      liveUrl: "https://joaquinbrenta.github.io/liberty/",
      githubUrl: "https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/",
      accent: "grape" as AccentKey,
      icon: "ShoppingCart" as keyof typeof categoryIcons,
    },
    {
      id: "multi-3",
      title: "Cyborg - Live Streaming Web Site",
      category: "Collaboration",
      description:
        "Una piattaforma di live streaming dinamica e coinvolgente per gamer e creator. Offre dirette fluide, chat in tempo reale, esplorazione delle categorie più popolari e uno spazio interattivo per seguire i propri streamer preferiti.",
      image: "./Cyborg.png",
      laptopImage: "",
      tabletImage: "./Cyborg.png",
      mobileImage: "./CyborgPhone.png",
      tags: ["Gaming & Creator", "Live Streaming", "Community"],
      liveUrl: "https://joaquinbrenta.github.io/cyborg/",
      githubUrl: "https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/",
      accent: "grape" as AccentKey,
      icon: "StickyNote" as keyof typeof categoryIcons,
    },
  ]

  const nextLanding = () =>
    setActiveLanding((i) => (i + 1) % landingPages.length)
  const prevLanding = () =>
    setActiveLanding(
      (i) => (i - 1 + landingPages.length) % landingPages.length
    )
  const nextMulti = () => setActiveMulti((i) => (i + 1) % multiPages.length)
  const prevMulti = () =>
    setActiveMulti((i) => (i - 1 + multiPages.length) % multiPages.length)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (keyboardSection === "landing") nextLanding()
        else nextMulti()
      } else if (e.key === "ArrowLeft") {
        if (keyboardSection === "landing") prevLanding()
        else prevMulti()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [keyboardSection, landingPages.length, multiPages.length])

  return (
    <div className="w-full bg-card">
      {/* =====================================================
         HERO
         ===================================================== */}

  <section className="flex flex-col md:flex-row md:min-h-[calc(100dvh-64px)] border-b-2 border-ink border-x-0 md:border-x-2 md:overflow-hidden">
   {/* Colonna del testo */}
   <div className="flex w-full items-start justify-center overflow-visible border-x-2 md:border-x-0 border-b-2 md:border-b-0 border-ink bg-card px-4 pt-12 pb-16 sm:px-6 sm:pb-12 md:w-5/12 md:pt-16">
    <div className="w-full max-w-lg">
      <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-hard-sm darkcyber-gray-span">
        <Sparkles size={14} />
        Showcase dei lavori
      </span>

      <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foreground md:text-6xl">
        Il vero valore di
        <br />
        un'applicazione si
        <br />
        <span className="relative inline-block">
          <span className="relative z-10">vede nei dettagli.</span>
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-bubble"
          />
        </span>
      </h1>

      <p className="mt-4 text-lg font-semibold text-muted-foreground">
        Full-Stack Developer & Designer
      </p>

      <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground">
        Progetti reali, codice moderno e design funzionale. Naviga tra le 10 soluzioni tra landing page e web app multi-pagina che ho realizzato.
      </p>

      {/* Bottoni Call to Action */}
      <div className="mt-8 flex flex-nowrap items-center gap-2 sm:gap-4">
        <a
          href="#landing-pages"
          className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl border-2 border-ink bg-grape px-2.5 py-3 text-[13px] font-bold leading-none text-primary-foreground shadow-hard transition-hard hover:-translate-y-1 hover:shadow-hard-lg sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
        >
          Landing Pages
          <ArrowDown size={16} className="shrink-0 sm:size-[18px]" />
        </a>
        <a
          href="#siti-multipagina"
          className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl border-2 border-ink bg-card px-2.5 py-3 text-[13px] font-bold leading-none text-foreground shadow-hard-sm transition-hard hover:-translate-y-1 hover:shadow-hard sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
        >
          Siti Web
          <ArrowDown size={16} className="shrink-0 sm:size-[18px]" />
        </a>
      </div>
    </div>
  </div>

   {/* Colonna dell'immagine — nascosta su mobile */}
  <div className="relative hidden md:flex w-full md:w-7/12 h-64 md:h-auto self-stretch bg-card border-x-2 md:border-x-0">
    <img
      src="/illustrations/PeopleWorking.png"
      alt="People Working Together"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center md:object-bottom"
    />
  </div>
</section>

      {/* =====================================================
         LANDING PAGES
         ===================================================== */}

      <section
        id="landing-pages"
        className="w-full border-b-2 border-ink bg-card px-6 py-20 lg:px-12 border-x-2"
        onMouseEnter={() => setKeyboardSection("landing")}
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
            
            {/* Scritta Desktop */}
            <span
              className= "hidden md:inline-flex mb-3 rounded-full border-2 border-ink px-3 py-1 text-xs font-black uppercase shadow-hard-sm bg-bubble"
            >
              <div className="items-center flex gap-1.5 darkcyber-gray-span">
                <img alt="Pixel Mouse Icon" src="./Pointer.png" className="w-4 h-4" />
                passa il mouse sullo schermo
              </div>
            </span>

            {/* Scritta Mobile */}
            <span
              className= "inline-flex md:hidden mb-3 rounded-full border-2 border-ink px-3 py-1 text-xs font-black uppercase shadow-hard-sm bg-bubble"
            >
              <div className="items-center flex gap-1.5 darkcyber-gray-span">
                <img alt="Pixel Mouse Icon" src="./Pointer.png" className="w-4 h-4" />
                clicca sullo schermo
              </div>
            </span>

            <h3 className="relative mb-2 inline-block font-display text-2xl font-black text-foreground md:text-3xl">
              {landingPages[activeLanding].title}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-1 -rotate-1 opacity-80 ${
                  accentStyles[landingPages[activeLanding].accent].bg
                }`}
              />
            </h3>

            {/* Layout Desktop: Tutti i dispositivi */}
            <div className="hidden md:flex w-full items-center gap-3">
              <button
                onClick={prevLanding}
                aria-label="Progetto precedente"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-foreground shadow-hard-sm transition-hard hover:-translate-y-0.5 hover:bg-accent hover:shadow-hard"
              >
                <ChevronLeft size={18} />
              </button>

              <MultiDevicePreview
                key={landingPages[activeLanding].id}
                desktop={landingPages[activeLanding].image}
                tablet={landingPages[activeLanding].tabletImage}
                mobile={landingPages[activeLanding].mobileImage}
              />

              <button
                onClick={nextLanding}
                aria-label="Progetto successivo"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-foreground shadow-hard-sm transition-hard hover:-translate-y-0.5 hover:bg-accent hover:shadow-hard"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Layout Mobile: Solo computer */}
            <div className="flex md:hidden w-full flex-col items-center gap-2">
              <div className="w-full max-w-[340px] pt-2">
                <MonitorMockup
                  key={landingPages[activeLanding].id}
                  image={landingPages[activeLanding].image}
                  label="desktop"
                />
              </div>
              <div className="flex flex-col items-center gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevLanding}
                    aria-label="Progetto precedente"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-foreground shadow-hard-sm"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextLanding}
                    aria-label="Progetto successivo"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-foreground shadow-hard-sm"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  cambia progetto
                </span>
              </div>
            </div>

        {/* GRIGLIA A 2 COLONNE */}
            <div className="my-6 grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2">
              <div
                className={`flex flex-col justify-center rounded-xl border-2 border-ink p-4 text-left ${
                  accentStyles[landingPages[activeLanding].accent].bgSoft
                }`}
              >
                <span className="mb-2 text-xs font-black uppercase tracking-wider text-center darkcyber-gray-span">
                  Descrizione:
                </span>
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {landingPages[activeLanding].description}
                </p>
              </div>

              <div className="flex flex-col rounded-xl border-2 border-ink p-4 bg-card/50">
                <div className="flex flex-wrap justify-center gap-2">
                  {landingPages[activeLanding].tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`rounded border-2 border-ink px-2.5 py-1 text-xs font-bold text-foreground shadow-hard-sm ${
                        accentStyles[landingPages[activeLanding].accent].bgSoft
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex w-full items-center justify-center gap-3 border-t-2 border-ink pt-4">
                  <a
                    href={landingPages[activeLanding].liveUrl}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink px-6 py-2.5 text-sm font-bold shadow-hard-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
                      accentStyles[landingPages[activeLanding].accent].bg
                    } ${accentStyles[landingPages[activeLanding].accent].text}`}
                  >
                    Vedi Demo
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
         MULTI PAGE
         ===================================================== */}

      <section
        id="siti-multipagina"
        className="w-full border-b-2 border-ink px-6 py-20 lg:px-12 border-x-2"
        onMouseEnter={() => setKeyboardSection("multi")}
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
            
            {/* Scritta Desktop (usa activeMulti) */}
            <span
              className= "hidden md:inline-flex mb-3 rounded-full border-2 border-ink px-3 py-1 text-xs font-black uppercase shadow-hard-sm bg-bubble"
            >
              <div className="items-center flex gap-1.5 darkcyber-gray-span">
               <img alt="Pixel Mouse Icon" src="./Pointer.png" className="w-4 h-4" />
                passa il mouse sullo schermo
              </div>
            </span>

            {/* Scritta Mobile (usa activeMulti) */}
            <span
              className= "inline-flex md:hidden mb-3 rounded-full border-2 border-ink px-3 py-1 text-xs font-black uppercase shadow-hard-sm bg-bubble"
            >
              <div className="items-center flex gap-1.5 darkcyber-gray-span">
                <img alt="Pixel Mouse Icon" src="./Pointer.png" className="w-4 h-4" />
                clicca sullo schermo
              </div>
            </span>

            <h3 className="relative mb-2 inline-block font-display text-2xl font-black text-foreground md:text-3xl">
              {multiPages[activeMulti].title}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-1 -rotate-1 opacity-80 ${
                  accentStyles[multiPages[activeMulti].accent].bg
                }`}
              />
            </h3>

            {/* Layout Desktop: Tutti i dispositivi */}
            <div className="hidden md:flex w-full items-center gap-3">
              <button
                onClick={prevMulti}
                aria-label="Progetto precedente"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-foreground shadow-hard-sm transition-hard hover:-translate-y-0.5 hover:bg-accent hover:shadow-hard"
              >
                <ChevronLeft size={18} />
              </button>

              <MultiDevicePreview
                key={multiPages[activeMulti].id}
                desktop={multiPages[activeMulti].image}
                tablet={multiPages[activeMulti].tabletImage}
                mobile={multiPages[activeMulti].mobileImage}
              />

              <button
                onClick={nextMulti}
                aria-label="Progetto successivo"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-foreground shadow-hard-sm transition-hard hover:-translate-y-0.5 hover:bg-accent hover:shadow-hard"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Layout Mobile: Solo computer */}
            <div className="flex md:hidden w-full flex-col items-center gap-2">
              <div className="w-full max-w-[340px] pt-2">
                <MonitorMockup
                  key={multiPages[activeMulti].id}
                  image={multiPages[activeMulti].image}
                  label="desktop"
                />
              </div>
              <div className="flex flex-col items-center gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevMulti}
                    aria-label="Progetto precedente"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-foreground shadow-hard-sm"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextMulti}
                    aria-label="Progetto successivo"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-foreground shadow-hard-sm"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  cambia progetto
                </span>
              </div>
            </div>

            {/* GRIGLIA A 2 COLONNE */}
            <div className="my-6 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              <div
                className={`flex flex-col justify-center rounded-xl border-2 border-ink p-4 text-left ${
                  accentStyles[multiPages[activeMulti].accent].bgSoft
                }`}
              >
                <span className="mb-2 text-xs font-black uppercase tracking-wider text-center darkcyber-gray-span">
                  Descrizione
                </span>
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {multiPages[activeMulti].description}
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-xl border-2 border-ink p-4 bg-card/50">
                <div className="flex flex-wrap justify-center gap-2">
                  {multiPages[activeMulti].tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`rounded border-2 border-ink px-2.5 py-1 text-xs font-bold text-foreground shadow-hard-sm ${
                        accentStyles[multiPages[activeMulti].accent].bgSoft
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex w-full items-center justify-center gap-3 border-t-2 border-ink pt-4 mt-4">
                  <a
                    href={multiPages[activeMulti].liveUrl}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink px-6 py-2.5 text-sm font-bold shadow-hard-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
                      accentStyles[multiPages[activeMulti].accent].bg
                    } ${accentStyles[multiPages[activeMulti].accent].text}`}
                  >
                    Vedi Demo
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}