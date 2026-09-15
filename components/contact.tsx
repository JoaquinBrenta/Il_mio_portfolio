'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Send, Inbox, User, Briefcase, MessageCircle } from 'lucide-react'

const GMAIL = 'joaquinbrenta2005@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/'
const WHATSAPP = '393473319923'

const socials = [
  { icon: Mail, label: 'Gmail', href: `mailto:${GMAIL}` },
  { icon: Briefcase, label: 'LinkedIn', href: LINKEDIN },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const isValid = Boolean(formData.name.trim() && formData.message.trim())

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isValid) return
    const message = 'Ciao Joaquin, sono ' + formData.name.trim() + '.\n\n' + formData.message.trim()
    window.location.assign('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(message))
  }

  return (
    <section id="contatti" className="flex-1 scroll-mt-24 border-x-2 border-ink bg-background px-4 py-12 md:py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-ink bg-grape shadow-hard-lg">
        <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-[1fr_1.05fr] md:p-10">
          {/* LEFT */}
          <div className="flex flex-col text-primary-foreground">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-hard-sm darkcyber-gray-span">
              <Inbox size={14} />
              Contatti
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Ti va di fare <br />
              <span className="darkcyber-gray-span">due chiacchiere?</span>
            </h2>
            <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
              Una domanda sul mio percorso, un confronto sul codice o un semplice saluto: scrivimi, mi fa piacere conoscerti.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex h-14 w-14 flex-col items-center justify-center rounded-xl border-2 border-ink bg-card p-1 text-foreground shadow-hard-sm transition-hard hover:-translate-y-1 hover:shadow-hard sm:h-[68px] sm:w-[72px]"
                  >
                    <Icon size={20} className="shrink-0" />
                    <span className="mt-0.5 text-[10px] font-black leading-none">{s.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* RIGHT — message box */}
          <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-card shadow-hard">
            {/* Message window header */}
            <div className="flex items-center justify-between border-b-2 border-ink bg-muted px-3 py-2.5 sm:px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-emerald-400" />
              </div>
              <div className="flex items-center gap-1.5 rounded-md border-2 border-ink bg-background px-2.5 py-1 font-mono text-[11px] font-bold text-muted-foreground shadow-2xs darkcyber-gray-span">
                <MessageCircle size={12} />
                Nuovo messaggio
              </div>
              <span className="hidden text-[10px] font-black uppercase tracking-wider text-muted-foreground sm:block">bozza</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
              <div className="grid gap-3">
                <div>
                  <label htmlFor="name" className="mb-1 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground">
                    <User size={12} /> Nome *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Il tuo nome"
                    className="w-full rounded-xl border-2 border-ink bg-background px-3 py-2.5 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60 focus:shadow-hard-sm focus:border-grape"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <label htmlFor="message" className="mb-1 block text-xs font-black uppercase tracking-wider text-muted-foreground">
                  Messaggio * <span className="ml-2 font-mono text-[11px] font-normal normal-case text-muted-foreground">{formData.message.length}/1000</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ciao Joaquin! Ti scrivo per…"
                  className="min-h-[110px] w-full flex-1 resize-none rounded-xl border-2 border-ink bg-background px-3 py-2.5 text-sm font-medium leading-relaxed text-foreground outline-none placeholder:text-muted-foreground/60 focus:shadow-hard-sm"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-grape px-6 py-3 text-sm font-black text-primary-foreground shadow-hard-sm transition-hard hover:-translate-y-0.5 hover:shadow-hard disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 darkcyber-purple-span"
              >
                Continua su WhatsApp
                <Send size={16} />
              </button>

              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                Si aprirà WhatsApp con il messaggio pronto per il numero +39 347 331 9923.
                Potrai rileggerlo e inviarlo dalla chat.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
