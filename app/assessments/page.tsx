import Card from '@/components/Card'
import DataTable from '@/components/DataTable'

export default function Page() {
  const rows = [
    { id: 'A-1047', playbook: 'Ransomware Response', date: '2025-10-31', score: 84, status: 'Complete' },
    { id: 'A-1046', playbook: 'Phishing Investigation', date: '2025-10-25', score: 78, status: 'Complete' },
    { id: 'A-1045', playbook: 'Endpoint Compromise', date: '2025-10-18', score: 72, status: 'Partial' },
    { id: 'A-1044', playbook: 'Cloud Breach', date: '2025-10-10', score: 65, status: 'Incomplete' },
  ]

  const columns = [
    { key: 'id', header: 'Run ID' },
    { key: 'playbook', header: 'Playbook' },
    { key: 'date', header: 'Date' },
    { key: 'score', header: 'Score', align: 'right' as const },
    { key: 'status', header: 'Status', align: 'right' as const, render: (r: any) => <span className="badge">{r.status}</span> },
  ]

  return (
    <div className="space-y-8">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="h1">Assessments</h1>
          <p className="text-muted mt-2">Execute and review assessment runs</p>
        </div>
        <a className="btn-primary" href="/assessments/run">Run new assessment</a>
      </header>

      <Card>
        <DataTable columns={columns as any} rows={rows as any} />
      </Card>
    </div>
  )
}
