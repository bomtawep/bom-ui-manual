'use client'

import { Button, toast } from '@bomtawep/ui'

const fakeUpload = () => new Promise<string>((resolve) => setTimeout(() => resolve('report.pdf'), 1500))

export default function ToasterPromise() {
  return (
    <Button
      onClick={() =>
        toast.promise(fakeUpload(), {
          loading: 'กำลังอัปโหลด…',
          success: (name) => `อัปโหลด ${name} สำเร็จ`,
          error: 'อัปโหลดไม่สำเร็จ',
        })
      }
    >
      อัปโหลดไฟล์
    </Button>
  )
}
