'use client'

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from '@bomtawep/ui'

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/bomtawep.png" alt="bomtawep" />
        <AvatarFallback>BT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>สช</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>ทว</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  )
}
