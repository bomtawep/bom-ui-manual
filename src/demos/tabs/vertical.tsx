'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@bomtawep/ui'

export default function TabsVertical() {
  return (
    <Tabs defaultValue="account" orientation="vertical" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">บัญชี</TabsTrigger>
        <TabsTrigger value="security">ความปลอดภัย</TabsTrigger>
        <TabsTrigger value="billing">การชำระเงิน</TabsTrigger>
      </TabsList>
      <TabsContent value="account">ตั้งค่าชื่อและอีเมล</TabsContent>
      <TabsContent value="security">รหัสผ่านและการยืนยันสองขั้นตอน</TabsContent>
      <TabsContent value="billing">วิธีชำระเงินและใบเสร็จ</TabsContent>
    </Tabs>
  )
}
