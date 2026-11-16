'use client'

import { FolderOpen, Plus, Upload } from 'lucide-react'
import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@bomtawep/ui'

export default function EmptyBasic() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen />
        </EmptyMedia>
        <EmptyTitle>ยังไม่มีเอกสาร</EmptyTitle>
        <EmptyDescription>เริ่มต้นด้วยการสร้างเอกสารแรก หรืออัปโหลดไฟล์ที่มีอยู่แล้ว</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex flex-wrap justify-center gap-2">
          <Button type="button">
            <Plus /> สร้างเอกสาร
          </Button>
          <Button type="button" variant="outline">
            <Upload /> อัปโหลด
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  )
}
