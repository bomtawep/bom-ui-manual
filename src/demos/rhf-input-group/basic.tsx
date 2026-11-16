'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFInputGroup, toast } from '@bomtawep/ui'

const schema = z.object({
  username: z.string().min(3, 'อย่างน้อย 3 ตัวอักษร'),
  bio: z.string().max(160, 'ไม่เกิน 160 ตัวอักษร'),
})

type Values = z.infer<typeof schema>

export default function RHFInputGroupBasic() {
  const methods = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { username: '', bio: '' } })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('บันทึกแล้ว', { description: JSON.stringify(v) }))}
      className="w-full max-w-md"
    >
      <FieldGroup>
        <RHFInputGroup<Values> name="username" label="ชื่อผู้ใช้" inlineStart={<AtSign />} required />
        <RHFInputGroup<Values>
          name="bio"
          label="แนะนำตัว"
          multiline
          rows={3}
          // addon เป็นฟังก์ชันของค่าปัจจุบันได้ — ตัวนับตัวอักษร
          blockEnd={(value) => `${value.length}/160`}
          describeAddons={['blockEnd']}
        />
        <Button type="submit">บันทึก</Button>
      </FieldGroup>
    </FormProvider>
  )
}
