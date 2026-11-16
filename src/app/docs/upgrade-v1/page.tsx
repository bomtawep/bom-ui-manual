import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@bomtawep/ui'
import { TriangleAlert } from 'lucide-react'
import { CodeBlock } from '@/components/code-block'
import { DocPage } from '@/components/doc-page'

export const metadata: Metadata = { title: 'อัปเกรดเป็น v1' }

const renames: [string, string][] = [
  [
    'Button variant="primary" / "danger"',
    '"default" / "destructive" ("secondary", "ghost", "sparkle" เหมือนเดิม; เพิ่ม "outline", "link")',
  ],
  ['size="md" (Button, Switch, SelectTrigger)', '"default"'],
  ['IconButton size="md"', '"default" (ใช้ "xs" / "sm" / "lg" ได้)'],
  ['Badge variant="primary" / "info" / "success" / "warning" / "danger"', '"default" / "secondary" / "destructive" / "outline" / "ghost" / "link"'],
  ['Alert variant="info" / "success" / "warning" / "danger"', '"default" / "destructive" (role เป็น alert เสมอ)'],
  [
    'Pagination page pageCount onPageChange',
    'Pagination > PaginationContent > PaginationItem > PaginationLink / PaginationPrevious / PaginationNext / PaginationEllipsis + getPageItems()',
  ],
  [
    'EmptyState icon title description action',
    'Empty > EmptyHeader > EmptyMedia / EmptyTitle / EmptyDescription + EmptyContent',
  ],
  ['Input size', 'ลบ — ปรับด้วย className (เช่น h-10)'],
  ['Spinner size / label', 'ลบ — ปรับขนาดด้วย className (เช่น size-6) ชื่อที่ screen reader อ่านมาจาก messages.loading'],
  ['RHFSelect size="md"', '"default"'],
  ['--bom-color-primary ฯลฯ', '--primary ฯลฯ (ตัวแปร shadcn)'],
]

const tokens: [string, string][] = [
  ['--bom-color-primary / -fg', '--primary / --primary-foreground'],
  ['--bom-color-danger', '--destructive'],
  ['--bom-color-bg / fg', '--background / --foreground'],
  ['--bom-color-surface / surface-fg', '--card / --popover (+ -foreground)'],
  ['--bom-color-muted / muted-fg', '--muted / --muted-foreground'],
  ['--bom-color-accent / accent-fg', '--accent / --accent-foreground'],
  ['--bom-color-border / input / ring', '--border / --input / --ring'],
  ['--bom-color-sidebar*', '--sidebar*'],
  ['--bom-radius-sm … xl', '--radius ค่าเดียว (Tailwind rounded-sm … rounded-4xl คำนวณจากค่านี้)'],
  ['--bom-space-*, --bom-font-size-*, --bom-control-height-*, --bom-shadow-*', 'utility ของ Tailwind ผ่าน className'],
  ['--bom-color-success / warning / info', 'ไม่มีแล้ว — ใช้ class ของ Tailwind เอง เช่น text-emerald-600'],
]

function CompareTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="table-scroll">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{head[0]}</TableHead>
            <TableHead>{head[1]}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(([a, b]) => (
            <TableRow key={a}>
              <TableCell className="whitespace-normal">
                <code>{a}</code>
              </TableCell>
              <TableCell className="whitespace-normal">{b}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default function UpgradeV1Page() {
  return (
    <DocPage
      href="/docs/upgrade-v1"
      title="อัปเกรดเป็น v1"
      description="v1 เขียนใหม่ทั้งหมด — ทุก component เป็นโค้ด shadcn/ui (style radix-nova, base neutral) บน Tailwind CSS v4 แทน plain CSS กับตัวแปร --bom-*"
    >
      <Alert>
        <TriangleAlert />
        <AlertTitle>Breaking change</AlertTitle>
        <AlertDescription>
          0.x → 1.0 ต้องติดตั้ง Tailwind CSS v4 เปลี่ยนวิธี import CSS และเปลี่ยนชื่อ props บางตัว — ทำตามทีละขั้นด้านล่าง
          แล้วรัน <code>tsc --noEmit</code> เพื่อหาจุดที่ยังใช้ props เดิม
        </AlertDescription>
      </Alert>

      <h2>สรุปสิ่งที่เปลี่ยน</h2>
      <ul>
        <li>ทุก component เป็นโค้ด shadcn/ui จัดสไตล์ด้วย class ของ Tailwind CSS v4 — API ตามเอกสาร shadcn</li>
        <li>
          peerDependencies: <code>react &gt;=19</code>, <code>react-dom &gt;=19</code>, <code>tailwindcss ^4</code>,{' '}
          <code>react-hook-form ^7.55.0</code>
        </li>
        <li>
          component เป็น function component + <code>data-slot</code> (ref เป็น prop ตาม React 19) ไม่มี{' '}
          <code>forwardRef</code> / <code>displayName</code>
        </li>
        <li>
          ลบ <code>@bomtawep/ui/styles.css</code>, ตัวแปร <code>--bom-*</code>, class <code>bom-*</code> และ{' '}
          <code>EmptyState</code> (ใช้ <code>Empty</code>)
        </li>
        <li>
          dark mode: <code>&lt;html data-theme=&quot;dark&quot;&gt;</code> → class <code>dark</code>
        </li>
        <li>
          <code>Tooltip</code> ต้องมี <code>TooltipProvider</code> และ <code>Button</code> ไม่ตั้ง{' '}
          <code>type=&quot;button&quot;</code> ให้เอง (เหมือน shadcn)
        </li>
        <li>ไอคอนภายใน component ใช้ lucide-react</li>
      </ul>

      <h2>1. อัปเกรด React และติดตั้ง Tailwind CSS v4</h2>
      <CodeBlock
        lang="bash"
        code={`yarn add react@^19 react-dom@^19
yarn add -D tailwindcss @tailwindcss/turbopack`}
      />
      <CodeBlock
        title="next.config.ts"
        code={`import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.css': { loaders: ['@tailwindcss/turbopack'], as: '*.css' },
    },
  },
}

export default nextConfig`}
      />
      <p className="muted">
        build ด้วย webpack? ใช้ <code>@tailwindcss/postcss</code> ใน <code>postcss.config.mjs</code> แทน — ดู{' '}
        <Link href="/docs/installation">การติดตั้ง</Link>
      </p>

      <h2>2. อัปเดต library</h2>
      <CodeBlock lang="bash" code={`yarn up @bomtawep/ui@^1.0.0`} />
      <p>
        ต้องตั้ง registry และ <code>NPM_TOKEN</code> ไว้แล้ว — ดู <Link href="/docs/installation">การติดตั้ง</Link>
      </p>

      <h2>3. เปลี่ยน CSS</h2>
      <p>
        ลบ <code>import &apos;@bomtawep/ui/styles.css&apos;</code> ออกจาก <code>layout.tsx</code> แล้ว import theme ใน CSS
        ของ Tailwind แทน:
      </p>
      <CodeBlock
        title="ก่อน — app/layout.tsx"
        code={`import '@bomtawep/ui/styles.css'
import './globals.css'`}
      />
      <CodeBlock
        lang="css"
        title="หลัง — app/globals.css"
        code={`@import "tailwindcss";
@import "@bomtawep/ui/theme.css";`}
      />
      <p>
        มี theme ของ shadcn อยู่แล้ว? ใช้ <code>@bomtawep/ui/source.css</code> แทน — ดูความต่างที่{' '}
        <Link href="/docs/installation">การติดตั้ง</Link>
      </p>

      <h2>4. ย้ายตัวแปรธีม</h2>
      <p>
        override ที่เคยเขียนด้วย <code>--bom-*</code> ให้เปลี่ยนเป็นตัวแปรของ shadcn (วางต่อจาก import ใน{' '}
        <code>globals.css</code>):
      </p>
      <CodeBlock
        lang="css"
        title="ก่อน"
        code={`:root {
  --bom-color-primary: #7c3aed;
  --bom-color-primary-hover: #6d28d9;
  --bom-radius-md: 0.75rem;
}`}
      />
      <CodeBlock
        lang="css"
        title="หลัง"
        code={`:root {
  --primary: oklch(0.541 0.281 293.009);
  --primary-foreground: oklch(0.969 0.016 293.756);
  --radius: 0.75rem;
}`}
      />
      <CompareTable head={['0.x', '1.0']} rows={tokens} />
      <p>
        ไม่มีตัวแปร hover แยกแล้ว — สี hover คำนวณจากสีหลัก (เช่น <code>hover:bg-primary/80</code>) CSS ที่เคยเลือกด้วย
        class <code>.bom-*</code> ให้เปลี่ยนเป็น <code>className</code> ของ Tailwind หรือ selector{' '}
        <code>[data-slot=&quot;…&quot;]</code> ดูรายละเอียดที่ <Link href="/docs/theming">ธีมและ Dark mode</Link>
      </p>

      <h2>5. Dark mode</h2>
      <p>
        เปลี่ยนจาก attribute <code>data-theme</code> เป็น class <code>dark</code> ที่ <code>&lt;html&gt;</code> — ถ้าใช้
        next-themes:
      </p>
      <CodeBlock
        title="ก่อน"
        code={`<ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>`}
      />
      <CodeBlock
        title="หลัง"
        code={`<ThemeProvider attribute="class" defaultTheme="system" enableSystem>`}
      />
      <p>
        ถ้าเคยใช้ script ของตัวเองตั้ง <code>data-theme</code> ให้เปลี่ยนเป็น{' '}
        <code>document.documentElement.classList.toggle(&apos;dark&apos;, isDark)</code> หรือย้ายไปใช้ next-themes
      </p>

      <h2>6. ครอบด้วย TooltipProvider</h2>
      <p>
        ถ้าใช้ <code>Tooltip</code> หรือ <code>SidebarMenuButton tooltip</code> ต้องมี <code>TooltipProvider</code> ครอบ
        (เหมือน shadcn) — วางครั้งเดียวที่ root layout:
      </p>
      <CodeBlock
        title="app/layout.tsx"
        code={`import { BomUIProvider, Toaster, TooltipProvider } from '@bomtawep/ui'

<BomUIProvider>
  <TooltipProvider>{children}</TooltipProvider>
</BomUIProvider>
<Toaster />`}
      />

      <h2>7. เปลี่ยนชื่อ props</h2>
      <CompareTable head={['เดิม (0.x)', '1.0']} rows={renames} />

      <h3>Button ในฟอร์ม</h3>
      <p>
        0.x ตั้ง <code>type=&quot;button&quot;</code> ให้ทุกปุ่ม — v1 ไม่ตั้งแล้ว (ค่าของ browser คือ <code>submit</code>)
        ปุ่มที่อยู่ใน <code>&lt;form&gt;</code> แต่ไม่ได้ใช้ submit ต้องระบุเอง:
      </p>
      <CodeBlock
        code={`<Button type="submit">บันทึก</Button>
<Button type="button" variant="outline" onClick={() => methods.reset()}>ล้างฟอร์ม</Button>`}
      />

      <h3>Pagination</h3>
      <CodeBlock
        title="ก่อน"
        code={`<Pagination page={page} pageCount={10} onPageChange={setPage} />`}
      />
      <CodeBlock
        title="หลัง"
        code={`import {
  getPageItems,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@bomtawep/ui'

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href={\`?page=\${page - 1}\`} />
    </PaginationItem>
    {getPageItems(page, 10).map((item, i) =>
      item === 'ellipsis' ? (
        <PaginationItem key={\`e\${i}\`}>
          <PaginationEllipsis />
        </PaginationItem>
      ) : (
        <PaginationItem key={item}>
          <PaginationLink href={\`?page=\${item}\`} isActive={item === page}>
            {item}
          </PaginationLink>
        </PaginationItem>
      ),
    )}
    <PaginationItem>
      <PaginationNext href={\`?page=\${page + 1}\`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      />
      <p>
        <code>PaginationLink</code> เป็น <code>&lt;a&gt;</code> — ใช้ <code>href</code> (เช่น query string) หรือ{' '}
        <code>onClick</code> + <code>preventDefault()</code> ถ้าเก็บหน้าไว้ใน state ข้อความ “ก่อนหน้า” / “ถัดไป” มาจาก{' '}
        <code>messages.previous</code> / <code>messages.next</code> ดู <Link href="/components/pagination">Pagination</Link>
      </p>

      <h3>EmptyState → Empty</h3>
      <CodeBlock
        title="ก่อน"
        code={`<EmptyState
  icon={<Inbox />}
  title="ยังไม่มีใบแจ้งหนี้"
  description="สร้างใบแจ้งหนี้แรกเพื่อเริ่มต้น"
  action={<Button>สร้างใหม่</Button>}
/>`}
      />
      <CodeBlock
        title="หลัง"
        code={`import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@bomtawep/ui'

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox />
    </EmptyMedia>
    <EmptyTitle>ยังไม่มีใบแจ้งหนี้</EmptyTitle>
    <EmptyDescription>สร้างใบแจ้งหนี้แรกเพื่อเริ่มต้น</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>สร้างใหม่</Button>
  </EmptyContent>
</Empty>`}
      />
      <p>
        ดูตัวอย่างเพิ่มที่ <Link href="/components/empty">Empty</Link>
      </p>

      <h3>Badge และ Alert</h3>
      <p>
        สถานะ info / success / warning ไม่มี variant แยกแล้ว — ใช้ <code>default</code> / <code>secondary</code> /{' '}
        <code>outline</code> หรือเติมสีเองด้วย <code>className</code>:
      </p>
      <CodeBlock
        code={`<Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
  ชำระแล้ว
</Badge>

<Alert variant="destructive">…</Alert>   {/* เดิม variant="danger" */}`}
      />

      <h2>8. ตรวจสอบ</h2>
      <ul>
        <li>
          รัน <code>tsc --noEmit</code> — variant / size เดิมที่ไม่มีแล้วจะเป็น type error ทุกจุด
        </li>
        <li>
          ค้นหาในโปรเจกต์: <code>--bom-</code>, <code>bom-</code>, <code>styles.css</code>, <code>data-theme</code>,{' '}
          <code>EmptyState</code>
        </li>
        <li>เปิดหน้าที่มีฟอร์ม ตรวจว่าปุ่มที่ไม่ใช่ submit มี <code>type=&quot;button&quot;</code></li>
        <li>สลับ light / dark ตรวจว่าสีถูกต้อง</li>
      </ul>

      <h2>มีอะไรใหม่ใน v1</h2>
      <ul>
        <li>
          <code>Empty</code>, <code>AvatarGroup</code>, <code>AvatarBadge</code>, <code>AlertDialogMedia</code>,{' '}
          <code>TabsList variant=&quot;line&quot;</code>, <code>CalendarDayButton</code>
        </li>
        <li>
          <code>Button variant=&quot;outline&quot; | &quot;link&quot;</code> และขนาด <code>xs</code>,{' '}
          <code>icon-*</code>
        </li>
        <li>
          <code>getPageItems()</code> และ <code>messages.previous</code> / <code>messages.next</code> สำหรับ Pagination
        </li>
        <li>
          <Link href="/components/form-fields">FormFields</Link> (1.0.1) — สร้างฟอร์มจาก array ของ config ดู{' '}
          <Link href="/docs/forms">ฟอร์ม</Link>
        </li>
        <li>
          snippet จาก ui.shadcn.com ใช้ได้ทันทีโดยเปลี่ยน import — ดู <Link href="/docs/migration">ย้ายมาจาก shadcn/ui</Link>
        </li>
      </ul>
    </DocPage>
  )
}
