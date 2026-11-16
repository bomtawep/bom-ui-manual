'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFRadioGroup, toast } from '@bomtawep/ui'

const schema = z.object({
  shipping: z.string().min(1, 'เลือกวิธีจัดส่ง'),
  size: z.string(),
})
type Values = z.infer<typeof schema>

export default function RHFRadioGroupBasic() {
  const methods = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { shipping: '', size: 'm' } })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('บันทึกแล้ว', { description: JSON.stringify(v) }))}
      className="w-full max-w-md"
    >
      <FieldGroup>
        <RHFRadioGroup<Values>
          name="shipping"
          label="วิธีจัดส่ง"
          variant="card"
          required
          options={[
            { value: 'standard', label: 'ส่งธรรมดา', description: '3–5 วันทำการ · ฟรี' },
            { value: 'express', label: 'ส่งด่วน', description: '1 วันทำการ · ฿60' },
          ]}
        />
        <RHFRadioGroup<Values>
          name="size"
          label="ขนาด"
          orientation="horizontal"
          options={[
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
          ]}
        />
        <Button type="submit">บันทึก</Button>
      </FieldGroup>
    </FormProvider>
  )
}
