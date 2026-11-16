'use client'

import { SearchX } from 'lucide-react'
import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@bomtawep/ui'

export default function EmptySearch() {
  return (
    <Empty>
      <EmptyHeader>
        {/* variant="default" (ค่าเริ่มต้น) = ไม่มีกรอบ เหมาะกับไอคอนใหญ่หรือรูปภาพ */}
        <EmptyMedia>
          <SearchX className="size-10 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>ไม่พบผลลัพธ์</EmptyTitle>
        <EmptyDescription>
          ไม่มีรายการที่ตรงกับ “ใบแจ้งหนี้ 2569” ลองเปลี่ยนคำค้นหา หรือ <a href="#">ดูวิธีค้นหา</a>
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button" variant="outline" size="sm">
          ล้างตัวกรอง
        </Button>
      </EmptyContent>
    </Empty>
  )
}
