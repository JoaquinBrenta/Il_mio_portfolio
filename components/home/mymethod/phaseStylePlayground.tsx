'use client'

import { asset } from '@/lib/asset'


import { useUIStyle, UIStyle } from '@/context/styleContext'
import { Sparkles, Check, CheckCircle2, RotateCcw } from 'lucide-react'

interface StyleCard {
  id: UIStyle
  name: string
  desc: string
  tag: string
  image: string
}

const stylesList: StyleCard[] = [
  {
    id: 'neobrutalism',
    name: 'Neo-Brutalism',
    desc: 'Bordi spessi, colori saturi e ombre solide. Personalità pop e d’impatto.',
    tag: 'Pop & Bold',
    image: '/styles/NeoBrutalism.jpg', // Sostituisci con il tuo percorso immagine
  },
  {
    id: 'minimal',
    name: 'Material design',
    desc: 'Linee sottili, spazi ampi e grande eleganza. Un approccio essenziale alle interfacce.',
    tag: 'Corporate & Clean',
    image: '/styles/MaterialDesign.jpg', // Sostituisci con il tuo percorso immagine
  },
  {
    id: 'darkcyber',
    name: 'Neon Lights',
    desc: 'Sfondo scuro con contrasti neon cyan e purple. Un esperimento con luce e contrasto.',
    tag: 'SaaS & Tech',
    image: '/styles/Neon.jpg', // Sostituisci con il tuo percorso immagine
  },
]

export function PhaseStylePlayground() {
  const { currentStyle, setCurrentStyle } = useUIStyle()

  return (
    <section id="fase-3" className="relative w-full overflow-hidden border-b-2 border-ink bg-card py-16 md:py-24 border-x-2 border-ink">
      
      {/* CONTENITORE CENTRATO */}
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center md:px-12 animate-pop-in">
        
        {/* BADGE FASE */}
        <div className="flex items-center gap-3">
          <span className="minimal-grape-accent flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-sun font-display text-lg font-black text-ink shadow-hard-sm">
            02
          </span>
          <span className="h-10 minimal-grape-accent darkcyber-gray-span inline-flex items-center gap-2 rounded-full border-2 border-ink bg-bubble px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-hard-sm">
            <Sparkles size={14} />
            Sperimenta la magia
          </span>
        </div>

        {/* TITOLO CENTRATO */}
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foreground md:text-6xl">
          Esploro linguaggi visivi <br />
          <span className="relative mt-2 inline-block">
            <span className="relative z-10">e li metto alla prova.</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-bubble"
            />
          </span>
        </h2>

        {/* DESCRIZIONE */}
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Scegli uno stile visivo per l'anteprima: guarda come la tipografia, le ombre, i bordi e i colori del sito si trasformano all'istante.
        </p>

        {/* GRID DI CARD CON IMMAGINI */}
        <div className="mt-12 grid w-full gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {stylesList.map((st) => {
            const isActive = currentStyle === st.id

            return (
              <div
                key={st.id}
                onClick={() => setCurrentStyle(st.id)}
                className={`relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  isActive
                    ? 'border-grape bg-card ring-4 ring-grape/30 shadow-hard-lg -translate-y-1.5'
                    : 'border-ink/30 bg-background opacity-80 hover:opacity-100 hover:border-ink hover:-translate-y-0.5'
                }`}
              >
                {/* CHECKMARK "V" IN ALTO A DESTRA */}
                {isActive && (
                  <div
                    className={`absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-hard-sm animate-pop-in ${
                      currentStyle === 'minimal'
                        ? 'border-blue-700 bg-blue-600 text-white'
                        : 'border-ink bg-sun text-ink'
                    }`}
                  >
                    <Check size={18} strokeWidth={3} />
                  </div>
                )}

                {/* CONTENITORE IMMAGINE */}
                <div className="relative h-48 w-full overflow-hidden border-b-2 border-ink/20 bg-muted">
                  <img
                    src={asset(st.image)}
                    alt={st.name}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* TAG BADGE */}
                  <span className="absolute bottom-3 left-3 rounded-md border border-ink bg-card px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-foreground shadow-xs">
                    {st.tag}
                  </span>
                </div>

                {/* TESTO CARD */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-xl font-black text-foreground">
                      {st.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-grape">
                    {isActive ? 'Stile Attivo' : 'Seleziona stile →'}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* BARRA INFERIORE: RESET & RISULTATO */}
        <div className="mt-12 flex w-full flex-wrap items-center justify-between gap-4 rounded-xl border-2 border-ink bg-grape/10 p-4 text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={24} className="shrink-0 text-grape" />
            <p className="text-sm font-semibold text-foreground">
              <strong className="text-grape">Risultato della fase:</strong> Un confronto concreto tra modi diversi di interpretare la stessa interfaccia.
            </p>
          </div>

          {currentStyle !== 'neobrutalism' && (
            <button
              onClick={() => setCurrentStyle('neobrutalism')}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-background px-3 py-1.5 text-xs font-bold text-foreground shadow-hard-sm hover:translate-y-0.5 transition-all"
            >
              <RotateCcw size={14} />
              Ripristina Originale
            </button>
          )}
        </div>

      </div>

    </section>
  )
}