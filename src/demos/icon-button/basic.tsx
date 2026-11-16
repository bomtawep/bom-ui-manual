'use client'

import { Pencil, Settings, Trash2 } from 'lucide-react'
import { IconButton } from '@bomtawep/ui'

export default function IconButtonBasic() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <IconButton aria-label="ตั้งค่า" size="xs">
        <Settings />
      </IconButton>
      <IconButton aria-label="ตั้งค่า" size="sm">
        <Settings />
      </IconButton>
      <IconButton aria-label="แก้ไข" variant="outline">
        <Pencil />
      </IconButton>
      <IconButton aria-label="ลบ" variant="destructive" size="lg">
        <Trash2 />
      </IconButton>
    </div>
  )
}
