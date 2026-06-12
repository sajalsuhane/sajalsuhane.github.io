import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'

/**
 * Server-side render entry used by scripts/prerender.mjs.
 * Returns the app's HTML for a given URL.
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
