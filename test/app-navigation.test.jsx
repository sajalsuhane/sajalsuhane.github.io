import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import App from '../src/App'

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )

describe('app navigation', () => {
  it('scrolls back to the top when navigating Home → Research', () => {
    const scrollTo = vi
      .spyOn(window, 'scrollTo')
      .mockImplementation(() => {})

    renderAt('/')
    scrollTo.mockClear()

    fireEvent.click(
      screen.getAllByRole('link', { name: /research & projects/i })[0]
    )

    expect(scrollTo).toHaveBeenCalledWith(0, 0)
    scrollTo.mockRestore()
  })

  it('redirects the legacy /about path to Home', () => {
    renderAt('/about')
    expect(
      screen.getAllByText(/Software Engineer at Goldman Sachs/i).length
    ).toBeGreaterThan(0)
  })
})
