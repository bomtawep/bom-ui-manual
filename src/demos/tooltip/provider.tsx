'use client'

import { Save } from 'lucide-react'
import { Button, Kbd, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@bomtawep/ui'

export default function TooltipWithProvider() {
  return (
    // ครอบซ้อนได้ — Provider ที่ใกล้ที่สุดกำหนด delay ของ tooltip ภายใน
    <TooltipProvider delayDuration={500}>
      <div className="flex flex-wrap items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Save data-icon="inline-start" /> บันทึก
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            บันทึกฉบับร่าง <Kbd>⌘S</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <span tabIndex={0} className="text-sm text-muted-foreground underline decoration-dotted underline-offset-4">
              VAT 7%
            </span>
          </TooltipTrigger>
          <TooltipContent side="right">ภาษีมูลค่าเพิ่ม คิดจากยอดก่อนภาษี</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
