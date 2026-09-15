import { Layout, Server, Wrench, Sparkles } from 'lucide-react'
import { asset } from '@/lib/asset'
export function TechStack() {
  const categories = [
    {
      id: "frontend",
      title: "Frontend Development",
      badge: "UI & Client-Side",
      bgBadge: "bg-bubble darkcyber-gray-span",
      bgSection: "bg-card",
      bgImage: asset("/illustrations/Back1.svg"),
      badgeSticky: "Esperienze utente fluide e moderne",
      quoteSticky: (
        <>
          Massimi<br />
          risultati<br />
          <span className="darkcyber-gray-span relative inline-block">
            <span className="relative z-10">visivi.</span>
            <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-sun"></span>
          </span>
        </>
      ),
      icon: <Layout size={40} className="text-foreground" />,
      items: [
        { 
          title: "Next.js", 
          desc: "Framework full-stack per applicazioni web veloci e ottimizzate per i motori di ricerca.", 
          icon: asset("/logos/nextjs.jpeg") 
        },
        { 
          title: "React", 
          desc: "Libreria leader per la creazione di interfacce utente dinamiche, fluide e interattive.", 
          icon: asset("/logos/react.png") 
        },
        { 
          title: "Angular", 
          desc: "Framework strutturato per lo sviluppo di applicazioni web complesse ed enterprise.", 
          icon: asset("/logos/angular.png") 
        },
        { 
          title: "Vue.js", 
          desc: "Libreria progressiva per interfacce reattive, leggere e altamente performanti.", 
          icon: asset("/logos/vue.png") 
        },
        { 
          title: "TypeScript Scalability", 
          desc: "Tipizzazione solida per un codice pulito, scalabile e privo di errori imprevisti.", 
          icon: asset("/logos/typescript.png")
        },
        { 
          title: "Tailwind CSS", 
          desc: "Libreria utility-first per design system moderni, unici e curati nei dettagli.", 
          icon: asset("/logos/tailwind.png")
        },
        { 
          title: "Bootstrap", 
          desc: "Framework CSS affidabile per la creazione rapida di layout responsive e puliti.", 
          icon: asset("/logos/bootstrap.png")
        },
        { 
          title: "Figma", 
          desc: "Tool di UI/UX design per prototipi interattivi e interfacce utente su misura.", 
          icon: asset("/logos/figma.png")
        },
        { 
          title: "Canva", 
          desc: "Strumento di grafica rapida per materiali visivi coordinati e accattivanti.", 
          icon: asset("/logos/canva.png")
        }
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      badge: "Server & Database",
      bgBadge: "bg-bubble darkcyber-gray-span",
      bgSection: "bg-card",
      bgImage: asset("/illustrations/Back2.svg"),
      badgeSticky: "Architetture Scalabili & API",
      quoteSticky: (
        <>
          Integrità e<br />
          sicurezza<br />
          <span className="darkcyber-gray-span relative inline-block">
            <span className="relative z-10">dei dati.</span>
            <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-bubble"></span>
          </span>
        </>
      ),
      icon: <Server size={40} className="text-foreground" />,
      items: [
        { 
          title: "Java", 
          desc: "Linguaggio orientato agli oggetti solido e sicuro per logiche di business complesse.", 
          icon: asset("/logos/java.png")
        },
        { 
          title: "Spring Boot", 
          desc: "Framework avanzato per la creazione rapida di API REST e servizi backend robusti.", 
          icon: asset("/logos/springboot.png")
        },
        { 
          title: "MySQL", 
          desc: "Database relazionale performante per la gestione organizzata e sicura dei dati.", 
          icon: asset("/logos/mysql.png")
        },
        { 
          title: "PostgreSQL", 
          desc: "Database relazionale avanzato con forte enfasi su estendibilità e integrità.", 
          icon: asset("/logos/postgresql.png")
        },
        { 
          title: "MongoDB", 
          desc: "Database NoSQL flessibile e orientato ai documenti per grandi volumi di dati.", 
          icon: asset("/logos/mongodb.png")
        }
      ]
    },
    {
      id: "enterprise",
      title: "Enterprise Tools",
      badge: "DevOps & Workflow",
      bgBadge: "bg-bubble darkcyber-gray-span",
      bgSection: "bg-card",
      bgImage: asset("/illustrations/Back3.svg"),
      badgeSticky: "Automazione & CI/CD",
      quoteSticky: (
        <>
          Workflow<br />
          e ambienti<br />
          <span className="darkcyber-gray-span relative inline-block">
            <span className="relative z-10">agili</span>
            <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-purple-300"></span>
          </span>
        </>
      ),
      icon: <Wrench size={40} className="text-foreground" />,
      items: [
        { 
          title: "Jira & Scriptrunner", 
          desc: "Gestione avanzata dei task e automazione dei flussi di lavoro aziendali.", 
          icon: asset("/logos/jira.png")
        },
        { 
          title: "Docker", 
          desc: "Containerizzazione dei servizi per ambienti di sviluppo coerenti e isolati.", 
          icon: asset("/logos/docker.png")
        },
        { 
          title: "Git & GitHub Actions CI/CD", 
          desc: "Controllo versione e pipeline automatizzate per rilasci rapidi e sicuri.", 
          icon: asset("/logos/github.png")
        },
      ]
    }
  ];

  return (
    <div id="tech-stack" className="w-full scroll-mt-4 bg-card border-b-2 border-ink">
      {categories.map((cat, catIdx) => (
        <section 
          key={cat.id} 
          style={cat.bgImage ? { backgroundImage: `url(${cat.bgImage})` } : undefined}
          className={`relative flex min-h-[auto] w-full max-w-[100vw] flex-col place-items-center border-x-2 border-ink/40 border-ink pb-16 pt-0 md:min-h-[100vh] md:py-16 lg:p-6 ${cat.bgSection} ${cat.bgImage ? 'bg-cover bg-center bg-no-repeat' : ''}`}
        >
          {/* Intestazione della sezione */}
          <div className="relative z-10 mb-0 md:mb-8 w-full rounded-none border-none md:border-2 border-ink bg-card px-4 py-4 shadow-none sm:rounded-xl sm:px-8 sm:py-5 sm:shadow-hard-sm">
            <div className="text-center">
              <span className={`mb-3 inline-flex items-center gap-2 rounded-full border-2 border-ink ${cat.bgBadge} px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-hard-sm`}>
                0{catIdx + 1} // {cat.badge}
              </span>
              <h2 className="font-display text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
                {cat.title}
              </h2>
            </div>
          </div>

          {/* Contenitore a due colonne stile scroll */}
          <div className="reveal-up relative z-10 mt-4 flex h-full w-full place-content-center gap-8 p-4 max-lg:max-w-full max-lg:flex-col">

            {/* COLONNA SINISTRA: Testi grandi e distanziati con logo */}
            <div className="flex h-full w-full max-w-[50%] flex-col gap-6 px-4 py-4 max-lg:order-2 max-lg:max-w-full max-lg:gap-6 max-lg:px-4 sm:gap-[80px] sm:px-8 sm:py-8">
              {cat.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 rounded-xl border-2 border-ink bg-card p-4 text-center shadow-hard-sm sm:flex-row sm:items-start sm:p-6 sm:text-left">

                  {/* LOGO O ICONA */}
                  <div className="flex h-14 w-14 min-h-14 min-w-14 shrink-0 items-center justify-center sm:mt-1 sm:h-20 sm:w-20">
                    {typeof item.icon === 'string' ? (
                      <img src={item.icon} alt={item.title} className="h-full w-full rounded-lg object-contain" />
                    ) : (
                      item.icon
                    )}
                  </div>

                  <div>
                    <h3 className="mb-2 font-display text-xl font-extrabold text-foreground sm:text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* COLONNA DESTRA: Badge + Testo Sticky DINAMICI */}
            <div className="relative flex max-w-[40%] flex-col place-items-start gap-4 rounded-xl border-2 border-ink bg-card p-4 shadow-hard-sm max-lg:order-1 max-lg:w-full max-lg:max-w-full max-lg:place-content-center max-lg:place-items-center sm:p-8">
              <div className="top-50 w-full max-w-[420px] max-lg:flex max-lg:flex-col max-lg:items-center lg:sticky">

                {/* BADGE SPARKLES */}
                <span className="darkcyber-gray-span inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-hard-sm minimal-grape-accent darkcyber-gray-span">
                  <Sparkles size={14} className="aria-hidden:true" />
                  {cat.badgeSticky}
                </span>

                {/* TITOLO / QUOTE */}
                <h1 className="mt-6 text-balance font-display text-3xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-6xl">
                  {cat.quoteSticky}
                </h1>

              </div>
            </div>

          </div>
        </section>
      ))}
    </div>
  )
}
