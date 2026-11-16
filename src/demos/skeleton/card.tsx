'use client'

import { Skeleton } from '@bomtawep/ui'

export default function SkeletonCard() {
  return (
    <div aria-busy="true" aria-label="กำลังโหลดโปรไฟล์" className="flex items-center gap-3">
      <Skeleton aria-hidden className="size-12 rounded-full" />
      <div aria-hidden className="grid gap-2">
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-4 w-40" />
      </div>
    </div>
  )
}
