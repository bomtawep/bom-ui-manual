'use client'

import { Plus } from 'lucide-react'
import { Button } from '@bomtawep/ui'

export default function ButtonSizes() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" size="icon-xs" aria-label="เพิ่ม">
          <Plus />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="เพิ่ม">
          <Plus />
        </Button>
        <Button variant="outline" size="icon" aria-label="เพิ่ม">
          <Plus />
        </Button>
        <Button variant="outline" size="icon-lg" aria-label="เพิ่ม">
          <Plus />
        </Button>
      </div>
    </div>
  )
}
