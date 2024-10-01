import { Container, Wrapper } from './styles'

import { ChangeEventHandler } from 'react'
import { Input } from 'antd'
import { filterBeneficiaryAtom } from '../../store/transactions'
import { useAtom } from 'jotai'

export const Filter = () => {
	const [filterBeneficiary, setFilterBeneficiary] = useAtom(
		filterBeneficiaryAtom
	)

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setFilterBeneficiary(e.target.value)
	}

	return (
		<Wrapper>
			<Container>
				<label>Filter by beneficiary</label>
				<Input
					onChange={handleChange}
					value={filterBeneficiary}
					placeholder='Filter by beneficiary'
				/>
			</Container>
		</Wrapper>
	)
}
