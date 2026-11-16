'use client'

import { Copy, Eye, EyeOff, Search } from 'lucide-react'
import { useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  toast,
} from '@bomtawep/ui'

export default function InputGroupBasic() {
  const [show, setShow] = useState(false)
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupInput aria-label="ค้นหา" placeholder="ค้นหา…" />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput aria-label="เว็บไซต์" placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText>.co.th</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput aria-label="รหัสผ่าน" type={show ? 'text' : 'password'} defaultValue="secret123" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label={show ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'} onClick={() => setShow(!show)}>
            {show ? <EyeOff /> : <Eye />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput aria-label="API key" readOnly defaultValue="sk_live_51H…" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => toast('คัดลอกแล้ว')}>
            <Copy /> คัดลอก
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
