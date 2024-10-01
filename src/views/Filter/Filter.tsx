import {
	enableTransactionsQuery,
	filterBeneficiaryAtom,
	pageAtom
} from '../../store/transactions'
import { useAtom, useSetAtom } from 'jotai'

import { ChangeEventHandler } from 'react'
import { Input } from '../../components/Input/Input'
import { Wrapper } from './styles'

export const Filter = () => {
	const [filterBeneficiary, setFilterBeneficiary] = useAtom(
		filterBeneficiaryAtom
	)
	const setPage = useSetAtom(pageAtom)
	const setEnableTransactionsQuery = useSetAtom(enableTransactionsQuery)

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setFilterBeneficiary(e.target.value)
		setEnableTransactionsQuery(false)
		setPage(1)
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
