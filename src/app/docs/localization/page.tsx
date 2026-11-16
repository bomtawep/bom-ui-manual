import type { Metadata } from 'next'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@bomtawep/ui'
import { CodeBlock } from '@/components/code-block'
import { DocPage } from '@/components/doc-page'
import { Example } from '@/components/example'
import LocaleSwitcher from '@/demos/guides/locale-switcher'

export const metadata: Metadata = { title: 'ภาษาและ locale' }

const messages: [string, string][] = [
  ['required', 'จำเป็น'],
  ['loading', 'กำลังโหลด'],
  ['close', 'ปิด'],
  ['selectPlaceholder', 'เลือก'],
  ['datePickerPlaceholder', 'เลือกวันที่'],
  ['dateRangePlaceholder', 'เลือกช่วงวันที่'],
  ['dateInputPlaceholder', 'วว/ดด/ปปปป'],
  ['openCalendar', 'เปิดปฏิทิน'],
  ['time', 'เวลา'],
  ['pagination', 'การแบ่งหน้า'],
  ['previous / next', 'ก่อนหน้า / ถัดไป (ข้อความบน PaginationPrevious / PaginationNext)'],
  ['previousPage / nextPage', 'หน้าก่อนหน้า / หน้าถัดไป (aria-label ของปุ่มเดียวกัน)'],
  ['morePages', 'หน้าอื่น ๆ'],
  ['pageOf(page, pageCount)', 'หน้า 1 / 10 (v1 ไม่มี component ใช้แล้ว — คงไว้เพื่อความเข้ากันได้)'],
  ['pageSummary(from, to, total)', '1–10 จาก 120 รายการ (v1 ไม่มี component ใช้แล้ว — คงไว้เพื่อความเข้ากันได้)'],
  ['breadcrumb / breadcrumbMore', 'เส้นทาง / เพิ่มเติม'],
  ['toggleSidebar', 'เปิด/ปิดแถบข้าง'],
  ['errorTitle', 'โหลดข้อมูลไม่สำเร็จ'],
  ['retry', 'ลองใหม่'],
  ['pdfRegenerate / pdfOpenNewTab / pdfFailed', 'สร้างใหม่ / เปิดแท็บใหม่ / สร้าง PDF ไม่สำเร็จ'],
]

export default function LocalizationPage() {
  return (
    <DocPage
      href="/docs/localization"
      title="ภาษาและ locale"
      description="ค่าเริ่มต้นเป็นภาษาไทย ปี พ.ศ. ใช้ได้ทันทีโดยไม่ต้องครอบ provider — ใช้ BomUIProvider เมื่อต้องการเปลี่ยน"
    >
      <h2>BomUIProvider</h2>
      <CodeBlock
        title="app/layout.tsx"
        code={`import { enUS } from 'react-day-picker/locale'
import { BomUIProvider } from '@bomtawep/ui'

<BomUIProvider locale={enUS} messages={{ close: 'Close', previous: 'Previous', next: 'Next', retry: 'Retry' }}>
  {children}
</BomUIProvider>`}
      />
      <ul>
        <li>
          <code>locale</code> — locale จาก <code>react-day-picker/locale</code> ใช้กับ <code>Calendar</code> และ date picker ทุกตัว
          (ค่าเริ่มต้น <code>th</code> พร้อมปี พ.ศ.)
        </li>
        <li>
          <code>messages</code> — ข้อความ UI (<code>BomUIMessages</code>) ส่งเฉพาะที่ต้องการเปลี่ยน ที่เหลือใช้ค่าไทยจาก{' '}
          <code>defaultMessages</code>
        </li>
        <li>
          prop ของ component (เช่น <code>placeholder</code>, <code>locale</code>, <code>label</code>) ชนะค่าจาก provider เสมอ
        </li>
        <li>provider ซ้อนกันได้ — ใช้เปลี่ยนภาษาเฉพาะบางส่วนของหน้า</li>
        <li>
          ข้อความที่ shadcn/ui เขียนเป็นภาษาอังกฤษตายตัว (เช่น &quot;Close&quot; ของ Dialog, &quot;Toggle Sidebar&quot;,
          &quot;Previous&quot; / &quot;Next&quot; ของ Pagination) ถูกแทนด้วย <code>messages</code> ทั้งหมด
        </li>
      </ul>

      <h2>ลองสลับภาษา</h2>
      <p>Calendar, ปุ่มของ Pagination และ aria-label ของ Spinner เปลี่ยนตาม provider ที่ครอบ</p>
      <Example file="guides/locale-switcher" Component={LocaleSwitcher} />

      <h2>ข้อความทั้งหมด (defaultMessages)</h2>
      <div className="table-scroll">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>key</TableHead>
              <TableHead>ค่าเริ่มต้น</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>
                  <code>{key}</code>
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2>วันที่ภาษาไทย</h2>
      <ul>
        <li>Calendar แสดงปี พ.ศ. ทั้งหัวปฏิทิน dropdown ปี และชื่อวันที่ screen reader อ่าน</li>
        <li>
          <code>RHFDatePicker variant=&quot;input&quot;</code> รับการพิมพ์ <code>dd/mm/yyyy</code> ทั้ง พ.ศ. และ ค.ศ. — ค่าในฟอร์มเป็น{' '}
          <code>Date</code> ปกติเสมอ
        </li>
        <li>
          กำหนดรูปแบบเองได้ด้วย <code>formatValue</code>, <code>formatInput</code>, <code>parseInput</code>
        </li>
      </ul>
    </DocPage>
  )
}
