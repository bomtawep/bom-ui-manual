'use client'

import { MoreHorizontal } from 'lucide-react'
import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  IconButton,
} from '@bomtawep/ui'

export default function CardBasic() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>ใบแจ้งหนี้ #INV-2569-001</CardTitle>
        <CardDescription>ครบกำหนด 30 พ.ย. 2569</CardDescription>
        <CardAction>
          <IconButton aria-label="ตัวเลือก" size="sm">
            <MoreHorizontal />
          </IconButton>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-2">
        <p className="text-2xl font-semibold">฿12,500.00</p>
        <Badge variant="secondary">รอชำระ</Badge>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">ดูรายละเอียด</Button>
        <Button>ชำระเงิน</Button>
      </CardFooter>
    </Card>
  )
}
