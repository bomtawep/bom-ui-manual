'use client'

import { Minus, Plus } from 'lucide-react'
import { ButtonGroup, IconButton } from '@bomtawep/ui'

export default function ButtonGroupVertical() {
  return (
    <ButtonGroup orientation="vertical">
      <IconButton aria-label="ซูมเข้า" variant="outline">
        <Plus />
      </IconButton>
      <IconButton aria-label="ซูมออก" variant="outline">
        <Minus />
      </IconButton>
    </ButtonGroup>
  )
}
