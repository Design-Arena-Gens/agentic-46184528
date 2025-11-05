import { ReactNode } from 'react'

export default function Card({ title, action, children }: { title?: string, action?: ReactNode, children: ReactNode }) {
  return (
    <section className="card">
      {(title || action) && (
        <header className="flex items-center justify-between px-6 pt-6">
          {title && <h3 className="h3">{title}</h3>}
          {action}
        </header>
      )}
      <div className="card-inner">
        {children}
      </div>
    </section>
  )
}
