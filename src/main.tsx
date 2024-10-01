import 'react-toastify/dist/ReactToastify.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { App } from './App.tsx'
import { StrictMode } from 'react'
import { StylesProvider } from './style/StylesProvider.tsx'
import { ToastContainer } from 'react-toastify'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<StylesProvider>
				<App />
				<ToastContainer />
			</StylesProvider>
		</QueryClientProvider>
	</StrictMode>
)
