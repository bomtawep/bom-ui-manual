import Link from 'next/link'
import { ArrowRight, Calendar, Accessibility, Palette, FormInput, Layers, Server, Package } from 'lucide-react'
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@bomtawep/ui'
import { CodeBlock } from '@/components/code-block'
import { Pager } from '@/components/pager'
import { allComponents, componentGroups, REPO_URL } from '@/lib/nav'

const features = [
  { icon: <Layers />, title: 'shadcn/ui + Tailwind v4', text: 'ทุก component คือโค้ด shadcn/ui (radix-nova) — API เหมือนเอกสาร shadcn ทุกประการ snippet ใช้ได้โดยเปลี่ยน import' },
  { icon: <Server />, title: 'พร้อมใช้กับ Next.js', text: "App Router และ Pages Router — bundle มี 'use client' แล้ว import จาก Server Component ได้เลย" },
  { icon: <Calendar />, title: 'ภาษาไทย ปี พ.ศ.', text: 'ข้อความ UI, ปฏิทิน และ date picker เป็นภาษาไทยตั้งแต่ต้น เปลี่ยนได้ด้วย BomUIProvider' },
  { icon: <Palette />, title: 'ธีมของ shadcn', text: 'ปรับสีและมุมโค้งด้วยตัวแปร --primary, --radius ฯลฯ ใช้ theme จาก ui.shadcn.com ได้ dark mode ด้วย class dark' },
  { icon: <FormInput />, title: 'react-hook-form + zod', text: 'RHF* และ FormFields ผูก label, คำอธิบาย และ error กับ aria ให้ครบ เขียนฟอร์มสั้นลงมาก' },
  { icon: <Accessibility />, title: 'Accessible', text: 'สร้างบน Radix UI ทดสอบด้วย Testing Library + axe-core' },
  { icon: <Package />, title: 'ESM + CJS + types', text: 'build ด้วย tsup เผยแพร่ผ่าน GitHub Packages ติดตั้งแบบ semver (^1.0.0)' },
]

export default function HomePage() {
  return (
    <article className="doc">
      <section className="hero">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">@bomtawep/ui · React component library</Badge>
          <Badge asChild>
            <Link href="/docs/upgrade-v1">v1 · shadcn/ui + Tailwind v4</Link>
          </Badge>
        </div>
        <h1>คู่มือการใช้งาน bom-ui</h1>
        <p>
          ชุด component shadcn/ui สำหรับ Next.js {allComponents.length} ตัว — ตั้งแต่ปุ่ม ฟอร์ม overlay ไปจนถึง Sidebar
          ของแอป พร้อมภาษาไทย ปี พ.ศ. ตัวอย่างที่กดลองได้จริง และโค้ดที่คัดลอกไปใช้ได้ทันที เว็บนี้ก็สร้างด้วย bom-ui ทั้งหมด
        </p>
        <div className="hero__actions">
          <Button size="lg" asChild>
            <Link href="/docs/installation">
              เริ่มติดตั้ง <ArrowRight />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/components/button">ดู Components</Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href={REPO_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <div className="prose">
        <h2>เริ่มใช้งาน</h2>
        <CodeBlock
          lang="css"
          title="app/globals.css"
          code={`@import "tailwindcss";
@import "@bomtawep/ui/theme.css";`}
        />
        <CodeBlock
          title="app/page.tsx"
          code={`import { Button, Card, CardContent, CardHeader, CardTitle } from '@bomtawep/ui'

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ใบแจ้งหนี้</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline">ชำระเงิน</Button>
      </CardContent>
    </Card>
  )
}`}
        />

        <h2>จุดเด่น</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.title} className="feature">
              <span className="feature__icon" aria-hidden="true">
                {f.icon}
              </span>
              <strong>{f.title}</strong>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <h2>Components ({allComponents.length})</h2>
        <div className="group-grid">
          {componentGroups.map((g) => (
            <Card key={g.title} size="sm">
              <CardHeader>
                <CardTitle>{g.title}</CardTitle>
                <CardDescription>{g.items.length} components</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="chip-list">
                  {g.items.map((i) => (
                    <li key={i.slug}>
                      <Link href={`/components/${i.slug}`}>{i.name}</Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Pager href="/" />
    </article>
  )
}
