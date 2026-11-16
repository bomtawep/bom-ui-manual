import type { Metadata } from 'next'
import Link from 'next/link'
import { CodeBlock } from '@/components/code-block'
import { DocPage } from '@/components/doc-page'
import { Example } from '@/components/example'
import ProfileForm from '@/demos/guides/profile-form'

export const metadata: Metadata = { title: 'ฟอร์ม (react-hook-form + zod)' }

const rhf = [
  ['form-fields', 'FormFields', 'render หลายช่องจาก array ของ config (ใหม่ใน 1.0.1)'],
  ['rhf-input', 'RHFInput', 'ข้อความ ตัวเลข อีเมล ไฟล์ พร้อม addon'],
  ['rhf-input-group', 'RHFInputGroup', 'ส่วนเสริม 4 ด้าน ตัวนับตัวอักษร'],
  ['rhf-textarea', 'RHFTextArea', 'ข้อความหลายบรรทัด'],
  ['rhf-select', 'RHFSelect', 'dropdown จาก options'],
  ['rhf-checkbox', 'RHFCheckbox', 'boolean หรือ string[]'],
  ['rhf-radio-group', 'RHFRadioGroup', 'เลือกหนึ่งข้อ'],
  ['rhf-switch', 'RHFSwitch', 'เปิด/ปิด'],
  ['rhf-input-otp', 'RHFInputOTP', 'รหัส OTP'],
  ['rhf-date-picker', 'RHFDatePicker', 'Date (+ เวลา)'],
  ['rhf-date-range-picker', 'RHFDateRangePicker', '{ from, to }'],
]

