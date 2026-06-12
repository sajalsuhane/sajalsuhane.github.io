// Smoke tests for the SSR prerender entry. If these fail, the build would
// ship empty HTML to Google — the exact regression the prerender exists to prevent.
import { describe, it, expect } from 'vitest'
import { render } from '../src/prerender-entry'

describe('prerender entry', () => {
  it('renders the home route with real content, no browser APIs', () => {
    const html = render('/')
    expect(html).toContain('Sajal Suhane')
    expect(html).toContain('Software Engineer at Goldman Sachs')
    expect(html).toContain('Download Resume')
    expect(html).toContain('id="main"')
  })

  it('renders the research route with its own content', () => {
    const html = render('/research')
    expect(html).toMatch(/Research|Publications/)
    expect(html).toContain('id="main"')
  })

  it('keeps the contact email visible in static HTML', () => {
    const html = render('/')
    expect(html).toContain('ssuhane31@gmail.com')
  })
})
