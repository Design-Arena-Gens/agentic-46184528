"use client"

import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default function RadarChart({ labels, data }: { labels: string[], data: number[] }) {
  return (
    <Radar
      data={{
        labels,
        datasets: [
          {
            label: 'Performance',
            data,
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            borderColor: 'rgb(37, 99, 235)',
            pointBackgroundColor: 'rgb(37, 99, 235)',
          },
        ],
      }}
      options={{
        plugins: { legend: { display: false } },
        scales: {
          r: {
            angleLines: { color: '#e5e7eb' },
            grid: { color: '#e5e7eb' },
            suggestedMin: 0,
            suggestedMax: 100,
            pointLabels: { color: '#6b7280', font: { size: 12 } },
            ticks: { display: false },
          }
        }
      }}
    />
  )
}
