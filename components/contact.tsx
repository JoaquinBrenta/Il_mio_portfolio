'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Send, Check, Copy, ExternalLink, Inbox, User, Phone, Clock, Sparkles, Briefcase, MessageCircle } from 'lucide-react'

const GMAIL = 'joaquinbrenta2005@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/joaquin-kurt-brenta-6879b9351/'
const WHATSAPP = '393208695095'

const socials = [
  { icon: Mail, label: 'Gmail', href: `mailto:${GMAIL}` },
  { icon: Briefcase, label: 'LinkedIn', href: LINKEDIN },
]

type ProjectType = 'Landing Page' | 'Web App' | 'Rework / Restyling' | 'Consulenza' | 'Altro'
type Timeline = 'Urgente (1 settimana)' | '2–4 settimane' | '1–2 mesi' | 'Flessibile'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '' as ProjectType | '',
    timeline: '' as Timeline | '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
    if (error) setError(null)
  }

  const buildMailto = () => {
    const subject = `[Portfolio] ${formData.projectType || 'Nuova richiesta'} — ${formData.name}`
    const lines = [
      `Ciao Joaquin,`,
      ``,
      `Sono ${formData.name} (${formData.email})${formData.phone ? ` — Tel: ${formData.phone}` : ''}.`,
      `Tipo progetto: ${formData.projectType || '—'}`,
      `Tempistiche: ${formData.timeline || '—'}`,
      ``,
      `Messaggio:`,
      formData.message,
      ``,
      `—`,
      `Inviato dal form portfolio`,
    ]
    const body = lines.join('\n')
    const mailto = `mailto:${GMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return { mailto, body, subject }
  }

  const buildWhatsapp = () => {
    const text = `Ciao Joaquin, sono ${formData.name} (${formData.email}${formData.phone ? `, ${formData.phone}` : ''}).\nTipo: ${formData.projectType || '—'} | Tempistiche: ${formData.timeline || '—'}\n\n${formData.message}`
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const { mailto } = buildMailto()
    try {
      const win = window.open(mailto, '_blank')
      // popup blocker -> win is null
      if (!win) {
        throw new Error('popup_blocked')
      }
      // also try location href as fallback
      setTimeout(() => {
        window.location.href = mailto
      }, 400)
    } catch {
      setError('Non è stato possibile aprire Gmail / il client email. Copia il messaggio o invialo su WhatsApp.')
    }
  }

  const handleCopy = async () => {
    const { body, subject } = buildMailto()
    const text = `Oggetto: ${subject}\n\n${body}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const isValid = formData.name.trim() && formData.email.trim() && formData.message.trim() && formData.projectType

  return (
    <section id="contatti" className="scroll-mt-24 border-x-2 border-ink bg-background px-4 py-12 md:py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-ink bg-grape shadow-hard-lg">
        <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-[1fr_1.05fr] md:p-10">
          {/* LEFT */}
          <div className="flex flex-col text-primary-foreground">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-hard-sm darkcyber-gray-span">
              <Inbox size={14} />
              Contatti
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Hai un&apos;idea? <br />
              <span className="darkcyber-gray-span">Diamole vita.</span>
            </h2>
            <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
              Che sia un prodotto da zero o un team da rinforzare, scrivimi due righe: rispondo di solito entro 24 ore.
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

          {/* RIGHT — email box */}
          <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-card shadow-hard">
            {/* email window header — ricorda casella email */}
            <div className="flex items-center justify-between border-b-2 border-ink bg-muted px-3 py-2.5 sm:px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-emerald-400" />
              </div>
              <div className="flex items-center gap-1.5 rounded-md border-2 border-ink bg-background px-2.5 py-1 font-mono text-[11px] font-bold text-muted-foreground shadow-2xs darkcyber-gray-span">
                <Mail size={12} />
                Nuovo messaggio
              </div>
              <span className="hidden text-[10px] font-black uppercase tracking-wider text-muted-foreground sm:block">bozza</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
              {error && (
                <div className="rounded-xl border-2 border-ink bg-tomato/10 px-3 py-3 text-sm font-medium text-foreground">
                  <p className="font-black text-tomato">Non è stato possibile aprire Gmail.</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{error}</p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-ink bg-card px-4 py-2.5 text-sm font-bold text-foreground shadow-hard-sm"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? 'Copiato!' : 'Copia messaggio'}
                    </button>
                    <a
                      href={buildWhatsapp()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-ink bg-[#25D366] px-4 py-2.5 text-sm font-black text-white shadow-hard-sm"
                    >
                      <MessageCircle size={16} />
                      Invia su WhatsApp
                    </a>
                  </div>
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
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
                    placeholder="Joaquin Brenta"
                    className="w-full rounded-xl border-2 border-ink bg-background px-3 py-2.5 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60 focus:shadow-hard-sm focus:border-grape"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground">
                    <Mail size={12} /> Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full rounded-xl border-2 border-ink bg-background px-3 py-2.5 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60 focus:shadow-hard-sm focus:border-grape"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground">
                    <Phone size={12} /> Telefono <span className="font-normal normal-case">(opz.)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39 3xx xxx xxxx"
                    className="w-full rounded-xl border-2 border-ink bg-background px-3 py-2.5 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60 focus:shadow-hard-sm"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="mb-1 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground">
                    <Sparkles size={12} /> Tipo progetto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-ink bg-background px-3 py-2.5 text-sm font-bold text-foreground outline-none focus:shadow-hard-sm"
                  >
                    <option value="">Seleziona…</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Web App">Web App</option>
                    <option value="Rework / Restyling">Rework / Restyling</option>
                    <option value="Consulenza">Consulenza</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="mb-1 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground">
                  <Clock size={12} /> Tempistiche
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-ink bg-background px-3 py-2.5 text-sm font-bold text-foreground outline-none focus:shadow-hard-sm"
                >
                  <option value="">Seleziona…</option>
                  <option value="Urgente (1 settimana)">Urgente (1 settimana)</option>
                  <option value="2–4 settimane">2–4 settimane</option>
                  <option value="1–2 mesi">1–2 mesi</option>
                  <option value="Flessibile">Flessibile</option>
                </select>
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
                  placeholder="Raccontami il progetto, obiettivi e tempistiche…"
                  className="min-h-[110px] w-full flex-1 resize-none rounded-xl border-2 border-ink bg-background px-3 py-2.5 text-sm font-medium leading-relaxed text-foreground outline-none placeholder:text-muted-foreground/60 focus:shadow-hard-sm"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-grape px-6 py-3 text-sm font-black text-primary-foreground shadow-hard-sm transition-hard hover:-translate-y-0.5 hover:shadow-hard disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 darkcyber-purple-span"
              >
                Invia — apri email
                <Send size={16} />
              </button>

              {/* fallback rapido sempre visibile se l'utente preferisce WhatsApp */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-[11px] font-medium text-muted-foreground">oppure</span>
                <a
                  href={buildWhatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#25D366] underline-offset-4 hover:underline"
                >
                  <MessageCircle size={14} />
                  Scrivi su WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
