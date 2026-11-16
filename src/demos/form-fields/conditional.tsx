'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { Button, FormFields, FormFieldType, FormProvider, toast, type FormFieldConfig } from '@bomtawep/ui'

// ช่องที่ซ่อน (isHide) ยังมีค่าใน form — ตรวจแบบมีเงื่อนไขใน schema
const schema = z
  .object({
    contactBy: z.enum(['email', 'phone']),
    email: z.string(),
    phone: z.string(),
    isCompany: z.boolean(),
    company: z.string(),
  })
  .superRefine((v, ctx) => {
    if (v.contactBy === 'email' && !z.email().safeParse(v.email).success)
      ctx.addIssue({ code: 'custom', path: ['email'], message: 'รูปแบบอีเมลไม่ถูกต้อง' })
    if (v.contactBy === 'phone' && !/^0\d{9}$/.test(v.phone))
      ctx.addIssue({ code: 'custom', path: ['phone'], message: 'เบอร์โทร 10 หลัก ขึ้นต้นด้วย 0' })
    if (v.isCompany && !v.company.trim())
      ctx.addIssue({ code: 'custom', path: ['company'], message: 'กรอกชื่อบริษัท' })
  })
type Values = z.infer<typeof schema>

export default function FormFieldsConditional() {
  const methods = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { contactBy: 'email', email: '', phone: '', isCompany: false, company: '' },
  })
  const [contactBy, isCompany] = useWatch({ control: methods.control, name: ['contactBy', 'isCompany'] })

  // สร้าง config ใน component เมื่อขึ้นกับค่าในฟอร์ม
  const fields: FormFieldConfig<Values>[] = [
    {
      type: FormFieldType.RADIO,
      props: {
        name: 'contactBy',
        label: 'ช่องทางติดต่อกลับ',
        orientation: 'horizontal',
        options: [
          { value: 'email', label: 'อีเมล' },
          { value: 'phone', label: 'โทรศัพท์' },
        ],
      },
    },
    // isHide = ไม่ render ช่องนั้น
    { type: FormFieldType.INPUT, isHide: contactBy !== 'email', isRequired: true, props: { name: 'email', label: 'อีเมล', type: 'email' } },
    // ใส่ type เป็น string ตรง ๆ ก็ได้
    { type: 'input', isHide: contactBy !== 'phone', isRequired: true, props: { name: 'phone', label: 'เบอร์โทร', inputMode: 'tel' } },
    { type: FormFieldType.SWITCH, props: { name: 'isCompany', label: 'ออกใบกำกับภาษีในนามบริษัท' } },
    // isDisabled / isRequired เปลี่ยนตามค่าอื่นได้ (ชนะค่า disabled / required ใน props)
    { type: FormFieldType.INPUT, isDisabled: !isCompany, isRequired: isCompany, props: { name: 'company', label: 'ชื่อบริษัท' } },
  ]

  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('บันทึกแล้ว', { description: JSON.stringify(v) }))}
      className="flex w-full max-w-md flex-col gap-6"
    >
      <FormFields<Values> fields={fields} />
      <Button type="submit" className="self-start">
        บันทึก
      </Button>
    </FormProvider>
  )
}
