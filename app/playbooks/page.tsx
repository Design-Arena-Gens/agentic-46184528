import Card from '@/components/Card'
import DataTable from '@/components/DataTable'

export default function Page() {
  const rows = [
    { id: 'PB-301', name: 'Ransomware Response', version: 'v2.3', uploaded: '2025-10-12', status: 'complete' },
    { id: 'PB-228', name: 'Phishing Investigation', version: 'v1.9', uploaded: '2025-09-28', status: 'partial' },
    { id: 'PB-114', name: 'Endpoint Compromise', version: 'v1.2', uploaded: '2025-09-10', status: 'incomplete' },
    { id: 'PB-412', name: 'Cloud Breach', version: 'v3.0', uploaded: '2025-11-01', status: 'complete' },
  ]

  const statusGlyph = (s: string) => s === 'complete' ? '?' : s === 'partial' ? '?' : '?'

  const columns = [
    { key: 'name', header: 'Playbook' },
    { key: 'version', header: 'Version', align: 'center' as const },
    { key: 'uploaded', header: 'Upload Date' },
    { key: 'status', header: 'Status', align: 'right' as const, render: (r: any) => (
      <span className="font-mono">{statusGlyph(r.status)} <span className="text-muted ml-2 capitalize">{r.status}</span></span>
    ) },
  ]

  return (
    <div className="space-y-8">
      <header>
        <h1 className="h1">Playbooks</h1>
        <p className="text-muted mt-2">Manage incident response playbooks and versions</p>
      </header>

      <div className="flex justify-end">
        <button className="btn-primary">Upload new playbook</button>
      </div>

      <Card>
        <DataTable columns={columns as any} rows={rows as any} />
      </Card>
    </div>
  )
}
