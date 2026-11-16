'use client'

import { useState } from 'react'
import { ErrorState, Spinner } from '@bomtawep/ui'

export default function ErrorStateBasic() {
  const [retrying, setRetrying] = useState(false)
  const retry = () => {
    setRetrying(true)
    setTimeout(() => setRetrying(false), 1200)
  }
  if (retrying) return <Spinner />
  return (
    <ErrorState
      className="w-full"
      message="Request failed with status 503 (Service Unavailable)"
      onRetry={retry}
    />
  )
}
