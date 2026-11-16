import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@bomtawep/ui'
import type { PropDef } from '@/content/types'

export function PropsTable({ rows }: { rows: PropDef[] }) {
  return (
    <div className="table-scroll">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>คำอธิบาย</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.name}>
              <TableCell>
                <code className="prop-name">{r.name}</code>
              </TableCell>
              <TableCell>
                <code className="prop-type">{r.type}</code>
              </TableCell>
              <TableCell>{r.default ? <code>{r.default}</code> : '—'}</TableCell>
              <TableCell>{r.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
