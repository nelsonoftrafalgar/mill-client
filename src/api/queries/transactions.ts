import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { getTransactions } from '../services/transactions'

export const useTransactionsQuery = (page: number, pageSize: number) => {
	return useQuery({
		queryKey: ['transactions', page, pageSize],
		queryFn: () => getTransactions(page, pageSize),
		placeholderData: keepPreviousData
	})
}
