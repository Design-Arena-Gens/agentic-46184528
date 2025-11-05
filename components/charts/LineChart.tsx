"use client"

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export default function LineChart({ labels, data }: { labels: string[], data: number[] }) {
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: 'Readiness',
            data,
            borderColor: 'rgb(37, 99, 235)',
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            tension: 0.3,
          }
        ]
      }}
      options={{
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#6b7280' } },
          y: { grid: { color: '#e5e7eb' }, ticks: { color: '#6b7280' }, min: 0, max: 100 }
        }
      }}
    />
  )
}
