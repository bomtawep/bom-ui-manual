'use client'

import { useState } from 'react'
import { Label, Switch } from '@bomtawep/ui'

export default function SwitchBasic() {
  const [on, setOn] = useState(true)
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="switch-notify" checked={on} onCheckedChange={setOn} />
        <Label htmlFor="switch-notify">แจ้งเตือนทางอีเมล ({on ? 'เปิด' : 'ปิด'})</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-sm" size="sm" />
        <Label htmlFor="switch-sm">size sm</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-disabled" disabled defaultChecked />
        <Label htmlFor="switch-disabled">disabled</Label>
      </div>
    </div>
  )
}
