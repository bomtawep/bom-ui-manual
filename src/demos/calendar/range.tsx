'use client'

import { useState } from 'react'
import { Calendar, type DateRange } from '@bomtawep/ui'

export default function CalendarRange() {
  const [range, setRange] = useState<DateRange | undefined>()
  return (
    <Calendar
      mode="range"
      numberOfMonths={2}
      selected={range}
      onSelect={setRange}
      disabled={{ before: new Date() }}
      className="rounded-lg border"
    />
  )
}
