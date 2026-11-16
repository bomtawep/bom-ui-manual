'use client'

import { PdfPreview } from '@bomtawep/ui'

// fetcher เองได้ เช่น ใส่ Authorization header — ตัวอย่างนี้จำลองว่า server ตอบ error
async function failingFetcher(): Promise<Blob> {
  await new Promise((r) => setTimeout(r, 600))
  throw new Error('ไม่มีสิทธิ์เข้าถึงเอกสารนี้ (403)')
}

export default function PdfPreviewError() {
  return (
    <PdfPreview
      url="/sample.pdf"
      title="เอกสารที่ไม่มีสิทธิ์"
      height="240px"
      fetcher={failingFetcher}
      className="w-full"
    />
  )
}
