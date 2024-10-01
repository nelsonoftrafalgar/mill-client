import { Filter } from './views/Filter/Filter'
import { Table } from './views/Table/Table'
import styled from 'styled-components'

const Navbar = styled.header`
	background-color: green;
	height: 30px;
`
const Footer = styled.footer`
	background-color: pink;
	height: 30px;
`

const Main = styled.main`
	flex-grow: 1;
	gap: 5px;
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

	@media screen and (min-width: 992px) {
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
	}
`

const Balance = styled.section`
	background-color: aquamarine;
	grid-area: balance;
`
const Form = styled.section`
	background-color: yellow;
	grid-area: form;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	gap: 5px;
`

export const App = () => {
	return (
		<Wrapper>
			<Navbar>Navbar</Navbar>
			<Main>
				<Filter />
				<Balance>Balance</Balance>
				<Form>Form</Form>
				<Table />
			</Main>
			<Footer>Footer</Footer>
		</Wrapper>
	)
}
