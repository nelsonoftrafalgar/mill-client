import {
	enableTransactionsQuery,
	filterBeneficiaryAtom,
	pageAtom,
	pageSizeAtom
} from '../../store/transactions'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { getTransactions } from '../services/transactions'
import { useAtomValue } from 'jotai'
import { useFilterTransactionsDebounce } from '../../utils/debounce'

export const useTransactionsQuery = () => {
	const page = useAtomValue(pageAtom)
	const pageSize = useAtomValue(pageSizeAtom)
	const filterBeneficiary = useAtomValue(filterBeneficiaryAtom)
	const enabled = useAtomValue(enableTransactionsQuery)

	const { debouncedValue } = useFilterTransactionsDebounce(
		filterBeneficiary,
		300
	)

	return useQuery({
		queryKey: ['transactions', page, pageSize, debouncedValue],
		queryFn: () => getTransactions(page, pageSize, debouncedValue),
		placeholderData: keepPreviousData,
		enabled,
		staleTime: 10 * 1000
	})
}
