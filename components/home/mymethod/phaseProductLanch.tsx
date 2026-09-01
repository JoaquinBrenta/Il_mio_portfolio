import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react'
import { asset } from '@/lib/asset'

export function PhaseProductLaunch() {
  return (
    <section className="relative w-full border-b-2 border-ink overflow-hidden bg-card">
      
      {/* ANIMAZIONE LOTTIE (CORIANDOLI) A TUTTO SCHERMO / INTERA SEZIONE */}
      <div className="pointer-events-none absolute inset-0 z-30 w-full h-full border-x-2 border-ink">
        <DotLottieReact
          src={asset("/coriandoli.lottie")}
          autoplay={true}
          loop={false}
          className="w-full h-full object-cover"
        />
      </div>

      {/* INTESTAZIONE SUPERIORE (TITOLO & BADGE) */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-4 px-6 pt-16 pb-8 text-center">
        <div className="flex items-center gap-3">
          <span className="minimal-grape-accent flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-sun font-display text-lg font-black text-ink shadow-hard-sm">
            04
          </span>
          <span className="h-10 minimal-grape-accent darkcyber-gray-span inline-flex items-center gap-2 rounded-full border-2 border-ink bg-bubble px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-hard-sm">
            <Sparkles size={14} />
            Lancio in Produzione
          </span>
        </div>

        <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foreground md:text-5xl">
          Pronti al decollo.<br />
          <span className="text-grape">Lancio senza stress e sorprese.</span>
        </h2>
      </div>

      {/* CONTENITORE PRINCIPALE CON SFONDO E TESTI */}
      <div className="relative w-full min-h-[500px] md:min-h-[650px] lg:min-h-[750px] flex flex-col items-start justify-start gap-8 px-6 pb-16 pt-8">
        
        {/* SFONDO FESTEGGIO.PNG COMPLETO (BG-CONTAIN SENZA TAGLI) */}
        <div 
          aria-hidden 
          style={{ backgroundImage: `url(${asset("/illustrations/festeggio.png")})` }}
          className="pointer-events-none absolute inset-0 w-full h-full bg-contain bg-bottom bg-no-repeat opacity-90 z-10" 
        />

        {/* TESTI E INFORMAZIONI AI LATI (RIMOSSO MY-AUTO) */}
        <div className="relative z-20 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Testo a sinistra */}
          <div className="flex w-full max-w-sm flex-col gap-3 text-center lg:text-left backdrop-blur-sm p-4 rounded-2xl border-2 border-ink inline-flex items-center gap-2 bg-card px-6 py-3 font-bold text-foreground shadow-hard-sm transition-hard hover:-translate-y-1 hover:shadow-hard justify-self-center">
            <div className="flex items-center justify-center gap-2 font-display font-black text-ink">
              <CheckCircle2 size={22} className="text-grape shrink-0" />
              <span className="text-xl text-black darkcyber-gray-span">Online in Tempo Record</span>
            </div>
            <p className="text-base font-medium text-muted-foreground leading-relaxed text-center">
              Aggiornamenti rapidi e continui senza mai bloccare il tuo sito o interrompere il servizio per i tuoi clienti.
            </p>
          </div>

          {/* Testo a destra */}
          <div className="flex w-full max-w-sm flex-col gap-3 text-center lg:text-left backdrop-blur-sm p-4 rounded-2xl border-2 border-ink inline-flex items-center gap-2 bg-card px-6 py-3 font-bold text-foreground shadow-hard-sm transition-hard hover:-translate-y-1 hover:shadow-hard justify-self-center">
            <div className="flex items-center justify-center gap-2 font-display font-black text-ink">
              <ShieldCheck size={22} className="text-grape shrink-0" />
              <span className="text-xl text-black darkcyber-gray-span">Sito Sicuro e Protetto</span>
            </div>
            <p className="text-base font-medium text-muted-foreground leading-relaxed text-center">
              Monitoraggio costante, protezione totale dei dati e massima affidabilità per dormire sempre sonni tranquilli.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}