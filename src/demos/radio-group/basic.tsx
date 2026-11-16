'use client'

import { Label, RadioGroup, RadioGroupItem } from '@bomtawep/ui'

export default function RadioGroupBasic() {
  return (
    <RadioGroup defaultValue="email" aria-label="ช่องทางการแจ้งเตือน" className="w-fit">
      {[
        { value: 'email', label: 'อีเมล' },
        { value: 'sms', label: 'SMS' },
        { value: 'none', label: 'ไม่ต้องแจ้ง' },
      ].map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`notify-${o.value}`} />
          <Label htmlFor={`notify-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
