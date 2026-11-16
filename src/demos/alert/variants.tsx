'use client'

import { CircleAlert, Info } from 'lucide-react'
import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from '@bomtawep/ui'

export default function AlertVariants() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Alert>
        <Info />
        <AlertTitle>มีเวอร์ชันใหม่</AlertTitle>
        <AlertDescription>@bomtawep/ui 1.0.2 พร้อมให้อัปเดตแล้ว</AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            ดูการเปลี่ยนแปลง
          </Button>
        </AlertAction>
      </Alert>
      <Alert>
        <AlertTitle>ไม่มีไอคอน</AlertTitle>
        <AlertDescription>ถ้าไม่มี svg เป็นลูกตัวแรก ข้อความจะชิดซ้าย</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>ส่งข้อมูลไม่สำเร็จ</AlertTitle>
        <AlertDescription>กรุณาตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง</AlertDescription>
      </Alert>
    </div>
  )
}
