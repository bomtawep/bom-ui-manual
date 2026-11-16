'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@bomtawep/ui'

export default function AccordionBasic() {
  return (
    <Accordion type="single" collapsible defaultValue="install" className="w-full max-w-lg">
      <AccordionItem value="install">
        <AccordionTrigger>ติดตั้งอย่างไร?</AccordionTrigger>
        <AccordionContent>yarn add @bomtawep/ui แล้ว @import &quot;@bomtawep/ui/theme.css&quot; ต่อจาก @import &quot;tailwindcss&quot; ใน globals.css</AccordionContent>
      </AccordionItem>
      <AccordionItem value="rsc">
        <AccordionTrigger>ใช้ใน Server Component ได้ไหม?</AccordionTrigger>
        <AccordionContent>ได้ — bundle มี &apos;use client&apos; อยู่แล้ว import ได้จากทุกที่</AccordionContent>
      </AccordionItem>
      <AccordionItem value="tailwind">
        <AccordionTrigger>ต้องใช้ Tailwind หรือไม่?</AccordionTrigger>
        <AccordionContent>ต้องใช้ Tailwind CSS v4 — ทุก component เป็นโค้ด shadcn/ui ปรับธีมด้วยตัวแปร CSS ของ shadcn เช่น --primary</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
