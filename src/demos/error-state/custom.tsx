'use client'

import { ErrorState } from '@bomtawep/ui'

export default function ErrorStateCustom() {
  return (
    <ErrorState
      className="w-full"
      title="บันทึกไม่สำเร็จ"
      message="การเชื่อมต่อหมดเวลา กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองอีกครั้ง"
      retryLabel="ส่งอีกครั้ง"
      onRetry={() => {}}
    />
  )
}
