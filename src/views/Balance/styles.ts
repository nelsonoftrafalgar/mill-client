import { media } from '../../style/mixins'
import styled from 'styled-components'

export const Wrapper = styled.section`
	grid-area: balance;
	padding: ${({ theme }) => theme.elementSpacing};
	display: flex;
	align-items: center;
	justify-content: center;

	${media.md`
		align-items: flex-start;
		justify-content: flex-start;
	`}
`
