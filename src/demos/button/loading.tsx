'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'
import { Button } from '@bomtawep/ui'

export default function ButtonLoading() {
  const [loading, setLoading] = useState(false)
  const save = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button type="button" loading={loading} onClick={save}>
        {!loading && <Save data-icon="inline-start" />}
        {loading ? 'กำลังบันทึก…' : 'บันทึก'}
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}
