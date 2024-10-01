import { DeleteTransaction } from '../../components/DeleteTransaction/DeleteTransaction'
import { Ellipsis } from './styles'
import { Tooltip } from 'antd'
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
			cell: (info) => (
				<Tooltip title={info.getValue()}>
					<Ellipsis>{info.getValue()}</Ellipsis>
				</Tooltip>
			)
		}),
		columnHelper.accessor('address', {
			header: 'Address',
			cell: (info) => (
				<Tooltip title={info.getValue()}>
					<Ellipsis>{info.getValue()}</Ellipsis>
				</Tooltip>
			)
		}),
		columnHelper.accessor('date', {
			header: 'Date',
			cell: (info) => info.getValue()
		}),
		columnHelper.accessor('description', {
			header: 'Description',
			cell: (info) => (
				<Tooltip title={info.getValue()}>
					<Ellipsis>{info.getValue()}</Ellipsis>
				</Tooltip>
			)
		}),
		columnHelper.display({
			id: 'menu',
			cell: ({ row }) => <DeleteTransaction id={row.original.id} />
		})
	]

	return columns
}
