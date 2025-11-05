"use client"

import { useState } from 'react'
import Card from '@/components/Card'

const PHASES = [
  { key: 'preparation', label: 'Preparation' },
  { key: 'detection', label: 'Detection' },
  { key: 'containment', label: 'Containment' },
  { key: 'eradication', label: 'Eradication' },
  { key: 'recovery', label: 'Recovery' },
  { key: 'lessons', label: 'Lessons' },
]

export default function Page() {
  const [current, setCurrent] = useState(0)
  const [completed, setCompleted] = useState<Record<string, boolean>>({})
  const [running, setRunning] = useState(false)

  const start = () => {
    setRunning(true)
    const phase = PHASES[current]
    // Simulate execution
    setTimeout(() => {
      setCompleted(prev => ({ ...prev, [phase.key]: true }))
      setRunning(false)
      if (current < PHASES.length - 1) setCurrent(c => c + 1)
    }, 800)
  }

  const reset = () => {
    setCompleted({})
    setCurrent(0)
    setRunning(false)
  }

  return (
    <div className="space-y-8">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="h1">Run Assessment</h1>
          <p className="text-muted mt-2">Execute playbook checks across IR phases</p>
        </div>
        <div className="space-x-2">
          <button className="btn-ghost" onClick={reset}>Reset</button>
          <button className="btn-primary" onClick={start} disabled={running || current >= PHASES.length}> {running ? 'Running?' : current >= PHASES.length ? 'Completed' : 'Run phase'} </button>
        </div>
      </header>

      <Card title="Progress">
        <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PHASES.map((p, idx) => {
            const isActive = idx === current
            const isDone = !!completed[p.key]
            return (
              <li key={p.key} className={"border rounded-sm p-4 text-center " + (isActive ? 'border-accent' : 'border-neutral-200')}>
                <div className="text-sm text-soft mb-1">{String(idx + 1).padStart(2, '0')}</div>
                <div className="font-medium">{p.label}</div>
                <div className="mt-2 text-sm">{isDone ? '? Complete' : isActive ? '? In progress' : '? Pending'}</div>
              </li>
            )
          })}
        </ol>
      </Card>

      <Card title="Phase Details">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="text-soft text-sm uppercase mb-2">Current phase</div>
            <div className="h2">{PHASES[Math.min(current, PHASES.length - 1)].label}</div>
          </div>
          <div className="lg:col-span-8">
            <div className="text-soft mb-2">Automated checks</div>
            <ul className="space-y-2">
              <li className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span>Controls completeness</span>
                <span className="badge">Auto</span>
              </li>
              <li className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span>Evidence availability</span>
                <span className="badge">Auto</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Team acknowledgement</span>
                <span className="badge">Manual</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
