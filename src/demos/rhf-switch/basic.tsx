'use client'

import { useForm } from 'react-hook-form'
import { Button, FieldGroup, FormProvider, RHFSwitch, toast } from '@bomtawep/ui'

type Values = { marketing: boolean; twoFactor: boolean; compact: boolean }

export default function RHFSwitchBasic() {
  const methods = useForm<Values>({ defaultValues: { marketing: false, twoFactor: true, compact: false } })
  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit((v) => toast.success('บันทึกแล้ว', { description: JSON.stringify(v) }))}
      className="w-full max-w-md"
    >
      <FieldGroup>
        <RHFSwitch<Values> name="twoFactor" label="ยืนยันตัวตนสองขั้นตอน" description="ขอ OTP ทุกครั้งที่เข้าสู่ระบบ" variant="card" />
        <RHFSwitch<Values> name="marketing" label="รับข่าวสารโปรโมชัน" labelPosition="end" />
        <RHFSwitch<Values> name="compact" label="โหมดกะทัดรัด" size="sm" />
        <Button type="submit">บันทึก</Button>
      </FieldGroup>
    </FormProvider>
  )
}
