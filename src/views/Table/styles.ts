import styled from 'styled-components'

export const PaginationContainer = styled.div`
	grid-area: pagination;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Wrapper = styled.section`
	grid-area: table;
	overflow-y: auto;
`

export const TableContainer = styled.div`
	max-height: 0px;
	padding: ${({ theme }) => theme.elementSpacing};
`

export const StyledTable = styled.table`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.masterBackground};
	border-collapse: collapse;
`

export const TableHead = styled.thead`
	position: sticky;
	top: -1px;
	background-color: ${({ theme }) => theme.colors.masterBackground};

	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.borderDark};
		bottom: 0;
	}
`

export const Th = styled.th`
	text-align: start;
	padding: ${({ theme }) => theme.gridUnit * 3}px;
	font-size: ${({ theme }) => theme.fontSize.s};
`

export const ThContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.elementSpacing};
`

export const Td = styled.td`
	font-size: ${({ theme }) => theme.fontSize.xs};
	padding: ${({ theme }) => theme.gridUnit * 3}px;
`

export const Tr = styled.tr`
	border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
	&:last-child {
		border-bottom: none;
	}
`

export const Ellipsis = styled.span`
	display: block;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	max-width: 120px;
`

export const Loader = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
