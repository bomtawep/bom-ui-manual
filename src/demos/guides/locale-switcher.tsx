'use client'

import { useState } from 'react'
import { enUS, th } from 'react-day-picker/locale'
import {
  BomUIProvider,
  Calendar,
  getPageItems,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Spinner,
  Tabs,
  TabsList,
  TabsTrigger,
  type BomUIMessages,
} from '@bomtawep/ui'

const english: Partial<BomUIMessages> = {
  loading: 'Loading',
  pagination: 'Pagination',
  previous: 'Previous',
  next: 'Next',
  previousPage: 'Go to previous page',
  nextPage: 'Go to next page',
  morePages: 'More pages',
}

const PAGE_COUNT = 10

export default function LocaleSwitcher() {
  const [lang, setLang] = useState<'th' | 'en'>('th')
  const [page, setPage] = useState(1)

  const go = (next: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    setPage(Math.min(Math.max(1, next), PAGE_COUNT))
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Tabs value={lang} onValueChange={(v) => setLang(v as 'th' | 'en')}>
        <TabsList>
          <TabsTrigger value="th">ไทย (ค่าเริ่มต้น)</TabsTrigger>
          <TabsTrigger value="en">English</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* provider ซ้อนกันได้ — ตัวในสุดชนะ */}
      <BomUIProvider locale={lang === 'th' ? th : enUS} messages={lang === 'en' ? english : undefined}>
        <Calendar mode="single" defaultMonth={new Date()} className="rounded-lg border" />
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={go(page - 1)} aria-disabled={page === 1} />
            </PaginationItem>
            {getPageItems(page, PAGE_COUNT).map((item, i) =>
              item === 'ellipsis' ? (
                <PaginationItem key={`ellipsis-${i}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={item}>
                  <PaginationLink href="#" isActive={item === page} onClick={go(item)}>
                    {item}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}
            <PaginationItem>
              <PaginationNext href="#" onClick={go(page + 1)} aria-disabled={page === PAGE_COUNT} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Spinner /> {lang === 'th' ? 'Spinner อ่านออกเสียงว่า “กำลังโหลด”' : 'Spinner is announced as “Loading”'}
        </div>
      </BomUIProvider>
    </div>
  )
}
