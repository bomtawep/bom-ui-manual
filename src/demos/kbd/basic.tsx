'use client'

import { Kbd, KbdGroup } from '@bomtawep/ui'

export default function KbdBasic() {
  return (
    <p className="text-sm">
      กด{' '}
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>B</Kbd>
      </KbdGroup>{' '}
      เพื่อพับแถบข้าง หรือ <Kbd>Esc</Kbd> เพื่อปิดหน้าต่าง
    </p>
  )
}
