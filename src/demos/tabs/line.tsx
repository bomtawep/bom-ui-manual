'use client'

import { FileText, History, LayoutDashboard } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@bomtawep/ui'

export default function TabsLine() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="overview">
          <LayoutDashboard /> ภาพรวม
        </TabsTrigger>
        <TabsTrigger value="docs">
          <FileText /> เอกสาร
        </TabsTrigger>
        <TabsTrigger value="history">
          <History /> ประวัติ
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">ข้อมูลสรุปของโครงการ</TabsContent>
      <TabsContent value="docs">เอกสารแนบ 12 ไฟล์</TabsContent>
      <TabsContent value="history">แก้ไขล่าสุดเมื่อ 2 ชั่วโมงที่แล้ว</TabsContent>
    </Tabs>
  )
}
