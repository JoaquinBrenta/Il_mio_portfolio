import { Briefcase } from 'lucide-react'

const items = [
  { title: 'Front-End Developer', sub: 'Autodidatta', period: '2024 — 2026' },
  { title: 'Developer', sub: 'Exprivia', period: '2026 — Presente' },
  { title: 'Full Stack Developer', sub: 'Freelancer', period: '2026 — Presente' },
]

export function Esperienza() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3 sm:mb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-ink bg-card shadow-hard-sm sm:h-10 sm:w-10">
          <Briefcase size={18} className="text-foreground sm:size-5" />
        </span>
        <h3 className="font-display text-lg font-black text-primary-foreground sm:text-xl md:text-2xl">Experience</h3>
      </div>
      <ul className="space-y-3 sm:space-y-4">
        {items.map((item) => (
          <li key={item.title} className="rounded-2xl border-2 border-ink bg-card/20 p-2.5 shadow-hard-sm sm:p-4">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <p className="font-display font-bold text-primary-foreground">{item.title}</p>
                <p className="text-xs text-primary-foreground/70 sm:text-sm">{item.sub}</p>
              </div>
              <span className="shrink-0 rounded-full border-2 border-ink bg-card/30 px-2 py-0.5 text-xs font-bold text-primary-foreground">
                {item.period}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
