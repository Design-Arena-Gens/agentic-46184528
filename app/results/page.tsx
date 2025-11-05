import Card from '@/components/Card'

export default function Page() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="h1">Results</h1>
        <p className="text-muted mt-2">Consolidated outcomes across runs</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <Card title="Top Strengths">
            <ul className="space-y-2">
              <li>Preparation ? documented roles and contacts</li>
              <li>Recovery ? backup validation cadence</li>
              <li>Detection ? SIEM coverage for critical assets</li>
            </ul>
          </Card>
        </div>
        <div className="lg:col-span-6">
          <Card title="Top Gaps">
            <ul className="space-y-2">
              <li>Containment ? network isolation play depth</li>
              <li>Eradication ? EDR response automation</li>
              <li>Lessons ? retro timelines and owners</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
