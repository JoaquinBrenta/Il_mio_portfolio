import Image from 'next/image'
import { Sparkles, ArrowDown, Briefcase } from 'lucide-react'
import { Folder } from './folder'

export function About() {
  return (
    <section className="flex min-h-[calc(100dvh-64px)] flex-col border-b-2 border-ink md:flex-row md:overflow-hidden">
      {/* MOBILE: Riquadro 1 — Titolo + bottoni (copiato da Hero) — pb extra per contenere shadow senza overlay */}
      <div className="flex flex-col justify-center overflow-visible border-x-2 border-ink bg-card px-4 py-12 pb-16 sm:px-6 sm:pb-12 animate-pop-in md:hidden">
        <div>
          <span className="darkcyber-gray-span inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-hard-sm">
            <Sparkles size={16} aria-hidden="true" />
            Disponibile per nuovi progetti
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foreground">
            La mia regola è<br />
            mai smettere di<br />
            <span className="darkcyber-gray-span relative inline-block">
              <span className="relative z-10">imparare.</span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-bubble" />
            </span>
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Full-Stack Developer &amp; Designer
          </p>
          <div className="mt-8 flex flex-nowrap items-center gap-2 sm:gap-4">
            <a
              href="#tech-stack"
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl border-2 border-ink bg-grape px-2.5 py-3 text-[13px] font-bold leading-none text-primary-foreground shadow-hard transition-hard hover:-translate-y-1 hover:shadow-hard-lg sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
            >
              Il mio Tech Stack
              <ArrowDown size={16} className="shrink-0 sm:size-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl border-2 border-ink bg-card px-2.5 py-3 text-[13px] font-bold leading-none text-foreground shadow-hard-sm transition-hard hover:-translate-y-1 hover:shadow-hard sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
            >
              <Briefcase size={16} className="shrink-0 sm:size-[18px]" />
              Profilo LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP: immagine con titolo in overlay — invariato, visibile solo >=md */}
      <div className="relative hidden min-h-[340px] w-full overflow-hidden self-stretch border-b-2 border-l-2 border-r-2 border-ink bg-card sm:min-h-[400px] md:flex md:w-7/12 md:min-h-0 md:border-b-0 md:border-r-0">
        <Image
          src="/illustrations/Studying.svg"
          alt="Illustrazione Studying"
          fill
          className="object-cover object-center scale-105 sm:object-left sm:scale-100"
          priority
        />
        <div className="relative z-10 border-l-2 md:border-l-0 border-ink px-4 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8 md:bg-none md:px-12 md:pt-12">
          <span className="darkcyber-gray-span inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-3 py-1 text-xs font-bold text-accent-foreground shadow-hard-sm sm:px-4 sm:py-1.5 sm:text-sm">
            <Sparkles size={14} aria-hidden="true" />
            Tecnologie e competenze chiave
          </span>
          <h1 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:mt-6 sm:text-4xl md:text-6xl">
            La mia regola è<br />
            mai smettere di<br />
            <span className="darkcyber-gray-span relative inline-block">
              <span className="relative z-10">imparare.</span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-bubble" />
            </span>
          </h1>
          <p className="mt-4 text-base font-semibold text-muted-foreground sm:text-lg">Full-Stack Developer &amp; Designer</p>
          <div className="mt-8 flex flex-nowrap items-center gap-2 sm:gap-4">
            <a
              href="#tech-stack"
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border-2 border-ink bg-grape px-3 py-3 text-sm font-bold text-primary-foreground shadow-hard transition-hard hover:-translate-y-1 hover:shadow-hard-lg sm:gap-2 sm:px-6 sm:text-base"
            >
              Il mio Tech Stack
              <ArrowDown size={18} className="shrink-0" />
            </a>
            <a
              href="https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border-2 border-ink bg-card px-3 py-3 text-sm font-bold text-foreground shadow-hard-sm transition-hard hover:-translate-y-1 hover:shadow-hard sm:gap-2 sm:px-6 sm:text-base"
            >
              <Briefcase size={18} className="shrink-0" />
              Profilo LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Folder — su mobile sotto il riquadro titolo, su desktop colonna destra */}
      <div className="flex w-full items-center justify-center border-x-2 border-t-2 border-ink bg-card px-4 py-8 sm:px-6 md:w-5/12 md:border-x-0 md:border-r-2 md:border-t-0 md:py-12">
        <Folder />
      </div>
    </section>
  )
}