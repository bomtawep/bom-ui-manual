'use client'

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  type SheetContentProps,
} from '@bomtawep/ui'

const sides: NonNullable<SheetContentProps['side']>[] = ['top', 'right', 'bottom', 'left']

export default function SheetSides() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>ตัวกรอง</SheetTitle>
              <SheetDescription>แผงนี้เลื่อนออกจากด้าน {side}</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <Button>ใช้ตัวกรอง</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="outline">ปิด</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
