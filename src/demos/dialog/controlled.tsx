'use client'

import { useState } from 'react'
import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@bomtawep/ui'

export default function DialogControlled() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>เปิดจากโค้ด</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Controlled dialog</DialogTitle>
            <DialogDescription>ควบคุมด้วย state ของคุณผ่าน open / onOpenChange (ซ่อนปุ่ม X ด้วย showCloseButton=&#123;false&#125;)</DialogDescription>
          </DialogHeader>
          <Button variant="outline" onClick={() => setOpen(false)}>
            ปิด
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
