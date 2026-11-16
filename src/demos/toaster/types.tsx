'use client'

import { Button, toast } from '@bomtawep/ui'

export default function ToasterTypes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline" onClick={() => toast('บันทึกฉบับร่างแล้ว')}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('อนุมัติเอกสารแล้ว', { description: 'INV-2569-001' })}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info('มีเวอร์ชันใหม่')}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning('ใกล้ครบกำหนดชำระ')}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error('บันทึกไม่สำเร็จ')}>
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('ลบรายการแล้ว', {
            action: { label: 'เลิกทำ', onClick: () => toast.success('กู้คืนรายการแล้ว') },
          })
        }
      >
        With action
      </Button>
    </div>
  )
}
