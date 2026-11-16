'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFDateRangePicker, toast } from '@bomtawep/ui'

const schema = z.object({
  leave: z.object(
    { from: z.date(), to: z.date({ error: 'เลือกวันสิ้นสุด' }) },
    { error: 'เลือกช่วงวันลา' },
  ),
})
type Values = z.infer<typeof schema>

const fmt = (d: Date) => d.toLocaleDateString('th-TH', { dateStyle: 'medium' })

export default function RHFDateRangePickerBasic() {
  const methods = useForm<Values>({ resolver: zodResolver(schema) })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) =>
        toast.success('ส่งใบลาแล้ว', { description: `${fmt(v.leave.from)} – ${fmt(v.leave.to)}` }),
      )}
      className="w-full max-w-md"
    >
      <FieldGroup>
        <RHFDateRangePicker<Values>
          name="leave"
          label="ช่วงวันลา"
          description="ลาได้สูงสุด 10 วัน"
          max={10}
          disabledDates={[{ before: new Date() }, { dayOfWeek: [0, 6] }]}
          required
        />
        <Button type="submit">ส่งใบลา</Button>
      </FieldGroup>
    </FormProvider>
  )
}
