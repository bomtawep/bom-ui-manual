'use client'

import type { ComponentProps } from 'react'
import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@bomtawep/ui'

type BadgeVariant = ComponentProps<typeof Badge>['variant']

const invoices: { id: string; customer: string; status: string; variant: BadgeVariant; amount: number }[] = [
  { id: 'INV-001', customer: 'บริษัท เอ จำกัด', status: 'ชำระแล้ว', variant: 'default', amount: 12500 },
  { id: 'INV-002', customer: 'ห้างหุ้นส่วน บี', status: 'รอชำระ', variant: 'secondary', amount: 8200 },
  { id: 'INV-003', customer: 'ร้าน ซี', status: 'เกินกำหนด', variant: 'destructive', amount: 3400 },
]

const baht = (n: number) => n.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })

export default function TableBasic() {
  return (
    <Table>
      <TableCaption>ใบแจ้งหนี้ล่าสุด</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>เลขที่</TableHead>
          <TableHead>ลูกค้า</TableHead>
          <TableHead>สถานะ</TableHead>
          <TableHead className="text-right">ยอดเงิน</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>{inv.customer}</TableCell>
            <TableCell>
              <Badge variant={inv.variant}>{inv.status}</Badge>
            </TableCell>
            <TableCell className="text-right">{baht(inv.amount)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>รวม</TableCell>
          <TableCell className="text-right">{baht(invoices.reduce((s, i) => s + i.amount, 0))}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
