// Generated list of live demos per component page. Each entry's source file is shown in the "Code" tab.
import type { ComponentType } from 'react'
import ButtonVariants from './button/variants'
import ButtonSizes from './button/sizes'
import ButtonLoading from './button/loading'
import ButtonAsChild from './button/as-child'
import ButtonWithIcon from './button/with-icon'
import IconButtonBasic from './icon-button/basic'
import ButtonGroupBasic from './button-group/basic'
import ButtonGroupVertical from './button-group/vertical'
import BadgeVariants from './badge/variants'
import SpinnerSizes from './spinner/sizes'
import KbdBasic from './kbd/basic'
import AvatarBasic from './avatar/basic'
import AvatarGroupDemo from './avatar/group'
import AvatarBadgeDemo from './avatar/badge'
import CardBasic from './card/basic'
import CardSmall from './card/small'
import SeparatorBasic from './separator/basic'
import SkeletonCard from './skeleton/card'
import LabelBasic from './label/basic'
import InputBasic from './input/basic'
import TextareaBasic from './textarea/basic'
import CheckboxBasic from './checkbox/basic'
import RadioGroupBasic from './radio-group/basic'
import SwitchBasic from './switch/basic'
import SelectBasic from './select/basic'
import SelectGroups from './select/groups'
import InputGroupBasic from './input-group/basic'
import InputGroupTextarea from './input-group/textarea'
import InputOtpBasic from './input-otp/basic'
import CalendarSingle from './calendar/single'
import CalendarRange from './calendar/range'
import CalendarDropdownEn from './calendar/dropdown-en'
import FieldForm from './field/form'
import FieldResponsive from './field/responsive'
import FieldChoiceCard from './field/choice-card'
import DialogBasic from './dialog/basic'
import DialogControlled from './dialog/controlled'
import DialogForm from './dialog/form'
import AlertDialogBasic from './alert-dialog/basic'
import AlertDialogMediaDemo from './alert-dialog/media'
import SheetSides from './sheet/sides'
import SheetForm from './sheet/form'
import PopoverBasic from './popover/basic'
import TooltipBasic from './tooltip/basic'
import TooltipWithProvider from './tooltip/provider'
import DropdownMenuBasic from './dropdown-menu/basic'
import ToasterTypes from './toaster/types'
import ToasterPromise from './toaster/promise'
import TabsBasic from './tabs/basic'
import TabsVertical from './tabs/vertical'
import TabsLine from './tabs/line'
import AccordionBasic from './accordion/basic'
import AccordionMultiple from './accordion/multiple'
import BreadcrumbBasic from './breadcrumb/basic'
import BreadcrumbDropdown from './breadcrumb/dropdown'
import PaginationBasic from './pagination/basic'
import PaginationFull from './pagination/full'
import PaginationSimple from './pagination/simple'
import TableBasic from './table/basic'
import TableSelectable from './table/selectable'
import AlertVariants from './alert/variants'
import AlertCustomColors from './alert/custom-colors'
import PageHeaderBasic from './page-header/basic'
import EmptyBasic from './empty/basic'
import EmptySearch from './empty/search'
import ErrorStateBasic from './error-state/basic'
import ErrorStateCustom from './error-state/custom'
import PdfPreviewBasic from './pdf-preview/basic'
import PdfPreviewError from './pdf-preview/error'
import FormProviderBasic from './form-provider/basic'
import FormFieldsBasic from './form-fields/basic'
import FormFieldsConditional from './form-fields/conditional'
import RhfInputBasic from './rhf-input/basic'
import RhfInputGroupBasic from './rhf-input-group/basic'
import RhfTextareaBasic from './rhf-textarea/basic'
import RhfSelectBasic from './rhf-select/basic'
import RhfCheckboxBasic from './rhf-checkbox/basic'
import RhfRadioGroupBasic from './rhf-radio-group/basic'
import RhfSwitchBasic from './rhf-switch/basic'
import RhfInputOtpBasic from './rhf-input-otp/basic'
import RhfDatePickerBasic from './rhf-date-picker/basic'
import RhfDateRangePickerBasic from './rhf-date-range-picker/basic'

export interface DemoEntry {
  /** Path under src/demos without extension. */
  file: string
  title: string
  description?: string
  Component: ComponentType
}

