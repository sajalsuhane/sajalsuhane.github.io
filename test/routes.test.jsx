import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import App from '../src/App'

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )

describe('routes', () => {
  it('/ renders the Home hero with the primary resume CTA', () => {
    renderAt('/')
    expect(screen.getAllByText(/Sajal/i).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /resume/i }).length).toBeGreaterThan(0)
  })

  it('/research renders the Research page', () => {
    renderAt('/research')
    expect(screen.getAllByText(/research|publications/i).length).toBeGreaterThan(0)
  })

  it('unknown paths redirect to Home instead of a dead end', () => {
    renderAt('/this-page-does-not-exist')
    expect(screen.getAllByText(/Software Engineer at Goldman Sachs/i).length).toBeGreaterThan(0)
  })

  it('every page exposes exactly one main landmark for the skip link', () => {
    renderAt('/')
    expect(screen.getAllByRole('main')).toHaveLength(1)
  })
})
