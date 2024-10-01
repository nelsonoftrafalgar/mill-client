import styled from 'styled-components'

export const Wrapper = styled.section`
	grid-area: filter;
	display: flex;
	align-items: center;
`

export const Container = styled.div`
	max-width: 200px;

	label {
		font-size: ${({ theme }) => theme.fontSize.s};
	}
`
