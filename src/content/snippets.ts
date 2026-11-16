// Code-only examples for components that can't run inside a preview box.

export interface Snippet {
  title: string
  description?: string
  file?: string
  code: string
}

export const snippets: Record<string, Snippet[]> = {
  sidebar: [
    {
      title: 'App shell + จำสถานะพับ/กางด้วย cookie',
      description:
        'SidebarProvider เขียน cookie sidebar_state ทุกครั้งที่เปลี่ยน อ่านกลับใน Server Component แล้วส่งเป็น defaultOpen (การอ่าน cookie ทำให้ route เป็น dynamic) — ครอบด้วย TooltipProvider เพื่อให้ tooltip ตอนพับเป็นไอคอนทำงาน',
      file: 'app/(app)/layout.tsx',
      code: `import { cookies } from 'next/headers'
import { SidebarInset, SidebarProvider, SidebarTrigger, TooltipProvider } from '@bomtawep/ui'
import { AppSidebar } from './app-sidebar'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const defaultOpen = (await cookies()).get('sidebar_state')?.value !== 'false'
  return (
    // TooltipProvider จำเป็นสำหรับ SidebarMenuButton tooltip (ปกติวางไว้ที่ root layout ครั้งเดียว)
    <TooltipProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger />
          </header>
          <div className="p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}`,
    },
    {
      title: 'เมนูด้วย next/link',
      description: 'ใช้ asChild ให้ SidebarMenuButton render เป็น <Link>, isActive จาก usePathname() และ tooltip ที่แสดงเมื่อพับเป็นไอคอน (ต้องมี TooltipProvider)',
      file: 'app/(app)/app-sidebar.tsx',
      code: `'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, Home, Plus, Settings } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@bomtawep/ui'

const nav = [
  { href: '/', label: 'แดชบอร์ด', icon: <Home /> },
  { href: '/documents', label: 'เอกสาร', icon: <FileText />, badge: '12' },
  { href: '/settings', label: 'ตั้งค่า', icon: <Settings /> },
]

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">M</span>
                <span className="font-semibold">My App</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>เมนูหลัก</SidebarGroupLabel>
          <SidebarGroupAction title="สร้างเอกสาร">
            <Plus />
            <span className="sr-only">สร้างเอกสาร</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="text-xs text-muted-foreground">v1.0.2</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}`,
    },
    {
      title: 'useSidebar',
      description: 'เช่น ปิด sheet บนมือถือหลังกดลิงก์ (เว็บนี้ทำแบบนี้) — ใช้ได้เฉพาะใต้ SidebarProvider',
      code: `'use client'

import Link from 'next/link'
import { useSidebar } from '@bomtawep/ui'

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  // state: 'expanded' | 'collapsed' (desktop), openMobile: sheet บนจอแคบกว่า 768px
  const { isMobile, setOpenMobile } = useSidebar()
  return (
    <Link href={href} onClick={() => isMobile && setOpenMobile(false)}>
      {children}
    </Link>
  )
}`,
    },
  ],
}
