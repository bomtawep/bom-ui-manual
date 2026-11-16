import type { ComponentDoc } from './types'

const radix = (name: string, path: string) => ({
  name: `Radix ${name}`,
  href: `https://www.radix-ui.com/primitives/docs/components/${path}`,
})

const className = { name: 'className', type: 'string', description: 'ต่อท้าย class ของ library' }

/**
 * Props every RHF* field shares (v1.0.2). Exceptions: RHFSelect has no hideLabel and its label is optional,
 * RHFSwitch has no hideLabel, an RHFCheckbox group (with options) has no required.
 */
const rhfBase = [
  { name: 'name', type: 'FieldPath<T>', description: 'ชื่อ field ใน react-hook-form (รองรับ path เช่น "address.city") — ใส่ generic เช่น <RHFInput<Values>> เพื่อให้ตรวจชื่อได้' },
  { name: 'label', type: 'ReactNode', description: 'จำเป็น — เป็นชื่อ field ที่ screen reader อ่าน' },
  { name: 'hideLabel', type: 'boolean', default: 'false', description: 'ซ่อน label ทางสายตาด้วย sr-only (screen reader ยังอ่านได้)' },
  { name: 'description', type: 'ReactNode', description: 'ข้อความอธิบาย ผูกกับ aria-describedby ให้อัตโนมัติ' },
  { name: 'disabled', type: 'boolean', description: 'ปิดการใช้งาน (หรือใช้ disabled ของ useForm / field ก็ได้)' },
  { name: 'required', type: 'boolean', description: 'แสดง * สีแดง (ซ่อนจาก screen reader) และตั้ง required / aria-required — การตรวจจริงทำใน schema' },
]

/** Every RHF* field follows shadcn's "React Hook Form" pattern (Controller + Field). */
const rhfShadcn = { name: 'shadcn/ui React Hook Form', href: 'https://ui.shadcn.com/docs/forms/react-hook-form' }

