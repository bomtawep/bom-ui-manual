'use client'

import { Download, Plus } from 'lucide-react'
import { Button, PageHeader } from '@bomtawep/ui'

export default function PageHeaderBasic() {
  return (
    <PageHeader
      className="w-full"
      headingLevel={2}
      title="ใบแจ้งหนี้"
      description="จัดการใบแจ้งหนี้และติดตามการชำระเงิน"
      actions={
        <>
          <Button type="button" variant="outline">
            <Download /> ส่งออก
          </Button>
          <Button type="button">
            <Plus /> สร้างใบแจ้งหนี้
          </Button>
        </>
      }
    />
  )
}
