'use client'

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@bomtawep/ui'

export default function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ดูรายละเอียด</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ใบแจ้งหนี้ INV-2569-001</DialogTitle>
          <DialogDescription>ออกเมื่อ 1 พฤศจิกายน 2569 · ครบกำหนดชำระ 30 พฤศจิกายน 2569</DialogDescription>
        </DialogHeader>
        <p>ยอดรวม 12,500.00 บาท (รวมภาษีมูลค่าเพิ่มแล้ว)</p>
        {/* showCloseButton = เพิ่มปุ่ม "ปิด" (ข้อความจาก messages.close ของ BomUIProvider) */}
        <DialogFooter showCloseButton>
          <DialogClose asChild>
            <Button>ดาวน์โหลด PDF</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
