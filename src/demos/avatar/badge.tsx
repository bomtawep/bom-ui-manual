'use client'

import { Check } from 'lucide-react'
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@bomtawep/ui'

export default function AvatarBadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/bomtawep.png" alt="bomtawep" />
        <AvatarFallback>BT</AvatarFallback>
        {/* จุดสถานะออนไลน์ */}
        <AvatarBadge className="bg-green-600" aria-label="ออนไลน์" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>สช</AvatarFallback>
        <AvatarBadge aria-label="ยืนยันตัวตนแล้ว">
          <Check />
        </AvatarBadge>
      </Avatar>
    </div>
  )
}
