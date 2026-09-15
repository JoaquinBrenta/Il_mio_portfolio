import { SiteNav } from '@/components/layout/site-nav'
import { SiteFooter } from '@/components/layout/site-footer'
import { Contact } from '@/components/contact'

export default function ContattiPage() {
  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <SiteNav />
      <div className="flex flex-1 flex-col">
        <Contact />
      </div>
      <SiteFooter />
    </main>
  )
}
