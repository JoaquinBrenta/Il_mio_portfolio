'use client'

import { PhaseListening } from "./phaseListening"
import { PhaseStylePlayground } from "./phaseStylePlayground"
import { Phase360Dedication } from "./phase360dedication"
import { PhaseProductLaunch } from "./phaseProductLanch"

export function MyMethod() {
  
  return (
      <>
      <PhaseListening />
      <PhaseStylePlayground />
      <Phase360Dedication />
      <PhaseProductLaunch />
    </>
  )
}
