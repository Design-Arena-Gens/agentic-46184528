"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { href: '/', label: 'Dashboard' },
  { href: '/playbooks', label: 'Playbooks' },
  { href: '/assessments', label: 'Assessments' },
  { href: '/results', label: 'Results' },
  { href: '/recommendations', label: 'Recommendations' },
  { href: '/reports', label: 'Reports' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [org, setOrg] = useState('Acme Security')

  return (
    <aside className="border-r border-neutral-200 flex flex-col">
      <div className="p-4 border-b border-neutral-200">
        <div className="h3 mb-2">IRIS</div>
        <label className="text-soft text-xs uppercase">Organization</label>
        <select
          className="mt-1 w-full border border-neutral-300 rounded-sm px-2 py-1 text-sm bg-white"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        >
          <option>Acme Security</option>
          <option>Globex SOC</option>
          <option>Initech Blue Team</option>
        </select>
      </div>

      <nav className="flex-1 py-4 space-y-1">
        {NAV.map(item => {
          const active = pathname === item.href
          return (
            <Link key={item.href} href={item.href} className={active ? 'sidebar-link sidebar-link-active' : 'sidebar-link'}>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-neutral-200">
        <div className="text-sm font-medium">Alex Johnson</div>
        <div className="text-soft text-xs">alex@{org.toLowerCase().split(' ')[0]}.com</div>
      </div>
    </aside>
  )
}
