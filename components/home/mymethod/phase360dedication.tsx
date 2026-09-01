'use client'

import { useState } from 'react'
import { Sparkles, Eye, CheckCircle2, HeartHandshake, Compass, Zap, Bot, MousePointerClick, Globe, Layers, Menu, Terminal } from 'lucide-react'

export function Phase360Dedication() {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  // Inclinazione 3D dinamica al passaggio del mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5

    setRotateY(xRatio * 25)
    setRotateX(-yRatio * 25)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <section className="relative w-full overflow-hidden border-b-2 border-ink bg-card py-16 md:py-24 border-x-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:px-12">
        
        {/* COLONNA SINISTRA: TESTO DEDIZIONE */}
        <div className="animate-pop-in">
          <div className="flex items-center gap-3">
            <span className="minimal-grape-accent flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-sun font-display text-lg font-black text-ink shadow-hard-sm">
              03
            </span>
            <span className="minimal-grape-accent darkcyber-gray-span inline-flex h-10 items-center gap-2 rounded-full border-2 border-ink bg-bubble px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-hard-sm">
              <Sparkles size={14} />
              Artigianato Digitale
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foreground md:text-5xl">
            Dedizione assoluta. <br />
            <span className="relative mt-2 inline-block">
              <span className="relative z-10 text-grape">Cura del dettaglio a 360°.</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-sun"
              />
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Un sito web straordinario non nasce per caso. È il risultato di dedizione, ascolto e un'attenzione quasi ossessiva per i dettagli visivi e tecnici. Esamino ogni componente da ogni prospettiva.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="minimal-360-feature-icon shrink-0 rounded-lg border-2 border-ink bg-sun p-2 text-ink shadow-xs">
                <Eye size={20} />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Pixel Perfect & Micro-interazioni</h4>
                <p className="text-sm text-muted-foreground">Spaziature millimetriche, animazioni fluide e feedback visivi ad ogni interazione.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="minimal-360-feature-icon shrink-0 rounded-lg border-2 border-ink bg-bubble p-2 text-ink shadow-xs">
                <Compass size={20} />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Esperienza Senza Frustrazioni</h4>
                <p className="text-sm text-muted-foreground">Navigazione naturale e immediata su qualsiasi schermo e smartphone.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="minimal-360-feature-icon darkcyber-purple-span shrink-0 rounded-lg border-2 border-ink bg-lime p-2 text-ink shadow-xs">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Passione & Supporto Continuo</h4>
                <p className="text-sm text-muted-foreground">Non considero mai un lavoro "finito" finché non supera le tue aspettative.</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA: CARD MOCKUP RESPONSIVE */}
        <div className="flex justify-center">
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
            className="relative h-[440px] w-full max-w-md cursor-pointer select-none rounded-3xl p-1 [perspective:1200px] sm:h-[480px] md:h-[560px]"
          >
            <div
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${isFlipped ? 180 + rotateY : rotateY}deg)`,
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
              className="relative h-full w-full [transform-style:preserve-3d]"
            >
              
              {/* ================= FRONTE (SCHELETONS COMPLETI) ================= */}
              <div className="absolute inset-0 flex min-h-0 flex-col justify-between overflow-hidden rounded-3xl border-4 border-ink bg-card p-3 sm:p-4 md:p-5 shadow-hard-lg [backface-visibility:hidden]">
                
                {/* 1. TOP BROWSER BAR */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-2 sm:pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full border border-ink bg-rose-400" />
                    <span className="h-3 w-3 rounded-full border border-ink bg-amber-300" />
                    <span className="h-3 w-3 rounded-full border border-ink bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md border-2 border-ink bg-background px-3 py-1 font-mono text-xs font-bold text-muted-foreground shadow-2xs">
                    <Globe size={12} /> app-layout.360
                  </div>
                  <Layers size={16} className="minimal-360-text-blue text-muted-foreground" />
                </div>

                {/* STRUTTURA A BLOCCHI CON SKELETONS ANCHE NEL MENU */}
                <div className="my-1.5 flex min-h-0 flex-1 flex-col gap-1.5 sm:my-2 sm:gap-2">
                  
                  {/* 2. NAVBAR HEADER (SKELETON) */}
                  <div className="flex h-8 sm:h-10 items-center justify-between rounded-xl border-2 border-ink bg-sun px-2 sm:px-3 shadow-xs">
                     <div className="flex items-center gap-2 w-1/2">
                        <div className="h-3 w-12 animate-pulse rounded bg-ink/30" />
                        <div className="h-3 w-12 animate-pulse rounded bg-ink/30" />
                        <div className="h-3 w-12 animate-pulse rounded bg-ink/30" />
                     </div>
                     <div className="h-4 w-5 animate-pulse rounded bg-ink/30" />
                  </div>

                  {/* 3. GRID SIDEBAR + BODY CONTENT */}
                  <div className="grid min-h-0 flex-1 grid-cols-12 gap-1.5 sm:gap-2">
                    
                    {/* SIDEBAR (SKELETON) */}
                    <div className="col-span-2 flex min-h-0 flex-col justify-between rounded-xl border-2 border-ink bg-grape p-1.5 sm:p-2.5 shadow-xs">
                      <div className="flex items-center justify-center text-ink">
                        <div className="h-3 w-full animate-pulse rounded bg-ink/30" />
                      </div>
                    </div>

                    {/* BODY CONTENT CON SKELETONS */}
                    <div className="col-span-10 flex min-h-0 h-full flex-col gap-1.5 sm:gap-2.5 rounded-xl border-2 border-ink bg-background p-2 sm:p-3 shadow-xs">
                      <div className="flex items-center justify-between border-b-2 border-ink/20 pb-1 sm:pb-1.5">
                        <div className="h-3 w-24 animate-pulse rounded bg-foreground/20" />
                      </div>

                      {/* BLOCCO 1 SKELETON */}
                      <div className="flex min-h-0 flex-1 flex-col justify-between rounded-xl border-2 border-ink bg-card p-2 sm:p-3 shadow-2xs">
                        <div className="flex items-center justify-between gap-2">
                          <div className="h-4 w-36 animate-pulse rounded bg-foreground/20" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-2.5 w-full animate-pulse rounded bg-muted-foreground/20" />
                          <div className="h-2.5 w-3/4 animate-pulse rounded bg-muted-foreground/20" />
                        </div>
                      </div>

                      {/* BLOCCO 2 SKELETON */}
                      <div className="flex min-h-0 flex-1 flex-col justify-between rounded-xl border-2 border-ink bg-card p-2 sm:p-3 shadow-2xs">
                        <div className="flex items-center justify-between gap-2">
                          <div className="h-4 w-32 animate-pulse rounded bg-foreground/20" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-2.5 w-5/6 animate-pulse rounded bg-muted-foreground/20" />
                          <div className="h-2.5 w-1/2 animate-pulse rounded bg-muted-foreground/20" />
                        </div>
                      </div>

                      {/* BLOCCO 3 SKELETON */}
                      <div className="flex min-h-0 flex-1 flex-col justify-between rounded-xl border-2 border-ink bg-card p-2 sm:p-3 shadow-2xs">
                        <div className="flex items-center justify-between gap-2">
                          <div className="h-4 w-40 animate-pulse rounded bg-foreground/20" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-2.5 w-full animate-pulse rounded bg-muted-foreground/20" />
                          <div className="h-2.5 w-2/3 animate-pulse rounded bg-muted-foreground/20" />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* 4. FOOTER DI INVITO AL FLIP — p ridotto su mobile per non tagliare */}
                <div className="flex shrink-0 items-center justify-between rounded-xl border-2 border-ink bg-sun/40 px-2 py-1.5 text-xs font-bold text-foreground sm:px-3 sm:py-2">
                    <span className="flex items-center gap-1.5 text-[11px] font-black sm:text-xs">
                    <MousePointerClick size={12} className="animate-bounce text-grape sm:size-3.5" />
                    Clicca per scoprire il retro
                  </span>
                  <span className="minimal-360-blue-chip rounded-md border-2 border-ink bg-sun px-2 py-0.5 font-mono text-[10px] font-black text-ink shadow-2xs">
                    360°
                  </span>
                </div>

              </div>

              {/* ================= RETRO ================= */}
              <div 
                className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border-4 border-ink bg-card p-5 text-foreground shadow-hard-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                {/* 1. TOP BAR RETRO */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="minimal-360-blue-chip flex h-6 w-6 items-center justify-center rounded-lg border-2 border-ink bg-sun text-ink shadow-2xs">
                      <Bot size={14} />
                    </span>
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">Engine Specs</span>
                  </div>
                  
                  <span className="minimal-360-blue-chip darkcyber-gray-span rounded-md border-2 border-ink bg-bubble px-2 py-0.5 font-mono text-[10px] font-black text-ink shadow-2xs">
                    BACKEND LOGIC
                  </span>
                </div>

                {/* 2. BLOCCO DI TESTO */}
                <div className="p-3.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-black text-foreground">Il Cuore del Codice</h3>
                    <Sparkles size={16} className="text-grape" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dietro ogni interfaccia pulita c'è una struttura solida, veloce e costruita a regola d'arte con tolleranza zero per le imperfezioni.
                  </p>
                </div>

                {/* 3. TERMINALE / EDITOR */}
                <div className="minimal-360-terminal flex flex-1 flex-col overflow-hidden rounded-2xl border-2 border-ink bg-ink font-mono text-[11px] text-white shadow-xs">
                  <div className="minimal-360-terminal-header flex items-center justify-between border-b border-white/20 px-3.5 py-2 text-[10px] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={12} className="minimal-360-terminal-icon text-sun" />
                      core_config.ts
                    </span>
                    <span className="minimal-360-terminal-active font-bold text-emerald-400">● Active</span>
                  </div>

                  <div className="minimal-360-terminal-code flex flex-1 flex-col justify-between px-3.5 py-3 text-white/90">
                    <div className="space-y-2 leading-relaxed">
                      <div className="flex gap-3">
                        <span className="w-4 text-right text-[10px] text-white/35">1</span>
                        <div>
                          <span className="minimal-360-code-keyword font-bold text-purple-400">const</span>{' '}
                          <span className="minimal-360-code-identifier font-bold text-yellow-300">build</span> ={' '}
                          <span className="minimal-360-code-type font-bold text-cyan-400">new</span> CoreEngine();
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-4 text-right text-[10px] text-white/35">2</span>
                        <div>
                          <span className="minimal-360-code-identifier font-bold text-yellow-300">build</span>.
                          <span className="minimal-360-code-keyword text-purple-400">init</span>({`{`}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-4 text-right text-[10px] text-white/35">3</span>
                        <div>
                          <span className="minimal-360-code-property text-gray-300">cleanCode:</span>{' '}
                          <span className="minimal-360-code-boolean font-bold text-emerald-400">true</span>,
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-4 text-right text-[10px] text-white/35">4</span>
                        <div>
                          <span className="minimal-360-code-property text-gray-300">fps:</span>{' '}
                          <span className="minimal-360-code-number font-bold text-amber-300">60</span>,
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-4 text-right text-[10px] text-white/35">5</span>
                        <div>
                          <span className="minimal-360-code-property text-gray-300">quality:</span>{' '}
                          <span className="minimal-360-code-string font-bold text-purple-300">'pixel-perfect'</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-4 text-right text-[10px] text-white/35">6</span>
                        <div>{`}`});</div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <span className="minimal-360-terminal-active flex items-center gap-1 font-bold text-emerald-400">
                        <span>{`>`} [STATUS 200] Optimized!</span>
                        <span className="minimal-360-terminal-cursor inline-block h-3 w-1.5 animate-pulse bg-sun" />
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-white/45">runtime ok</span>
                    </div>
                  </div>
                </div>

                {/* 4. FOOTER */}
                <div className="flex items-center justify-between rounded-xl border-2 border-ink bg-bubble/40 px-3 py-2 text-xs font-bold text-foreground mt-4">
                  <span className="flex items-center gap-1.5 text-xs font-black text-foreground">
                    <Zap size={14} className="text-grape" />
                    Cura invisibile ad occhio nudo
                  </span>
                  <span className="minimal-360-blue-chip rounded-md border-2 border-ink bg-sun px-2 py-0.5 font-mono text-[10px] font-black text-ink shadow-2xs">
                    360°
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}