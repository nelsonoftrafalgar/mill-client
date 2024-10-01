import { Styles } from 'styled-components/dist/types'
import { css } from 'styled-components'

const device = {
	md: '992px'
}

export const media = {
	md: (args: Styles<object>) => css`
		@media (min-width: ${device.md}) {
			${css(args)};
		}
	`
}
