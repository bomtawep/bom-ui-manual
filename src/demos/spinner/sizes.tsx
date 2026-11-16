'use client'

import { Spinner } from '@bomtawep/ui'

export default function SpinnerSizes() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8 text-muted-foreground" aria-label="กำลังโหลดรายงาน" />
    </div>
  )
}
