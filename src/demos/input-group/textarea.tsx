'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from '@bomtawep/ui'

export default function InputGroupTextareaDemo() {
  const [text, setText] = useState('')
  return (
    <InputGroup className="max-w-md">
      <InputGroupTextarea
        aria-label="ข้อความ"
        placeholder="พิมพ์ข้อความ…"
        rows={3}
        maxLength={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <InputGroupAddon align="block-end">
        <InputGroupText>{text.length}/200</InputGroupText>
        <InputGroupButton variant="default" size="sm" className="ml-auto" disabled={!text}>
          <Send /> ส่ง
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
