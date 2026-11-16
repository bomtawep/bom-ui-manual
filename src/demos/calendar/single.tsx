'use client'

import { useState } from 'react'
import { Calendar } from '@bomtawep/ui'

export default function CalendarSingle() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex flex-col gap-3">
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />
      <p className="text-sm text-muted-foreground">
        เลือก: {date ? date.toLocaleDateString('th-TH', { dateStyle: 'long' }) : '—'}
      </p>
    </div>
  )
}
