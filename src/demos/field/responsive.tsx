'use client'

import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, Input, Switch } from '@bomtawep/ui'

export default function FieldResponsive() {
  return (
    <FieldGroup className="w-full max-w-xl">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="field-company">ชื่อบริษัท</FieldLabel>
          <FieldDescription>แนวตั้งเมื่อแคบ แนวนอนเมื่อ FieldGroup กว้าง ≥ 28rem</FieldDescription>
        </FieldContent>
        <Input id="field-company" placeholder="บริษัท ตัวอย่าง จำกัด" />
      </Field>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="field-2fa">ยืนยันตัวตนสองขั้นตอน</FieldLabel>
          <FieldDescription>ขอรหัส OTP ทุกครั้งที่เข้าสู่ระบบ</FieldDescription>
        </FieldContent>
        <Switch id="field-2fa" />
      </Field>
    </FieldGroup>
  )
}
