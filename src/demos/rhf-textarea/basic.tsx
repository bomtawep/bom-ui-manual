'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFTextArea, toast } from '@bomtawep/ui'

const schema = z.object({ reason: z.string().min(10, 'อธิบายอย่างน้อย 10 ตัวอักษร') })
type Values = z.infer<typeof schema>

export default function RHFTextAreaBasic() {
  const methods = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { reason: '' } })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('ส่งคำขอแล้ว', { description: v.reason }))}
      className="w-full max-w-md"
    >
      <FieldGroup>
        <RHFTextArea<Values>
          name="reason"
          label="เหตุผลที่ขอแก้ไข"
          description="ผู้อนุมัติจะเห็นข้อความนี้"
          descriptionPosition="top"
          rows={4}
          required
        />
        <Button type="submit">ส่งคำขอ</Button>
      </FieldGroup>
    </FormProvider>
  )
}
