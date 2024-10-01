import {
	filterBeneficiaryAtom,
	pageAtom,
	pageSizeAtom
} from '../../store/transactions'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { getTransactions } from '../services/transactions'
import { useAtomValue } from 'jotai'
import { useDebounce } from '../../utils/debounce'

export const useTransactionsQuery = () => {
	const page = useAtomValue(pageAtom)
	const pageSize = useAtomValue(pageSizeAtom)
	const filterBeneficiary = useAtomValue(filterBeneficiaryAtom)

	const debouncedFilter = useDebounce(filterBeneficiary, 300)

	return useQuery({
		queryKey: ['transactions', page, pageSize, debouncedFilter],
		queryFn: () => getTransactions(page, pageSize, debouncedFilter),
		placeholderData: keepPreviousData
	})
}
