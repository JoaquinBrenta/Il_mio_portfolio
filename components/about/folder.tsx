'use client'

import { useState } from 'react'
import { Formazione } from './formazione'
import { Esperienza } from './esperienza'

const tabs = [
  { id: 'formazione', label: 'Formazione', bg: 'bg-sun', activeBorder: 'border-sun' },
  { id: 'esperienza', label: 'Esperienza', bg: 'bg-grape', activeBorder: 'border-grape' },
] as const

type TabId = (typeof tabs)[number]['id']

export function Folder() {
  const [active, setActive] = useState<TabId>('formazione')

  const activeTab = tabs.find((t) => t.id === active)!

  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg">
      {/* Tab bar */}
      <div className="flex items-end gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={[
              'relative rounded-t-2xl border-2 border-b-0 border-ink px-2.5 py-1.5 font-display text-[10px] font-extrabold transition-[filter] duration-150 sm:px-5 sm:py-2.5 sm:text-sm darkcyber-gray-span',
              tab.bg,
              active === tab.id
                ? 'z-10 mb-[-2px] pb-[calc(0.625rem+2px)]'
                : 'hover:brightness-110',
            ].join(' ')}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Folder body — color transitions with the active tab */}
      <div
        className={`relative rounded-tr-3xl rounded-br-3xl border-2 border-ink p-3 shadow-hard-lg transition-colors duration-300 sm:p-6 md:p-8 ${activeTab.bg}`}
      >
        {/* Decorative mac-style dots */}
        <div className="mb-4 flex items-center gap-1.5 sm:mb-6">
          <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-red-400 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-yellow-400 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-green-400 sm:h-3 sm:w-3" />
        </div>

        {/* Animated content — key forces remount on tab change, triggering animate-in */}
        <div key={active} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          {active === 'formazione' && <Formazione />}
          {active === 'esperienza' && <Esperienza />}
        </div>
      </div>
    </div>
  )
}
