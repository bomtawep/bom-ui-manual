import type { Metadata } from 'next'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@bomtawep/ui'
import { CodeBlock } from '@/components/code-block'
import { DocPage } from '@/components/doc-page'
import { Example } from '@/components/example'
import ThemePlayground from '@/demos/guides/theme-playground'

export const metadata: Metadata = { title: 'ธีมและ Dark mode' }

const tokens: [string, string][] = [
  ['--background / --foreground', 'พื้นหลังและตัวอักษรของหน้า'],
  ['--primary / --primary-foreground', 'สีหลัก (Button default, Switch, Checkbox, Badge) และตัวอักษรบนพื้นสีนั้น'],
  ['--secondary / --secondary-foreground', 'Button / Badge variant="secondary"'],
  ['--muted / --muted-foreground', 'พื้นและตัวอักษรรอง (คำอธิบาย, placeholder)'],
  ['--accent / --accent-foreground', 'hover / focus ของรายการในเมนู'],
  ['--destructive', 'สีอันตราย (variant="destructive", ข้อความ error)'],
  ['--card / --popover (+ -foreground)', 'พื้นของ Card และ Popover / DropdownMenu / Toaster'],
  ['--border / --input / --ring', 'เส้นขอบ, กรอบช่องกรอก, focus ring'],
  ['--radius', 'มุมโค้งฐาน — rounded-sm … rounded-4xl คำนวณจากค่านี้'],
  ['--sidebar*', 'สีของ Sidebar (bg, foreground, primary, accent, border, ring)'],
  ['--chart-1 … 5', 'สีกราฟ'],
  ['--sparkle-1 / 2 / 3 / -foreground', 'gradient ของ Button variant="sparkle" (bom-ui เพิ่ม — เหมือนกันทุกธีม)'],
]

