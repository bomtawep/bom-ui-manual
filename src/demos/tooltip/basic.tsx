'use client'

import { Bold, Italic, Underline } from 'lucide-react'
import { ButtonGroup, IconButton, Tooltip, TooltipContent, TooltipTrigger } from '@bomtawep/ui'

const tools = [
  { label: 'ตัวหนา', icon: <Bold /> },
  { label: 'ตัวเอียง', icon: <Italic /> },
  { label: 'ขีดเส้นใต้', icon: <Underline /> },
]

// ต้องมี <TooltipProvider> ครอบอยู่ด้านบน (เว็บนี้วางไว้ใน root layout แล้ว)
export default function TooltipBasic() {
  return (
    <ButtonGroup>
      {tools.map((t) => (
        <Tooltip key={t.label}>
          <TooltipTrigger asChild>
            <IconButton aria-label={t.label} variant="outline">
              {t.icon}
            </IconButton>
          </TooltipTrigger>
          <TooltipContent side="bottom">{t.label}</TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  )
}
