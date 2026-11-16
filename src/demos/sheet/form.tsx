'use client'

import { useState, type FormEvent } from 'react'
import {
  Button,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  toast,
} from '@bomtawep/ui'

export default function SheetForm() {
  const [open, setOpen] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success('บันทึกข้อมูลลูกค้าแล้ว')
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">แก้ไขลูกค้า</Button>
      </SheetTrigger>
      <SheetContent>
        {/* ให้ form เป็น flex column เต็มความสูง เพื่อให้ SheetFooter (mt-auto) ชิดล่าง */}
        <form onSubmit={onSubmit} className="flex h-full flex-col">
          <SheetHeader>
            <SheetTitle>แก้ไขลูกค้า</SheetTitle>
            <SheetDescription>ข้อมูลนี้จะแสดงบนใบแจ้งหนี้</SheetDescription>
          </SheetHeader>
          <FieldGroup className="px-4">
            <Field>
              <FieldLabel htmlFor="sheet-company">ชื่อบริษัท</FieldLabel>
              <Input id="sheet-company" defaultValue="บริษัท เอ จำกัด" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-tax">เลขประจำตัวผู้เสียภาษี</FieldLabel>
              <Input id="sheet-tax" defaultValue="0105556000000" inputMode="numeric" />
            </Field>
          </FieldGroup>
          <SheetFooter>
            <Button type="submit">บันทึก</Button>
            <SheetClose asChild>
              <Button type="button" variant="outline">
                ยกเลิก
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
