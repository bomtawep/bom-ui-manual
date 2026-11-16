'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFCheckbox, toast } from '@bomtawep/ui'

const schema = z.object({
  channels: z.array(z.string()).min(1, 'เลือกอย่างน้อย 1 ช่องทาง'),
  plan: z.array(z.string()),
  terms: z.boolean().refine((v) => v, 'ต้องยอมรับเงื่อนไข'),
})
type Values = z.infer<typeof schema>

export default function RHFCheckboxBasic() {
  const methods = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { channels: ['email'], plan: [], terms: false },
  })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('บันทึกแล้ว', { description: JSON.stringify(v) }))}
      className="w-full max-w-md"
    >
      <FieldGroup>
        <RHFCheckbox<Values>
          name="channels"
          label="ช่องทางแจ้งเตือน"
          orientation="horizontal"
          options={[
            { value: 'email', label: 'อีเมล' },
            { value: 'sms', label: 'SMS' },
            { value: 'line', label: 'LINE' },
          ]}
        />
        <RHFCheckbox<Values>
          name="plan"
          label="บริการเสริม"
          variant="card"
          options={[
            { value: 'backup', label: 'สำรองข้อมูลรายวัน', description: '฿199 / เดือน' },
            { value: 'support', label: 'ซัพพอร์ต 24 ชม.', description: '฿499 / เดือน' },
          ]}
        />
        <RHFCheckbox<Values> name="terms" label="ยอมรับเงื่อนไขการใช้งาน" required />
        <Button type="submit">บันทึก</Button>
      </FieldGroup>
    </FormProvider>
  )
}
