import { createTransaction, deleteTransaction } from '../services/transactions'
import {
	filterBeneficiaryAtom,
	pageAtom,
	pageSizeAtom
} from '../../store/transactions'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useAtomValue } from 'jotai'

export const useCreateTransactionMutation = () => {
	const queryClient = useQueryClient()
	const page = useAtomValue(pageAtom)
	const pageSize = useAtomValue(pageSizeAtom)
	const filterBeneficiary = useAtomValue(filterBeneficiaryAtom)

	return useMutation({
		mutationFn: createTransaction,
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ['transactions', page, pageSize, filterBeneficiary]
			})
		}
	})
}

export const useDeleteTransactionMutation = () => {
	const queryClient = useQueryClient()
	const page = useAtomValue(pageAtom)
	const pageSize = useAtomValue(pageSizeAtom)
	const filterBeneficiary = useAtomValue(filterBeneficiaryAtom)

	return useMutation({
		mutationFn: deleteTransaction,
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ['transactions', page, pageSize, filterBeneficiary]
			})
		}
	})
}
