import { SiteNav } from '@/components/layout/site-nav'
import { SiteFooter } from '@/components/layout/site-footer'
import { Hero } from '@/components/hero'
import { MarqueeBand } from '@/components/marquee-band'
import { MyMethod } from '@/components/home/mymethod/mymethod'


export default function Page() {
  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <SiteNav />
      <div className="flex-1">
        <Hero />
        <MarqueeBand />
        <MyMethod />
      </div>
      <SiteFooter />
    </main>
  )
}
