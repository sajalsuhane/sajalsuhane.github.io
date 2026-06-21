import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Home from '../src/pages/Home'

const renderHome = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <Home />
    </MemoryRouter>
  )

describe('Home', () => {
  beforeEach(() => {
    delete window.goatcounter
    document.title = ''
  })

  it('falls back to SS initials when the profile photo fails to load', () => {
    renderHome()
    const photo = screen.getByAltText(/Sajal Suhane, software engineer/i)

    fireEvent.error(photo)

    expect(screen.getByText('SS')).toBeInTheDocument()
    expect(
      screen.queryByAltText(/Sajal Suhane, software engineer/i)
    ).not.toBeInTheDocument()
  })

  it('sets the document title for client-side navigation', () => {
    renderHome()
    expect(document.title).toBe(
      'Sajal Suhane — Software Engineer at Goldman Sachs'
    )
  })

  it('fires the goatcounter resume-download event from the hero CTA', () => {
    const count = vi.fn()
    window.goatcounter = { count }
    renderHome()

    fireEvent.click(
      screen.getAllByRole('link', { name: /download resume/i })[0]
    )

    expect(count).toHaveBeenCalledWith({ path: 'resume-download', event: true })
  })

  it('surfaces the AI Leadership section with the Guild and its impact metrics', () => {
    renderHome()

    expect(
      screen.getByRole('heading', { name: /scaling ai adoption across the team/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /AI Guild \(Spotify org model\)/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/internal ai forum/i)).toBeInTheDocument()
    expect(screen.getByText('~60%')).toBeInTheDocument()
    expect(screen.getByText('30 → 18 days')).toBeInTheDocument()
  })
})
