// Navigation only (no demo code) so the client-side sidebar stays small.

export interface NavLink {
  href: string
  title: string
}

export interface ComponentNavItem {
  slug: string
  name: string
}

export interface ComponentNavGroup {
  title: string
  items: ComponentNavItem[]
}

export const guides: NavLink[] = [
  { href: '/', title: 'ภาพรวม' },
  { href: '/docs/installation', title: 'การติดตั้ง' },
  { href: '/docs/getting-started', title: 'เริ่มต้นใช้งาน' },
  { href: '/docs/theming', title: 'ธีมและ Dark mode' },
  { href: '/docs/localization', title: 'ภาษาและ locale' },
  { href: '/docs/forms', title: 'ฟอร์ม (react-hook-form + zod)' },
  { href: '/docs/migration', title: 'ย้ายมาจาก shadcn/ui' },
  { href: '/docs/upgrade-v1', title: 'อัปเกรดเป็น v1' },
]

export const componentGroups: ComponentNavGroup[] = [
  {
    title: 'Primitives',
    items: [
      { slug: 'button', name: 'Button' },
      { slug: 'icon-button', name: 'IconButton' },
      { slug: 'button-group', name: 'ButtonGroup' },
      { slug: 'badge', name: 'Badge' },
      { slug: 'spinner', name: 'Spinner' },
      { slug: 'kbd', name: 'Kbd' },
      { slug: 'avatar', name: 'Avatar' },
      { slug: 'card', name: 'Card' },
      { slug: 'separator', name: 'Separator' },
      { slug: 'skeleton', name: 'Skeleton' },
    ],
  },
  {
    title: 'Form',
    items: [
      { slug: 'label', name: 'Label' },
      { slug: 'input', name: 'Input' },
      { slug: 'textarea', name: 'Textarea' },
      { slug: 'checkbox', name: 'Checkbox' },
      { slug: 'radio-group', name: 'RadioGroup' },
      { slug: 'switch', name: 'Switch' },
      { slug: 'select', name: 'Select' },
      { slug: 'input-group', name: 'InputGroup' },
      { slug: 'input-otp', name: 'InputOTP' },
      { slug: 'calendar', name: 'Calendar' },
      { slug: 'field', name: 'Field' },
    ],
  },
  {
    title: 'Overlay',
    items: [
      { slug: 'dialog', name: 'Dialog' },
      { slug: 'alert-dialog', name: 'AlertDialog' },
      { slug: 'sheet', name: 'Sheet' },
      { slug: 'popover', name: 'Popover' },
      { slug: 'tooltip', name: 'Tooltip' },
      { slug: 'dropdown-menu', name: 'DropdownMenu' },
      { slug: 'toaster', name: 'Toaster + toast()' },
    ],
  },
  {
    title: 'Navigation & data',
    items: [
      { slug: 'tabs', name: 'Tabs' },
      { slug: 'accordion', name: 'Accordion' },
      { slug: 'breadcrumb', name: 'Breadcrumb' },
      { slug: 'pagination', name: 'Pagination' },
      { slug: 'table', name: 'Table' },
      { slug: 'alert', name: 'Alert' },
    ],
  },
  {
    title: 'App',
    items: [
      { slug: 'page-header', name: 'PageHeader' },
      { slug: 'empty', name: 'Empty' },
      { slug: 'error-state', name: 'ErrorState' },
      { slug: 'pdf-preview', name: 'PdfPreview' },
      { slug: 'sidebar', name: 'Sidebar' },
    ],
  },
  {
    title: 'react-hook-form',
    items: [
      { slug: 'form-provider', name: 'FormProvider' },
      { slug: 'form-fields', name: 'FormFields' },
      { slug: 'rhf-input', name: 'RHFInput' },
      { slug: 'rhf-input-group', name: 'RHFInputGroup' },
      { slug: 'rhf-textarea', name: 'RHFTextArea' },
      { slug: 'rhf-select', name: 'RHFSelect' },
      { slug: 'rhf-checkbox', name: 'RHFCheckbox' },
      { slug: 'rhf-radio-group', name: 'RHFRadioGroup' },
      { slug: 'rhf-switch', name: 'RHFSwitch' },
      { slug: 'rhf-input-otp', name: 'RHFInputOTP' },
      { slug: 'rhf-date-picker', name: 'RHFDatePicker' },
      { slug: 'rhf-date-range-picker', name: 'RHFDateRangePicker' },
    ],
  },
]

export const allComponents = componentGroups.flatMap((g) => g.items.map((item) => ({ ...item, group: g.title })))

/** Guides then components, in sidebar order — used for previous / next links. */
export const pageOrder: NavLink[] = [
  ...guides,
  ...allComponents.map((c) => ({ href: `/components/${c.slug}`, title: c.name })),
]

export const REPO_URL = 'https://github.com/bomtawep/bom-ui'
