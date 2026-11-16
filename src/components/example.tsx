import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type { ComponentType } from 'react'
import { CodeBlock } from './code-block'
import { ExampleTabs } from './example-tabs'

/** Live demo + the exact source of the demo file (read at build time, so the two never drift apart). */
export async function Example({ file, Component }: { file: string; Component: ComponentType }) {
  const source = await readFile(path.join(process.cwd(), 'src/demos', `${file}.tsx`), 'utf8')
  const code = source.replace(/^'use client'\s*\n+/, '')
  return <ExampleTabs preview={<Component />} code={<CodeBlock code={code} />} />
}
