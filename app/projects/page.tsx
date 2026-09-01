import { SiteNav } from "@/components/layout/site-nav"
import { SiteFooter } from "@/components/layout/site-footer"
import { Projects } from "@/components/projects/projects"

// Importante: ci deve essere "export default"
export default function ProjectsPage() {
  return (
    <main className="flex min-h-dvh flex-col bg-card">
      <SiteNav />
      <div className="flex-1">
        <Projects />
      </div>
      <SiteFooter />
    </main>
  )
}