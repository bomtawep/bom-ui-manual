'use client'

import { Checkbox, Input, Label } from '@bomtawep/ui'

export default function LabelBasic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="grid gap-2">
        <Label htmlFor="label-email">อีเมล</Label>
        <Input id="label-email" type="email" placeholder="you@example.com" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="label-terms" />
        <Label htmlFor="label-terms">ยอมรับเงื่อนไขการใช้งาน</Label>
      </div>
    </div>
  )
}
