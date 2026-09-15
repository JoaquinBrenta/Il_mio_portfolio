import { Sparkles, CheckCircle2, Target, Lightbulb } from 'lucide-react'

export function PhaseListening() {
  return (
    <section id="fase-1" className="relative w-full overflow-hidden border-b-2 border-ink bg-card">

      {/* STRUTTURA GRID FULL-BLEED (Identica alla Hero) */}
      <div className="grid w-full md:grid-cols-2">
        
        {/* COLONNA SINISTRA: Video Full-Bleed */}
        <div className="relative min-h-[400px] md:min-h-[500px] w-full border-ink border-l-2 border-b-2 md:border-b-0 border-r-2 md:border-r-0">
          <img
            src="/illustrations/Talking.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* COLONNA DESTRA: Testi */}
        <div className="flex flex-col justify-center px-6 py-12 md:pl-16 md:pr-12 md:py-16 animate-pop-in border-r-2 border-l-2 md:border-l-0 border-ink">
          
          {/* BADGE "Come lavoro:" CENTRATO NELLA COLONNA DESTRA */}
          <div className="mb-8 flex justify-center">
            <span className="darkcyber-gray-span inline-block rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-hard-sm">
              Come lavoro:
            </span>
          </div>

          <div>
            
            {/* BADGE FASE */}
            <div className="flex items-center gap-3">
              <span className="minimal-grape-accent flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-sun font-display text-lg font-black text-ink shadow-hard-sm">
                01
              </span>
              <span className="h-10 minimal-grape-accent darkcyber-gray-span inline-flex items-center gap-2 rounded-full border-2 border-ink bg-bubble px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-hard-sm">
                <Sparkles size={14} />
                Fase 1: Ascolto & Analisi
              </span>
            </div>

            {/* TITOLO */}
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-tight md:text-6xl text-foreground">
              Tutto parte da una <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-grape">chiacchierata.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-sun"
                />
              </span>
            </h2>

            {/* DESCRIZIONE */}
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Prima di scrivere codice, cerco di capire il problema. Faccio domande, raccolgo il contesto e confronto le idee con chi lavora al progetto, per dare una direzione alle scelte tecniche e visive.
            </p>

            {/* PUNTI CHIAVE NEO-BRUTALIST */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border-2 border-ink bg-background p-4 shadow-hard-sm">
                <div className="minimal-grape-accent rounded-lg border-2 border-ink bg-sun p-2 text-ink">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Problema & Obiettivi</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Chiarisco cosa deve fare il progetto e quali problemi deve risolvere.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border-2 border-ink bg-bubble p-4 shadow-hard-sm">
                <div className="minimal-grape-accent rounded-lg border-2 border-ink bg-bubble p-2 text-ink">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Target & Utenti</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Mi chiedo chi userà il progetto e cosa gli serve per usarlo con facilità.</p>
                </div>
              </div>
            </div>

            {/* RISULTATO DELLA FASE */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border-2 border-ink bg-grape/10 p-4">
              <CheckCircle2 size={24} className="shrink-0 text-grape" />
              <p className="text-sm font-semibold text-foreground">
                <strong className="text-grape">Risultato della fase:</strong> Un documento chiaro con requisiti, architettura iniziale e roadmap di sviluppo.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}