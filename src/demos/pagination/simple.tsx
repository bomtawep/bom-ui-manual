'use client'

import { useState, type MouseEvent } from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@bomtawep/ui'

const total = 120
const pageSize = 10
const pageCount = Math.ceil(total / pageSize)

export default function PaginationSimple() {
  const [page, setPage] = useState(1)
  const go = (p: number) => (e: MouseEvent) => {
    e.preventDefault()
    setPage(Math.min(Math.max(1, p), pageCount))
  }
  const from = (page - 1) * pageSize + 1
  const to = Math.min(page * pageSize, total)
  const disabled = 'pointer-events-none opacity-50'

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-muted-foreground">
        {from}–{to} จาก {total} รายการ
      </p>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={go(page - 1)}
              aria-disabled={page === 1}
              className={page === 1 ? disabled : undefined}
            />
          </PaginationItem>
          <PaginationItem>
            <span className="px-2 text-sm">
              หน้า {page} / {pageCount}
            </span>
          </PaginationItem>
          <PaginationItem>
            {/* text= เปลี่ยนข้อความเฉพาะปุ่มนี้ (ค่าเริ่มต้นมาจาก messages.next) */}
            <PaginationNext
              href="#"
              text="หน้าถัดไป"
              onClick={go(page + 1)}
              aria-disabled={page === pageCount}
              className={page === pageCount ? disabled : undefined}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
