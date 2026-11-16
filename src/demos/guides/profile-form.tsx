'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Button,
  FieldGroup,
  FormProvider,
  RHFCheckbox,
  RHFDatePicker,
  RHFInput,
  RHFRadioGroup,
  RHFSelect,
  RHFSwitch,
  RHFTextArea,
  toast,
} from '@bomtawep/ui'

const schema = z.object({
  name: z.string().min(1, 'กรอกชื่อ'),
  email: z.email('รูปแบบอีเมลไม่ถูกต้อง'),
  province: z.string().min(1, 'เลือกจังหวัด'),
  start: z.date({ error: 'เลือกวันที่' }),
  type: z.string().min(1, 'เลือกประเภทการจ้าง'),
  skills: z.array(z.string()).min(1, 'เลือกอย่างน้อย 1 ทักษะ'),
  bio: z.string().max(200, 'ไม่เกิน 200 ตัวอักษร'),
  remote: z.boolean(),
})

type Values = z.infer<typeof schema>

export default function ProfileForm() {
  const methods = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', province: '', start: undefined, type: '', skills: [], bio: '', remote: false },
  })

  const onValid = async (values: Values) => {
    await new Promise((r) => setTimeout(r, 800)) // จำลองการเรียก API
    toast.success('บันทึกโปรไฟล์แล้ว', { description: `${values.name} · ${values.email}` })
    methods.reset()
  }

  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(onValid)} className="w-full max-w-lg">
      <FieldGroup>
        <RHFInput<Values> name="name" label="ชื่อ-นามสกุล" required />
        <RHFInput<Values> name="email" label="อีเมล" type="email" required description="ใช้สำหรับเข้าสู่ระบบ" />
        <RHFSelect<Values>
          name="province"
          label="จังหวัด"
          required
          options={[
            { value: 'bkk', label: 'กรุงเทพฯ' },
            { value: 'cnx', label: 'เชียงใหม่' },
            { value: 'hkt', label: 'ภูเก็ต' },
          ]}
        />
        <RHFDatePicker<Values> name="start" label="วันเริ่มงาน" variant="input" required />
        <RHFRadioGroup<Values>
          name="type"
          label="ประเภทการจ้าง"
          orientation="horizontal"
          required
          options={[
            { value: 'full', label: 'ประจำ' },
            { value: 'contract', label: 'สัญญาจ้าง' },
            { value: 'intern', label: 'ฝึกงาน' },
          ]}
        />
        <RHFCheckbox<Values>
          name="skills"
          label="ทักษะ"
          orientation="horizontal"
          options={[
            { value: 'react', label: 'React' },
            { value: 'next', label: 'Next.js' },
            { value: 'ts', label: 'TypeScript' },
          ]}
        />
        <RHFTextArea<Values> name="bio" label="แนะนำตัว" rows={3} />
        <RHFSwitch<Values> name="remote" label="ทำงานจากที่บ้านได้" />
        <div className="flex flex-wrap gap-2">
          <Button type="submit" loading={methods.formState.isSubmitting}>
            บันทึก
          </Button>
          {/* Button ไม่ตั้ง type="button" ให้เอง — ปุ่มอื่นในฟอร์มต้องระบุ ไม่งั้นจะ submit */}
          <Button type="button" variant="outline" onClick={() => methods.reset()}>
            ล้างฟอร์ม
          </Button>
        </div>
      </FieldGroup>
    </FormProvider>
  )
}
