import { createTransaction, deleteTransaction } from '../services/transactions'
import {
	filterBeneficiaryAtom,
	pageAtom,
	pageSizeAtom
} from '../../store/transactions'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toast } from 'react-toastify'
import { useAtomValue } from 'jotai'

export const useCreateTransactionMutation = () => {
	const queryClient = useQueryClient()
	const page = useAtomValue(pageAtom)
	const pageSize = useAtomValue(pageSizeAtom)
	const filterBeneficiary = useAtomValue(filterBeneficiaryAtom)

	return useMutation({
		mutationFn: createTransaction,
		onSuccess: () => {
			toast('Successfully created new transaction', { type: 'success' })
			queryClient.refetchQueries({
				queryKey: ['transactions', page, pageSize, filterBeneficiary]
			})
		},
		onError: () => {
			toast('Failed creating new transaction', { type: 'error' })
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
