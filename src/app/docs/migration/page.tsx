import type { Metadata } from 'next'
import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@bomtawep/ui'
import { CodeBlock } from '@/components/code-block'
import { DocPage } from '@/components/doc-page'

export const metadata: Metadata = { title: 'ย้ายมาจาก shadcn/ui' }

const rows: [string, string][] = [
  ['import { Button } from "@/components/ui/button"', "import { Button } from '@bomtawep/ui'"],
  ['import { cn } from "@/lib/utils"', "ใช้ cn ของโปรเจกต์ต่อได้ (library ไม่ export cn)"],
  ['import { toast } from "sonner"', "import { toast } from '@bomtawep/ui'"],
  ['<Toaster /> จาก components/ui/sonner', "<Toaster /> จาก '@bomtawep/ui' (ตาม class dark เอง ไม่ต้องใช้ useTheme)"],
  ['<Button size="icon" aria-label="…">', '<IconButton aria-label="…"> — บังคับ aria-label ใน type (Button size="icon" ยังใช้ได้)'],
  ['Form / FormField / FormItem / FormControl / FormMessage', 'FormProvider + RHF* หรือ FormFields'],
  ['ข้อความ "Close", "Previous", "Next", "Toggle Sidebar"', 'ภาษาไทยจาก BomUIProvider messages'],
  ['Calendar (ค.ศ., ภาษาอังกฤษ)', 'ภาษาไทย ปี พ.ศ. เป็นค่าเริ่มต้น'],
]

export default function MigrationPage() {
  return (
    <DocPage
      href="/docs/migration"
      title="ย้ายมาจาก shadcn/ui"
      description="ตั้งแต่ v1 component ทุกตัวคือโค้ด shadcn/ui (style radix-nova, base neutral) — API, variant และ class เหมือนกันทุกประการ เปลี่ยนแค่ที่ import"
    >
      <h2>ใช้ snippet ของ shadcn ได้ทันที</h2>
      <p>
        ตัวอย่างจาก{' '}
        <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noreferrer">
          ui.shadcn.com
        </a>{' '}
        ใช้ได้เลยโดยรวม import ทั้งหมดมาจาก <code>@bomtawep/ui</code> ที่เดียว:
      </p>
      <CodeBlock
        title="ก่อน (shadcn/ui ใน components/ui)"
        code={`import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'`}
      />
      <CodeBlock
        title="หลัง (@bomtawep/ui)"
        code={`import { Button, Card, CardContent, CardHeader, CardTitle, toast } from '@bomtawep/ui'`}
      />
      <p>
        ชื่อ variant (<code>default</code>, <code>outline</code>, <code>destructive</code>, <code>link</code>, …) ขนาด (
        <code>default</code>, <code>sm</code>, <code>icon</code>, …) <code>asChild</code> และ <code>data-slot</code> เหมือน
        shadcn ทั้งหมด ไม่ต้องแปลงอะไร
      </p>

      <h2>ขั้นตอนย้าย</h2>
      <ol className="mb-4 list-decimal space-y-1 pl-6">
        <li>
          ติดตั้งตาม <Link href="/docs/installation">การติดตั้ง</Link>
        </li>
        <li>
          ใน <code>globals.css</code>: ถ้าจะใช้ theme เดิมของโปรเจกต์ ให้เพิ่ม <code>@import &quot;@bomtawep/ui/source.css&quot;</code>{' '}
          (ได้แค่ <code>@source</code>) — ถ้าจะใช้ theme neutral ของ library ให้แทนบล็อก <code>:root</code> /{' '}
          <code>.dark</code> ด้วย <code>@import &quot;@bomtawep/ui/theme.css&quot;</code>
        </li>
        <li>
          แทน import จาก <code>@/components/ui/*</code> ด้วย <code>@bomtawep/ui</code> แล้วลบไฟล์ใน{' '}
          <code>components/ui</code> ที่ไม่ใช้แล้ว
        </li>
        <li>
          ครอบ app ด้วย <code>TooltipProvider</code> (ถ้ายังไม่มี) และย้าย <code>&lt;Toaster /&gt;</code> มาใช้ของ library
        </li>
        <li>component ที่ library ไม่มี ยังเพิ่มด้วย shadcn CLI ได้ตามปกติ — ใช้ theme ตัวเดียวกัน</li>
      </ol>

      <h2>ตารางเทียบ</h2>
      <div className="table-scroll">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>shadcn/ui</TableHead>
              <TableHead>@bomtawep/ui</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(([a, b]) => (
              <TableRow key={a}>
                <TableCell>
                  <code>{a}</code>
                </TableCell>
                <TableCell>{b}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2>สิ่งที่ bom-ui เพิ่มจาก shadcn</h2>
      <ul>
        <li>
          <code>Button variant=&quot;sparkle&quot;</code> — gradient เคลื่อนไหวสำหรับ CTA (หยุดเมื่อ reduced motion; สีจาก{' '}
          <code>--sparkle-1/2/3</code>)
        </li>
        <li>
          <code>Button loading</code> — แสดง Spinner + <code>aria-busy</code> + disabled ในตัว
        </li>
        <li>
          <Link href="/components/icon-button">IconButton</Link> — ปุ่มไอคอนล้วนที่บังคับ <code>aria-label</code> ใน type
        </li>
        <li>
          <code>getPageItems(page, pageCount, siblingCount?)</code> — คำนวณเลขหน้าพร้อม <code>&quot;ellipsis&quot;</code> สำหรับ{' '}
          <Link href="/components/pagination">Pagination</Link>
        </li>
        <li>
          <Link href="/docs/localization">BomUIProvider</Link> — ข้อความ UI และ locale ภาษาไทย ปี พ.ศ. เป็นค่าเริ่มต้น
        </li>
        <li>
          <Link href="/docs/forms">RHF* และ FormFields</Link> — field สำเร็จรูปสำหรับ react-hook-form แทนการประกอบ
          FormField/FormItem เอง
        </li>
        <li>
          <Link href="/components/page-header">PageHeader</Link>, <Link href="/components/error-state">ErrorState</Link>,{' '}
          <Link href="/components/pdf-preview">PdfPreview</Link> — component ระดับแอป
        </li>
      </ul>
    </DocPage>
  )
}
