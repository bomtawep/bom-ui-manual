'use client'

import { Separator } from '@bomtawep/ui'

export default function SeparatorBasic() {
  return (
    <div className="w-full max-w-sm text-sm">
      <p className="font-medium">@bomtawep/ui</p>
      <p className="text-muted-foreground">React component library สำหรับ Next.js</p>
      <Separator className="my-3" />
      <div className="flex h-5 items-center gap-3">
        <span>เอกสาร</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>GitHub</span>
      </div>
    </div>
  )
}
