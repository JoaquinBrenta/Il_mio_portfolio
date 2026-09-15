import { asset } from '@/lib/asset'
import Image from 'next/image'
import { ArrowDown, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    /* w-full senza max-w per occupare tutto lo schermo da bordo a bordo */
    <section id="top" className="relative w-full border-b border-ink bg-card md:overflow-hidden">
      <div className="grid min-h-[calc(100vh-80px)] w-full md:grid-cols-2">
        
        {/* COLONNA SINISTRA: riquadro titolo — border-b su mobile quando immagine nascosta */}
        <div className="flex flex-col justify-center overflow-visible px-4 py-12 pb-16 sm:px-6 md:pl-16 md:pr-12 md:py-20 animate-pop-in border-l-2 border-r-2 border-b-0  border-ink md:border-r-0">
          <div>
            <span className="darkcyber-gray-span inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-hard-sm">
              <Sparkles size={16} />
              Il mio modo di sviluppare
            </span>
<h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foreground md:text-6xl">
  Ciao, sono <span className="text-grape">Joaquin</span>.
  <br />
  Sviluppo con
  <br />
  <span className="darkcyber-gray-span relative inline-block">
    <span className="relative z-10">creatività Full-Stack.</span>
    <span
      aria-hidden
      className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-bubble"
    />
  </span>
</h1>

            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
             Qui raccolgo progetti, esperimenti e il mio modo di lavorare: come ragiono sulle interfacce, organizzo il codice e collego frontend e backend.
            </p>

            <div className="mt-8 flex flex-nowrap items-center gap-2 sm:gap-4">
              <a
                href={asset("/projects/#landing-pages")}
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl border-2 border-ink bg-grape px-2.5 py-3 text-[13px] font-bold leading-none text-primary-foreground shadow-hard transition-hard hover:-translate-y-1 hover:shadow-hard-lg sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
              >
                Guarda i progetti
                <ArrowDown size={16} className="shrink-0 sm:size-[18px]" />
              </a>
              <a
                href={asset("/contact/")}
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl border-2 border-ink bg-card px-2.5 py-3 text-[13px] font-bold leading-none text-foreground shadow-hard-sm transition-hard hover:-translate-y-1 hover:shadow-hard sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
              >
                Contattami
              </a>
            </div>

            <dl className="mt-10 flex gap-8">
              {[
                { n: '2+', l: 'Anni di esperienza' },
                { n: '20+', l: 'Tecnologie utilizzate' },
                { n: '100+', l: 'Progetti ed esercitazioni' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-extrabold text-grape">{s.n}</dt>
                  <dd className="text-sm font-medium text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* COLONNA DESTRA: nascosta su mobile, visibile solo >=md */}
        <div className="relative hidden min-h-[400px] w-full border-t-2 border-r-2 border-ink md:block md:border-t-0 md:border-l-0 border-l-2 border-ink">
          <Image
            src={asset("/illustrations/Hero.png")}
            alt="Illustrazione Hero"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </section>
  )
}