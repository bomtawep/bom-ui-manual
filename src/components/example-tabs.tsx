'use client'

import type { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@bomtawep/ui'

export function ExampleTabs({ preview, code }: { preview: ReactNode; code: ReactNode }) {
  return (
    <Tabs defaultValue="preview" className="example">
      <TabsList variant="line">
        <TabsTrigger value="preview">ตัวอย่าง</TabsTrigger>
        <TabsTrigger value="code">โค้ด</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="example__preview">
        {preview}
      </TabsContent>
      <TabsContent value="code" className="example__code">
        {code}
      </TabsContent>
    </Tabs>
  )
}
