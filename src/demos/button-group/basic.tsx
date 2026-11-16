'use client'

import { ChevronDown, Search } from 'lucide-react'
import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText, Input } from '@bomtawep/ui'

export default function ButtonGroupBasic() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Button variant="outline">วัน</Button>
        <Button variant="outline">สัปดาห์</Button>
        <Button variant="outline">เดือน</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="secondary">บันทึก</Button>
        <ButtonGroupSeparator />
        <Button variant="secondary" size="icon" aria-label="ตัวเลือกเพิ่มเติม">
          <ChevronDown />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <Input aria-label="โดเมน" placeholder="example.com" />
        <Button variant="outline" size="icon" aria-label="ค้นหา">
          <Search />
        </Button>
      </ButtonGroup>
    </div>
  )
}
