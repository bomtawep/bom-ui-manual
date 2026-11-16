'use client'

import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@bomtawep/ui'

export default function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">ขนาดรูป</Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64">
        <PopoverHeader>
          <PopoverTitle>ขนาด</PopoverTitle>
          <PopoverDescription>กำหนดความกว้างและความสูง (px)</PopoverDescription>
        </PopoverHeader>
        <div className="grid grid-cols-[4rem_1fr] items-center gap-2">
          <Label htmlFor="pop-w">กว้าง</Label>
          <Input id="pop-w" className="h-7" inputMode="numeric" defaultValue="800" />
          <Label htmlFor="pop-h">สูง</Label>
          <Input id="pop-h" className="h-7" inputMode="numeric" defaultValue="600" />
        </div>
      </PopoverContent>
    </Popover>
  )
}
