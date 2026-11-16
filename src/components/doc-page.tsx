import type { ReactNode } from 'react'
import { PageHeader } from '@bomtawep/ui'
import { Pager } from './pager'

/** Shell for guide pages: title, prose body, previous / next links. */
export function DocPage({
  href,
  title,
  description,
  children,
}: {
  href: string
  title: string
  description?: ReactNode
  children: ReactNode
}) {
  return (
    <article className="doc">
      <PageHeader title={title} description={description} />
      <div className="prose">{children}</div>
      <Pager href={href} />
    </article>
  )
}
