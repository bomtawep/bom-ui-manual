'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFInput, toast } from '@bomtawep/ui'

const schema = z.object({
  email: z.email('รูปแบบอีเมลไม่ถูกต้อง'),
  password: z.string().min(8, 'อย่างน้อย 8 ตัวอักษร'),
})

type Values = z.infer<typeof schema>

export default function FormProviderBasic() {
  const methods = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: '', password: '' } })
  const onValid = (values: Values) => toast.success('เข้าสู่ระบบ', { description: values.email })

  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(onValid)} className="w-full max-w-sm">
      <FieldGroup>
        <RHFInput<Values> name="email" label="อีเมล" type="email" required />
        <RHFInput<Values> name="password" label="รหัสผ่าน" type="password" required />
        <Button type="submit" loading={methods.formState.isSubmitting}>
          เข้าสู่ระบบ
        </Button>
      </FieldGroup>
    </FormProvider>
  )
}
