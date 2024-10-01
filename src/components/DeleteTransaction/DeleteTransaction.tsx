import { DeleteButton } from './styles'
import { DeleteTransactionProps } from './types'
import { Modal } from 'antd'
import { useDeleteTransactionMutation } from '../../api/mutations/transactions'
import { useState } from 'react'

export const DeleteTransaction = ({ id }: DeleteTransactionProps) => {
	const { mutateAsync } = useDeleteTransactionMutation()
	const [open, setOpen] = useState(false)

	const handleOpenModal = () => setOpen(true)

	const handleModalClose = () => setOpen(false)

	const handleDeleteTransaction = async () => {
		await mutateAsync(id)
		setOpen(false)
	}

	return (
		<>
			<DeleteButton onClick={handleOpenModal} type='primary' danger>
				Delete
			</DeleteButton>
			<Modal
				title='Delete transaction'
				onOk={handleDeleteTransaction}
				open={open}
				onCancel={handleModalClose}
			>
				<p>You are about to delete this transaction</p>
			</Modal>
		</>
	)
}
