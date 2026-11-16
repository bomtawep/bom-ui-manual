'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@bomtawep/ui'

export default function AvatarBasic() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/bomtawep.png" alt="bomtawep" />
        <AvatarFallback>BT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/bomtawep.png" alt="bomtawep" />
        <AvatarFallback>BT</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        {/* รูปโหลดไม่ได้ → แสดง fallback */}
        <AvatarImage src="/missing.png" alt="สมชาย ใจดี" />
        <AvatarFallback>สช</AvatarFallback>
      </Avatar>
    </div>
  )
}
