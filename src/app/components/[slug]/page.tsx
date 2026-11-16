import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ExternalLink } from 'lucide-react'
import { Badge, PageHeader } from '@bomtawep/ui'
import { CodeBlock } from '@/components/code-block'
import { Example } from '@/components/example'
import { Pager } from '@/components/pager'
import { PropsTable } from '@/components/props-table'
import { componentDocs, getComponentDoc } from '@/content/components'
import { snippets } from '@/content/snippets'
import { demos } from '@/demos'
import { allComponents } from '@/lib/nav'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return componentDocs.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getComponentDoc((await params).slug)
  return doc ? { title: doc.name, description: doc.description } : {}
}

function importCode(names: string[]) {
  if (names.length <= 3) return `import { ${names.join(', ')} } from '@bomtawep/ui'`
  return `import {\n${names.map((n) => `  ${n},`).join('\n')}\n} from '@bomtawep/ui'`
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params
  const doc = getComponentDoc(slug)
  if (!doc) notFound()
  const group = allComponents.find((c) => c.slug === slug)?.group
  const examples = demos[slug] ?? []
  const codeOnly = snippets[slug] ?? []

  return (
    <article className="doc">
      <PageHeader
        title={doc.name}
        description={doc.description}
        actions={
          <div className="doc-meta">
            {group && <Badge variant="secondary">{group}</Badge>}
            {doc.basedOn && (
              <a href={doc.basedOn.href} target="_blank" rel="noreferrer" className="doc-meta__link">
                {doc.basedOn.name} <ExternalLink aria-hidden="true" />
              </a>
            )}
          </div>
        }
      />

      <div className="prose">
        <h2 id="import">Import</h2>
        <CodeBlock code={importCode(doc.imports)} />

        {(examples.length > 0 || codeOnly.length > 0) && <h2 id="examples">ตัวอย่าง</h2>}
        {examples.map((ex) => (
          <section key={ex.file} className="example-section">
            <h3>{ex.title}</h3>
            {ex.description && <p>{ex.description}</p>}
            <Example file={ex.file} Component={ex.Component} />
          </section>
        ))}
        {codeOnly.map((s) => (
          <section key={s.title} className="example-section">
            <h3>{s.title}</h3>
            {s.description && <p>{s.description}</p>}
            <CodeBlock code={s.code} title={s.file} />
          </section>
        ))}

        {doc.props && doc.props.length > 0 && (
          <>
            <h2 id="props">Props</h2>
            <p className="muted">
              ทุก component รับ <code>className</code> และ <code>ref</code> พร้อม attribute ของ element ที่ render
              {doc.basedOn && <> — prop อื่นดูที่เอกสาร {doc.basedOn.name}</>}
            </p>
            {doc.props.map((section) => (
              <section key={section.component}>
                {doc.props!.length > 1 && <h3>{section.component}</h3>}
                <PropsTable rows={section.rows} />
              </section>
            ))}
          </>
        )}

        {doc.notes && doc.notes.length > 0 && (
          <>
            <h2 id="notes">หมายเหตุ</h2>
            <ul>
              {doc.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Pager href={`/components/${slug}`} />
    </article>
  )
}
