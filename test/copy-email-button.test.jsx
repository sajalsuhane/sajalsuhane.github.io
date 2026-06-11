import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import CopyEmailButton from '../src/components/CopyEmailButton'

// jsdom's navigator.clipboard is getter-only; defineProperty is the supported
// way to stub it. fireEvent (not userEvent) avoids userEvent's own clipboard stub.
const stubClipboard = (writeText) =>
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  })

describe('CopyEmailButton', () => {
  beforeEach(() => {
    delete window.goatcounter
  })

  it('copies the email and shows the Copied state', async () => {
    const writeText = vi.fn().mockResolvedValue()
    stubClipboard(writeText)

    render(<CopyEmailButton />)
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /copy email/i }))
    })

    expect(writeText).toHaveBeenCalledWith('ssuhane31@gmail.com')
    expect(screen.getByText('Copied ✓')).toBeInTheDocument()
  })

  it('fires the goatcounter email-copy event when available', async () => {
    stubClipboard(vi.fn().mockResolvedValue())
    const count = vi.fn()
    window.goatcounter = { count }

    render(<CopyEmailButton />)
    await act(async () => {
      fireEvent.click(screen.getByRole('button'))
    })

    expect(count).toHaveBeenCalledWith({ path: 'email-copy', event: true })
  })

  it('reverts to the idle label after 2 seconds', async () => {
    stubClipboard(vi.fn().mockResolvedValue())

    render(<CopyEmailButton />)
    await act(async () => {
      fireEvent.click(screen.getByRole('button'))
    })
    expect(screen.getByText('Copied ✓')).toBeInTheDocument()

    await act(() => new Promise((r) => setTimeout(r, 2100)))
    expect(screen.getByText('Copy email')).toBeInTheDocument()
  })

  it('survives clipboard failure without crashing (mailto fallback path)', async () => {
    stubClipboard(vi.fn().mockRejectedValue(new Error('denied')))

    render(<CopyEmailButton />)
    await act(async () => {
      fireEvent.click(screen.getByRole('button'))
    })
    expect(screen.getByText('Copy email')).toBeInTheDocument()
  })
})
