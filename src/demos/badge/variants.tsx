'use client'

import { BadgeCheck } from 'lucide-react'
import { Badge } from '@bomtawep/ui'

export default function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">รอตรวจ</Badge>
      <Badge variant="outline">ฉบับร่าง</Badge>
      <Badge variant="destructive">ปฏิเสธ</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link" asChild>
        <a href="#">Link</a>
      </Badge>
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" /> อนุมัติ
      </Badge>
    </div>
  )
}
