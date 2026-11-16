'use client'

import { Input, Label } from '@bomtawep/ui'

export default function InputBasic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input aria-label="ชื่อ" placeholder="ค่าเริ่มต้น" />
      <Input aria-label="Disabled" placeholder="disabled" disabled />
      <div className="grid gap-2">
        <Label htmlFor="input-invalid">เลขบัตรประชาชน</Label>
        <Input id="input-invalid" defaultValue="12345" aria-invalid />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="input-file">แนบไฟล์</Label>
        <Input id="input-file" type="file" />
      </div>
      {/* ไม่มี prop size แล้ว — ปรับความสูงด้วย className */}
      <Input aria-label="ช่องใหญ่" className="h-10" placeholder='className="h-10"' />
    </div>
  )
}
