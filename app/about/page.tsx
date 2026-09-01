import { SiteNav } from '@/components/layout/site-nav'
import { SiteFooter } from '@/components/layout/site-footer'
import { About } from '@/components/about/about'
import { TechStack } from '@/components/about/techstack'


export default function Page() {
  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <SiteNav />
      <div className="flex-1">
        <About />
        <TechStack />
      </div>
      <SiteFooter />
    </main>
  )
}
