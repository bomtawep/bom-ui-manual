'use client'

import { ArrowRight, Plus } from 'lucide-react'
import { Button } from '@bomtawep/ui'

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Plus data-icon="inline-start" /> สร้างใหม่
      </Button>
      <Button variant="outline">
        ถัดไป <ArrowRight data-icon="inline-end" />
      </Button>
    </div>
  )
}
