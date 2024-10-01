export interface Transaction {
	id: number
	amount: number
	beneficiary: string
	account: string
	address: string
	date: string
	description: string
}

export type NewTransactionFormData = Omit<Transaction, 'id' | 'date'>
export type NewTransactionParams = Omit<Transaction, 'id'>
