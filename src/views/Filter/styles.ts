import { media } from '../../style/mixins'
import styled from 'styled-components'

export const Wrapper = styled.section`
	grid-area: filter;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ theme }) => theme.elementSpacing};

	${media.md`
		align-items: flex-start;
		justify-content: flex-start;
	`}
`
