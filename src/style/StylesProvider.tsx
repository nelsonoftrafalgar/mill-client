import GlobalStyles from './GlobalStyles'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

export const StylesProvider = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	)
}