export const componentDocs: ComponentDoc[] = [
  // ───────────── Primitives ─────────────
  {
    slug: 'button',
    name: 'Button',
    description: 'ปุ่มหลักของระบบ (shadcn/ui Button) มี 7 variant และ 8 ขนาด — bom-ui เพิ่ม variant="sparkle" และ prop loading',
    imports: ['Button', 'buttonVariants'],
    props: [
      {
        component: 'Button',
        rows: [
          { name: 'variant', type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'sparkle'", default: "'default'", description: "รูปแบบปุ่ม — 'sparkle' (เฉพาะ bom-ui) เป็นพื้นไล่สีเคลื่อนไหวสำหรับ CTA สีปรับได้ด้วย --sparkle-1/2/3" },
          { name: 'size', type: "'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg'", default: "'default'", description: 'ขนาด — icon* เป็นปุ่มสี่เหลี่ยมจัตุรัสสำหรับไอคอนอย่างเดียว' },
          { name: 'loading', type: 'boolean', default: 'false', description: 'เฉพาะ bom-ui — แสดง Spinner, ตั้ง aria-busy และ disable ปุ่ม (ไม่มีผลเมื่อใช้ asChild)' },
          { name: 'asChild', type: 'boolean', default: 'false', description: 'render ลูกตัวเดียว (เช่น <a>, next/link) โดยใช้ class ของปุ่ม' },
          { name: 'type', type: "'button' | 'submit' | 'reset'", description: 'ไม่มีค่าเริ่มต้นแล้ว — ตามพฤติกรรม HTML (ใน <form> คือ submit)' },
          className,
        ],
      },
    ],
    notes: [
      'v1 ไม่ตั้ง type="button" ให้เอง (เหมือน shadcn) — ปุ่มที่อยู่ใน <form> แต่ไม่ได้ใช้ส่งฟอร์มต้องใส่ type="button" เอง',
      'ใส่ data-icon="inline-start" หรือ "inline-end" ที่ไอคอนข้างข้อความเพื่อให้ padding สมดุล',
      'ย้ายจาก 0.x: variant="primary" → "default", "danger" → "destructive", size="md" → "default"',
      'buttonVariants({ variant, size }) ใช้สร้าง class แบบปุ่มให้ element อื่น',
      'ใช้ variant="destructive" กับการกระทำที่ย้อนกลับไม่ได้ เช่น ลบข้อมูล',
    ],
    basedOn: { name: 'shadcn/ui Button', href: 'https://ui.shadcn.com/docs/components/button' },
  },
  {
    slug: 'icon-button',
    name: 'IconButton',
    description: 'เฉพาะ bom-ui — ปุ่มที่มีแต่ไอคอน บังคับใส่ aria-label ใน type เพื่อให้ screen reader อ่านชื่อปุ่มได้ (เท่ากับ <Button size="icon" aria-label="…">)',
    imports: ['IconButton'],
    props: [
      {
        component: 'IconButton',
        rows: [
          { name: 'aria-label', type: 'string', description: 'จำเป็น — ชื่อของปุ่ม (ไม่ใส่จะ typecheck ไม่ผ่าน)' },
          { name: 'variant', type: 'ButtonVariant', default: "'ghost'", description: 'รูปแบบเดียวกับ Button' },
          { name: 'size', type: "'xs' | 'sm' | 'default' | 'lg'", default: "'default'", description: 'แปลงเป็น icon-xs / icon-sm / icon / icon-lg ของ Button' },
          { name: 'asChild', type: 'boolean', default: 'false', description: 'render เป็นลิงก์ได้' },
        ],
      },
    ],
    notes: [
      'ไม่มี prop loading',
      'ย้ายจาก 0.x: size="md" → "default"',
      'ใช้คู่กับ Tooltip เมื่อต้องการแสดงชื่อปุ่มให้ผู้ใช้เห็นด้วย',
    ],
    basedOn: { name: 'shadcn/ui Button', href: 'https://ui.shadcn.com/docs/components/button' },
  },
  {
    slug: 'button-group',
    name: 'ButtonGroup',
    description: 'รวมปุ่ม ช่องกรอก และ select ให้ต่อกันเป็นก้อนเดียว (มุมด้านในเป็นเหลี่ยม เส้นขอบรวมกัน)',
    imports: ['ButtonGroup', 'ButtonGroupText', 'ButtonGroupSeparator', 'buttonGroupVariants'],
    props: [
      { component: 'ButtonGroup', rows: [{ name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'ทิศทางการเรียง' }] },
      { component: 'ButtonGroupText', rows: [{ name: 'asChild', type: 'boolean', default: 'false', description: 'render เป็น element อื่น เช่น <Label>' }] },
      { component: 'ButtonGroupSeparator', rows: [{ name: 'orientation', type: "'horizontal' | 'vertical'", default: "'vertical'", description: 'เส้นคั่นระหว่างปุ่ม (ใช้กับปุ่มที่ไม่มีเส้นขอบ เช่น secondary)' }] },
    ],
    notes: [
      'ปุ่ม variant="outline" ต่อเส้นขอบกันพอดี',
      'ซ้อน ButtonGroup ไว้ใน ButtonGroup ได้ — กลุ่มย่อยจะเว้นระยะห่างให้เอง',
    ],
    basedOn: { name: 'shadcn/ui Button Group', href: 'https://ui.shadcn.com/docs/components/button-group' },
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'ป้ายสถานะขนาดเล็ก',
    imports: ['Badge', 'badgeVariants'],
    props: [
      {
        component: 'Badge',
        rows: [
          { name: 'variant', type: "'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'", default: "'default'", description: 'รูปแบบของป้าย' },
          { name: 'asChild', type: 'boolean', default: 'false', description: 'render เป็นลิงก์ได้ (มี hover ให้เมื่อเป็น <a>)' },
          className,
        ],
      },
    ],
    notes: [
      'ย้ายจาก 0.x: primary → default, danger → destructive; info / success / warning ถูกลบ — ใช้ secondary / outline หรือกำหนดสีเองด้วย className',
      'ไอคอนในป้ายใส่ data-icon="inline-start" / "inline-end" ได้เหมือน Button',
    ],
    basedOn: { name: 'shadcn/ui Badge', href: 'https://ui.shadcn.com/docs/components/badge' },
  },
  {
    slug: 'spinner',
    name: 'Spinner',
    description: 'ไอคอนหมุนบอกสถานะกำลังโหลด (Loader2 ของ lucide-react) มี role="status" และชื่อสำหรับ screen reader',
    imports: ['Spinner'],
    props: [
      {
        component: 'Spinner',
        rows: [
          { name: 'aria-label', type: 'string', default: 'messages.loading', description: 'ชื่อที่ screen reader อ่าน (ค่าเริ่มต้น "กำลังโหลด" จาก BomUIProvider)' },
          { name: 'className', type: 'string', default: "'size-4'", description: 'ปรับขนาด/สี เช่น size-6 text-muted-foreground' },
        ],
      },
    ],
    notes: [
      'ย้ายจาก 0.x: prop size และ label ถูกลบ — ใช้ className="size-6" และ aria-label แทน',
      'รับ prop ทุกตัวของ <svg>',
      'ในปุ่มใช้ <Button loading> แทนการใส่ Spinner เอง',
    ],
    basedOn: { name: 'shadcn/ui Spinner', href: 'https://ui.shadcn.com/docs/components/spinner' },
  },
  {
    slug: 'kbd',
    name: 'Kbd',
    description: 'แสดงปุ่มคีย์บอร์ด เช่น คีย์ลัด',
    imports: ['Kbd', 'KbdGroup'],
    notes: ['KbdGroup ใช้รวมหลายปุ่ม เช่น ⌘ + B', 'อยู่ใน TooltipContent จะปรับสีให้เข้ากับ tooltip เอง'],
    basedOn: { name: 'shadcn/ui Kbd', href: 'https://ui.shadcn.com/docs/components/kbd' },
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    description: 'รูปโปรไฟล์ พร้อมตัวอักษรสำรองเมื่อโหลดรูปไม่ได้ จัดกลุ่มซ้อนกันได้ และมีป้ายสถานะมุมขวาล่าง',
    imports: ['Avatar', 'AvatarImage', 'AvatarFallback', 'AvatarBadge', 'AvatarGroup', 'AvatarGroupCount'],
    props: [
      { component: 'Avatar', rows: [{ name: 'size', type: "'default' | 'sm' | 'lg'", default: "'default'", description: 'ขนาด (32 / 24 / 40px) — AvatarBadge และ AvatarGroupCount ปรับตาม' }] },
      { component: 'AvatarFallback', rows: [{ name: 'delayMs', type: 'number', description: 'หน่วงก่อนแสดง fallback (กันกะพริบตอนรูปโหลดเร็ว)' }] },
      { component: 'AvatarBadge', rows: [{ name: 'children', type: 'ReactNode', description: 'ไอคอนเล็ก (ถูกซ่อนเมื่อ size="sm" เหลือเป็นจุด) — เปลี่ยนสีด้วย className' }] },
    ],
    notes: [
      'ย้ายจาก 0.x: size="md" → "default"',
      'AvatarGroup ซ้อน Avatar ให้เหลื่อมกันพร้อมวงขอบ — ปิดท้ายด้วย AvatarGroupCount เช่น "+3"',
      'AvatarBadge วางไว้ใน Avatar; ถ้าสื่อความหมาย (เช่น ออนไลน์) ให้ใส่ aria-label',
    ],
    basedOn: { name: 'shadcn/ui Avatar', href: 'https://ui.shadcn.com/docs/components/avatar' },
  },
  {
    slug: 'card',
    name: 'Card',
    description: 'กล่องเนื้อหา แบ่งเป็น header / content / footer พร้อมช่อง action มุมขวาบน',
    imports: ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardAction', 'CardContent', 'CardFooter'],
    props: [{ component: 'Card', rows: [{ name: 'size', type: "'default' | 'sm'", default: "'default'", description: 'ระยะห่างด้านใน (16 / 12px ผ่าน --card-spacing)' }] }],
    notes: [
      'ย้ายจาก 0.x: size="md" → "default"',
      'CardFooter มีพื้นหลังจางและเส้นขอบบน',
      '<img> ที่เป็นลูกตัวแรกของ Card จะชิดขอบบนพอดี',
    ],
    basedOn: { name: 'shadcn/ui Card', href: 'https://ui.shadcn.com/docs/components/card' },
  },
  {
    slug: 'separator',
    name: 'Separator',
    description: 'เส้นคั่นแนวนอนหรือแนวตั้ง',
    imports: ['Separator'],
    props: [
      {
        component: 'Separator',
        rows: [
          { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'ทิศทาง' },
          { name: 'decorative', type: 'boolean', default: 'true', description: 'true = ตกแต่งอย่างเดียว ไม่ประกาศกับ screen reader' },
          className,
        ],
      },
    ],
    notes: ['เส้นแนวตั้งยืดตามความสูงของกล่องแม่ (self-stretch) — กำหนดความสูงที่กล่องแม่ เช่น h-5', 'ระยะห่างใช้ className เช่น my-4'],
    basedOn: { name: 'shadcn/ui Separator', href: 'https://ui.shadcn.com/docs/components/separator' },
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    description: 'กล่องกะพริบแทนเนื้อหาระหว่างโหลด',
    imports: ['Skeleton'],
    notes: [
      'กำหนดขนาดและรูปทรงด้วย className เช่น h-4 w-48 หรือ size-12 rounded-full',
      'ไม่ได้ซ่อนจาก screen reader ให้เอง — ใส่ aria-hidden ที่ Skeleton และบอกสถานะด้วย aria-busy ที่กล่องแม่',
    ],
    basedOn: { name: 'shadcn/ui Skeleton', href: 'https://ui.shadcn.com/docs/components/skeleton' },
  },

  // ───────────── Form ─────────────
  {
    slug: 'label',
    name: 'Label',
    description: 'ป้ายชื่อของช่องกรอก คลิกแล้วโฟกัสช่องที่ผูกด้วย htmlFor',
    imports: ['Label'],
    notes: [
      'จางลงอัตโนมัติเมื่อ control ที่อยู่ก่อนหน้ามี class peer และถูก disable หรืออยู่ใน Field ที่มี data-disabled',
      'ในฟอร์มที่ใช้ Field แนะนำ FieldLabel (ต่อยอดจาก Label)',
    ],
    basedOn: { name: 'shadcn/ui Label', href: 'https://ui.shadcn.com/docs/components/label' },
  },
  {
    slug: 'input',
    name: 'Input',
    description: 'ช่องกรอกข้อความ รองรับทุก type ของ <input> (รวม file)',
    imports: ['Input'],
    props: [
      {
        component: 'Input',
        rows: [
          { name: 'type', type: 'string', description: 'type ของ <input>' },
          { name: 'aria-invalid', type: 'boolean', description: 'แสดงกรอบและ ring สีแดง' },
          className,
        ],
      },
    ],
    notes: [
      'ย้ายจาก 0.x: prop size ถูกลบ — ปรับความสูงด้วย className เช่น h-10 (prop size ของ HTML กลับมาใช้ได้ตามปกติ)',
      'รับ attribute ทุกตัวของ <input>',
      'ในฟอร์ม react-hook-form ใช้ RHFInput แทน',
    ],
    basedOn: { name: 'shadcn/ui Input', href: 'https://ui.shadcn.com/docs/components/input' },
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    description: 'ช่องกรอกข้อความหลายบรรทัด สูงตามเนื้อหาอัตโนมัติ (field-sizing: content, ขั้นต่ำ 4rem)',
    imports: ['Textarea'],
    notes: ['จำกัดความสูงด้วย className เช่น max-h-40', 'ตั้ง aria-invalid เพื่อแสดงสถานะผิดพลาด'],
    basedOn: { name: 'shadcn/ui Textarea', href: 'https://ui.shadcn.com/docs/components/textarea' },
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    description: 'ช่องติ๊ก รองรับสถานะ indeterminate (แสดงขีดแทนเครื่องหมายถูก)',
    imports: ['Checkbox'],
    props: [
      {
        component: 'Checkbox',
        rows: [
          { name: 'checked', type: "boolean | 'indeterminate'", description: 'ค่าแบบ controlled' },
          { name: 'defaultChecked', type: "boolean | 'indeterminate'", description: 'ค่าเริ่มต้นแบบ uncontrolled' },
          { name: 'onCheckedChange', type: "(checked: boolean | 'indeterminate') => void", description: 'เรียกเมื่อเปลี่ยนค่า' },
          { name: 'disabled / required / name / value', type: '…', description: 'ใช้ในฟอร์ม HTML ได้ตามปกติ' },
        ],
      },
    ],
    basedOn: { name: 'shadcn/ui Checkbox', href: 'https://ui.shadcn.com/docs/components/checkbox' },
  },
  {
    slug: 'radio-group',
    name: 'RadioGroup',
    description: 'ตัวเลือกแบบเลือกได้ข้อเดียว เลื่อนด้วยลูกศรได้',
    imports: ['RadioGroup', 'RadioGroupItem'],
    props: [
      {
        component: 'RadioGroup',
        rows: [
          { name: 'value / defaultValue', type: 'string', description: 'ค่าที่เลือก' },
          { name: 'onValueChange', type: '(value: string) => void', description: 'เรียกเมื่อเปลี่ยนค่า' },
          { name: 'orientation', type: "'horizontal' | 'vertical'", description: 'ทิศทางของลูกศร (การจัดวางกำหนดด้วย className เช่น flex)' },
        ],
      },
      { component: 'RadioGroupItem', rows: [{ name: 'value', type: 'string', description: 'จำเป็น — ค่าของตัวเลือก' }] },
    ],
    notes: ['RadioGroup เป็น grid gap-2 — เปลี่ยนเป็นแนวนอนด้วย className="flex"', 'ทำเป็นการ์ดตัวเลือกได้ด้วย FieldLabel + Field (ดูหน้า Field)'],
    basedOn: { name: 'shadcn/ui Radio Group', href: 'https://ui.shadcn.com/docs/components/radio-group' },
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: 'สวิตช์เปิด/ปิด',
    imports: ['Switch'],
    props: [
      {
        component: 'Switch',
        rows: [
          { name: 'size', type: "'default' | 'sm'", default: "'default'", description: 'ขนาด' },
          { name: 'checked / defaultChecked', type: 'boolean', description: 'ค่า' },
          { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'เรียกเมื่อเปลี่ยนค่า' },
        ],
      },
    ],
    notes: ['ย้ายจาก 0.x: size="md" → "default"'],
    basedOn: { name: 'shadcn/ui Switch', href: 'https://ui.shadcn.com/docs/components/switch' },
  },
  {
    slug: 'select',
    name: 'Select',
    description: 'dropdown เลือกค่า พร้อมกลุ่มและเส้นคั่น',
    imports: ['Select', 'SelectTrigger', 'SelectValue', 'SelectContent', 'SelectGroup', 'SelectLabel', 'SelectItem', 'SelectSeparator', 'SelectScrollUpButton', 'SelectScrollDownButton'],
    props: [
      { component: 'Select', rows: [{ name: 'value / defaultValue / onValueChange', type: 'string', description: 'controlled หรือ uncontrolled' }] },
      { component: 'SelectTrigger', rows: [{ name: 'size', type: "'default' | 'sm'", default: "'default'", description: 'ความสูง (32 / 28px)' }] },
      { component: 'SelectContent', rows: [
        { name: 'position', type: "'item-aligned' | 'popper'", default: "'item-aligned'", description: "'popper' = เปิดใต้ trigger แบบ dropdown ทั่วไป" },
        { name: 'align', type: "'start' | 'center' | 'end'", default: "'center'", description: "การจัดแนวเทียบ trigger (ใช้กับ position='popper')" },
      ] },
      { component: 'SelectItem', rows: [{ name: 'value', type: 'string', description: 'จำเป็น และห้ามเป็นสตริงว่าง' }] },
    ],
    notes: [
      'ย้ายจาก 0.x: SelectTrigger size="md" → "default" (ไม่มี lg แล้ว)',
      'ความกว้างของ trigger กำหนดด้วย className เช่น w-56',
      'ปุ่มเลื่อน SelectScrollUp/DownButton ใส่ไว้ใน SelectContent ให้แล้ว',
    ],
    basedOn: { name: 'shadcn/ui Select', href: 'https://ui.shadcn.com/docs/components/select' },
  },
  {
    slug: 'input-group',
    name: 'InputGroup',
    description: 'กล่องเดียวที่มีช่องกรอก + ส่วนเสริม (ข้อความ ไอคอน ปุ่ม Kbd) ได้ทั้ง 4 ด้าน',
    imports: ['InputGroup', 'InputGroupAddon', 'InputGroupInput', 'InputGroupTextarea', 'InputGroupText', 'InputGroupButton'],
    props: [
      { component: 'InputGroupAddon', rows: [{ name: 'align', type: "'inline-start' | 'inline-end' | 'block-start' | 'block-end'", default: "'inline-start'", description: 'ตำแหน่งของส่วนเสริม' }] },
      { component: 'InputGroupButton', rows: [
        { name: 'size', type: "'xs' | 'sm' | 'icon-xs' | 'icon-sm'", default: "'xs'", description: 'ขนาดปุ่มในกล่อง' },
        { name: 'variant', type: 'ButtonVariant', default: "'ghost'", description: 'รูปแบบเดียวกับ Button' },
        { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'ต่างจาก Button — ค่าเริ่มต้นเป็น button' },
      ] },
    ],
    notes: [
      'วาง InputGroupAddon ไว้หลัง InputGroupInput ใน DOM ได้ — ตำแหน่งที่เห็นกำหนดด้วย align',
      'คลิกที่พื้นที่ addon (ที่ไม่ใช่ปุ่ม) จะโฟกัสช่องกรอกให้',
      'InputGroupButton ที่มีแต่ไอคอนต้องใส่ aria-label เอง',
    ],
    basedOn: { name: 'shadcn/ui Input Group', href: 'https://ui.shadcn.com/docs/components/input-group' },
  },
  {
    slug: 'input-otp',
    name: 'InputOTP',
    description: 'ช่องกรอกรหัส OTP แยกช่องละตัว (จาก input-otp)',
    imports: ['InputOTP', 'InputOTPGroup', 'InputOTPSlot', 'InputOTPSeparator'],
    props: [
      { component: 'InputOTP', rows: [
        { name: 'maxLength', type: 'number', description: 'จำนวนตัวอักษร (จำเป็น)' },
        { name: 'value / onChange', type: 'string', description: 'ค่าแบบ controlled' },
        { name: 'pattern', type: 'string', description: 'regex ของตัวอักษรที่ยอมรับ เช่น "^\\d+$" (หรือ REGEXP_ONLY_DIGITS จากแพ็กเกจ input-otp)' },
        { name: 'onComplete', type: '(value: string) => void', description: 'เรียกเมื่อกรอกครบ' },
        { name: 'containerClassName', type: 'string', description: 'class ของกล่องนอก' },
      ] },
      { component: 'InputOTPSlot', rows: [{ name: 'index', type: 'number', description: 'ลำดับช่อง เริ่มที่ 0' }] },
    ],
    notes: ['ใส่ aria-label ที่ InputOTP เพราะไม่มี label ที่มองเห็น (หรือผูกกับ Label ด้วย id)', 'ในฟอร์ม react-hook-form ใช้ RHFInputOTP'],
    basedOn: { name: 'shadcn/ui Input OTP', href: 'https://ui.shadcn.com/docs/components/input-otp' },
  },
  {
    slug: 'calendar',
    name: 'Calendar',
    description: 'ปฏิทิน (react-day-picker) ค่าเริ่มต้นเป็นภาษาไทย ปี พ.ศ. ทั้งหัวปฏิทิน dropdown ปี และชื่อวันที่ screen reader อ่าน',
    imports: ['Calendar', 'CalendarDayButton', 'type DateRange'],
    props: [
      { component: 'Calendar', rows: [
        { name: 'mode', type: "'single' | 'multiple' | 'range'", description: 'รูปแบบการเลือก' },
        { name: 'selected / onSelect', type: 'Date | Date[] | DateRange', description: 'ค่าที่เลือก' },
        { name: 'locale', type: 'DayPickerLocale', default: 'จาก BomUIProvider (th)', description: 'locale จาก react-day-picker/locale (เฉพาะ bom-ui: ค่าเริ่มต้นมาจาก provider)' },
        { name: 'captionLayout', type: "'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years'", default: "'label'", description: "'dropdown' = เลือกเดือน/ปีจาก dropdown (คู่กับ startMonth / endMonth)" },
        { name: 'buttonVariant', type: 'ButtonVariant', default: "'ghost'", description: 'รูปแบบปุ่มเดือนก่อน/ถัดไป' },
        { name: 'showOutsideDays', type: 'boolean', default: 'true', description: 'แสดงวันของเดือนข้างเคียง' },
        className,
      ] },
      { component: 'CalendarDayButton', rows: [{ name: 'day / modifiers', type: 'DayButtonProps', description: 'ปุ่มวันที่ของ Calendar — ใช้ต่อยอดใน components={{ DayButton }} เพื่อแสดงข้อมูลเพิ่ม (เช่น ราคา) ในช่องวัน' }] },
    ],
    notes: [
      'ขนาดช่องปรับด้วย CSS var --cell-size เช่น className="[--cell-size:--spacing(9)]"',
      'ใส่กรอบด้วย className="rounded-lg border" — ใน Card / Popover พื้นหลังจะโปร่งใสให้เอง',
      'prop อื่นดูที่เอกสาร react-day-picker',
    ],
    basedOn: { name: 'shadcn/ui Calendar', href: 'https://ui.shadcn.com/docs/components/calendar' },
  },
  {
    slug: 'field',
    name: 'Field',
    description: 'ชุดจัดวางฟอร์ม: label, คำอธิบาย, error, กลุ่ม และ fieldset — ใช้เองกับ control ใดก็ได้',
    imports: ['FieldSet', 'FieldLegend', 'FieldGroup', 'Field', 'FieldContent', 'FieldLabel', 'FieldTitle', 'FieldDescription', 'FieldSeparator', 'FieldError'],
    props: [
      { component: 'Field', rows: [{ name: 'orientation', type: "'vertical' | 'horizontal' | 'responsive'", default: "'vertical'", description: "'responsive' = แนวตั้งจนกว่า FieldGroup จะกว้าง ≥ 28rem (container query)" }] },
      { component: 'FieldLegend', rows: [{ name: 'variant', type: "'legend' | 'label'", default: "'legend'", description: "'label' = ขนาดเท่า label (เช่น กลุ่ม checkbox)" }] },
      { component: 'FieldError', rows: [
        { name: 'errors', type: 'Array<{ message?: string } | undefined>', description: 'error จาก react-hook-form / schema — ข้อความซ้ำแสดงครั้งเดียว หลายข้อแสดงเป็นรายการ' },
        { name: 'children', type: 'ReactNode', description: 'ข้อความ error เอง (มีก่อน errors)' },
      ] },
      { component: 'FieldSeparator', rows: [{ name: 'children', type: 'ReactNode', description: 'ข้อความกลางเส้น เช่น "หรือ"' }] },
    ],
    notes: [
      'ตั้ง data-invalid บน Field เพื่อให้ label เป็นสีแดง และ aria-invalid ที่ control',
      'FieldLabel ครอบ Field ได้ → กลายเป็นการ์ดตัวเลือกที่คลิกได้ทั้งใบ (ใช้กับ RadioGroup / Checkbox)',
      'FieldTitle ใช้แทน FieldLabel เมื่อไม่ต้องผูก htmlFor (เช่น ข้างในการ์ดตัวเลือก)',
      'ถ้าใช้ react-hook-form ให้ใช้ RHF* ซึ่งจัดวาง Field ให้แล้ว',
    ],
    basedOn: { name: 'shadcn/ui Field', href: 'https://ui.shadcn.com/docs/components/field' },
  },

  // ───────────── Overlay ─────────────
  {
    slug: 'dialog',
    name: 'Dialog',
    description: 'หน้าต่าง modal กลางจอ (shadcn/ui) มีปุ่ม X มุมขวาบน กด Esc หรือคลิกนอกกรอบเพื่อปิด — ข้อความปุ่มปิดมาจาก messages.close ของ BomUIProvider',
    imports: ['Dialog', 'DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogTitle', 'DialogDescription', 'DialogFooter', 'DialogClose', 'DialogPortal', 'DialogOverlay'],
    props: [
      { component: 'Dialog', rows: [
        { name: 'open / defaultOpen', type: 'boolean', description: 'controlled หรือ uncontrolled' },
        { name: 'onOpenChange', type: '(open: boolean) => void', description: 'เรียกเมื่อเปิด/ปิด' },
        { name: 'modal', type: 'boolean', default: 'true', description: 'ล็อกการโต้ตอบกับส่วนอื่นของหน้า' },
      ] },
      { component: 'DialogContent', rows: [
        { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'แสดงปุ่ม X มุมขวาบน (sr-only ใช้ messages.close)' },
        { name: 'className', type: 'string', description: 'ความกว้างเริ่มต้น sm:max-w-sm — ขยายด้วย เช่น className="sm:max-w-lg"' },
      ] },
      { component: 'DialogFooter', rows: [{ name: 'showCloseButton', type: 'boolean', default: 'false', description: 'เพิ่มปุ่ม "ปิด" (variant outline, ข้อความจาก messages.close)' }] },
      { component: 'DialogTrigger / DialogClose', rows: [{ name: 'asChild', type: 'boolean', default: 'false', description: 'ใช้ element ลูก (เช่น <Button>) เป็นปุ่มแทน' }] },
    ],
    notes: [
      'ต้องมี DialogTitle เสมอเพื่อการเข้าถึง (ซ่อนได้ด้วย className="sr-only")',
      'Button ไม่ตั้ง type="button" ให้แล้ว — ถ้าวางฟอร์มใน Dialog ให้ระบุ type="submit" / type="button" เอง',
      'DialogFooter มีพื้นหลัง muted และติดขอบล่างของกล่อง (-mx-4 -mb-4)',
    ],
    basedOn: { name: 'shadcn/ui Dialog', href: 'https://ui.shadcn.com/docs/components/dialog' },
  },
  {
    slug: 'alert-dialog',
    name: 'AlertDialog',
    description: 'กล่องยืนยันการกระทำ ไม่มีปุ่ม X และคลิกนอกกรอบไม่ปิด — ผู้ใช้ต้องเลือกเอง มี AlertDialogMedia สำหรับไอคอนหัวกล่อง',
    imports: [
      'AlertDialog', 'AlertDialogTrigger', 'AlertDialogContent', 'AlertDialogHeader', 'AlertDialogMedia', 'AlertDialogTitle',
      'AlertDialogDescription', 'AlertDialogFooter', 'AlertDialogCancel', 'AlertDialogAction',
    ],
    props: [
      { component: 'AlertDialog', rows: [{ name: 'open / defaultOpen / onOpenChange', type: 'boolean / (open: boolean) => void', description: 'controlled หรือ uncontrolled' }] },
      { component: 'AlertDialogContent', rows: [{ name: 'size', type: "'default' | 'sm'", default: "'default'", description: "'sm' = กล่องแคบ จัดกลาง ปุ่มใน footer เรียง 2 คอลัมน์" }] },
      { component: 'AlertDialogAction', rows: [
        { name: 'variant', type: 'ButtonVariant', default: "'default'", description: "รูปแบบเดียวกับ Button — ใช้ 'destructive' กับการยืนยันที่ทำลายข้อมูล" },
        { name: 'size', type: 'ButtonSize', default: "'default'", description: 'ขนาดเดียวกับ Button' },
      ] },
      { component: 'AlertDialogCancel', rows: [
        { name: 'variant', type: 'ButtonVariant', default: "'outline'", description: 'รูปแบบเดียวกับ Button' },
        { name: 'size', type: 'ButtonSize', default: "'default'", description: 'ขนาดเดียวกับ Button' },
      ] },
      { component: 'AlertDialogMedia', rows: [{ name: 'className', type: 'string', description: 'กรอบไอคอน 40px พื้น muted — เปลี่ยนสีได้ เช่น "bg-destructive/10 text-destructive"' }] },
    ],
    notes: [
      'วาง AlertDialogMedia ไว้ใน AlertDialogHeader ก่อน AlertDialogTitle — size="default" จะวางไอคอนไว้ซ้ายของหัวข้อบนจอกว้าง',
      'AlertDialogAction / AlertDialogCancel render เป็น <Button> แล้ว ไม่ต้องครอบ Button เพิ่ม',
      'ต่างจาก 0.x: variant="danger" เปลี่ยนเป็น "destructive" และค่าเริ่มต้นของ Action คือ "default"',
    ],
    basedOn: { name: 'shadcn/ui Alert Dialog', href: 'https://ui.shadcn.com/docs/components/alert-dialog' },
  },
  {
    slug: 'sheet',
    name: 'Sheet',
    description: 'แผงเลื่อนออกจากขอบจอ (ใช้ Dialog เป็นฐาน) เหมาะกับฟอร์มแก้ไขหรือตัวกรอง',
    imports: ['Sheet', 'SheetTrigger', 'SheetContent', 'SheetHeader', 'SheetTitle', 'SheetDescription', 'SheetFooter', 'SheetClose'],
    props: [
      { component: 'Sheet', rows: [{ name: 'open / defaultOpen / onOpenChange', type: 'boolean / (open: boolean) => void', description: 'controlled หรือ uncontrolled' }] },
      { component: 'SheetContent', rows: [
        { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'right'", description: 'ขอบที่แผงเลื่อนออกมา (ซ้าย/ขวากว้าง 3/4 ของจอ สูงสุด sm:max-w-sm)' },
        { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'แสดงปุ่ม X (sr-only ใช้ messages.close)' },
      ] },
    ],
    notes: [
      'ไม่มี type SheetSide แล้ว — ใช้ SheetContentProps["side"] แทน',
      'SheetFooter ไม่มี showCloseButton แล้ว — วาง <SheetClose asChild><Button>…</Button></SheetClose> เอง',
      'SheetHeader / SheetFooter มี padding p-4 ในตัว ส่วนเนื้อหาตรงกลางให้ใส่ padding เอง (เช่น className="px-4")',
      'SheetFooter ใช้ mt-auto เพื่อชิดล่าง — ถ้าครอบด้วย <form> ให้ form เป็น "flex h-full flex-col"',
    ],
    basedOn: { name: 'shadcn/ui Sheet', href: 'https://ui.shadcn.com/docs/components/sheet' },
  },
  {
    slug: 'popover',
    name: 'Popover',
    description: 'กล่องลอยที่ผูกกับปุ่ม สำหรับเนื้อหาสั้น ๆ หรือฟอร์มเล็ก',
    imports: ['Popover', 'PopoverTrigger', 'PopoverAnchor', 'PopoverContent', 'PopoverHeader', 'PopoverTitle', 'PopoverDescription'],
    props: [
      { component: 'Popover', rows: [{ name: 'open / defaultOpen / onOpenChange', type: 'boolean / (open: boolean) => void', description: 'controlled หรือ uncontrolled' }] },
      { component: 'PopoverContent', rows: [
        { name: 'align', type: "'start' | 'center' | 'end'", default: "'center'", description: 'การจัดแนวกับ trigger' },
        { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'bottom'", description: 'ด้านที่แสดง' },
        { name: 'sideOffset', type: 'number', default: '4', description: 'ระยะห่างจาก trigger (px)' },
        { name: 'className', type: 'string', description: 'กว้างเริ่มต้น w-72 — เปลี่ยนได้ เช่น "w-64"' },
      ] },
    ],
    notes: [
      'PopoverAnchor ใช้เมื่อต้องการให้กล่องยึดกับ element อื่นที่ไม่ใช่ trigger',
      'ไม่มี PopoverClose — ปิดจากโค้ดด้วย open / onOpenChange',
    ],
    basedOn: { name: 'shadcn/ui Popover', href: 'https://ui.shadcn.com/docs/components/popover' },
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'คำอธิบายสั้นเมื่อ hover หรือโฟกัส — ต้องมี TooltipProvider ครอบอยู่ด้านบน (เหมือน shadcn/ui)',
    imports: ['TooltipProvider', 'Tooltip', 'TooltipTrigger', 'TooltipContent'],
    props: [
      { component: 'TooltipProvider', rows: [
        { name: 'delayDuration', type: 'number', default: '0', description: 'หน่วงก่อนแสดง (ms)' },
        { name: 'skipDelayDuration', type: 'number', default: '300', description: 'ช่วงเวลาที่เลื่อนไป tooltip ถัดไปแล้วแสดงทันที (ms)' },
      ] },
      { component: 'Tooltip', rows: [{ name: 'open / defaultOpen / onOpenChange', type: 'boolean / (open: boolean) => void', description: 'controlled หรือ uncontrolled' }] },
      { component: 'TooltipContent', rows: [
        { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'", description: 'ด้านที่แสดง' },
        { name: 'sideOffset', type: 'number', default: '0', description: 'ระยะห่าง (px) — มีลูกศรอยู่แล้ว' },
        { name: 'align', type: "'start' | 'center' | 'end'", default: "'center'", description: 'การจัดแนว' },
      ] },
    ],
    notes: [
      'วาง <TooltipProvider> ครั้งเดียวใน root layout (เว็บนี้ทำไว้แล้ว) — ถ้าไม่มีจะ error ตอน render; SidebarMenuButton tooltip ก็ต้องใช้',
      'ซ้อน TooltipProvider ได้ เพื่อตั้ง delayDuration เฉพาะบางส่วนของหน้า',
      'ใส่ <Kbd> ใน TooltipContent ได้ (จัด padding ให้อัตโนมัติ)',
      'trigger ที่ไม่ใช่ปุ่มต้องโฟกัสได้ (tabIndex={0}) เพื่อให้ผู้ใช้คีย์บอร์ดเห็น tooltip',
    ],
    basedOn: { name: 'shadcn/ui Tooltip', href: 'https://ui.shadcn.com/docs/components/tooltip' },
  },
  {
    slug: 'dropdown-menu',
    name: 'DropdownMenu',
    description: 'เมนูแบบ dropdown รองรับ checkbox, radio, คีย์ลัด และเมนูย่อย',
    imports: [
      'DropdownMenu', 'DropdownMenuTrigger', 'DropdownMenuContent', 'DropdownMenuGroup', 'DropdownMenuLabel', 'DropdownMenuItem',
      'DropdownMenuCheckboxItem', 'DropdownMenuRadioGroup', 'DropdownMenuRadioItem', 'DropdownMenuSeparator', 'DropdownMenuShortcut',
      'DropdownMenuSub', 'DropdownMenuSubTrigger', 'DropdownMenuSubContent', 'DropdownMenuPortal',
    ],
    props: [
      { component: 'DropdownMenuContent', rows: [
        { name: 'align', type: "'start' | 'center' | 'end'", default: "'start'", description: 'การจัดแนวกับ trigger' },
        { name: 'sideOffset', type: 'number', default: '4', description: 'ระยะห่างจาก trigger (px)' },
        { name: 'className', type: 'string', description: 'กว้างเท่า trigger (ขั้นต่ำ min-w-32) — กำหนดเองได้ เช่น "w-56"' },
      ] },
      { component: 'DropdownMenuItem', rows: [
        { name: 'variant', type: "'default' | 'destructive'", default: "'default'", description: "'destructive' = สีแดง สำหรับลบหรือออกจากระบบ" },
        { name: 'inset', type: 'boolean', default: 'false', description: 'เว้นที่ซ้ายให้ตรงกับรายการที่มีไอคอน' },
        { name: 'onSelect', type: '(event: Event) => void', description: 'เรียกเมื่อเลือก (event.preventDefault() เพื่อไม่ปิดเมนู)' },
      ] },
      { component: 'DropdownMenuCheckboxItem', rows: [{ name: 'checked / onCheckedChange', type: 'boolean | "indeterminate"', description: 'สถานะติ๊ก' }] },
      { component: 'DropdownMenuRadioGroup', rows: [{ name: 'value / onValueChange', type: 'string', description: 'ค่าที่เลือก' }] },
      { component: 'DropdownMenuLabel / DropdownMenuSubTrigger / DropdownMenuCheckboxItem / DropdownMenuRadioItem', rows: [{ name: 'inset', type: 'boolean', default: 'false', description: 'เว้นที่ซ้าย' }] },
    ],
    notes: ['ต่างจาก 0.x: DropdownMenuItem variant="danger" เปลี่ยนเป็น "destructive"', 'ไอคอน lucide ในรายการได้ขนาด size-4 อัตโนมัติ'],
    basedOn: { name: 'shadcn/ui Dropdown Menu', href: 'https://ui.shadcn.com/docs/components/dropdown-menu' },
  },
  {
    slug: 'toaster',
    name: 'Toaster + toast()',
    description: 'การแจ้งเตือนแบบ toast (sonner) — วาง <Toaster /> ครั้งเดียวใน root layout แล้วเรียก toast() ที่ไหนก็ได้',
    imports: ['Toaster', 'toast'],
    props: [{ component: 'Toaster', rows: [
      { name: 'theme', type: "'light' | 'dark' | 'system'", default: 'ตาม class="dark" บน <html>', description: 'ปกติไม่ต้องตั้ง — ติดตาม class dark (next-themes attribute="class") ให้อัตโนมัติ' },
      { name: 'position', type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'", default: "'bottom-right'", description: 'ตำแหน่ง' },
      { name: 'richColors / closeButton / duration / expand', type: '…', description: 'prop อื่นของ sonner (ToasterProps) ใช้ได้ทั้งหมด' },
    ] }],
    notes: [
      "import toast จาก '@bomtawep/ui' (ไม่ใช่ 'sonner') เพื่อให้ใช้ instance เดียวกัน — type ToastOptions / ToasterProps ก็ export ไว้",
      'สีของ toast มาจากตัวแปร --popover / --popover-foreground / --border / --radius ของธีม',
      'ไอคอน success / info / warning / error / loading เป็น lucide-react',
    ],
    basedOn: { name: 'shadcn/ui Sonner', href: 'https://ui.shadcn.com/docs/components/sonner' },
  },

  // ───────────── Navigation & data ─────────────
  {
    slug: 'tabs',
    name: 'Tabs',
    description: 'แท็บสลับเนื้อหา มี 2 แบบ (default = พื้นหลังเป็นก้อน, line = ขีดเส้นใต้) รองรับแนวตั้ง',
    imports: ['Tabs', 'TabsList', 'TabsTrigger', 'TabsContent', 'tabsListVariants'],
    props: [
      { component: 'Tabs', rows: [
        { name: 'value / defaultValue', type: 'string', description: 'แท็บที่เปิดอยู่' },
        { name: 'onValueChange', type: '(value: string) => void', description: 'เรียกเมื่อเปลี่ยนแท็บ' },
        { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'ทิศทาง (vertical = รายการแท็บอยู่ซ้าย)' },
        { name: 'activationMode', type: "'automatic' | 'manual'", default: "'automatic'", description: 'manual = ต้องกด Enter/Space หลังเลื่อนด้วยลูกศร' },
      ] },
      { component: 'TabsList', rows: [{ name: 'variant', type: "'default' | 'line'", default: "'default'", description: "'line' = ไม่มีพื้นหลัง แท็บที่เลือกมีเส้นใต้" }] },
      { component: 'TabsTrigger', rows: [
        { name: 'value', type: 'string', description: 'จำเป็น — ต้องตรงกับ TabsContent' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'ปิดการใช้งาน' },
      ] },
    ],
    notes: ['ใส่ไอคอน lucide ใน TabsTrigger ได้ (size-4 อัตโนมัติ)', 'tabsListVariants (cva) export ไว้สำหรับทำ list หน้าตาเดียวกันเอง'],
    basedOn: { name: 'shadcn/ui Tabs', href: 'https://ui.shadcn.com/docs/components/tabs' },
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    description: 'หัวข้อพับ/กางได้',
    imports: ['Accordion', 'AccordionItem', 'AccordionTrigger', 'AccordionContent'],
    props: [
      { component: 'Accordion', rows: [
        { name: 'type', type: "'single' | 'multiple'", description: 'จำเป็น — เปิดได้ทีละข้อ หรือหลายข้อ' },
        { name: 'collapsible', type: 'boolean', default: 'false', description: "type='single': ปิดข้อที่เปิดอยู่ได้" },
        { name: 'value / defaultValue', type: "string (single) | string[] (multiple)", description: 'ข้อที่เปิด' },
        { name: 'onValueChange', type: '(value) => void', description: 'เรียกเมื่อเปิด/ปิด' },
      ] },
      { component: 'AccordionItem', rows: [
        { name: 'value', type: 'string', description: 'จำเป็น — id ของข้อ' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'ปิดการใช้งาน' },
      ] },
    ],
    notes: ['className ของ AccordionContent ใส่ที่ div ด้านใน (ปรับ padding ได้)'],
    basedOn: { name: 'shadcn/ui Accordion', href: 'https://ui.shadcn.com/docs/components/accordion' },
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'เส้นทางนำทาง แสดงตำแหน่งของหน้าปัจจุบัน — aria-label ของ <nav> มาจาก messages.breadcrumb',
    imports: ['Breadcrumb', 'BreadcrumbList', 'BreadcrumbItem', 'BreadcrumbLink', 'BreadcrumbPage', 'BreadcrumbSeparator', 'BreadcrumbEllipsis'],
    props: [
      { component: 'BreadcrumbLink', rows: [{ name: 'asChild', type: 'boolean', default: 'false', description: 'ใช้กับ next/link: <BreadcrumbLink asChild><Link href="/">…</Link></BreadcrumbLink>' }] },
      { component: 'BreadcrumbSeparator', rows: [{ name: 'children', type: 'ReactNode', default: '<ChevronRightIcon />', description: 'ตัวคั่นเอง เช่น <Slash />' }] },
    ],
    notes: [
      'BreadcrumbPage คือหน้าปัจจุบัน (aria-current="page")',
      'BreadcrumbEllipsis มีข้อความ sr-only จาก messages.breadcrumbMore — ใช้เป็น trigger ของ DropdownMenu เพื่อแสดงเส้นทางที่ซ่อนอยู่',
    ],
    basedOn: { name: 'shadcn/ui Breadcrumb', href: 'https://ui.shadcn.com/docs/components/breadcrumb' },
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    description: 'ตัวแบ่งหน้าแบบประกอบเอง (shadcn/ui) พร้อม helper getPageItems() ของ bom-ui ที่คำนวณเลขหน้าและ … ให้ และข้อความปุ่มภาษาไทยจาก BomUIProvider',
    imports: ['Pagination', 'PaginationContent', 'PaginationItem', 'PaginationLink', 'PaginationPrevious', 'PaginationNext', 'PaginationEllipsis', 'getPageItems'],
    props: [
      { component: 'getPageItems(page, pageCount, siblingCount?) — bom-ui', rows: [
        { name: 'page', type: 'number', description: 'หน้าปัจจุบัน เริ่มที่ 1 (ค่าที่เกินช่วงจะถูกบีบให้อยู่ใน 1…pageCount)' },
        { name: 'pageCount', type: 'number', description: 'จำนวนหน้าทั้งหมด' },
        { name: 'siblingCount', type: 'number', default: '1', description: 'จำนวนหน้าข้าง ๆ หน้าปัจจุบัน' },
        { name: 'คืนค่า', type: "Array<number | 'ellipsis'>", description: "เช่น getPageItems(5, 10) → [1, 'ellipsis', 4, 5, 6, 'ellipsis', 10] — มีหน้าแรก/หน้าสุดท้ายเสมอ และจำนวนช่องคงที่ แถบจึงไม่กระโดด" },
      ] },
      { component: 'PaginationLink', rows: [
        { name: 'isActive', type: 'boolean', default: 'false', description: 'หน้าปัจจุบัน — variant outline + aria-current="page"' },
        { name: 'size', type: 'ButtonSize', default: "'icon'", description: 'ขนาดเดียวกับ Button' },
        { name: 'href / onClick', type: 'string / MouseEventHandler', description: 'render เป็น <a> — ใช้ href สำหรับ URL หรือ onClick + preventDefault สำหรับ state' },
      ] },
      { component: 'PaginationPrevious / PaginationNext', rows: [
        { name: 'text', type: 'string', default: 'messages.previous / messages.next', description: 'ข้อความบนปุ่ม (ซ่อนบนจอเล็ก) — ค่าเริ่มต้น "ก่อนหน้า" / "ถัดไป"' },
        { name: 'aria-label', type: 'string', default: 'messages.previousPage / messages.nextPage', description: '"หน้าก่อนหน้า" / "หน้าถัดไป"' },
      ] },
    ],
    notes: [
      'ต่างจาก 0.x: ไม่มี <Pagination page pageCount onPageChange variant> แล้ว — ประกอบจาก Pagination > PaginationContent > PaginationItem เอง และใช้ getPageItems() แทนการคำนวณ',
      'ข้อความทั้งหมดมาจาก messages ของ BomUIProvider: pagination (aria-label ของ nav), previous, next, previousPage, nextPage, morePages',
      'PaginationLink เป็น <a> ไม่มี prop disabled — ปิดปุ่มด้วย aria-disabled + className="pointer-events-none opacity-50"',
      'PaginationLink render เป็น <a> เสมอ (ไม่มี asChild) — ถ้าเปลี่ยนหน้าผ่าน URL (?page=) ใส่ href ได้เลย ไม่ต้องมี state',
    ],
    basedOn: { name: 'shadcn/ui Pagination', href: 'https://ui.shadcn.com/docs/components/pagination' },
  },
  {
    slug: 'table',
    name: 'Table',
    description: 'ตารางข้อมูลพื้นฐาน — Table ครอบด้วย div ที่เลื่อนแนวนอนได้เมื่อจอแคบ',
    imports: ['Table', 'TableCaption', 'TableHeader', 'TableBody', 'TableFooter', 'TableRow', 'TableHead', 'TableCell'],
    props: [
      { component: 'TableRow', rows: [{ name: 'data-state', type: "'selected'", description: 'ไฮไลต์แถวที่เลือก (พื้น muted)' }] },
      { component: 'ทุกส่วน', rows: [{ name: 'className', type: 'string', description: 'ต่อท้าย class เช่น TableHead / TableCell className="text-right" สำหรับตัวเลข' }] },
    ],
    notes: [
      'เป็น element ของ HTML table ตรง ๆ — ใส่ sort/filter เอง หรือใช้คู่กับ TanStack Table แบบ shadcn Data Table',
      'เซลล์ที่มี Checkbox (role="checkbox") ตัด padding ขวาให้อัตโนมัติ',
      'ไม่มี type BadgeVariant แล้ว — ใช้ ComponentProps<typeof Badge>["variant"]',
    ],
    basedOn: { name: 'shadcn/ui Table', href: 'https://ui.shadcn.com/docs/components/table' },
  },
  {
    slug: 'alert',
    name: 'Alert',
    description: 'ข้อความแจ้งในหน้า มี 2 variant (default / destructive) — role="alert" เสมอ',
    imports: ['Alert', 'AlertTitle', 'AlertDescription', 'AlertAction'],
    props: [
      { component: 'Alert', rows: [{ name: 'variant', type: "'default' | 'destructive'", default: "'default'", description: "'destructive' = ข้อความและไอคอนสีแดง" }] },
      { component: 'AlertAction', rows: [{ name: 'children', type: 'ReactNode', description: 'ปุ่มมุมขวาบน (Alert เว้นที่ด้านขวาให้อัตโนมัติ)' }] },
    ],
    notes: [
      'วางไอคอน svg เป็นลูกตัวแรกเพื่อให้จัดวางเป็น 2 คอลัมน์อัตโนมัติ',
      'ต่างจาก 0.x: ไม่มี variant info / success / warning / danger แล้ว — danger → destructive ส่วนสีอื่นใส่ด้วย className (ดูตัวอย่าง)',
      'role เป็น "alert" เสมอ (screen reader ประกาศทันที) — ถ้าเป็นข้อความทั่วไปที่ไม่เร่งด่วน ส่ง role="status" ทับได้',
    ],
    basedOn: { name: 'shadcn/ui Alert', href: 'https://ui.shadcn.com/docs/components/alert' },
  },

  // ───────────── App ─────────────
  {
    slug: 'page-header',
    name: 'PageHeader',
    description: 'หัวหน้า: ชื่อ คำอธิบาย และปุ่มด้านขวา (ตัดบรรทัดลงมาเมื่อจอแคบ) — component เสริมของ bom-ui',
    imports: ['PageHeader'],
    props: [{ component: 'PageHeader', rows: [
      { name: 'title', type: 'ReactNode', description: 'ชื่อหน้า (จำเป็น)' },
      { name: 'description', type: 'ReactNode', description: 'คำอธิบายใต้ชื่อ (text-muted-foreground)' },
      { name: 'actions', type: 'ReactNode', description: 'ปุ่มด้านขวา เรียงด้วย flex gap-2' },
      { name: 'headingLevel', type: '1 | 2', default: '1', description: 'ใช้ h1 หรือ h2 สำหรับชื่อ' },
      className,
    ] }],
    notes: [
      'รับ attribute ทุกตัวของ <div> (ยกเว้น title ที่ใช้เป็นชื่อหน้า)',
      'ปรับ layout ด้วย Tailwind ผ่าน className เช่น className="mb-6"',
      'ส่วนย่อยมี data-slot="page-header-title" / "page-header-description" / "page-header-actions" ใช้เลือกใน CSS ได้',
    ],
  },
  {
    slug: 'empty',
    name: 'Empty',
    description: 'หน้าว่างเมื่อยังไม่มีข้อมูลหรือค้นหาไม่พบ ประกอบจากชิ้นย่อยแบบ shadcn: ไอคอน หัวข้อ คำอธิบาย และปุ่ม',
    imports: ['Empty', 'EmptyHeader', 'EmptyMedia', 'EmptyTitle', 'EmptyDescription', 'EmptyContent'],
    props: [
      { component: 'Empty', rows: [
        { name: 'className', type: 'string', description: 'กล่องนอกสุด จัดกึ่งกลาง — ใส่ "border border-dashed" ถ้าต้องการกรอบ' },
      ] },
      { component: 'EmptyHeader', rows: [{ name: 'children', type: 'ReactNode', description: 'ครอบ EmptyMedia, EmptyTitle, EmptyDescription (กว้างสุด max-w-sm)' }] },
      { component: 'EmptyMedia', rows: [
        { name: 'variant', type: "'default' | 'icon'", default: "'default'", description: "'icon' = กล่องพื้น muted ขนาด size-8 ไอคอน size-4, 'default' = ไม่มีพื้น (ไอคอนใหญ่ / รูป / Avatar)" },
      ] },
      { component: 'EmptyTitle', rows: [{ name: 'children', type: 'ReactNode', description: 'หัวข้อ (render เป็น <div>)' }] },
      { component: 'EmptyDescription', rows: [{ name: 'children', type: 'ReactNode', description: 'คำอธิบาย — ลิงก์ <a> ข้างในมีขีดเส้นใต้ให้อัตโนมัติ' }] },
      { component: 'EmptyContent', rows: [{ name: 'children', type: 'ReactNode', description: 'ปุ่ม / ช่องค้นหา ใต้ส่วนหัว' }] },
    ],
    notes: [
      'มาจาก 0.x: EmptyState ถูกลบใน 1.0 — แทน <EmptyState icon title description action /> ด้วย Empty > EmptyHeader > (EmptyMedia variant="icon" + EmptyTitle + EmptyDescription) แล้วใส่ action ใน EmptyContent',
      'ทุกชิ้นรับ attribute ของ <div> และ className',
      'EmptyTitle ไม่ใช่ heading — ถ้าต้องการให้อยู่ในโครงหัวข้อของหน้า ใส่ <h2> ไว้ข้างใน',
    ],
    basedOn: { name: 'shadcn/ui Empty', href: 'https://ui.shadcn.com/docs/components/empty' },
  },
  {
    slug: 'error-state',
    name: 'ErrorState',
    description: 'Alert สีแดง (variant="destructive") สำหรับเมื่อโหลดข้อมูลไม่สำเร็จ พร้อมปุ่มลองใหม่ — component เสริมของ bom-ui',
    imports: ['ErrorState'],
    props: [{ component: 'ErrorState', rows: [
      { name: 'title', type: 'ReactNode', default: 'messages.errorTitle', description: 'ค่าเริ่มต้น "โหลดข้อมูลไม่สำเร็จ"' },
      { name: 'message', type: 'ReactNode', description: 'ข้อความ error — แปลง error object เป็นข้อความก่อนส่ง' },
      { name: 'onRetry', type: '() => void', description: 'ใส่แล้วจะมีปุ่มลองใหม่ (Button variant="outline" size="sm") ที่มุมขวา' },
      { name: 'retryLabel', type: 'string', default: 'messages.retry', description: 'ข้อความปุ่ม ค่าเริ่มต้น "ลองใหม่"' },
      className,
    ] }],
    notes: [
      'รับ props ของ Alert ทั้งหมด ยกเว้น variant (เป็น destructive เสมอ) — role="alert" จึงถูกอ่านทันทีที่แสดง',
      'เปลี่ยนข้อความเริ่มต้นทั้งแอปได้ที่ BomUIProvider messages (errorTitle, retry)',
    ],
    basedOn: { name: 'shadcn/ui Alert', href: 'https://ui.shadcn.com/docs/components/alert' },
  },
  {
    slug: 'pdf-preview',
    name: 'PdfPreview',
    description: 'โหลด PDF เป็น Blob ก่อนแล้วแสดงใน iframe — ถ้าผิดพลาดจะแสดงข้อความ ไม่ใช่ response ดิบ',
    imports: ['PdfPreview', 'defaultPdfFetcher'],
    props: [{ component: 'PdfPreview', rows: [
      { name: 'url', type: 'string', description: 'URL ของ PDF (จำเป็น) — เปลี่ยนแล้วโหลดใหม่' },
      { name: 'title', type: 'string', description: 'ชื่อของ iframe (จำเป็น สำหรับการเข้าถึง)' },
      { name: 'fetcher', type: '(url: string) => Promise<Blob>', default: 'defaultPdfFetcher', description: 'โหลดเอง เช่น เพิ่ม header Authorization' },
      { name: 'getErrorMessage', type: '(error: unknown) => ReactNode', default: 'error.message', description: 'แปลง error เป็นข้อความ' },
      { name: 'height', type: 'string', default: "'70vh'", description: 'ความสูง (ค่า CSS) ของ iframe และ skeleton' },
      { name: 'actions', type: 'boolean', default: 'true', description: 'แสดงปุ่ม "สร้างใหม่" (โหลดซ้ำ) และ "เปิดแท็บใหม่"' },
      className,
    ] }],
    notes: [
      'defaultPdfFetcher อ่านข้อความ error จาก JSON body (error.message หรือ message) เมื่อ HTTP ไม่สำเร็จ',
      'ระหว่างโหลดแสดง Skeleton, เมื่อ error แสดงกล่อง role="alert" พร้อมข้อความ messages.pdfFailed',
      'สร้าง blob URL เองและ revoke ให้เมื่อ url เปลี่ยนหรือ unmount — fetcher แบบ inline function ไม่ทำให้โหลดซ้ำ',
      'ข้อความปุ่มเปลี่ยนได้ที่ BomUIProvider messages (pdfRegenerate, pdfOpenNewTab, pdfFailed)',
    ],
  },
  {
    slug: 'sidebar',
    name: 'Sidebar',
    description: 'แถบเมนูข้างของแอป (shadcn Sidebar) พับเป็นไอคอนหรือซ่อนได้ กลายเป็น Sheet บนจอแคบกว่า 768px กด Ctrl/⌘+B เพื่อพับ — เว็บคู่มือนี้ใช้ Sidebar ตัวนี้',
    imports: [
      'SidebarProvider', 'Sidebar', 'SidebarHeader', 'SidebarContent', 'SidebarFooter', 'SidebarGroup', 'SidebarGroupLabel',
      'SidebarGroupAction', 'SidebarGroupContent', 'SidebarMenu', 'SidebarMenuItem', 'SidebarMenuButton', 'SidebarMenuAction',
      'SidebarMenuBadge', 'SidebarMenuSkeleton', 'SidebarMenuSub', 'SidebarMenuSubItem', 'SidebarMenuSubButton', 'SidebarInput',
      'SidebarSeparator', 'SidebarTrigger', 'SidebarRail', 'SidebarInset', 'useSidebar', 'TooltipProvider',
    ],
    props: [
      { component: 'SidebarProvider', rows: [
        { name: 'defaultOpen', type: 'boolean', default: 'true', description: 'สถานะเริ่มต้นบน desktop — อ่านจาก cookie sidebar_state เพื่อจำค่า' },
        { name: 'open / onOpenChange', type: 'boolean / (open: boolean) => void', description: 'แบบ controlled' },
        { name: 'style', type: 'CSSProperties', description: "ปรับความกว้างด้วย '--sidebar-width' (16rem) และ '--sidebar-width-icon' (3rem)" },
      ] },
      { component: 'Sidebar', rows: [
        { name: 'side', type: "'left' | 'right'", default: "'left'", description: 'ด้านของจอ' },
        { name: 'variant', type: "'sidebar' | 'floating' | 'inset'", default: "'sidebar'", description: "'inset' ใช้คู่กับ SidebarInset (เนื้อหาเป็นการ์ดมุมมน)" },
        { name: 'collapsible', type: "'offcanvas' | 'icon' | 'none'", default: "'offcanvas'", description: "'icon' = พับเหลือแต่ไอคอน, 'none' = ไม่พับ" },
      ] },
      { component: 'SidebarMenuButton', rows: [
        { name: 'asChild', type: 'boolean', default: 'false', description: 'render ลูกตัวเดียว เช่น next/link' },
        { name: 'isActive', type: 'boolean', default: 'false', description: 'เมนูของหน้าปัจจุบัน (data-active)' },
        { name: 'variant', type: "'default' | 'outline'", default: "'default'", description: 'รูปแบบ' },
        { name: 'size', type: "'default' | 'sm' | 'lg'", default: "'default'", description: 'ความสูง h-8 / h-7 / h-12' },
        { name: 'tooltip', type: 'string | TooltipContentProps', description: 'แสดงเฉพาะตอนพับเป็นไอคอน (ไม่แสดงบนมือถือ) — ต้องมี TooltipProvider ครอบ' },
      ] },
      { component: 'SidebarMenuSubButton', rows: [
        { name: 'asChild', type: 'boolean', default: 'false', description: 'render เป็น <a> โดยปริยาย' },
        { name: 'isActive', type: 'boolean', default: 'false', description: 'เมนูย่อยของหน้าปัจจุบัน' },
        { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'ขนาดตัวอักษร' },
      ] },
      { component: 'SidebarGroupLabel / SidebarGroupAction / SidebarMenuAction', rows: [
        { name: 'asChild', type: 'boolean', default: 'false', description: 'render ลูกตัวเดียวแทน element เดิม' },
        { name: 'showOnHover', type: 'boolean', default: 'false', description: 'เฉพาะ SidebarMenuAction — แสดงตอน hover/focus เมนูเท่านั้น (บน desktop)' },
      ] },
      { component: 'SidebarMenuSkeleton', rows: [
        { name: 'showIcon', type: 'boolean', default: 'false', description: 'มีกล่องไอคอนด้านหน้า' },
      ] },
      { component: 'SidebarTrigger', rows: [
        { name: '…Button props', type: 'ButtonProps', description: 'ปุ่ม ghost size="icon-sm" สลับพับ/กาง ชื่อปุ่มจาก messages.toggleSidebar' },
      ] },
    ],
    notes: [
      'ต้องครอบ app ด้วย <TooltipProvider> ถ้าใช้ SidebarMenuButton tooltip (เว็บนี้ครอบไว้ที่ layout)',
      'useSidebar() คืน { state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar } — ใช้ได้เฉพาะใต้ SidebarProvider',
      'SidebarMenuSkeleton สุ่มความกว้างแถบข้อความ 50–90% (เหมือน shadcn) — ใช้ฝั่ง client หลังโหลดเท่านั้น เพื่อไม่ให้ server/client render ต่างกัน',
      'ปรับสีด้วยตัวแปร shadcn --sidebar, --sidebar-foreground, --sidebar-accent, --sidebar-border ฯลฯ ใน CSS ของคุณ',
      'มาจาก 0.x: size="md" ของ SidebarMenuButton เปลี่ยนเป็น "default" และตัวแปร --bom-sidebar-width* เปลี่ยนเป็น --sidebar-width / --sidebar-width-icon',
    ],
    basedOn: { name: 'shadcn/ui Sidebar', href: 'https://ui.shadcn.com/docs/components/sidebar' },
  },

  // ───────────── react-hook-form ─────────────
  {
    slug: 'form-provider',
    name: 'FormProvider',
    description: 'context ของ react-hook-form + <form noValidate> (ให้ schema เป็นตัวรายงาน error ไม่ใช่ browser) — ครอบ RHF* และ FormFields ทุกตัว',
    imports: ['FormProvider'],
    props: [{ component: 'FormProvider', rows: [
      { name: 'methods', type: 'UseFormReturn<T>', description: 'ค่าที่ได้จาก useForm() (จำเป็น)' },
      { name: 'onSubmit', type: 'FormEventHandler<HTMLFormElement>', description: 'ปกติคือ methods.handleSubmit(onValid)' },
      { name: 'children', type: 'ReactNode', description: 'ช่องกรอกและปุ่ม (จำเป็น)' },
      { name: '…form attributes', type: 'FormHTMLAttributes', description: 'id, className ฯลฯ ส่งต่อให้ <form>' },
    ] }],
    notes: [
      'ชื่อซ้ำกับ FormProvider ของ react-hook-form — ถ้า import ทั้งคู่ในไฟล์เดียวให้ตั้ง alias',
      'Button ใน 1.0 ไม่ตั้ง type="button" ให้เอง (เหมือน shadcn) — ระบุ type="submit" ให้ปุ่มส่ง และ type="button" ให้ปุ่มอื่นในฟอร์ม',
      'จัด layout ด้วย Tailwind เช่น className="flex flex-col gap-6" หรือครอบช่องด้วย FieldGroup',
    ],
    basedOn: { name: 'react-hook-form FormProvider', href: 'https://react-hook-form.com/docs/formprovider' },
  },
  {
    slug: 'form-fields',
    name: 'FormFields',
    description: 'สร้างช่องกรอกหลายช่องจาก array ของ config — เลือกชนิดด้วย type แล้วส่ง props ของ RHF* ตัวนั้น ต้องอยู่ใต้ <FormProvider>',
    imports: ['FormFields', 'FormFieldType', 'type FormFieldConfig', 'type FormFieldsProps'],
    props: [
      { component: 'FormFields', rows: [
        { name: 'fields', type: 'ReadonlyArray<FormFieldConfig<T>>', description: 'รายการช่องตามลำดับที่จะแสดง (จำเป็น)' },
        { name: 'className', type: 'string', description: 'class ของ FieldGroup ที่ครอบ เช่น "grid grid-cols-1 md:grid-cols-2"' },
      ] },
      { component: 'FormFieldConfig<T>', rows: [
        { name: 'type', type: 'FormFieldType', description: "ชนิดของช่อง — FormFieldType.INPUT หรือ string ตรง ๆ เช่น 'input' (จำเป็น)" },
        { name: 'props', type: 'RHF*Props<T> ตาม type', description: 'props ของ component ตาม type เช่น type INPUT → RHFInputProps (มี name, label …) — ไม่มีสำหรับ CUSTOM' },
        { name: 'render', type: '() => ReactNode', description: 'เฉพาะ type CUSTOM — render อะไรก็ได้ เช่น หัวข้อคั่น หรือช่องที่ทำเอง' },
        { name: 'className', type: 'string', description: 'class ที่กรอบนอกสุดของช่อง (Field) เช่น "md:col-span-2" เมื่อใช้ grid' },
        { name: 'isHide', type: 'boolean', description: 'true = ไม่ render ช่องนี้ (ค่าใน form ยังอยู่ — ใช้ shouldUnregister ถ้าต้องการลบค่า)' },
        { name: 'isRequired', type: 'boolean', description: 'ทางลัดของ props.required — ถ้าใส่จะชนะค่าใน props (กลุ่ม checkbox ไม่ใช้ค่านี้)' },
        { name: 'isDisabled', type: 'boolean', description: 'ทางลัดของ props.disabled — ถ้าใส่จะชนะค่าใน props' },
        { name: 'key', type: 'React.Key', description: 'React key แทน props.name (ควรใส่สำหรับ type CUSTOM)' },
      ] },
      { component: 'FormFieldType', rows: [
        { name: "INPUT · 'input'", type: 'RHFInputProps', description: 'RHFInput' },
        { name: "TEXTAREA · 'textarea'", type: 'RHFTextAreaProps', description: 'RHFTextArea' },
        { name: "INPUT_GROUP · 'input-group'", type: 'RHFInputGroupProps', description: 'RHFInputGroup' },
        { name: "SELECT · 'select'", type: 'RHFSelectProps', description: 'RHFSelect' },
        { name: "CHECKBOX · 'checkbox'", type: 'RHFCheckboxProps', description: 'RHFCheckbox (ตัวเดียว หรือกลุ่มเมื่อมี options)' },
        { name: "RADIO · 'radio'", type: 'RHFRadioGroupProps', description: 'RHFRadioGroup' },
        { name: "SWITCH · 'switch'", type: 'RHFSwitchProps', description: 'RHFSwitch' },
        { name: "OTP · 'otp'", type: 'RHFInputOTPProps', description: 'RHFInputOTP' },
        { name: "DATE · 'date'", type: 'RHFDatePickerProps', description: 'RHFDatePicker' },
        { name: "DATE_RANGE · 'date-range'", type: 'RHFDateRangePickerProps', description: 'RHFDateRangePicker' },
        { name: "CUSTOM · 'custom'", type: '{ render: () => ReactNode }', description: 'render เอง (ไม่มี props)' },
      ] },
    ],
    notes: [
      'FormFieldConfig เป็น discriminated union — เมื่อพิมพ์ FormFieldConfig<Values>[] TypeScript จะตรวจ props ให้ตรงกับ type และตรวจ name กับ Values',
      'FormFieldType เป็น const object (ไม่ใช่ TS enum) จึงใช้ FormFieldType.INPUT หรือ \'input\' ได้ทั้งคู่ และ tree-shake ได้',
      'className ของ config ไปลงที่ fieldClassName (INPUT, TEXTAREA, INPUT_GROUP) หรือ className (ชนิดอื่น) ของ component ให้อัตโนมัติ — ต่อท้ายค่าใน props',
      'config ที่ขึ้นกับค่าในฟอร์ม (isHide / isDisabled / isRequired) ให้สร้างใน component แล้วอ่านค่าด้วย useWatch',
      'ช่องที่ซ่อนยังถูกตรวจโดย schema — ใช้ superRefine / discriminatedUnion ตรวจตามเงื่อนไข',
    ],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-input',
    name: 'RHFInput',
    description: 'Input ที่ผูกกับ react-hook-form พร้อม label คำอธิบาย error และ addon',
    imports: ['RHFInput'],
    props: [{ component: 'RHFInput', rows: [
      ...rhfBase,
      { name: 'labelExtra', type: 'ReactNode', description: 'ต่อท้าย label เช่น <Badge variant="secondary">Beta</Badge> (ถูกอ่านเป็นส่วนหนึ่งของชื่อช่อง)' },
      { name: 'descriptionPosition', type: "'top' | 'bottom'", default: "'bottom'", description: 'คำอธิบายอยู่ระหว่าง label กับช่อง หรือใต้ช่อง' },
      { name: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", description: "'horizontal' = label ซ้าย ช่องกรอกขวา" },
      { name: 'startAddon / endAddon', type: 'ReactNode', description: 'ข้อความ/ไอคอนในกรอบเดียวกับช่อง (InputGroup) เช่น "https://"' },
      { name: 'append', type: 'ReactNode', description: 'control ต่อท้าย เช่น ปุ่มค้นหา (ใส่ type="button")' },
      { name: 'attachAppend', type: 'boolean', default: 'false', description: 'true = ต่อติดกับช่องเป็นก้อนเดียว (ButtonGroup), false = เว้นระยะ' },
      { name: 'type="file"', type: '—', description: 'ค่าใน form เป็น File[] (reset แล้วล้างไฟล์ที่เลือกให้)' },
      { name: 'fieldClassName', type: 'string', description: 'class ของ Field ที่ครอบ' },
      { name: 'className / …input attributes', type: 'InputProps', description: 'ส่งต่อให้ <input> เช่น placeholder, inputMode, autoComplete' },
    ] }],
    notes: [
      'ข้อความใน addon ไม่ใช่ชื่อช่อง — ถ้าสำคัญต่อการกรอกให้เขียนไว้ใน label หรือ description ด้วย (หรือใช้ RHFInputGroup ที่ผูก addon เป็นคำอธิบายให้)',
      'มาจาก 0.x: size ของ Input ถูกลบ — ปรับขนาดด้วย className',
    ],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-input-group',
    name: 'RHFInputGroup',
    description: 'InputGroup ที่ผูกกับ react-hook-form — addon ได้ 4 ด้าน รับเป็นฟังก์ชันของค่าปัจจุบันได้ (เช่น ตัวนับตัวอักษร)',
    imports: ['RHFInputGroup', 'type RHFInputGroupControlProps'],
    props: [{ component: 'RHFInputGroup', rows: [
      ...rhfBase,
      { name: 'descriptionPosition', type: "'top' | 'bottom'", default: "'bottom'", description: 'ตำแหน่งคำอธิบาย' },
      { name: 'inlineStart / inlineEnd / blockStart / blockEnd', type: 'ReactNode | (value: string) => ReactNode', description: 'addon แต่ละด้าน (ใน DOM อยู่หลังช่องเสมอ ลำดับ Tab จึงเริ่มที่ช่องกรอก)' },
      { name: 'multiline', type: 'boolean', default: 'false', description: 'ใช้ textarea แทน input (คู่กับ blockStart / blockEnd)' },
      { name: 'rows', type: 'number', description: 'จำนวนบรรทัด (multiline)' },
      { name: 'describeAddons', type: 'boolean | RHFInputGroupSlot[]', default: 'true', description: 'ผูกข้อความใน addon เป็น aria-describedby — false = ไม่ผูก, ระบุรายการ = เฉพาะด้านนั้น' },
      { name: 'renderControl', type: '(props: RHFInputGroupControlProps) => ReactNode', description: 'render ช่องกรอกเอง แล้วกระจาย props (id, value, aria-*, data-slot) ลงไป' },
      { name: 'groupClassName', type: 'string', description: 'class ของ InputGroup' },
      { name: 'fieldClassName', type: 'string', description: 'class ของ Field ที่ครอบ' },
      { name: '…input attributes', type: 'ComponentProps<"input">', description: 'ส่งต่อให้ช่องกรอก เช่น placeholder' },
    ] }],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-textarea',
    name: 'RHFTextArea',
    description: 'Textarea ที่ผูกกับ react-hook-form',
    imports: ['RHFTextArea'],
    props: [{ component: 'RHFTextArea', rows: [
      ...rhfBase,
      { name: 'descriptionPosition', type: "'top' | 'bottom'", default: "'bottom'", description: 'คำอธิบายอยู่ระหว่าง label กับกล่อง หรือใต้กล่อง' },
      { name: 'fieldClassName', type: 'string', description: 'class ของ Field ที่ครอบ' },
      { name: 'className / …textarea attributes', type: 'TextareaProps', description: 'ส่งต่อให้ <textarea> เช่น rows, placeholder' },
    ] }],
    notes: ['Textarea ของ shadcn ขยายตามเนื้อหา (field-sizing: content) — กำหนดความสูงขั้นต่ำด้วย rows หรือ className เช่น "min-h-24"'],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-select',
    name: 'RHFSelect',
    description: 'Select ที่ผูกกับ react-hook-form รับ options แบบ array หรือแบบกลุ่ม (คั่นด้วย SelectSeparator ให้อัตโนมัติ)',
    imports: ['RHFSelect', 'type RHFSelectOption', 'type RHFSelectGroup'],
    props: [{ component: 'RHFSelect', rows: [
      ...rhfBase.filter((r) => r.name !== 'hideLabel' && r.name !== 'label'),
      { name: 'label', type: 'ReactNode', description: 'ชื่อช่อง (ไม่บังคับ แต่ควรใส่ — ถ้าไม่ใส่ต้องตั้ง aria-label ให้ trigger เอง)' },
      { name: 'options', type: 'Array<RHFSelectOption | RHFSelectGroup>', default: '[]', description: '{ value, label, disabled? } หรือกลุ่ม { label?, options }' },
      { name: 'children', type: 'ReactNode', description: 'ใส่ SelectItem / SelectGroup เองแทน options' },
      { name: 'placeholder', type: 'string', description: 'ข้อความเมื่อยังไม่เลือก (ค่าว่าง "" = แสดง placeholder)' },
      { name: 'size', type: "'sm' | 'default'", default: "'default'", description: 'ขนาด trigger (h-7 / h-8)' },
      { name: 'position', type: "'item-aligned' | 'popper'", default: "'item-aligned'", description: "'item-aligned' = รายการที่เลือกทับ trigger, 'popper' = เปิดใต้ trigger" },
      { name: 'orientation', type: "'vertical' | 'horizontal' | 'responsive'", default: "'vertical'", description: 'การจัดวาง label (ตาม Field)' },
      { name: 'className', type: 'string', description: 'class ของ Field ที่ครอบ' },
      { name: 'triggerClassName', type: 'string', default: "'w-full'", description: 'class ของ SelectTrigger' },
      { name: 'contentClassName', type: 'string', description: 'class ของ SelectContent — จำกัดความสูง (max-h-*) ได้เฉพาะ position="popper"' },
    ] }],
    notes: [
      'มาจาก 0.x: size="md" เปลี่ยนเป็น "default" และ "lg" ถูกลบ',
      'ล้างค่าด้วย setValue(name, "") เพื่อกลับไปแสดง placeholder',
    ],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-checkbox',
    name: 'RHFCheckbox',
    description: 'Checkbox ตัวเดียว (ค่า boolean) หรือเป็นกลุ่มเมื่อส่ง options (ค่า string[])',
    imports: ['RHFCheckbox', 'type RHFCheckboxOption'],
    props: [{ component: 'RHFCheckbox', rows: [
      ...rhfBase,
      { name: 'options', type: 'RHFCheckboxOption[]', description: '{ value, label, description?, disabled? } — ใส่แล้วกลายเป็นกลุ่ม (FieldSet + legend) ค่าเป็น string[]' },
      { name: 'variant', type: "'default' | 'card'", default: "'default'", description: "'card' = ทั้งการ์ดเป็น label คลิกที่ไหนก็ติ๊กได้" },
      { name: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", description: 'การเรียงของกลุ่ม (เฉพาะเมื่อมี options)' },
      className,
    ] }],
    notes: ['กลุ่มไม่มี required รายตัว (จะกลายเป็นบังคับติ๊กทุกช่อง) — บังคับเลือกอย่างน้อยหนึ่งด้วย z.array(z.string()).min(1)'],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-radio-group',
    name: 'RHFRadioGroup',
    description: 'RadioGroup ที่ผูกกับ react-hook-form (FieldSet + legend)',
    imports: ['RHFRadioGroup', 'type RHFRadioOption'],
    props: [{ component: 'RHFRadioGroup', rows: [
      ...rhfBase,
      { name: 'options', type: 'RHFRadioOption[]', description: '{ value, label, description?, disabled? } (จำเป็น)' },
      { name: 'variant', type: "'default' | 'card'", default: "'default'", description: "'card' = ทั้งการ์ดเป็น label กดตรงไหนก็เลือกได้" },
      { name: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", description: 'ทิศของรายการ และทิศของปุ่มลูกศรที่ใช้เลื่อนตัวเลือก' },
      className,
    ] }],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-switch',
    name: 'RHFSwitch',
    description: 'Switch ที่ผูกกับ react-hook-form (ค่า boolean)',
    imports: ['RHFSwitch'],
    props: [{ component: 'RHFSwitch', rows: [
      ...rhfBase.filter((r) => r.name !== 'hideLabel'),
      { name: 'labelPosition', type: "'start' | 'end'", default: "'start'", description: 'label อยู่ซ้าย (start) หรือขวา (end) ของสวิตช์' },
      { name: 'variant', type: "'default' | 'card'", default: "'default'", description: "'card' = ทั้งการ์ดเป็น label กดตรงไหนก็สลับได้" },
      { name: 'size', type: "'sm' | 'default'", default: "'default'", description: 'ขนาดสวิตช์' },
      className,
    ] }],
    notes: ['มาจาก 0.x: size="md" เปลี่ยนเป็น "default"'],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-input-otp',
    name: 'RHFInputOTP',
    description: 'InputOTP ที่ผูกกับ react-hook-form แบ่งกลุ่มช่องได้',
    imports: ['RHFInputOTP'],
    props: [{ component: 'RHFInputOTP', rows: [
      ...rhfBase,
      { name: 'maxLength', type: 'number', default: '6', description: 'จำนวนหลักทั้งหมด' },
      { name: 'groups', type: 'number[]', default: '[maxLength]', description: 'ขนาดแต่ละกลุ่ม เช่น [3, 3] (ผลรวมต้องเท่า maxLength)' },
      { name: 'separator', type: 'boolean', default: 'true', description: 'ขีดคั่นระหว่างกลุ่ม (false = เว้นระยะแทน)' },
      { name: 'pattern', type: 'string', default: 'REGEXP_ONLY_DIGITS', description: 'regex ของอักขระที่รับ ทั้งพิมพ์และวาง (เช่น REGEXP_ONLY_DIGITS_AND_CHARS จาก "input-otp")' },
      { name: 'inputMode', type: "HTMLAttributes['inputMode']", default: "ตาม pattern", description: 'ตัวเลขอย่างเดียว = "numeric" (มือถือเปิดแป้นตัวเลข) นอกนั้น = "text"' },
      { name: 'onComplete', type: '(value: string) => void', description: 'เรียกเมื่อกรอกครบ เช่น ส่งฟอร์มอัตโนมัติ' },
      { name: 'autoFocus', type: 'boolean', description: 'โฟกัสเมื่อแสดง' },
      className,
      { name: 'slotClassName', type: 'string', description: 'class ของแต่ละช่อง (InputOTPSlot)' },
    ] }],
    basedOn: rhfShadcn,
  },
  {
    slug: 'rhf-date-picker',
    name: 'RHFDatePicker',
    description: 'เลือกวันที่ (ค่าเป็น Date) แบบปุ่มเปิดปฏิทิน หรือแบบพิมพ์ dd/mm/yyyy (พ.ศ. หรือ ค.ศ.) — เพิ่มช่องเวลาได้',
    imports: ['RHFDatePicker'],
    props: [{ component: 'RHFDatePicker', rows: [
      ...rhfBase,
      { name: 'variant', type: "'button' | 'input'", default: "'button'", description: "'input' = พิมพ์วันที่ได้ มีปุ่มปฏิทินท้ายช่อง" },
      { name: 'placeholder', type: 'string', default: 'messages.datePickerPlaceholder', description: '"เลือกวันที่" (button) / "วว/ดด/ปปปป" (input)' },
      { name: 'captionLayout', type: "'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years'", default: "'label'", description: "'dropdown' + startMonth/endMonth สำหรับวันเกิด" },
      { name: 'startMonth / endMonth', type: 'Date', description: 'ช่วงเดือนที่เลือกได้' },
      { name: 'disabledDates', type: 'Matcher | Matcher[]', description: 'วันที่เลือกไม่ได้ เช่น { after: new Date() }' },
      { name: 'closeOnSelect', type: 'boolean', default: 'true', description: 'ปิดปฏิทินเมื่อเลือกวัน' },
      { name: 'showTime', type: 'boolean', default: 'false', description: 'เพิ่มช่องเวลา ค่าใน form เป็น Date พร้อมเวลา' },
      { name: 'timeLabel', type: 'ReactNode', default: 'messages.time', description: 'label ของช่องเวลา ("เวลา")' },
      { name: 'timeStep', type: 'number', default: '60', description: 'วินาที เหมือน step ของ input time — 1 = มีวินาที' },
      { name: 'locale', type: 'DayPickerLocale', default: 'จาก BomUIProvider', description: 'ค่าเริ่มต้นภาษาไทย ปี พ.ศ. — ส่ง enUS ฯลฯ จาก "react-day-picker/locale" ได้' },
      { name: 'formatValue', type: '(date: Date) => string', description: 'ข้อความบนปุ่ม (ค่าเริ่มต้น "29 ต.ค. 2569")' },
      { name: 'formatInput / parseInput', type: '(date) => string / (text) => Date | undefined', description: 'รูปแบบในช่องพิมพ์ — parseInput คืน Invalid Date เมื่อรูปแบบผิด (ให้ zod แจ้ง error)' },
      { name: 'reformatOnBlur', type: 'boolean', default: 'true', description: 'ออกจากช่องแล้วจัดข้อความใหม่ตาม formatInput' },
      { name: 'calendarButtonLabel', type: 'string', default: 'messages.openCalendar', description: 'ชื่อปุ่มไอคอนปฏิทินของ variant="input"' },
      className,
      { name: 'triggerClassName', type: 'string', description: 'class ของปุ่ม / ช่องพิมพ์' },
    ] }],
    notes: ['schema: z.date({ error: "…" }) — ช่องว่างมีค่า undefined (หรือใช้ .nullable() กับ defaultValues null)'],
    basedOn: { name: 'shadcn/ui Date Picker', href: 'https://ui.shadcn.com/docs/components/date-picker' },
  },
  {
    slug: 'rhf-date-range-picker',
    name: 'RHFDateRangePicker',
    description: 'เลือกช่วงวันที่ ค่าเป็น { from?: Date; to?: Date }',
    imports: ['RHFDateRangePicker', 'type DateRange'],
    props: [{ component: 'RHFDateRangePicker', rows: [
      ...rhfBase,
      { name: 'placeholder', type: 'string', default: 'messages.dateRangePlaceholder', description: '"เลือกช่วงวันที่"' },
      { name: 'numberOfMonths', type: 'number', default: '2', description: 'จำนวนเดือนที่แสดงพร้อมกัน (จอแคบเรียงลงล่าง)' },
      { name: 'min / max', type: 'number', description: 'จำนวนคืนต่ำสุด/สูงสุดของช่วง' },
      { name: 'captionLayout', type: "'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years'", default: "'label'", description: 'หัวปฏิทิน' },
      { name: 'startMonth / endMonth', type: 'Date', description: 'ช่วงเดือนที่เลือกได้' },
      { name: 'disabledDates', type: 'Matcher | Matcher[]', description: 'วันที่เลือกไม่ได้ เช่น { before: new Date() }' },
      { name: 'excludeDisabled', type: 'boolean', description: 'true = ช่วงจะคร่อมวันที่ disabled ไม่ได้' },
      { name: 'locale', type: 'DayPickerLocale', default: 'จาก BomUIProvider', description: 'locale ของปฏิทินและข้อความบนปุ่ม' },
      { name: 'formatValue', type: '(range: { from: Date; to?: Date }) => string', description: 'ข้อความบนปุ่ม (ค่าเริ่มต้น Intl formatRange เช่น "1 – 20 ม.ค. 2569")' },
      className,
      { name: 'triggerClassName', type: 'string', description: 'class ของปุ่มเปิดปฏิทิน' },
    ] }],
    notes: ['schema: z.object({ from: z.date(), to: z.date() }, { error: "…" }) — ค่าว่างคือ { from: undefined, to: undefined }'],
    basedOn: { name: 'shadcn/ui Date Picker', href: 'https://ui.shadcn.com/docs/components/date-picker' },
  },
]

export function getComponentDoc(slug: string) {
  return componentDocs.find((c) => c.slug === slug)
}
