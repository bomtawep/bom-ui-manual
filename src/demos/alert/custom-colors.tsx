'use client'

import { CircleCheck, TriangleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@bomtawep/ui'

// v1 มีแค่ default / destructive — สีอื่น (success, warning) ใส่ด้วย className
export default function AlertCustomColors() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Alert className="border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
        <CircleCheck />
        <AlertTitle>บันทึกสำเร็จ</AlertTitle>
        <AlertDescription className="text-emerald-800 dark:text-emerald-200">
          เอกสารถูกส่งให้ผู้อนุมัติแล้ว
        </AlertDescription>
      </Alert>
      <Alert className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100">
        <TriangleAlert />
        <AlertTitle>ใกล้ครบกำหนด</AlertTitle>
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          ใบแจ้งหนี้ 2 รายการจะครบกำหนดภายใน 3 วัน
        </AlertDescription>
      </Alert>
    </div>
  )
}
