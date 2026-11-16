'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@bomtawep/ui'

export default function SelectGroups() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select defaultValue="bkk">
        <SelectTrigger aria-label="จังหวัด" className="w-56">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>ภาคกลาง</SelectLabel>
            <SelectItem value="bkk">กรุงเทพฯ</SelectItem>
            <SelectItem value="nonthaburi">นนทบุรี</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>ภาคเหนือ</SelectLabel>
            <SelectItem value="cnx">เชียงใหม่</SelectItem>
            <SelectItem value="cri">เชียงราย</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select defaultValue="10">
        <SelectTrigger size="sm" aria-label="จำนวนต่อหน้า">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10 / หน้า</SelectItem>
          <SelectItem value="20">20 / หน้า</SelectItem>
          <SelectItem value="50">50 / หน้า</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
