import Card from '@/components/Card'

export default function Page() {
  const reports = [
    { id: 'R-2201', title: 'October Readiness Summary', date: '2025-11-01' },
    { id: 'R-2190', title: 'Quarterly Assessment Overview (Q3)', date: '2025-10-01' },
  ]

  return (
    <div className="space-y-8">
      <header>
        <h1 className="h1">Reports</h1>
        <p className="text-muted mt-2">Generated summaries and exports</p>
      </header>

      <Card>
        <ul className="divide-y divide-neutral-200">
          {reports.map(r => (
            <li key={r.id} className="py-4 flex items-center justify-between">
              <div>
                <div className="font-medium">{r.title}</div>
                <div className="text-soft text-sm">{r.date}</div>
              </div>
              <button className="btn-ghost" disabled>Download</button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