export default function ThemingPage() {
  return (
    <DocPage
      href="/docs/theming"
      title="ธีมและ Dark mode"
      description="ใช้ theme ของ shadcn/ui ทุกประการ — สีและมุมโค้งเป็น CSS variable (--primary, --radius, …) override ใน CSS ของโปรเจกต์ได้เลย"
    >
      <h2>ปรับสีและมุมโค้ง</h2>
      <p>
        <code>@bomtawep/ui/theme.css</code> คือ theme ของ shadcn (style radix-nova, base neutral) override ตัวแปรใดก็ได้
        หลังบรรทัด import:
      </p>
      <CodeBlock
        lang="css"
        title="app/globals.css"
        code={`@import "tailwindcss";
@import "@bomtawep/ui/theme.css";

:root {
  --primary: oklch(0.541 0.281 293.009);
  --primary-foreground: oklch(0.969 0.016 293.756);
  --ring: oklch(0.541 0.281 293.009);
  --radius: 0.75rem;
}

.dark {
  --primary: oklch(0.606 0.25 292.717);
  --primary-foreground: oklch(0.969 0.016 293.756);
}`}
      />
      <p>ลองปรับดูได้ที่นี่ (ตั้งตัวแปรบน element ครอบ ทุก component ข้างในจะเปลี่ยนตาม):</p>
      <Example file="guides/theme-playground" Component={ThemePlayground} />

      <h3>ใช้ theme สำเร็จรูปของ shadcn</h3>
      <p>
        เลือกสีที่{' '}
        <a href="https://ui.shadcn.com/themes" target="_blank" rel="noreferrer">
          ui.shadcn.com/themes
        </a>{' '}
        (หรือ theme generator อื่นที่ออก CSS แบบ shadcn) แล้ว copy บล็อก <code>:root</code> และ <code>.dark</code>{' '}
        มาวางต่อจาก <code>@import &quot;@bomtawep/ui/theme.css&quot;</code> ได้เลย
      </p>

      <h2>ตัวแปรที่ใช้บ่อย</h2>
      <div className="table-scroll">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ตัวแปร</TableHead>
              <TableHead>ใช้กับ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens.map(([name, use]) => (
              <TableRow key={name}>
                <TableCell>
                  <code>{name}</code>
                </TableCell>
                <TableCell>{use}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="muted">
        ตัวแปรเหล่านี้ถูก map เป็นสีของ Tailwind ด้วย <code>@theme inline</code> — ใช้ในโค้ดของคุณเองได้ เช่น{' '}
        <code>bg-primary</code>, <code>text-muted-foreground</code>, <code>border-border</code>, <code>rounded-lg</code>
      </p>

      <h3>สีของปุ่ม sparkle</h3>
      <p>
        <code>Button variant=&quot;sparkle&quot;</code> เป็น gradient เคลื่อนไหวสำหรับ CTA (หยุดเมื่อผู้ใช้เปิด reduced
        motion) เปลี่ยนเป็นสีแบรนด์ได้:
      </p>
      <CodeBlock
        lang="css"
        code={`:root {
  --sparkle-1: oklch(0.6 0.2 250);
  --sparkle-2: oklch(0.7 0.18 200);
  --sparkle-3: oklch(0.75 0.17 160);
  --sparkle-foreground: oklch(1 0 0);
}`}
      />

      <h2>Dark mode</h2>
      <p>
        เหมือน shadcn/ui — ใส่ class <code>dark</code> ที่ <code>&lt;html&gt;</code> แล้วตัวแปรในบล็อก <code>.dark</code>{' '}
        จะทำงาน และ variant <code>dark:</code> ของ Tailwind ใช้ได้ทันที
      </p>
      <h3>ใช้กับ next-themes (แนะนำ)</h3>
      <CodeBlock lang="bash" code={`yarn add next-themes`} />
      <CodeBlock
        title="components/theme-provider.tsx"
        code={`'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}`}
      />
      <CodeBlock
        title="app/layout.tsx"
        code={`<html lang="th" suppressHydrationWarning>
  <body>
    <ThemeProvider>{children}</ThemeProvider>
  </body>
</html>`}
      />
      <ul>
        <li>
          ต้องเป็น <code>attribute=&quot;class&quot;</code> (ค่าเริ่มต้นของ next-themes) — theme.css อ่านจาก class{' '}
          <code>.dark</code>
        </li>
        <li>
          <code>suppressHydrationWarning</code> ที่ <code>&lt;html&gt;</code> จำเป็น เพราะ next-themes ตั้ง class ก่อน
          React hydrate
        </li>
        <li>
          สลับธีมด้วย <code>useTheme()</code> ของ next-themes เช่น <code>setTheme(&apos;dark&apos;)</code>
        </li>
      </ul>
      <p>
        <code>Toaster</code> ติดตาม class <code>dark</code> ให้เองอัตโนมัติ — ลองกดปุ่มเปลี่ยนธีมมุมขวาบนของเว็บนี้ดู
        (เว็บนี้ใช้ next-themes ตามตัวอย่างข้างบน)
      </p>

      <h2>ปรับเฉพาะจุด</h2>
      <p>
        ทุก component รับ <code>className</code> ที่รวมกับ class เดิมด้วย <code>cn()</code> (tailwind-merge) — class
        ที่ขัดกันของคุณจะชนะ จึงปรับด้วย utility ของ Tailwind ได้ตรง ๆ:
      </p>
      <CodeBlock
        code={`<Button className="rounded-full px-6">สมัครสมาชิก</Button>
<Card className="bg-muted/50 shadow-none">…</Card>`}
      />
      <p>หรือ override ตัวแปรเฉพาะส่วนของหน้า:</p>
      <CodeBlock
        lang="css"
        code={`/* เปลี่ยนสีหลักเฉพาะในหน้า dashboard */
.dashboard {
  --primary: oklch(0.596 0.145 163.225);
  --ring: oklch(0.596 0.145 163.225);
}`}
      />
      <p className="muted">
        ทุก component มี <code>data-slot</code> (เช่น <code>data-slot=&quot;card&quot;</code>) ใช้เป็น selector ได้
        เมื่อจำเป็นต้องเขียน CSS เอง
      </p>
    </DocPage>
  )
}