export const demos: Record<string, DemoEntry[]> = {
  'button': [
    { file: 'button/variants', title: 'Variants', description: '7 รูปแบบ: default สำหรับการกระทำหลัก, secondary/outline/ghost สำหรับรอง, destructive สำหรับลบ, link และ sparkle (เฉพาะ bom-ui) สำหรับฟีเจอร์เด่น', Component: ButtonVariants },
    { file: 'button/sizes', title: 'ขนาด', description: 'ขนาดข้อความ xs / sm / default / lg และปุ่มไอคอน icon-xs / icon-sm / icon / icon-lg', Component: ButtonSizes },
    { file: 'button/with-icon', title: 'ไอคอนคู่ข้อความ', description: 'ใส่ data-icon="inline-start" / "inline-end" ที่ไอคอนเพื่อให้ padding สมดุล', Component: ButtonWithIcon },
    { file: 'button/loading', title: 'Loading', description: 'loading (เฉพาะ bom-ui) จะแสดง Spinner ตั้ง aria-busy และ disable ปุ่มให้', Component: ButtonLoading },
    { file: 'button/as-child', title: 'asChild เป็นลิงก์', description: 'ได้ลิงก์จริง (<a>) ที่หน้าตาเป็นปุ่ม — ใช้กับ next/link ได้เหมือนกัน', Component: ButtonAsChild },
  ],
  'icon-button': [
    { file: 'icon-button/basic', title: 'ขนาดและรูปแบบ', description: 'ค่าเริ่มต้น variant="ghost" size="default"', Component: IconButtonBasic },
  ],
  'button-group': [
    { file: 'button-group/basic', title: 'พื้นฐาน', description: 'รวมปุ่ม ข้อความ และ Input', Component: ButtonGroupBasic },
    { file: 'button-group/vertical', title: 'แนวตั้ง', Component: ButtonGroupVertical },
  ],
  'badge': [
    { file: 'badge/variants', title: 'Variants', description: 'รวมการใช้ asChild เป็นลิงก์ และไอคอน data-icon', Component: BadgeVariants },
  ],
  'spinner': [
    { file: 'spinner/sizes', title: 'ขนาด', description: 'ปรับขนาด/สีด้วย className — ไม่มี prop size', Component: SpinnerSizes },
  ],
  'kbd': [
    { file: 'kbd/basic', title: 'พื้นฐาน', Component: KbdBasic },
  ],
  'avatar': [
    { file: 'avatar/basic', title: 'ขนาดและ fallback', description: 'ถ้ารูปโหลดไม่ได้จะแสดง AvatarFallback', Component: AvatarBasic },
    { file: 'avatar/group', title: 'AvatarGroup', description: 'ซ้อนกันพร้อมวงตัวเลข AvatarGroupCount', Component: AvatarGroupDemo },
    { file: 'avatar/badge', title: 'AvatarBadge', description: 'จุดสถานะหรือไอคอนเล็กมุมขวาล่าง', Component: AvatarBadgeDemo },
  ],
  'card': [
    { file: 'card/basic', title: 'พื้นฐาน', Component: CardBasic },
    { file: 'card/small', title: 'size="sm"', description: 'ระยะห่างแคบลง เหมาะกับการ์ดสถิติ', Component: CardSmall },
  ],
  'separator': [
    { file: 'separator/basic', title: 'แนวนอนและแนวตั้ง', Component: SeparatorBasic },
  ],
  'skeleton': [
    { file: 'skeleton/card', title: 'Skeleton โปรไฟล์', Component: SkeletonCard },
  ],
  'label': [
    { file: 'label/basic', title: 'พื้นฐาน', Component: LabelBasic },
  ],
  'input': [
    { file: 'input/basic', title: 'สถานะ', description: 'aria-invalid แสดงกรอบสีแดง — ปรับความสูงด้วย className', Component: InputBasic },
  ],
  'textarea': [
    { file: 'textarea/basic', title: 'พื้นฐาน', Component: TextareaBasic },
  ],
  'checkbox': [
    { file: 'checkbox/basic', title: 'Indeterminate', description: 'ตัวเลือก "ทั้งหมด" ใช้ checked="indeterminate" เมื่อเลือกบางส่วน', Component: CheckboxBasic },
  ],
  'radio-group': [
    { file: 'radio-group/basic', title: 'พื้นฐาน', Component: RadioGroupBasic },
  ],
  'switch': [
    { file: 'switch/basic', title: 'พื้นฐาน', Component: SwitchBasic },
  ],
  'select': [
    { file: 'select/basic', title: 'Controlled', Component: SelectBasic },
    { file: 'select/groups', title: 'กลุ่ม, position="popper" และ size="sm"', Component: SelectGroups },
  ],
  'input-group': [
    { file: 'input-group/basic', title: 'Addon แบบต่าง ๆ', description: 'ไอคอน ข้อความ และปุ่ม ภายในกล่องเดียว', Component: InputGroupBasic },
    { file: 'input-group/textarea', title: 'Textarea + block-end', Component: InputGroupTextarea },
  ],
  'input-otp': [
    { file: 'input-otp/basic', title: '6 หลัก แบ่ง 2 กลุ่ม', Component: InputOtpBasic },
  ],
  'calendar': [
    { file: 'calendar/single', title: 'เลือกวันเดียว', description: 'ภาษาไทย ปี พ.ศ. เป็นค่าเริ่มต้น', Component: CalendarSingle },
    { file: 'calendar/range', title: 'เลือกช่วง', description: '2 เดือน ห้ามเลือกวันในอดีต', Component: CalendarRange },
    { file: 'calendar/dropdown-en', title: 'Dropdown + ภาษาอังกฤษ', description: 'ส่ง locale={enUS} เฉพาะตัวนี้ หรือตั้งทั้งแอปที่ BomUIProvider', Component: CalendarDropdownEn },
  ],
  'field': [
    { file: 'field/form', title: 'ฟอร์มเต็ม', description: 'FieldSet + FieldGroup + Field พร้อม error', Component: FieldForm },
    { file: 'field/responsive', title: 'Responsive / horizontal', Component: FieldResponsive },
    { file: 'field/choice-card', title: 'การ์ดตัวเลือก', description: 'FieldLabel ครอบ Field + FieldTitle ทำ RadioGroup แบบการ์ด', Component: FieldChoiceCard },
  ],
  'dialog': [
    { file: 'dialog/basic', title: 'พื้นฐาน', Component: DialogBasic },
    { file: 'dialog/form', title: 'ฟอร์มใน Dialog', description: 'ปุ่มในฟอร์มต้องระบุ type เอง — Button ไม่ตั้ง type="button" ให้แล้ว', Component: DialogForm },
    { file: 'dialog/controlled', title: 'Controlled', description: 'เปิด/ปิดจาก state และซ่อนปุ่ม X', Component: DialogControlled },
  ],
  'alert-dialog': [
    { file: 'alert-dialog/basic', title: 'ยืนยันการลบ', Component: AlertDialogBasic },
    { file: 'alert-dialog/media', title: 'AlertDialogMedia + size="sm"', description: 'ไอคอนหัวกล่อง และกล่องขนาดเล็กที่ปุ่มเรียง 2 คอลัมน์', Component: AlertDialogMediaDemo },
  ],
  'sheet': [
    { file: 'sheet/sides', title: 'ทั้ง 4 ด้าน', Component: SheetSides },
    { file: 'sheet/form', title: 'ฟอร์มใน Sheet', description: 'SheetFooter ชิดล่างด้วย mt-auto', Component: SheetForm },
  ],
  'popover': [
    { file: 'popover/basic', title: 'พื้นฐาน', Component: PopoverBasic },
  ],
  'tooltip': [
    { file: 'tooltip/basic', title: 'กับ IconButton', Component: TooltipBasic },
    { file: 'tooltip/provider', title: 'TooltipProvider + Kbd', description: 'Provider ซ้อนเพื่อตั้ง delayDuration เฉพาะส่วน', Component: TooltipWithProvider },
  ],
  'dropdown-menu': [
    { file: 'dropdown-menu/basic', title: 'เมนูบัญชี', description: 'มี shortcut, checkbox, radio และเมนูย่อย', Component: DropdownMenuBasic },
  ],
  'toaster': [
    { file: 'toaster/types', title: 'ประเภท', Component: ToasterTypes },
    { file: 'toaster/promise', title: 'toast.promise', Component: ToasterPromise },
  ],
  'tabs': [
    { file: 'tabs/basic', title: 'พื้นฐาน', Component: TabsBasic },
    { file: 'tabs/line', title: 'variant="line"', description: 'แท็บแบบขีดเส้นใต้ พร้อมไอคอน', Component: TabsLine },
    { file: 'tabs/vertical', title: 'แนวตั้ง', Component: TabsVertical },
  ],
  'accordion': [
    { file: 'accordion/basic', title: 'Single + collapsible', Component: AccordionBasic },
    { file: 'accordion/multiple', title: 'Multiple', description: 'เปิดได้หลายข้อ และปิดใช้งานบางข้อ', Component: AccordionMultiple },
  ],
  'breadcrumb': [
    { file: 'breadcrumb/basic', title: 'พื้นฐาน', Component: BreadcrumbBasic },
    { file: 'breadcrumb/dropdown', title: 'ย่อด้วย dropdown + ตัวคั่นเอง', description: 'BreadcrumbEllipsis เป็น trigger ของ DropdownMenu', Component: BreadcrumbDropdown },
  ],
  'pagination': [
    { file: 'pagination/basic', title: 'พื้นฐาน', description: 'ประกอบเองแบบ shadcn/ui', Component: PaginationBasic },
    { file: 'pagination/full', title: 'ตัวเลขหน้าด้วย getPageItems', description: 'คำนวณเลขหน้าและ … ให้อัตโนมัติ (bom-ui)', Component: PaginationFull },
    { file: 'pagination/simple', title: 'ก่อนหน้า / ถัดไป', description: 'พร้อมสรุป "1–10 จาก 120 รายการ"', Component: PaginationSimple },
  ],
  'table': [
    { file: 'table/basic', title: 'พื้นฐาน', Component: TableBasic },
    { file: 'table/selectable', title: 'เลือกแถว', description: 'Checkbox + data-state="selected"', Component: TableSelectable },
  ],
  'alert': [
    { file: 'alert/variants', title: 'Variants', description: 'default / destructive + AlertAction', Component: AlertVariants },
    { file: 'alert/custom-colors', title: 'สีอื่นด้วย className', description: 'แทน variant info/success/warning ของ 0.x', Component: AlertCustomColors },
  ],
  'page-header': [
    { file: 'page-header/basic', title: 'พื้นฐาน', Component: PageHeaderBasic },
  ],
  empty: [
    { file: 'empty/basic', title: 'พื้นฐาน', description: 'EmptyMedia variant="icon" + ปุ่มใน EmptyContent', Component: EmptyBasic },
    { file: 'empty/search', title: 'ไม่พบผลการค้นหา', description: 'EmptyMedia variant="default" กับไอคอนขนาดใหญ่ และลิงก์ใน EmptyDescription', Component: EmptySearch },
  ],
  'error-state': [
    { file: 'error-state/basic', title: 'พร้อมปุ่มลองใหม่', Component: ErrorStateBasic },
    { file: 'error-state/custom', title: 'เปลี่ยนหัวข้อและข้อความปุ่ม', Component: ErrorStateCustom },
  ],
  'pdf-preview': [
    { file: 'pdf-preview/basic', title: 'พื้นฐาน', Component: PdfPreviewBasic },
    { file: 'pdf-preview/error', title: 'เมื่อโหลดไม่สำเร็จ', description: 'ใช้ fetcher เอง (เช่น ใส่ Authorization header) — ถ้า throw จะแสดงข้อความ error', Component: PdfPreviewError },
  ],
  'form-provider': [
    { file: 'form-provider/basic', title: 'ฟอร์มเข้าสู่ระบบ', description: 'กดส่งโดยไม่กรอกเพื่อดู error จาก zod', Component: FormProviderBasic },
  ],
  'form-fields': [
    { file: 'form-fields/basic', title: 'ฟอร์มจาก config', description: 'grid 2 คอลัมน์ — className ของแต่ละช่องใช้ sm:col-span-2 ให้กินเต็มแถว', Component: FormFieldsBasic },
    { file: 'form-fields/conditional', title: 'ซ่อน / ปิด / บังคับตามค่าในฟอร์ม', description: 'isHide, isDisabled, isRequired คำนวณจาก useWatch', Component: FormFieldsConditional },
  ],
  'rhf-input': [
    { file: 'rhf-input/basic', title: 'Addon, append และ horizontal', Component: RhfInputBasic },
  ],
  'rhf-input-group': [
    { file: 'rhf-input-group/basic', title: 'ไอคอนและตัวนับตัวอักษร', Component: RhfInputGroupBasic },
  ],
  'rhf-textarea': [
    { file: 'rhf-textarea/basic', title: 'พื้นฐาน', Component: RhfTextareaBasic },
  ],
  'rhf-select': [
    { file: 'rhf-select/basic', title: 'options และกลุ่ม', Component: RhfSelectBasic },
  ],
  'rhf-checkbox': [
    { file: 'rhf-checkbox/basic', title: 'ตัวเดียว กลุ่ม และการ์ด', Component: RhfCheckboxBasic },
  ],
  'rhf-radio-group': [
    { file: 'rhf-radio-group/basic', title: 'การ์ดและแนวนอน', Component: RhfRadioGroupBasic },
  ],
  'rhf-switch': [
    { file: 'rhf-switch/basic', title: 'พื้นฐาน', Component: RhfSwitchBasic },
  ],
  'rhf-input-otp': [
    { file: 'rhf-input-otp/basic', title: 'ส่งอัตโนมัติเมื่อกรอกครบ', Component: RhfInputOtpBasic },
  ],
  'rhf-date-picker': [
    { file: 'rhf-date-picker/basic', title: 'ปุ่ม, พิมพ์เอง และพร้อมเวลา', description: 'variant="input" พิมพ์ได้ทั้ง 29/10/2569 และ 29/10/2026', Component: RhfDatePickerBasic },
  ],
  'rhf-date-range-picker': [
    { file: 'rhf-date-range-picker/basic', title: 'ช่วงวันลา', description: 'ห้ามวันเสาร์-อาทิตย์และวันในอดีต สูงสุด 10 วัน', Component: RhfDateRangePickerBasic },
  ],
}
