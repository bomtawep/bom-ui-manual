'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FormFields, FormFieldType, FormProvider, toast, type FormFieldConfig } from '@bomtawep/ui'

const schema = z.object({
  name: z.string().min(1, 'กรอกชื่อ-นามสกุล'),
  email: z.email('รูปแบบอีเมลไม่ถูกต้อง'),
  salary: z.string().regex(/^\d*$/, 'ตัวเลขเท่านั้น'),
  province: z.string().min(1, 'เลือกจังหวัด'),
  birthday: z.date({ error: 'เลือกวันเกิด' }),
  bio: z.string().max(200, 'ไม่เกิน 200 ตัวอักษร'),
  notify: z.boolean(),
  agree: z.boolean().refine((v) => v, 'ต้องยอมรับเงื่อนไข'),
})
type Values = z.infer<typeof schema>

// config อยู่นอก component ได้ (ไม่ขึ้นกับ state) — ชนิดของ props ตรวจตาม type ของแต่ละช่อง
const fields: FormFieldConfig<Values>[] = [
  {
    type: FormFieldType.CUSTOM,
    key: 'profile-heading',
    className: 'sm:col-span-2',
    render: () => <h3 className="text-base font-semibold">ข้อมูลส่วนตัว</h3>,
  },
  { type: FormFieldType.INPUT, isRequired: true, props: { name: 'name', label: 'ชื่อ-นามสกุล' } },
  { type: FormFieldType.INPUT, isRequired: true, props: { name: 'email', label: 'อีเมล', type: 'email' } },
  {
    type: FormFieldType.SELECT,
    isRequired: true,
    props: {
      name: 'province',
      label: 'จังหวัด',
      placeholder: 'เลือกจังหวัด',
      options: [
        { value: 'bkk', label: 'กรุงเทพฯ' },
        { value: 'cnx', label: 'เชียงใหม่' },
        { value: 'hkt', label: 'ภูเก็ต' },
      ],
    },
  },
  { type: FormFieldType.DATE, isRequired: true, props: { name: 'birthday', label: 'วันเกิด', variant: 'input' } },
  {
    type: FormFieldType.INPUT_GROUP,
    className: 'sm:col-span-2',
    props: { name: 'salary', label: 'เงินเดือนที่คาดหวัง', inlineStart: '฿', inlineEnd: 'บาท', inputMode: 'numeric' },
  },
  {
    type: FormFieldType.TEXTAREA,
    className: 'sm:col-span-2',
    props: { name: 'bio', label: 'แนะนำตัว', rows: 3, description: 'ไม่เกิน 200 ตัวอักษร' },
  },
  { type: FormFieldType.SWITCH, className: 'sm:col-span-2', props: { name: 'notify', label: 'รับข่าวสารทางอีเมล' } },
  {
    type: FormFieldType.CHECKBOX,
    className: 'sm:col-span-2',
    isRequired: true,
    props: { name: 'agree', label: 'ยอมรับเงื่อนไขการใช้งาน' },
  },
]

export default function FormFieldsBasic() {
  const methods = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', salary: '', province: '', birthday: undefined, bio: '', notify: true, agree: false },
  })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('สมัครสำเร็จ', { description: `${v.name} · ${v.email}` }))}
      className="flex w-full max-w-2xl flex-col gap-6"
    >
      <FormFields<Values> fields={fields} className="grid grid-cols-1 sm:grid-cols-2" />
      <Button type="submit" className="self-start">
        สมัครสมาชิก
      </Button>
    </FormProvider>
  )
}
