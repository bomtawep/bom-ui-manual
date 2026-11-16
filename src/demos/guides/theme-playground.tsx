'use client'

import { useState, type CSSProperties } from 'react'
import { Badge, Button, Checkbox, Input, Label, Switch } from '@bomtawep/ui'

const presets = [
  { name: 'Neutral (ค่าเริ่มต้น)', primary: undefined, foreground: undefined },
  { name: 'Violet', primary: 'oklch(0.541 0.281 293.009)', foreground: 'oklch(0.969 0.016 293.756)' },
  { name: 'Emerald', primary: 'oklch(0.596 0.145 163.225)', foreground: 'oklch(0.979 0.021 166.113)' },
  { name: 'Rose', primary: 'oklch(0.586 0.253 17.585)', foreground: 'oklch(0.969 0.015 12.422)' },
]

export default function ThemePlayground() {
  const [preset, setPreset] = useState(presets[1])
  const [radius, setRadius] = useState(0.625)

  // ตัวแปร shadcn ถูก inherit ลงไปทุก component ข้างใน — ตั้งที่ :root (และ .dark) เพื่อให้มีผลทั้งแอป
  const vars = {
    ...(preset.primary && {
      '--primary': preset.primary,
      '--primary-foreground': preset.foreground,
      '--ring': preset.primary,
    }),
    '--radius': `${radius}rem`,
  } as CSSProperties

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <Button key={p.name} size="sm" variant={p === preset ? 'default' : 'outline'} onClick={() => setPreset(p)}>
            {p.name}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Label htmlFor="radius">--radius {radius}rem</Label>
        <input
          id="radius"
          type="range"
          min={0}
          max={1.5}
          step={0.125}
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="accent-primary"
        />
      </div>
      <div style={vars} className="grid gap-3 rounded-lg border border-dashed p-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button>บันทึก</Button>
          <Button variant="outline">ยกเลิก</Button>
          <Badge>ใหม่</Badge>
          <Switch defaultChecked aria-label="ตัวอย่างสวิตช์" />
          <Checkbox defaultChecked aria-label="ตัวอย่าง checkbox" />
        </div>
        <Input aria-label="ตัวอย่างช่องกรอก" placeholder="คลิกเพื่อดูสี focus ring" />
      </div>
      <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs">{`:root {${
        preset.primary
          ? `
  --primary: ${preset.primary};
  --primary-foreground: ${preset.foreground};
  --ring: ${preset.primary};`
          : ''
      }
  --radius: ${radius}rem;
}`}</pre>
    </div>
  )
}
