import type { Metadata } from 'next'
import { Alert, AlertDescription, AlertTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@bomtawep/ui'
import { Info } from 'lucide-react'
import Link from 'next/link'
import { CodeBlock } from '@/components/code-block'
import { DocPage } from '@/components/doc-page'

export const metadata: Metadata = { title: 'การติดตั้ง' }

export default function InstallationPage() {
  return (
    <DocPage
      href="/docs/installation"
      title="การติดตั้ง"
      description="@bomtawep/ui เผยแพร่ผ่าน GitHub Packages — ตั้งค่า registry ของ scope @bomtawep และ token แล้วเพิ่ม theme ลงใน CSS ของ Tailwind"
    >
      <h2>ความต้องการ</h2>
      <ul>
        <li>Node.js 20 ขึ้นไป</li>
        <li>React 19 และ Next.js 15 ขึ้นไป (App Router หรือ Pages Router)</li>
        <li>
          <strong>Tailwind CSS v4</strong> ในโปรเจกต์ — component ทุกตัวเป็นโค้ด shadcn/ui ที่จัดสไตล์ด้วย class ของ Tailwind
        </li>
        <li>
          <code>react-hook-form</code> ^7.55 — เป็น peerDependency ต้องติดตั้งแม้ไม่ได้ใช้ฟอร์ม
        </li>
      </ul>
      <p>
        มาจาก 0.x? อ่าน <Link href="/docs/upgrade-v1">อัปเกรดเป็น v1</Link> ก่อน — v1 เปลี่ยนวิธีจัดสไตล์ทั้งหมด
      </p>

      <h2>1. ตั้งค่า registry (Yarn 4)</h2>
      <p>
        เพิ่มใน <code>.yarnrc.yml</code> ที่ root ของโปรเจกต์ (commit ได้ เพราะ token อ่านจาก env):
      </p>
      <CodeBlock
        lang="yaml"
        title=".yarnrc.yml"
        code={`nodeLinker: node-modules

npmScopes:
  bomtawep:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAuthToken: "\${NPM_TOKEN:-}"
    npmAlwaysAuth: true
    npmMinimalAgeGate: 0`}
      />
      <ul>
        <li>เฉพาะ package ใน scope <code>@bomtawep/</code> ที่ไปหา GitHub Packages ส่วน package อื่นยังมาจาก npm ปกติ</li>
        <li>
          <code>npmMinimalAgeGate: 0</code> — Yarn ≥ 4.18 ไม่ติดตั้งเวอร์ชันที่อายุไม่ถึง 1 วัน ปิดเฉพาะ scope นี้เพื่อใช้เวอร์ชันใหม่ได้ทันที
        </li>
        <li>
          Yarn 4 <strong>ไม่อ่าน</strong> <code>.npmrc</code> — ถ้าตั้งไว้ใน <code>.npmrc</code> อย่างเดียวจะได้ 404
        </li>
      </ul>

      <h3>ใช้ npm หรือ Yarn 1?</h3>
      <p>
        ใช้ <code>.npmrc</code> แทน:
      </p>
      <CodeBlock
        lang="ini"
        title=".npmrc"
        code={`@bomtawep:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${NPM_TOKEN}`}
      />

      <h2>2. ตั้งค่า token</h2>
      <p>
        สร้าง GitHub Personal Access Token (classic) ที่มีสิทธิ์ <code>read:packages</code> แล้วตั้งใน shell profile:
      </p>
      <CodeBlock lang="bash" code={`export NPM_TOKEN=<token>`} />
      <Alert>
        <Info />
        <AlertTitle>ห้าม commit token</AlertTitle>
        <AlertDescription>
          ไฟล์ config อ้าง <code>{'${NPM_TOKEN}'}</code> เท่านั้น อย่าใส่ token จริงลงไฟล์ใด ๆ ใน repo
        </AlertDescription>
      </Alert>

      <h2>3. ติดตั้ง</h2>
      <CodeBlock lang="bash" code={`yarn add @bomtawep/ui react-hook-form
# ถ้ายังไม่มี Tailwind CSS v4
yarn add -D tailwindcss @tailwindcss/turbopack`} />

      <h3>อัปเดตเวอร์ชัน</h3>
      <CodeBlock lang="bash" code={`yarn up @bomtawep/ui@^1.0.0`} />
      <p>
        ได้ minor / patch ล่าสุดในช่วง <code>^1.0.0</code> โดยไม่ข้ามไป major ใหม่ — ถ้าจะขึ้น major ให้เปลี่ยน range (เช่น{' '}
        <code>@^2.0.0</code>) และอ่านส่วน Migration ใน CHANGELOG ก่อน
      </p>

      <h2>4. ตั้งค่า Tailwind CSS</h2>
      <p>
        Next.js 16 build ด้วย Turbopack — ใช้ loader ของ Tailwind สำหรับ Turbopack โดยตรง:
      </p>
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
        ปลั๊กอิน <code>@tailwindcss/postcss</code> build ไม่ผ่านบน Turbopack ของ Next 16 (มัน <code>require()</code>{' '}
        แพ็กเกจ <code>magic-string</code> ที่เป็น ESM อย่างเดียว) — ใช้ PostCSS เฉพาะเมื่อ build ด้วย{' '}
        <code>next build --webpack</code>
      </p>
      <p>
        แล้ว import theme ของ library ต่อจาก Tailwind ในไฟล์ CSS หลัก (ไฟล์ที่ import ใน <code>app/layout.tsx</code>):
      </p>
      <CodeBlock
        lang="css"
        title="app/globals.css"
        code={`@import "tailwindcss";
@import "@bomtawep/ui/theme.css";`}
      />

      <h3>theme.css หรือ source.css</h3>
      <div className="table-scroll">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ไฟล์</TableHead>
              <TableHead>มีอะไร</TableHead>
              <TableHead>ใช้เมื่อ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>@bomtawep/ui/theme.css</code>
              </TableCell>
              <TableCell>
                theme ของ shadcn (base neutral: <code>--primary</code>, <code>--radius</code>, … ทั้ง light และ <code>.dark</code>) +
                custom variants ที่ component ใช้ + <code>@source</code> ให้ Tailwind สแกน class ของ library
              </TableCell>
              <TableCell>โปรเจกต์ใหม่ หรือยังไม่มี theme ของ shadcn — แนะนำ</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>@bomtawep/ui/source.css</code>
              </TableCell>
              <TableCell>
                เฉพาะ <code>@source</code> — ใช้สีของโปรเจกต์คุณเอง
              </TableCell>
              <TableCell>มี theme shadcn ของตัวเองอยู่แล้ว (เคยรัน <code>shadcn init</code>)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <CodeBlock
        lang="css"
        title="app/globals.css (ใช้ theme ของโปรเจกต์เอง)"
        code={`@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";   /* custom variants ของ shadcn */
@import "@bomtawep/ui/source.css";

:root {
  /* …ตัวแปร shadcn ของคุณ… */
}
.dark {
  /* … */
}`}
      />
      <p className="muted">
        ถ้าไม่ import ไฟล์ใดเลย Tailwind จะไม่สร้าง class ที่อยู่ใน <code>node_modules/@bomtawep/ui</code> และ component จะไม่มีสไตล์
      </p>

      <h2>CI (GitHub Actions)</h2>
      <CodeBlock
        lang="yaml"
        code={`- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: yarn
- run: yarn install --immutable
  env:
    NPM_TOKEN: \${{ secrets.GH_PKG_TOKEN }}
- run: yarn build`}
      />
      <p>
        ถ้าเพิ่ม repo ปลายทางใน <em>Manage Actions access</em> ของ package แล้ว ใช้ <code>{'${{ secrets.GITHUB_TOKEN }}'}</code>{' '}
        แทนได้ (ต้องมี <code>permissions: packages: read</code>)
      </p>

      <h2>Docker</h2>
      <p>
        ส่ง token เป็น BuildKit secret — ห้ามใช้ <code>ARG</code>/<code>ENV</code> เพราะจะค้างอยู่ใน image layer
      </p>
      <CodeBlock
        lang="dockerfile"
        title="Dockerfile"
        code={`# syntax=docker/dockerfile:1
FROM node:20 AS deps
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/releases ./.yarn/releases
RUN --mount=type=secret,id=npm_token \\
    NPM_TOKEN=$(cat /run/secrets/npm_token) yarn install --immutable`}
      />
      <CodeBlock lang="bash" code={`docker build --secret id=npm_token,env=NPM_TOKEN -t my-app .`} />

      <h2>แก้ปัญหา</h2>
      <div className="table-scroll">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>อาการ</TableHead>
              <TableHead>สาเหตุ / วิธีแก้</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>404 Not Found ตอนติดตั้ง</TableCell>
              <TableCell>
                ใช้ Yarn 4 แต่ตั้งไว้ใน <code>.npmrc</code> — ย้ายไป <code>.yarnrc.yml</code> (npmScopes)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>401 / 403</TableCell>
              <TableCell>
                ไม่ได้ตั้ง <code>NPM_TOKEN</code> หรือ token ไม่มีสิทธิ์ <code>read:packages</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ไม่เจอเวอร์ชันที่เพิ่ง release</TableCell>
              <TableCell>
                ขาด <code>npmMinimalAgeGate: 0</code> ใน scope @bomtawep
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>component ไม่มีสไตล์ (ปุ่มเป็นข้อความเปล่า)</TableCell>
              <TableCell>
                ยังไม่ได้ <code>@import &quot;@bomtawep/ui/theme.css&quot;</code> (หรือ <code>source.css</code>) ต่อจาก{' '}
                <code>@import &quot;tailwindcss&quot;</code> หรือยังไม่ได้ตั้ง loader <code>@tailwindcss/turbopack</code> ใน <code>next.config.ts</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Error <code>Tooltip must be used within TooltipProvider</code>
              </TableCell>
              <TableCell>
                ครอบแอปด้วย <code>&lt;TooltipProvider&gt;</code> — ดู <Link href="/docs/getting-started">เริ่มต้นใช้งาน</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Peer dependency warning เรื่อง react-hook-form</TableCell>
              <TableCell>
                <code>yarn add react-hook-form</code>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DocPage>
  )
}
