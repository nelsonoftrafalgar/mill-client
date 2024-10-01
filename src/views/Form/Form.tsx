import { Controller, useForm } from 'react-hook-form'
import { Row, StyledForm, Title, Wrapper } from './styles'

import { Button } from 'antd'
import { Input } from '../../components/Input/Input'
import { NewTransactionFormData } from '../../api/types/transactions'
import { format } from 'date-fns'
import { transactionSchema } from './validation'
import { useCreateTransactionMutation } from '../../api/mutations/transactions'
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

export const Form = () => {
	const { mutateAsync } = useCreateTransactionMutation()
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful, isSubmitting }
	} = useForm<NewTransactionFormData>({
		resolver: yupResolver(transactionSchema)
	})

	const onSubmit = async (data: NewTransactionFormData) => {
		const payload = {
			...data,
			account: `PL${data.account}`,
			date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")
		}
		mutateAsync(payload)
	}

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	return (
		<Wrapper>
			<Title>Add new transaction</Title>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Controller
						name='amount'
						control={control}
						render={({ field }) => (
							<Input
								label='Amount'
								status={errors.amount?.message ? 'error' : ''}
								placeholder='Amount'
								type='number'
								{...field}
								error={errors.amount?.message}
							/>
						)}
					/>
					<Controller
						name='account'
						control={control}
						render={({ field }) => (
							<Input
								label='Account'
								status={errors.account?.message ? 'error' : ''}
								placeholder='Account'
								{...field}
								error={errors.account?.message}
							/>
						)}
					/>
				</Row>
				<Row>
					<Controller
						name='address'
						control={control}
						render={({ field }) => (
							<Input
								label='Address'
								status={errors.address?.message ? 'error' : ''}
								placeholder='Address'
								{...field}
								error={errors.address?.message}
							/>
						)}
					/>
					<Controller
						name='description'
						control={control}
						render={({ field }) => (
							<Input
								label='Description'
								status={errors.description?.message ? 'error' : ''}
								placeholder='Description'
								{...field}
								error={errors.description?.message}
							/>
						)}
					/>
				</Row>
				<Controller
					name='beneficiary'
					control={control}
					render={({ field }) => (
						<Input
							label='Beneficiary'
							status={errors.beneficiary?.message ? 'error' : ''}
							placeholder='Beneficiary'
							{...field}
							error={errors.beneficiary?.message}
						/>
					)}
				/>
				<Button disabled={isSubmitting} htmlType='submit'>
					Submit
				</Button>
			</StyledForm>
		</Wrapper>
	)
}
