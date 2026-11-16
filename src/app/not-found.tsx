import Link from 'next/link'
import { FileQuestion } from 'lucide-react'
import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@bomtawep/ui'

export default function NotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileQuestion />
        </EmptyMedia>
        <EmptyTitle>ไม่พบหน้านี้</EmptyTitle>
        <EmptyDescription>ลิงก์อาจผิดหรือหน้าถูกย้ายไปแล้ว</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button asChild>
          <Link href="/">กลับหน้าแรก</Link>
        </Button>
      </EmptyContent>
    </Empty>
  )
}
