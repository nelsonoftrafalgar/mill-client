import { media } from '../../style/mixins'
import styled from 'styled-components'

export const Wrapper = styled.section`
	grid-area: form;
	padding: ${({ theme }) => theme.elementSpacing};
	display: flex;
	flex-direction: column;
	align-items: center;

	${media.md`
		align-items: flex-start;
	`}
`

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.elementSpacing};
	align-items: flex-start;
`

export const Row = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.elementSpacing};
`

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.m};
`
