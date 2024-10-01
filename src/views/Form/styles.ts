import styled from 'styled-components'

export const Wrapper = styled.section`
	grid-area: form;
	padding: 10px;
`

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: flex-start;
`

export const Row = styled.div`
	display: flex;
	gap: 10px;
`

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.m};
`
