'use client'

import { Label, Textarea } from '@bomtawep/ui'

export default function TextareaBasic() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="textarea-note">หมายเหตุ</Label>
      <Textarea id="textarea-note" placeholder="รายละเอียดเพิ่มเติม…" />
    </div>
  )
}
