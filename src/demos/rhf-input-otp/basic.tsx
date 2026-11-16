'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, FieldGroup, FormProvider, RHFInputOTP, toast } from '@bomtawep/ui'

const schema = z.object({ otp: z.string().length(6, 'กรอกรหัสให้ครบ 6 หลัก') })
type Values = z.infer<typeof schema>

export default function RHFInputOTPBasic() {
  const methods = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { otp: '' } })
  const onValid = (v: Values) => toast.success(`ยืนยันรหัส ${v.otp}`)
  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(onValid)}>
      <FieldGroup>
        <RHFInputOTP<Values>
          name="otp"
          label="รหัส OTP"
          description="ส่งไปที่เบอร์ 08x-xxx-1234"
          groups={[3, 3]}
          onComplete={() => methods.handleSubmit(onValid)()}
          required
        />
        <Button type="submit">ยืนยัน</Button>
      </FieldGroup>
    </FormProvider>
  )
}
