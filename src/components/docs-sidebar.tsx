'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Boxes } from 'lucide-react'
import {
  Badge,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '@bomtawep/ui'
import { componentGroups, guides, REPO_URL } from '@/lib/nav'

export function DocsSidebar() {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  // On phones the sidebar is a sheet: close it after navigating
  const closeOnMobile = () => {
    if (isMobile) setOpenMobile(false)
  }

  const visibleGuides = guides.filter((g) => !q || g.title.toLowerCase().includes(q))
  const visibleGroups = componentGroups
    .map((g) => ({ ...g, items: g.items.filter((i) => !q || i.name.toLowerCase().includes(q)) }))
    .filter((g) => g.items.length > 0)

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" onClick={closeOnMobile}>
                <span className="brand-mark" aria-hidden="true">
                  <Boxes />
                </span>
                <span className="brand-text">
                  <strong>bom-ui</strong>
                  <small>Manual</small>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarInput
          type="search"
          aria-label="ค้นหาหน้า"
          placeholder="ค้นหา component…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </SidebarHeader>

      <SidebarContent>
        {visibleGuides.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>คู่มือ</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {visibleGuides.map((g) => (
                  <SidebarMenuItem key={g.href}>
                    <SidebarMenuButton asChild isActive={pathname === g.href}>
                      <Link href={g.href} onClick={closeOnMobile}>
                        {g.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {visibleGroups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const href = `/components/${item.slug}`
                  return (
                    <SidebarMenuItem key={item.slug}>
                      <SidebarMenuButton asChild isActive={pathname === href} size="sm">
                        <Link href={href} onClick={closeOnMobile}>
                          {item.name}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {visibleGuides.length === 0 && visibleGroups.length === 0 && (
          <p className="sidebar-empty">ไม่พบ “{query}”</p>
        )}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="sm">
              <a href={REPO_URL} target="_blank" rel="noreferrer">
                GitHub repo
              </a>
            </SidebarMenuButton>
            <SidebarMenuBadge>
              <Badge variant="outline">@bomtawep/ui</Badge>
            </SidebarMenuBadge>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
