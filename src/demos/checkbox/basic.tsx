'use client'

import { useState } from 'react'
import { Checkbox, Label } from '@bomtawep/ui'

const items = ['อ่าน', 'เขียน', 'ลบ']

export default function CheckboxBasic() {
  const [checked, setChecked] = useState<string[]>(['อ่าน'])
  const all = checked.length === items.length
  const some = checked.length > 0 && !all
  const toggle = (item: string, on: boolean) =>
    setChecked((prev) => (on ? [...prev, item] : prev.filter((i) => i !== item)))

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox
          id="perm-all"
          checked={all ? true : some ? 'indeterminate' : false}
          onCheckedChange={(v) => setChecked(v === true ? items : [])}
        />
        <Label htmlFor="perm-all">สิทธิ์ทั้งหมด</Label>
      </div>
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2 pl-6">
          <Checkbox id={`perm-${item}`} checked={checked.includes(item)} onCheckedChange={(v) => toggle(item, v === true)} />
          <Label htmlFor={`perm-${item}`}>{item}</Label>
        </div>
      ))}
    </div>
  )
}
