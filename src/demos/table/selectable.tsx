'use client'

import { useState } from 'react'
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@bomtawep/ui'

const members = [
  { id: 'u1', name: 'สมชาย ใจดี', email: 'somchai@example.com', role: 'ผู้ดูแล' },
  { id: 'u2', name: 'สมหญิง รักงาน', email: 'somying@example.com', role: 'สมาชิก' },
  { id: 'u3', name: 'มานี มีนา', email: 'manee@example.com', role: 'สมาชิก' },
]

export default function TableSelectable() {
  const [selected, setSelected] = useState<string[]>(['u2'])
  const all = selected.length === members.length
  const toggle = (id: string, on: boolean) => setSelected((s) => (on ? [...s, id] : s.filter((x) => x !== id)))

  return (
    <div className="flex w-full flex-col gap-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                aria-label="เลือกทั้งหมด"
                checked={all ? true : selected.length > 0 ? 'indeterminate' : false}
                onCheckedChange={(v) => setSelected(v === true ? members.map((m) => m.id) : [])}
              />
            </TableHead>
            <TableHead>ชื่อ</TableHead>
            <TableHead>อีเมล</TableHead>
            <TableHead>บทบาท</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((m) => {
            const isSelected = selected.includes(m.id)
            return (
              // data-state="selected" ทำให้แถวเป็นสีพื้น muted
              <TableRow key={m.id} data-state={isSelected ? 'selected' : undefined}>
                <TableCell>
                  <Checkbox
                    aria-label={`เลือก ${m.name}`}
                    checked={isSelected}
                    onCheckedChange={(v) => toggle(m.id, v === true)}
                  />
                </TableCell>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell>{m.email}</TableCell>
                <TableCell>{m.role}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <p className="text-sm text-muted-foreground">
        เลือก {selected.length} จาก {members.length} แถว
      </p>
    </div>
  )
}
