import { createHighlighter, type Highlighter } from 'shiki'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

export const codeLangs = ['tsx', 'bash', 'yaml', 'css', 'ini', 'dockerfile'] as const
export type CodeLang = (typeof codeLangs)[number]

let highlighter: Promise<Highlighter> | undefined

/**
 * One highlighter for the whole build. The JavaScript regex engine avoids the WASM engine,
 * which needs Response.bytes() (Node 22+), so builds also work on Node 20.
 */
export function getHighlighter() {
  highlighter ??= createHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: [...codeLangs],
    engine: createJavaScriptRegexEngine(),
  })
  return highlighter
}
