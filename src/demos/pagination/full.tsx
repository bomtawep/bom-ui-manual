'use client'

import { useState, type MouseEvent } from 'react'
import {
  getPageItems,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@bomtawep/ui'

const pageCount = 20

export default function PaginationFull() {
  const [page, setPage] = useState(5)

  // ใช้ <a href> เพื่อให้เปิดแท็บใหม่ได้ แต่สลับหน้าใน state แทนการนำทาง
  const go = (p: number) => (e: MouseEvent) => {
    e.preventDefault()
    setPage(Math.min(Math.max(1, p), pageCount))
  }
  const disabled = 'pointer-events-none opacity-50'

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${page - 1}`}
            onClick={go(page - 1)}
            aria-disabled={page === 1}
            className={page === 1 ? disabled : undefined}
          />
        </PaginationItem>
        {/* getPageItems(5, 20) → [1, 'ellipsis', 4, 5, 6, 'ellipsis', 20] */}
        {getPageItems(page, pageCount).map((item, i) => (
          <PaginationItem key={i}>
            {item === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink href={`?page=${item}`} isActive={item === page} onClick={go(item)}>
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={`?page=${page + 1}`}
            onClick={go(page + 1)}
            aria-disabled={page === pageCount}
            className={page === pageCount ? disabled : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
