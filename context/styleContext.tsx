'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type UIStyle = 'neobrutalism' | 'minimal' | 'darkcyber'

interface StyleContextType {
  currentStyle: UIStyle
  setCurrentStyle: (style: UIStyle) => void
}

const StyleContext = createContext<StyleContextType | undefined>(undefined)

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [currentStyle, setCurrentStyle] = useState<UIStyle>('neobrutalism')

  return (
    <StyleContext.Provider value={{ currentStyle, setCurrentStyle }}>
      <div data-theme-style={currentStyle} className="min-h-screen transition-colors duration-500">
        {children}
      </div>
    </StyleContext.Provider>
  )
}

export function useUIStyle() {
  const context = useContext(StyleContext)
  if (!context) throw new Error('useUIStyle deve essere usato dentro StyleProvider')
  return context
}