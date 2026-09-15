const items = [
  'Full Stack Developer',
  'Siti Web & Web App',
  'React & Next.js',
  'Landing Pages',
  'Java & Spring Boot',
  'UI & UX Design',
  'TypeScript',
  'Database & API',
]

export function MarqueeBand() {
  return (
    <div className="overflow-hidden border-b-2 border-ink bg-grape py-3 text-primary-foreground border-x-2 border-t">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg font-bold tracking-tight">
            {item}
            <span aria-hidden className="text-sun">
               &lt; / &gt;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
