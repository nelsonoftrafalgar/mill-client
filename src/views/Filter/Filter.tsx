import { ChangeEventHandler } from 'react'
import { Input } from '../../components/Input/Input'
import { Wrapper } from './styles'
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
			<Input
				label='Filter by beneficiary'
				onChange={handleChange}
				value={filterBeneficiary}
				placeholder='Filter by beneficiary'
			/>
		</Wrapper>
	)
}
