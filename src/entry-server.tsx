import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '@/components/ui/tooltip'
import { LanguageProvider } from '@/i18n/LanguageContext'
import Index from '@/pages/Index'

export function render(url: string) {
  const helmetContext: { helmet?: any } = {}
  const queryClient = new QueryClient()

  const appHtml = renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <LanguageProvider>
              <Index />
            </LanguageProvider>
          </StaticRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )

  return { appHtml, helmet: helmetContext.helmet }
}
