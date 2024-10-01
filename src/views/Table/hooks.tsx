import { Transaction } from '../../api/types/transactions'
import { createColumnHelper } from '@tanstack/react-table'

export const useColumns = () => {
	const columnHelper = createColumnHelper<Transaction>()

	const columns = [
		columnHelper.accessor('amount', {
			header: 'Amount',
			cell: (info) => info.getValue()
		}),
		columnHelper.accessor('beneficiary', {
			header: 'Beneficiary',
			cell: (info) => info.getValue()
		}),
		columnHelper.accessor('account', {
			header: 'Account',
			cell: (info) => info.getValue()
		}),
		columnHelper.accessor('address', {
			header: 'Address',
			cell: (info) => info.getValue()
		}),
		columnHelper.accessor('date', {
			header: 'Date',
			cell: (info) => info.getValue()
		}),
		columnHelper.accessor('description', {
			header: 'Description',
			cell: (info) => info.getValue()
		})
	]

	return columns
}
