'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { FolderGit2 } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  IconButton,
  Separator,
  SidebarTrigger,
} from '@bomtawep/ui'
import { allComponents, guides, REPO_URL } from '@/lib/nav'
import { ThemeToggle } from './theme-toggle'

function useCrumbs(pathname: string) {
  const crumbs: { title: string; href?: string }[] = [{ title: 'bom-ui', href: '/' }]
  if (pathname.startsWith('/components/')) {
    const item = allComponents.find((c) => `/components/${c.slug}` === pathname)
    crumbs.push({ title: 'Components' })
    if (item) crumbs.push({ title: item.group }, { title: item.name })
  } else if (pathname !== '/') {
    const guide = guides.find((g) => g.href === pathname)
    crumbs.push({ title: 'คู่มือ' })
    if (guide) crumbs.push({ title: guide.title })
  } else {
    crumbs.push({ title: 'ภาพรวม' })
  }
  return crumbs
}

export function SiteHeader() {
  const pathname = usePathname()
  const crumbs = useCrumbs(pathname)
  return (
    <header className="site-header">
      <SidebarTrigger />
      <Separator orientation="vertical" className="site-header__sep" />
      <Breadcrumb className="site-header__crumbs">
        <BreadcrumbList>
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1
            return (
              <Fragment key={`${c.title}-${i}`}>
                <BreadcrumbItem>
                  {last ? (
                    <BreadcrumbPage>{c.title}</BreadcrumbPage>
                  ) : c.href ? (
                    <BreadcrumbLink asChild>
                      <Link href={c.href}>{c.title}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <span>{c.title}</span>
                  )}
                </BreadcrumbItem>
                {!last && <BreadcrumbSeparator />}
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="site-header__actions">
        <ThemeToggle />
        <IconButton aria-label="เปิด GitHub repo" asChild>
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            <FolderGit2 />
          </a>
        </IconButton>
      </div>
    </header>
  )
}
