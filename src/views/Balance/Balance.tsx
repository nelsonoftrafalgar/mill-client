import { Wrapper } from './styles'
import { useTransactionsQuery } from '../../api/queries/transactions'

export const Balance = () => {
	const { data } = useTransactionsQuery()

	const transactions = data?.transactions ?? []
	const balance = transactions.reduce((acc, val) => acc + val.amount, 0)

	return (
		<Wrapper>
			<p>
				Balance: <span>{balance.toFixed(2)}</span>
			</p>
		</Wrapper>
	)
}
