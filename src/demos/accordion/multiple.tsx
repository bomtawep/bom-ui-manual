'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@bomtawep/ui'

export default function AccordionMultiple() {
  return (
    <Accordion type="multiple" defaultValue={['shipping', 'returns']} className="w-full max-w-lg">
      <AccordionItem value="shipping">
        <AccordionTrigger>การจัดส่ง</AccordionTrigger>
        <AccordionContent>จัดส่งภายใน 2–3 วันทำการ ฟรีเมื่อสั่งซื้อครบ 500 บาท</AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>การคืนสินค้า</AccordionTrigger>
        <AccordionContent>คืนสินค้าได้ภายใน 14 วันหลังได้รับ</AccordionContent>
      </AccordionItem>
      <AccordionItem value="warranty" disabled>
        <AccordionTrigger>การรับประกัน (ปิดใช้งาน)</AccordionTrigger>
        <AccordionContent>รับประกัน 1 ปี</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
