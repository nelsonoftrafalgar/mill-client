import {
	Loader,
	PaginationContainer,
	StyledTable,
	TableContainer,
	TableHead,
	Td,
	Th,
	ThContainer,
	Tr,
	Wrapper
} from './styles'
import { Pagination, Spin } from 'antd'
import {
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table'
import { pageAtom, pageSizeAtom } from '../../store/transactions'

import { useAtom } from 'jotai'
import { useColumns } from './hooks'
import { useTransactionsQuery } from '../../api/queries/transactions'

export const Table = () => {
	const { data, isLoading } = useTransactionsQuery()

	const [page, setPage] = useAtom(pageAtom)
	const [pageSize, setPageSize] = useAtom(pageSizeAtom)

	const columns = useColumns()
	const transactions = data?.transactions ?? []

	const table = useReactTable({
		data: transactions,
		columns,
		getCoreRowModel: getCoreRowModel()
	})

	const totalTransactions = Number(data?.headers['x-total-count'] ?? 0)

	const handlePagination = (page: number, pageSize: number) => {
		setPage(page)
		setPageSize(pageSize)
	}

	return (
		<>
			<Wrapper>
				{isLoading ? (
					<Loader>
						<Spin size='large' />
					</Loader>
				) : (
					<TableContainer>
						<StyledTable>
							<TableHead>
								{table.getHeaderGroups().map((headerGroup) => (
									<tr key={headerGroup.id}>
										{headerGroup.headers.map((header) => (
											<Th
												key={header.id}
												onClick={header.column.getToggleSortingHandler()}
											>
												<ThContainer>
													{header.isPlaceholder
														? null
														: flexRender(header.column.columnDef.header, header.getContext())}
												</ThContainer>
											</Th>
										))}
									</tr>
								))}
							</TableHead>
							<tbody>
								{table.getRowModel().rows.map((row) => (
									<Tr key={row.id}>
										{row.getVisibleCells().map((cell) => (
											<Td key={cell.id}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Td>
										))}
									</Tr>
								))}
							</tbody>
						</StyledTable>
					</TableContainer>
				)}
			</Wrapper>
			<PaginationContainer>
				<Pagination
					total={totalTransactions}
					showSizeChanger
					showQuickJumper
					showTotal={(total) => `Total ${total} items`}
					onChange={handlePagination}
					pageSize={pageSize}
					current={page}
				/>
			</PaginationContainer>
		</>
	)
}
