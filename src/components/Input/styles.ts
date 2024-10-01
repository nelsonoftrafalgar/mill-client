import styled from 'styled-components'

export const Container = styled.div`
	max-width: 200px;
`

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fontSize.s};
`

export const ErrorMessage = styled.p`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme }) => theme.colors.danger};
`
