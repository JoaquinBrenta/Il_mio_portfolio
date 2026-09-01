'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    /* Rimosso fixed/sticky: ora l'header scorre via con la pagina */
    <header className="w-full">
      <nav
        className="flex items-center justify-between border-2 border-ink bg-card px-4 py-3 "
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-ink bg-grape font-display text-sm font-bold text-primary-foreground">
            JB
          </span>
          <span className="darkcyber-gray-span max-w-[110px] truncate font-display text-lg font-bold tracking-tight sm:max-w-none">Joaquin Kurt Brenta</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold transition-colors darkcyber-gray-span"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="darkcyber-purple-span hidden rounded-lg border-2 border-ink bg-sun px-4 py-2 text-sm font-bold text-accent-foreground shadow-hard-sm transition-hard hover:-translate-y-0.5 hover:shadow-hard md:inline-block"
        >
          Let&apos;s work together
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink bg-bubble text-ink md:hidden"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border-2 border-ink bg-card p-2 shadow-hard md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="darkcyber-gray-span mt-1 block rounded-lg border-2 border-ink bg-sun px-3 py-3 text-center text-sm font-bold text-accent-foreground"
              >
                Let&apos;s work together
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}