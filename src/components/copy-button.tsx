'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { IconButton, toast } from '@bomtawep/ui'

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success('คัดลอกโค้ดแล้ว')
      setTimeout(() => setCopied(false), 1500)
    } catch {
      toast.error('คัดลอกไม่สำเร็จ')
    }
  }
  return (
    <IconButton aria-label="คัดลอกโค้ด" size="sm" onClick={copy} className={className}>
      {copied ? <Check /> : <Copy />}
    </IconButton>
  )
}
