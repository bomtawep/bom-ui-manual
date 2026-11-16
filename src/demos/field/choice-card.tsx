'use client'

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from '@bomtawep/ui'

const plans = [
  { value: 'basic', title: 'Basic', description: 'ผู้ใช้ไม่เกิน 5 คน' },
  { value: 'pro', title: 'Pro', description: 'ผู้ใช้ไม่จำกัด พร้อมรายงาน' },
]

export default function FieldChoiceCard() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend variant="label">แพ็กเกจ</FieldLegend>
      <RadioGroup defaultValue="pro">
        {plans.map((p) => (
          // FieldLabel ครอบ Field ทั้งก้อน → คลิกได้ทั้งการ์ด
          <FieldLabel key={p.value} htmlFor={`plan-${p.value}`}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{p.title}</FieldTitle>
                <FieldDescription>{p.description}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={p.value} id={`plan-${p.value}`} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
