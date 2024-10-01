import { Footer, Main, Navbar, Wrapper } from './styles'

import { Balance } from './views/Balance/Balance'
import { Filter } from './views/Filter/Filter'
import { Form } from './views/Form/Form'
import { Table } from './views/Table/Table'

export const App = () => {
	return (
		<Wrapper>
			<Navbar>Navbar</Navbar>
			<Main>
				<Filter />
				<Balance />
				<Form />
				<Table />
			</Main>
			<Footer>Footer</Footer>
		</Wrapper>
	)
}
