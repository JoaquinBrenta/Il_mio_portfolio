import Link from 'next/link'
import { Mail, Briefcase, Phone } from 'lucide-react'

const GMAIL = 'joaquinbrenta2005@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/'
const PHONE_DISPLAY = '+39 320 869 5095'
const PHONE_TEL = '+393208695095'

export function SiteFooter() {
  return (
    <footer className="w-full">
      {/* Stesso contenitore della navbar: border-2 border-ink bg-card — centrato su mobile */}
      <div className="flex flex-col items-center gap-4 border-x-2 border-b-2 border-t-2 border-ink bg-card px-4 py-6 text-center md:flex-row md:items-center md:justify-between md:gap-3 md:py-3 md:text-left">
        {/* Left — brand identico alla navbar, centrato su mobile */}
        <Link href="/" className="flex items-center justify-center gap-2 md:justify-start">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-ink bg-grape font-display text-sm font-bold text-primary-foreground">
            JB
          </span>
          <span className="darkcyber-gray-span font-display text-base font-bold tracking-tight">
            Joaquin Kurt Brenta
          </span>
        </Link>

        {/* Center — contatti stile pill navbar: LinkedIn / Gmail / Telefono, centrati su mobile */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:justify-start">
          <a
            href={`mailto:${GMAIL}`}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted darkcyber-gray-span"
          >
            <Mail size={16} className="shrink-0" />
            Gmail
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted darkcyber-gray-span"
          >
            <Briefcase size={16} className="shrink-0" />
            LinkedIn
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted darkcyber-gray-span"
          >
            <Phone size={16} className="shrink-0" />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Right — copyright + Torna su, centrati su mobile */}
        <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:items-center md:justify-end">
          <p className="text-center text-sm font-medium text-muted-foreground md:text-left">
            © {new Date().getFullYear()} — Fatto con cura e caffè.
          </p>
          <a
            href="#top"
            className="darkcyber-purple-span inline-flex shrink-0 rounded-lg border-2 border-ink bg-sun px-4 py-2 text-sm font-bold text-accent-foreground shadow-hard-sm transition-hard hover:-translate-y-0.5 hover:shadow-hard"
          >
            Torna su ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
