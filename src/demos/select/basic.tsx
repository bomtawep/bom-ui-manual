'use client'

import { useState } from 'react'
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@bomtawep/ui'

export default function SelectBasic() {
  const [value, setValue] = useState('')
  return (
    <div className="grid gap-2">
      <Label htmlFor="select-status">สถานะ</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger id="select-status" className="w-56">
          <SelectValue placeholder="เลือกสถานะ" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="draft">ฉบับร่าง</SelectItem>
          <SelectItem value="review">รอตรวจ</SelectItem>
          <SelectItem value="approved">อนุมัติ</SelectItem>
          <SelectItem value="archived" disabled>
            เก็บถาวร
          </SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">ค่า: {value || '—'}</p>
    </div>
  )
}
