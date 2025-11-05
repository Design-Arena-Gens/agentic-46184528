import { ReactNode } from 'react'

export type Column<T> = {
  key: keyof T | string
  header: string
  render?: (row: T) => ReactNode
  align?: 'left' | 'right' | 'center'
  width?: string
}

export default function DataTable<T extends { id: string | number }>({ columns, rows }: { columns: Column<T>[], rows: T[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)} style={{ width: col.width }} className={col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : ''}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.id} className="hover:bg-neutral-50">
            {columns.map(col => (
              <td key={String(col.key)} className={col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : ''}>
                {col.render ? col.render(row) : (row as any)[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
