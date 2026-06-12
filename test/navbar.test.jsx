import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router'
import Navbar from '../src/components/Navbar'

// Simulates a route change that does NOT come from a menu link click
// (browser back/forward) — exercises the lastPathname sync-on-render branch.
function NavigateOutside({ to }) {
  const navigate = useNavigate()
  return (
    <button type="button" onClick={() => navigate(to)}>
      navigate-outside
    </button>
  )
}

const renderNavbar = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <Navbar />
      <NavigateOutside to="/research" />
    </MemoryRouter>
  )

describe('Navbar', () => {
  beforeEach(() => {
    delete window.goatcounter
  })

  it('toggles the mobile menu open and closed', () => {
    renderNavbar()
    const toggle = screen.getByRole('button', { name: /toggle menu/i })

    // Closed: only the desktop nav renders a Home link.
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes the mobile menu when the route changes (e.g. back/forward)', () => {
    renderNavbar()
    const toggle = screen.getByRole('button', { name: /toggle menu/i })

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Route change from outside the menu — not a menu-link onClick.
    fireEvent.click(screen.getByRole('button', { name: 'navigate-outside' }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('fires the goatcounter resume-download event on the desktop Resume link', () => {
    const count = vi.fn()
    window.goatcounter = { count }
    renderNavbar()

    fireEvent.click(screen.getByRole('link', { name: 'Resume' }))

    expect(count).toHaveBeenCalledWith({ path: 'resume-download', event: true })
  })
})
