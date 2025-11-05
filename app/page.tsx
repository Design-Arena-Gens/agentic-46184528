import Card from '@/components/Card'
import DataTable from '@/components/DataTable'
import RadarChart from '@/components/charts/RadarChart'
import LineChart from '@/components/charts/LineChart'

export default function Page() {
  const readiness = 82
  const recent = [
    { id: 'A-1047', playbook: 'Ransomware Response', date: '2025-10-31', score: 84, status: 'Complete' },
    { id: 'A-1046', playbook: 'Phishing Investigation', date: '2025-10-25', score: 78, status: 'Complete' },
    { id: 'A-1045', playbook: 'Endpoint Compromise', date: '2025-10-18', score: 72, status: 'Partial' },
    { id: 'A-1044', playbook: 'Cloud Breach', date: '2025-10-10', score: 65, status: 'Incomplete' },
  ]

  const recentColumns = [
    { key: 'id', header: 'Run ID' },
    { key: 'playbook', header: 'Playbook' },
    { key: 'date', header: 'Date' },
    { key: 'score', header: 'Score', render: (r: any) => <span className="font-medium">{r.score}</span>, align: 'right' as const },
    { key: 'status', header: 'Status', render: (r: any) => (
      <span className="badge">{r.status}</span>
    ), align: 'right' as const }
  ]

  const phaseLabels = ['Preparation', 'Detection', 'Containment', 'Eradication', 'Recovery', 'Lessons']
  const phaseData = [88, 76, 82, 69, 90, 74]

  const trendLabels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
  const trendData = [70, 73, 76, 79, 81, readiness]

  return (
    <div className="space-y-8">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="h1">Dashboard</h1>
          <p className="text-muted mt-2">AI-powered incident response readiness overview</p>
        </div>
        <a className="btn-primary" href="/assessments/run">Run new assessment</a>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card title="Overall Readiness" >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-3 flex items-center justify-center">
              <div className="text-center">
                <div className="text-soft uppercase text-xs tracking-wide">Score</div>
                <div className="text-[64px] leading-none font-semibold">{readiness}</div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="h3 mb-4">Phase-wise Performance</div>
              <RadarChart labels={phaseLabels} data={phaseData} />
            </div>
            <div className="lg:col-span-5">
              <div className="h3 mb-4">Improvement Trend</div>
              <LineChart labels={trendLabels} data={trendData} />
            </div>
          </div>
        </Card>

        <div className="lg:col-span-12" />

        <div className="lg:col-span-12">
          <Card title="Recent Assessment Runs" action={<a className="btn-ghost" href="/assessments">View all</a>}>
            <DataTable columns={recentColumns as any} rows={recent as any} />
          </Card>
        </div>
      </section>
    </div>
  )
}
