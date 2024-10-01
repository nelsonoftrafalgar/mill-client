import { media } from './style/mixins'
import styled from 'styled-components'

export const Navbar = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
`
export const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
`

export const Main = styled.main`
	flex-grow: 1;
	gap: ${({ theme }) => theme.sectionSpacing};
	flex-grow: 1;
	max-height: 100%;
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(9, 1fr);
	grid-template-areas:
		'form'
		'form'
		'form'
		'balance'
		'filter'
		'table'
		'table'
		'table'
		'pagination';

	${media.md`
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			'balance form'
			'. form'
			'. form'
			'filter form'
			'table table'
			'table table'
			'table table'
			'table table'
			'pagination pagination';
		`}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	gap: ${({ theme }) => theme.sectionSpacing};
`
