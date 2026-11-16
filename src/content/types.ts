export interface PropDef {
  name: string
  type: string
  default?: string
  description: string
}

export interface PropsSection {
  /** Component the rows belong to, e.g. "SheetContent". */
  component: string
  rows: PropDef[]
}

export interface ComponentDoc {
  slug: string
  name: string
  description: string
  /** Names to import from '@bomtawep/ui'. */
  imports: string[]
  props?: PropsSection[]
  /** Short usage notes / gotchas shown as a list. */
  notes?: string[]
  /** Underlying primitive whose docs cover the remaining props. */
  basedOn?: { name: string; href: string }
}
