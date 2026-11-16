import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { pageOrder } from '@/lib/nav'

/** Previous / next links in sidebar order. */
export function Pager({ href }: { href: string }) {
  const i = pageOrder.findIndex((p) => p.href === href)
  const prev = i > 0 ? pageOrder[i - 1] : undefined
  const next = i >= 0 && i < pageOrder.length - 1 ? pageOrder[i + 1] : undefined
  return (
    <nav className="pager" aria-label="หน้าก่อนหน้าและถัดไป">
      {prev ? (
        <Link href={prev.href} className="pager__link">
          <small>
            <ArrowLeft aria-hidden="true" /> ก่อนหน้า
          </small>
          {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className="pager__link pager__link--next">
          <small>
            ถัดไป <ArrowRight aria-hidden="true" />
          </small>
          {next.title}
        </Link>
      )}
    </nav>
  )
}
