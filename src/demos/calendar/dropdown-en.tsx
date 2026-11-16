'use client'

import { enUS } from 'react-day-picker/locale'
import { Calendar } from '@bomtawep/ui'

export default function CalendarDropdownEn() {
  return (
    <Calendar
      mode="single"
      locale={enUS}
      captionLayout="dropdown"
      startMonth={new Date(1950, 0)}
      endMonth={new Date()}
      className="rounded-lg border"
    />
  )
}
