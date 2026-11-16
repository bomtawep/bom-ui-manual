'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@bomtawep/ui'

export default function ButtonAsChild() {
  // ใช้กับ next/link ได้เหมือนกัน: <Button asChild><Link href="…">…</Link></Button>
  return (
    <Button variant="outline" asChild>
      <a href="/docs/installation">
        ไปหน้าการติดตั้ง <ArrowRight data-icon="inline-end" />
      </a>
    </Button>
  )
}