export default function FormsPage() {
  return (
    <DocPage
      href="/docs/forms"
      title="ฟอร์ม (react-hook-form + zod)"
      description="FormProvider + RHF* ผูก label คำอธิบาย และ error ให้ screen reader อ่านอัตโนมัติ (aria-describedby, aria-invalid) — สร้างบน Field ของ shadcn/ui"
    >
      <h2>ติดตั้ง</h2>
      <CodeBlock lang="bash" code={`yarn add react-hook-form zod @hookform/resolvers`} />
      <p>
        <code>react-hook-form</code> เป็น peerDependency ของ library อยู่แล้ว ส่วน <code>zod</code> และ resolver เลือกใช้ได้ตามต้องการ
      </p>

      <h2>ตัวอย่างเต็ม</h2>
      <p>กด “บันทึก” โดยไม่กรอกอะไรเพื่อดู error</p>
      <Example file="guides/profile-form" Component={ProfileForm} />

      <h2>หลักการ</h2>
      <ul>
        <li>
          <code>FormProvider</code> รับ <code>methods</code> จาก <code>useForm()</code> และ render{' '}
          <code>&lt;form noValidate&gt;</code> — ให้ schema รายงาน error ไม่ใช่ browser (props อื่นเช่น{' '}
          <code>className</code> ส่งต่อให้ <code>&lt;form&gt;</code>)
        </li>
        <li>
          RHF* แต่ละตัวคือ <Link href="/components/field">Field</Link> ของ shadcn (<code>FieldLabel</code>,{' '}
          <code>FieldDescription</code>, <code>FieldError</code>) ที่ผูกกับ <code>useController</code> ให้แล้ว — วางใน{' '}
          <code>FieldGroup</code> เพื่อเว้นระยะ
        </li>
        <li>
          ใส่ <code>label</code> เสมอ (เป็นชื่อ field ของ screen reader) — ตัวที่มี <code>hideLabel</code> ซ่อนได้แต่ screen
          reader ยังอ่าน
        </li>
        <li>
          <code>required</code> แสดงเครื่องหมาย * เท่านั้น — การตรวจจริงอยู่ใน schema
        </li>
        <li>
          ใส่ generic <code>{'<RHFInput<Values> name="…" />'}</code> เพื่อให้ TypeScript ตรวจชื่อ field
        </li>
        <li>
          <code>Button</code> ไม่ตั้ง <code>type=&quot;button&quot;</code> ให้เอง (เหมือน shadcn) — ปุ่ม submit ใส่{' '}
          <code>type=&quot;submit&quot;</code> ส่วนปุ่มอื่นในฟอร์ม (ล้าง, ยกเลิก) ต้องใส่ <code>type=&quot;button&quot;</code>{' '}
          ไม่งั้นจะ submit ฟอร์ม
        </li>
        <li>
          <code>FormProvider</code> ชื่อเดียวกับของ react-hook-form — ถ้า import ทั้งสองในไฟล์เดียวให้ตั้ง alias
        </li>
        <li>
          ต้องการ control ที่ไม่มี RHF* ให้ประกอบเองด้วย <Link href="/components/field">Field</Link> + <code>useController</code>
        </li>
      </ul>
      <CodeBlock
        code={`import { FormProvider as RHFProvider } from 'react-hook-form'
import { FormProvider } from '@bomtawep/ui'`}
      />

      <h2>FormFields — สร้างฟอร์มจาก config</h2>
      <p>
        ฟอร์มที่มีหลายช่องหรือสร้างจากข้อมูล (เช่นตั้งค่าจาก API) ใช้ <Link href="/components/form-fields">FormFields</Link>{' '}
        แทนการวาง RHF* ทีละตัวได้ — ส่ง array ของ config แต่ละรายการมี <code>type</code> และ <code>props</code> ของ RHF*
        ตัวนั้น (TypeScript ตรวจ props ตาม <code>type</code> ให้) ต้องอยู่ใต้ <code>FormProvider</code>
      </p>
      <CodeBlock
        code={`import { FormFieldType, FormFields, type FormFieldConfig } from '@bomtawep/ui'

const fields: FormFieldConfig<Values>[] = [
  { type: FormFieldType.INPUT, className: 'md:col-span-2', isRequired: true, props: { name: 'name', label: 'ชื่อ-นามสกุล' } },
  { type: FormFieldType.SELECT, props: { name: 'province', label: 'จังหวัด', options: provinces } },
  { type: FormFieldType.DATE, props: { name: 'start', label: 'วันเริ่มงาน', variant: 'input' } },
  { type: 'switch', isHide: !canNotify, props: { name: 'notify', label: 'รับข่าวสาร' } },
  { type: FormFieldType.CUSTOM, key: 'note', className: 'md:col-span-2', render: () => <p>หมายเหตุ…</p> },
]

<FormProvider methods={methods} onSubmit={methods.handleSubmit(onValid)}>
  <FormFields<Values> className="grid md:grid-cols-2" fields={fields} />
  <Button type="submit">บันทึก</Button>
</FormProvider>`}
      />
      <ul>
        <li>
          <code>type</code> — ใช้ <code>FormFieldType.INPUT</code> หรือ string ตรง ๆ (<code>&quot;input&quot;</code>) ก็ได้:{' '}
          <code>input</code>, <code>textarea</code>, <code>input-group</code>, <code>select</code>, <code>checkbox</code>,{' '}
          <code>radio</code>, <code>switch</code>, <code>otp</code>, <code>date</code>, <code>date-range</code>,{' '}
          <code>custom</code>
        </li>
        <li>
          <code>className</code> — ใส่ที่กรอบนอกของช่อง เช่น <code>md:col-span-2</code> เมื่อ <code>FormFields</code> เป็น grid
        </li>
        <li>
          <code>isHide</code> — ไม่ render ช่องนั้น (ค่าในฟอร์มยังอยู่) · <code>isRequired</code> / <code>isDisabled</code> —
          ทางลัดที่ชนะ <code>props.required</code> / <code>props.disabled</code>
        </li>
        <li>
          <code>custom</code> — render อะไรก็ได้ผ่าน <code>render()</code> (เช่นหัวข้อคั่น) ควรใส่ <code>key</code> เพราะไม่มี <code>props.name</code> ให้ใช้เป็น key
        </li>
      </ul>

      <h2>Field ทั้งหมด</h2>
      <ul>
        {rhf.map(([slug, name, text]) => (
          <li key={slug}>
            <Link href={`/components/${slug}`}>{name}</Link> — {text}
          </li>
        ))}
      </ul>
    </DocPage>
  )
}
