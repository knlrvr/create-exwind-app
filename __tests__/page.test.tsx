import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

// example test checks for h1 on page.tsx in /app
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})