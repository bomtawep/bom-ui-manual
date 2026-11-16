'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

/** class="dark" on <html> — the switch bom-ui's theme.css follows. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}
