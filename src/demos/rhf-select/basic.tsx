'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFSelect, toast } from '@bomtawep/ui'

const schema = z.object({
  role: z.string().min(1, 'เลือกบทบาท'),
  province: z.string().min(1, 'เลือกจังหวัด'),
})
type Values = z.infer<typeof schema>

export default function RHFSelectBasic() {
  const methods = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { role: '', province: '' } })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('บันทึกแล้ว', { description: JSON.stringify(v) }))}
      className="w-full max-w-md"
    >
      <FieldGroup>
        <RHFSelect<Values>
          name="role"
          label="บทบาท"
          required
          options={[
            { value: 'admin', label: 'ผู้ดูแลระบบ' },
            { value: 'editor', label: 'ผู้แก้ไข' },
            { value: 'viewer', label: 'ผู้อ่าน' },
            { value: 'owner', label: 'เจ้าของ (เต็มแล้ว)', disabled: true },
          ]}
        />
        <RHFSelect<Values>
          name="province"
          label="จังหวัด"
          placeholder="เลือกจังหวัด"
          position="popper"
          options={[
            { label: 'ภาคกลาง', options: [{ value: 'bkk', label: 'กรุงเทพฯ' }, { value: 'ayt', label: 'อยุธยา' }] },
            { label: 'ภาคเหนือ', options: [{ value: 'cnx', label: 'เชียงใหม่' }, { value: 'cri', label: 'เชียงราย' }] },
          ]}
        />
        <Button type="submit">บันทึก</Button>
      </FieldGroup>
    </FormProvider>
  )
}
