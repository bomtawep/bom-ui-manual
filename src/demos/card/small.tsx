'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@bomtawep/ui'

export default function CardSmall() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3">
      <Card size="sm">
        <CardHeader>
          <CardDescription>คำขอทั้งหมด</CardDescription>
          <CardTitle className="text-2xl">128</CardTitle>
        </CardHeader>
      </Card>
      <Card size="sm">
        <CardHeader>
          <CardDescription>รออนุมัติ</CardDescription>
          <CardTitle className="text-2xl">12</CardTitle>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">เพิ่มขึ้น 3 จากเมื่อวาน</CardContent>
      </Card>
    </div>
  )
}
