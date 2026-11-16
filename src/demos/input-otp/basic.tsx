'use client'

import { useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, toast } from '@bomtawep/ui'

export default function InputOTPBasic() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-3">
      <InputOTP
        aria-label="รหัส OTP"
        maxLength={6}
        pattern="^\d+$" // ตัวเลขเท่านั้น (เท่ากับ REGEXP_ONLY_DIGITS ของ input-otp)
        inputMode="numeric"
        value={value}
        onChange={setValue}
        onComplete={(code: string) => toast.success(`ยืนยันรหัส ${code}`)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">ค่า: {value || '—'}</p>
    </div>
  )
}
