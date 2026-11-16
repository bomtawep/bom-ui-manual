'use client'

import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  IconButton,
} from '@bomtawep/ui'

/** Light / dark / system via next-themes, which sets class="dark" on <html>. */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // The saved theme is only known in the browser; render the neutral icon until then to avoid a hydration mismatch.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const current = mounted ? (theme ?? 'system') : 'system'
  const Icon = current === 'dark' ? Moon : current === 'light' ? Sun : Monitor
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton aria-label="เปลี่ยนธีม" variant="ghost">
          <Icon />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>ธีม</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={current} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">
              <Sun /> สว่าง
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              <Moon /> มืด
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              <Monitor /> ตามระบบ
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
