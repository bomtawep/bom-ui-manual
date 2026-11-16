import type { Metadata } from 'next'
import Link from 'next/link'
import { CodeBlock } from '@/components/code-block'
import { DocPage } from '@/components/doc-page'

export const metadata: Metadata = { title: 'เริ่มต้นใช้งาน' }

export default function GettingStartedPage() {
  return (
    <DocPage
      href="/docs/getting-started"
      title="เริ่มต้นใช้งาน"
      description="import theme ใน CSS ของ Tailwind วาง provider และ Toaster ใน root layout แล้วใช้ component ได้ทุกหน้า"
    >
      <h2>1. CSS</h2>
      <CodeBlock
        lang="css"
        title="app/globals.css"
        code={`@import "tailwindcss";
@import "@bomtawep/ui/theme.css";`}
      />
      <p>
        ตั้งค่า PostCSS และเลือกระหว่าง <code>theme.css</code> / <code>source.css</code> ได้ที่{' '}
        <Link href="/docs/installation">การติดตั้ง</Link>
      </p>

      <h2>2. Root layout</h2>
      <CodeBlock
        title="app/layout.tsx"
        code={`import './globals.css'
import { BomUIProvider, Toaster, TooltipProvider } from '@bomtawep/ui'
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <BomUIProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </BomUIProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}`}
      />
      <ul>
        <li>
          <code>ThemeProvider</code> — ไม่บังคับ ใช้ next-themes ใส่ class <code>dark</code> ที่ <code>&lt;html&gt;</code> ดู{' '}
          <Link href="/docs/theming">ธีมและ Dark mode</Link> (ไม่ใช้ dark mode ก็ตัดออกได้ พร้อม{' '}
          <code>suppressHydrationWarning</code>)
        </li>
        <li>
          <code>BomUIProvider</code> — ไม่บังคับ (ค่าเริ่มต้นเป็นไทย ปี พ.ศ.) ใส่เมื่อต้องการเปลี่ยน locale หรือข้อความ ดู{' '}
          <Link href="/docs/localization">ภาษาและ locale</Link>
        </li>
        <li>
          <code>TooltipProvider</code> — ต้องมีถ้าใช้ <code>Tooltip</code> หรือ <code>SidebarMenuButton tooltip</code>{' '}
          (เหมือน shadcn/ui) วางครั้งเดียวที่ root ได้เลย
        </li>
        <li>
          <code>Toaster</code> — วางครั้งเดียวเพื่อให้ <code>toast()</code> ทำงานทั้งแอป สีตาม class <code>dark</code> อัตโนมัติ
        </li>
      </ul>

      <h2>3. ใช้ component</h2>
      <CodeBlock
        title="app/invoices/page.tsx"
        code={`import { Button, Card, CardContent, CardHeader, CardTitle, PageHeader } from '@bomtawep/ui'

export default function InvoicesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="ใบแจ้งหนี้" actions={<Button>สร้างใหม่</Button>} />
      <Card>
        <CardHeader>
          <CardTitle>INV-001</CardTitle>
        </CardHeader>
        <CardContent>฿12,500.00</CardContent>
      </Card>
    </div>
  )
}`}
      />
      <p>
        ไฟล์นี้เป็น Server Component ได้ — bundle ของ library มี <code>&apos;use client&apos;</code> อยู่แล้ว
        แต่ถ้าส่ง event handler (เช่น <code>onClick</code>) ไฟล์ของคุณเองต้องเป็น Client Component ตามกฎของ React
      </p>

      <h2>หลักการของ API</h2>
      <ul>
        <li>
          API ตาม shadcn/ui ทุกประการ — ตัวอย่างจาก{' '}
          <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noreferrer">
            ui.shadcn.com
          </a>{' '}
          ใช้ได้โดยเปลี่ยน import เป็น <code>@bomtawep/ui</code> ดู <Link href="/docs/migration">ย้ายมาจาก shadcn/ui</Link>
        </li>
        <li>
          ทุก component รับ <code>className</code> (รวมกับ class เดิมด้วย <code>cn()</code> — class ของคุณชนะ) และ{' '}
          <code>ref</code> แบบ prop ตาม React 19
        </li>
        <li>
          sub-component เป็นชื่อแบน เช่น <code>DialogContent</code> (ไม่ใช่ <code>Dialog.Content</code>)
        </li>
        <li>
          <code>asChild</code> — render ลูกตัวเดียวแทน element เดิม ใช้กับ <code>next/link</code> บ่อยที่สุด
        </li>
        <li>
          variant ของ Button: <code>default</code> / <code>secondary</code> / <code>outline</code> / <code>ghost</code> /{' '}
          <code>destructive</code> / <code>link</code> / <code>sparkle</code> · ขนาด <code>xs</code> / <code>sm</code> /{' '}
          <code>default</code> / <code>lg</code>
        </li>
        <li>
          <code>Button</code> ไม่ตั้ง <code>type=&quot;button&quot;</code> ให้เอง (เหมือน shadcn) — ในฟอร์มให้ระบุ{' '}
          <code>type</code> ทุกปุ่ม ไม่งั้นจะ submit ฟอร์ม
        </li>
        <li>ไอคอนใช้ lucide-react — ใส่เป็นลูกของปุ่มได้เลย ขนาดถูกตั้งให้อัตโนมัติ</li>
      </ul>

      <h2>ลิงก์ด้วย next/link</h2>
      <CodeBlock
        code={`import Link from 'next/link'
import { Button, SidebarMenuButton, BreadcrumbLink } from '@bomtawep/ui'

<Button asChild><Link href="/new">สร้างใหม่</Link></Button>
<SidebarMenuButton asChild><Link href="/docs">Docs</Link></SidebarMenuButton>
<BreadcrumbLink asChild><Link href="/">หน้าแรก</Link></BreadcrumbLink>`}
      />

      <h2>พัฒนา library เอง</h2>
      <CodeBlock
        lang="bash"
        code={`git clone https://github.com/bomtawep/bom-ui && cd bom-ui
nvm use          # Node 22
yarn install
yarn storybook   # http://localhost:6006
yarn test        # vitest
yarn build       # tsup → dist/

# ทดสอบกับโปรเจกต์จริง (รันในโปรเจกต์ปลายทาง)
yarn link ../bom-ui`}
      />
    </DocPage>
  )
}
