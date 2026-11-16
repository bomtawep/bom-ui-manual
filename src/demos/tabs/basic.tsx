'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@bomtawep/ui'

export default function TabsBasic() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
        <TabsTrigger value="docs">เอกสาร</TabsTrigger>
        <TabsTrigger value="history">ประวัติ</TabsTrigger>
        <TabsTrigger value="locked" disabled>
          ล็อก
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">ข้อมูลสรุปของโครงการ</TabsContent>
      <TabsContent value="docs">เอกสารแนบ 12 ไฟล์</TabsContent>
      <TabsContent value="history">แก้ไขล่าสุดเมื่อ 2 ชั่วโมงที่แล้ว</TabsContent>
    </Tabs>
  )
}
