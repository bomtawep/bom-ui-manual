import { getHighlighter, type CodeLang } from '@/lib/highlighter'
import { CopyButton } from './copy-button'

interface CodeBlockProps {
  code: string
  lang?: CodeLang
  /** File name or label shown above the code. */
  title?: string
}

/** Highlighted on the server (no highlighter JS is sent to the browser). Colors follow the .dark class (see globals.css). */
export async function CodeBlock({ code, lang = 'tsx', title }: CodeBlockProps) {
  const source = code.replace(/^\n+|\s+$/g, '')
  const html = (await getHighlighter()).codeToHtml(source, {
    lang,
    themes: { light: 'github-light', dark: 'github-dark' },
    defaultColor: false,
  })
  return (
    <div className="code-block">
      {title && <div className="code-block__title">{title}</div>}
      <div className="code-block__body">
        <CopyButton text={source} className="code-block__copy" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}
