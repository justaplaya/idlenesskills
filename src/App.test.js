import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders correctly', () => {
  render(<App />)
  const text = screen.getByText(/testing/i)
  expect(text).toBeInTheDocument()
});
