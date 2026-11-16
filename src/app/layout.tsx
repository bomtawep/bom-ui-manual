import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'
import { BomUIProvider, SidebarInset, SidebarProvider, Toaster, TooltipProvider } from '@bomtawep/ui'
import { DocsSidebar } from '@/components/docs-sidebar'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'

const sans = Noto_Sans_Thai({ subsets: ['thai', 'latin'], weight: ['400', '500', '600', '700'], variable: '--font-noto-thai' })

export const metadata: Metadata = {
  title: { default: 'bom-ui Manual', template: '%s · bom-ui Manual' },
  description: 'คู่มือการใช้งาน @bomtawep/ui — React component library สำหรับ Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={sans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <BomUIProvider>
            <TooltipProvider>
              <SidebarProvider>
                <DocsSidebar />
                <SidebarInset>
                  <SiteHeader />
                  <div className="page">{children}</div>
                </SidebarInset>
              </SidebarProvider>
            </TooltipProvider>
          </BomUIProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
