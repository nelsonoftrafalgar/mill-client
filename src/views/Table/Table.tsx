import {
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
import {
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table'

import { Pagination } from 'antd'
import { useColumns } from './hooks'
import { useState } from 'react'
import { useTransactionsQuery } from '../../api/queries/transactions'

export const Table = () => {
	const [page, setPage] = useState(1)
	const [pageSize, setPageSize] = useState(20)
	const columns = useColumns()
	const { data } = useTransactionsQuery(page, pageSize)
	const table = useReactTable({
		data: data?.transactions ?? [],
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
				<TableContainer>
					<StyledTable>
						<TableHead>
							{table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<Th key={header.id} onClick={header.column.getToggleSortingHandler()}>
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
			</Wrapper>
			<PaginationContainer>
				<Pagination
					total={totalTransactions}
					showSizeChanger
					showQuickJumper
					showTotal={(total) => `Total ${total} items`}
					onChange={handlePagination}
					pageSize={pageSize}
				/>
			</PaginationContainer>
		</>
	)
}
