'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFDatePicker, toast } from '@bomtawep/ui'

const schema = z.object({
  start: z.date({ error: 'เลือกวันที่' }),
  birthday: z.date({ error: 'กรอกวันเกิดเป็น วว/ดด/ปปปป' }),
  meeting: z.date().nullable(),
})
type Values = z.infer<typeof schema>

export default function RHFDatePickerBasic() {
  const methods = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { start: undefined, birthday: undefined, meeting: null },
  })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) =>
        toast.success('บันทึกแล้ว', { description: v.start.toLocaleDateString('th-TH', { dateStyle: 'long' }) }),
      )}
      className="w-full max-w-md"
    >
      <FieldGroup>
        {/* ปุ่มเปิดปฏิทิน (ค่าเริ่มต้น) */}
        <RHFDatePicker<Values> name="start" label="วันเริ่มงาน" required disabledDates={{ before: new Date() }} />

        {/* พิมพ์ได้ — รับทั้ง พ.ศ. และ ค.ศ. + dropdown ปีสำหรับวันเกิด */}
        <RHFDatePicker<Values>
          name="birthday"
          label="วันเกิด"
          variant="input"
          captionLayout="dropdown"
          startMonth={new Date(1940, 0)}
          endMonth={new Date()}
          disabledDates={{ after: new Date() }}
          required
        />

        {/* พร้อมช่องเวลา */}
        <RHFDatePicker<Values> name="meeting" label="วันนัดประชุม" showTime timeLabel="เวลา" />
        <Button type="submit">บันทึก</Button>
      </FieldGroup>
    </FormProvider>
  )
}
