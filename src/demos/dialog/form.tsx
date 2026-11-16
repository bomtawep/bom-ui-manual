'use client'

import { useState, type FormEvent } from 'react'
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
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  toast,
} from '@bomtawep/ui'

export default function DialogForm() {
  const [open, setOpen] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const name = new FormData(e.currentTarget).get('name')
    toast.success(`บันทึกโปรไฟล์ของ ${name} แล้ว`)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">แก้ไขโปรไฟล์</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <form onSubmit={onSubmit} className="grid gap-4">
          <DialogHeader>
            <DialogTitle>แก้ไขโปรไฟล์</DialogTitle>
            <DialogDescription>เปลี่ยนข้อมูลแล้วกดบันทึก</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="dialog-name">ชื่อ</FieldLabel>
              <Input id="dialog-name" name="name" defaultValue="สมชาย ใจดี" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-username">ชื่อผู้ใช้</FieldLabel>
              <Input id="dialog-username" name="username" defaultValue="@somchai" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              {/* Button ไม่ตั้ง type ให้เอง — ในฟอร์มต้องระบุ type="button" ไม่งั้นจะ submit */}
              <Button type="button" variant="outline">
                ยกเลิก
              </Button>
            </DialogClose>
            <Button type="submit">บันทึก</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
