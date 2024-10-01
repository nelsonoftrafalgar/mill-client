import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'

import { Form } from '../views/Form/Form'
import { PropsWithChildren } from 'react'
import { StylesProvider } from '../style/StylesProvider'
import userEvent from '@testing-library/user-event'

const queryClient = new QueryClient()
const wrapper = ({ children }: PropsWithChildren) => (
	<QueryClientProvider client={queryClient}>
		<StylesProvider>{children}</StylesProvider>
	</QueryClientProvider>
)

beforeEach(() => {
	render(<Form />, { wrapper })
})

describe('Form Component', () => {
	test('renders the form correctly', () => {
		expect(screen.getByLabelText('amount')).toBeDefined()
		expect(screen.getByLabelText('account')).toBeDefined()
		expect(screen.getByLabelText('address')).toBeDefined()
		expect(screen.getByLabelText('description')).toBeDefined()
		expect(screen.getByLabelText('beneficiary')).toBeDefined()
	})

	test('shows validation errors when required fields are empty', async () => {
		userEvent.click(screen.getByRole('button', { name: 'Submit' }))
		const requiredErrorMessages = await screen.findAllByText('Required field')
		expect(requiredErrorMessages).toHaveLength(5)
	})

	test('shows error when amount is negative', async () => {
		await userEvent.type(screen.getByLabelText('amount'), '-50')
		await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

		await waitFor(() => {
			expect(
				screen.getByText('amount must be greater than or equal to 0')
			).toBeDefined()
		})
	})

	test('shows error when account number is incorrect length or format', async () => {
		await userEvent.type(screen.getByLabelText('account'), '123456')
		await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

		await waitFor(() => {
			expect(
				screen.getByText('Account must have exactly 26 numbers')
			).toBeDefined()
		})

		await userEvent.clear(screen.getByLabelText('account'))
		await userEvent.type(
			screen.getByLabelText('account'),
			'abc123abc123abc123abc12345'
		)
		await userEvent.click(screen.getByRole('button', { name: 'Submit' }))
		await waitFor(() => {
			expect(screen.getByText('Only numbers are allowed')).toBeDefined()
		})
	})

	test('shows error when address contains invalid characters', async () => {
		await userEvent.type(screen.getByLabelText('address'), 'Invalid!Address#')

		await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

		await waitFor(() => {
			expect(screen.getByText('Invalid characters')).toBeDefined()
		})
	})

	test('shows error when description contains invalid characters', async () => {
		await userEvent.type(
			screen.getByLabelText('description'),
			'Invalid@Description!'
		)

		await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

		await waitFor(() => {
			expect(screen.getByText('Invalid characters')).toBeDefined()
		})
	})

	test('shows error when beneficiary contains invalid characters', async () => {
		await userEvent.type(
			screen.getByLabelText('beneficiary'),
			'Invalid@Beneficiary!'
		)

		await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

		await waitFor(() => {
			expect(screen.getByText('Invalid characters')).toBeDefined()
		})
	})

	test('submits the form successfully when all fields are valid', async () => {
		await userEvent.type(screen.getByLabelText('amount'), '100')
		await userEvent.type(
			screen.getByLabelText('account'),
			'12345678901234567890123456'
		)
		await userEvent.type(screen.getByLabelText('address'), '123 Main St')
		await userEvent.type(screen.getByLabelText('description'), 'Test Description')
		await userEvent.type(screen.getByLabelText('beneficiary'), 'John Doe')

		await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

		await waitFor(() => {
			expect(screen.queryByText('Required field')).toBeNull()
		})
	})
})
