'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Badge, Button, FieldGroup, FormProvider, RHFInput, toast } from '@bomtawep/ui'

const schema = z.object({
  name: z.string().min(1, 'กรอกชื่อ'),
  website: z.string().min(1, 'กรอกโดเมน'),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, 'ตัวเลขเท่านั้น'),
  code: z.string().optional(),
})

type Values = z.infer<typeof schema>

export default function RHFInputBasic() {
  const methods = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', website: '', price: '', code: '' },
  })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('ส่งข้อมูลแล้ว', { description: JSON.stringify(v) }))}
      className="w-full max-w-md"
    >
      <FieldGroup>
        <RHFInput<Values> name="name" label="ชื่อร้าน" required description="แสดงบนใบเสร็จ" />
        <RHFInput<Values>
          name="website"
          label="เว็บไซต์"
          labelExtra={<Badge variant="secondary">Beta</Badge>}
          startAddon="https://"
          placeholder="shop.example.com"
        />
        <RHFInput<Values> name="price" label="ราคา" endAddon="บาท" inputMode="decimal" orientation="horizontal" />
        <RHFInput<Values>
          name="code"
          label="รหัสส่วนลด"
          append={
            <Button type="button" variant="outline">
              ใช้โค้ด
            </Button>
          }
          attachAppend
        />
        <Button type="submit">บันทึก</Button>
      </FieldGroup>
    </FormProvider>
  )
}
