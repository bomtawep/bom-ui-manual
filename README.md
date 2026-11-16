# bom-ui-manual

เว็บคู่มือการใช้งาน [`@bomtawep/ui`](https://github.com/bomtawep/bom-ui) v1 สร้างด้วย Next.js 16 (App Router) + Tailwind CSS v4 + next-themes และใช้ component ของ bom-ui เองทั้งเว็บ (Sidebar, Breadcrumb, Tabs, Table, Toaster ฯลฯ)

- คู่มือ 8 หน้า: ภาพรวม, การติดตั้ง, เริ่มต้นใช้งาน, ธีม/Dark mode, ภาษา/locale, ฟอร์ม, ย้ายจาก shadcn/ui, อัปเกรดเป็น v1
- หน้า component 51 หน้า แต่ละหน้ามี import, ตัวอย่างที่กดลองได้ (แท็บ ตัวอย่าง/โค้ด), ตาราง props และหมายเหตุ
- โค้ดในแท็บ "โค้ด" อ่านจากไฟล์ demo จริงตอน build — ตัวอย่างกับโค้ดจึงตรงกันเสมอ
- highlight โค้ดฝั่ง server ด้วย shiki (ไม่ส่ง JS ของ highlighter ไปที่ browser) สีตามธีม light/dark
- ทุกหน้าเป็น static (SSG)

## เริ่มใช้งาน

```bash
nvm use        # Node 22 (.nvmrc)
yarn install
yarn dev       # http://localhost:3000
yarn build && yarn start
yarn typecheck
```

repo pin Yarn 4.18.1 ไว้ใน `.yarn/releases` — `yarn` ตัวไหนก็ได้จะถูกส่งต่อไปเวอร์ชันนั้น

## ที่มาของ `@bomtawep/ui`

ติดตั้งจาก GitHub Packages ตาม semver:

```json
"@bomtawep/ui": "^1.0.2"
```

ต้องตั้ง `NPM_TOKEN` (GitHub PAT แบบ classic ที่มีสิทธิ์ `read:packages`) ก่อน `yarn install` ครั้งแรก หรือเมื่อ cache ว่าง (เช่นบน CI) —
`npmScopes` ใน `.yarnrc.yml` อ่าน token จาก environment เท่านั้น อย่า commit token ลงไฟล์

```bash
export NPM_TOKEN=<token>
yarn install
```

อัปเดตเป็น minor / patch ล่าสุดในช่วง `^1`: `yarn up @bomtawep/ui@^1.0.0` — ถ้าเวอร์ชันใหม่เพิ่ม component หรือเปลี่ยน props
ให้อัปเดตหน้าใน `src/content/components.ts` และ demo ตาม (ดูหัวข้อด้านล่าง)

## Tailwind CSS และธีม

- `next.config.ts` ใช้ `@tailwindcss/turbopack` เป็น loader ของไฟล์ `*.css` (ไม่ใช้ `@tailwindcss/postcss` เพราะ build บน Turbopack ไม่ผ่าน — มัน `require()` `magic-string` ที่เป็น ESM อย่างเดียว)
- `src/app/globals.css` import `tailwindcss` + `@bomtawep/ui/theme.css` (theme ของ shadcn base neutral) แล้วเพิ่ม class ของเว็บไว้ใน `@layer components`
- dark mode ใช้ next-themes (`attribute="class"`) — ใส่ class `dark` ที่ `<html>` ตาม shadcn ไม่ใช้ `data-theme` แล้ว

## โครงสร้าง

```
src/
├─ app/
│  ├─ globals.css                # Tailwind v4 + @bomtawep/ui/theme.css + class ของเว็บ
│  ├─ layout.tsx                 # ThemeProvider > BomUIProvider > TooltipProvider > SidebarProvider + Toaster
│  ├─ page.tsx                   # หน้าแรก
│  ├─ docs/*/page.tsx            # หน้าคู่มือ
│  └─ components/[slug]/page.tsx # หน้า component (generateStaticParams)
├─ components/                   # ส่วนประกอบของเว็บ: sidebar, header, theme toggle, code block, example tabs, props table
│  └─ theme-provider.tsx         # next-themes (attribute="class")
├─ content/
│  ├─ components.ts              # คำอธิบาย, import, props, หมายเหตุ ของทุก component
│  └─ snippets.ts                # ตัวอย่างแบบโค้ดอย่างเดียว (เช่น Sidebar)
├─ demos/
│  ├─ <slug>/<id>.tsx            # ตัวอย่างที่รันได้ 1 ไฟล์ต่อ 1 ตัวอย่าง
│  ├─ guides/*.tsx               # ตัวอย่างในหน้าคู่มือ
│  └─ index.ts                   # รายการตัวอย่างของแต่ละหน้า
└─ lib/
   ├─ nav.ts                     # เมนู sidebar และลำดับหน้า
   └─ highlighter.ts             # shiki (JS regex engine)
next.config.ts                   # Tailwind ผ่าน @tailwindcss/turbopack
```

## เพิ่ม / แก้หน้า component

1. เพิ่มรายการใน `src/lib/nav.ts` (กลุ่มที่ต้องการ)
2. เพิ่มเนื้อหาใน `src/content/components.ts` (`slug` ต้องตรงกัน)
3. สร้างไฟล์ตัวอย่าง `src/demos/<slug>/<id>.tsx` (`'use client'` + `export default function`)
4. ลงทะเบียนใน `src/demos/index.ts`: `{ file: '<slug>/<id>', title: '…', Component }`

ตัวอย่างควร import จาก `'@bomtawep/ui'` เท่านั้น จัด layout ด้วย utility ของ Tailwind (เช่น `flex gap-2`) และเขียนให้คัดลอกไปใช้ได้ทันที เพราะผู้อ่านจะเห็นไฟล์นั้นทั้งไฟล์

## หมายเหตุ

- ธีม (light / dark / system) จัดการด้วย next-themes ใส่ class `dark` ที่ `<html>` ก่อน paint และจำค่าไว้ใน `localStorage` — สีของ shiki สลับตาม `.dark` เช่นกัน
- shiki ใช้ JavaScript regex engine แทน WASM เพราะ WASM engine เรียก `Response.bytes()` ซึ่งมีเฉพาะ Node 22+
- ตัวอย่าง Avatar ตั้งใจโหลดรูปที่ไม่มีอยู่ (`/missing.png`) เพื่อแสดง fallback — 404 ใน console ของหน้านั้นจึงเป็นเรื่องปกติ
