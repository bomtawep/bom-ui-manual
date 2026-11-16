'use client'

import {
  Button,
  Checkbox,
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
  Textarea,
} from '@bomtawep/ui'

export default function FieldForm() {
  return (
    <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLegend>ข้อมูลผู้ติดต่อ</FieldLegend>
        <FieldDescription>ใช้สำหรับส่งใบเสร็จและติดต่อกลับ</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-name">ชื่อ-นามสกุล</FieldLabel>
            <Input id="field-name" placeholder="สมชาย ใจดี" />
          </Field>
          <Field data-invalid>
            <FieldLabel htmlFor="field-email">อีเมล</FieldLabel>
            <Input id="field-email" defaultValue="somchai@" aria-invalid aria-describedby="field-email-error" />
            <FieldError id="field-email-error" errors={[{ message: 'รูปแบบอีเมลไม่ถูกต้อง' }]} />
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="field-newsletter" />
            <FieldLabel htmlFor="field-newsletter">รับข่าวสารทางอีเมล</FieldLabel>
          </Field>
          <FieldSeparator>หรือ</FieldSeparator>
          <Field>
            <FieldLabel htmlFor="field-note">หมายเหตุ</FieldLabel>
            <Textarea id="field-note" />
            <FieldDescription>ไม่เกิน 500 ตัวอักษร</FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Button type="submit">บันทึก</Button>
            <Button variant="outline" type="reset">
              ล้าง
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}
