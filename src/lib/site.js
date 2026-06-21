// Single source of truth for site-wide constants. Static copies that cannot
// import this module and must be kept in sync by hand: src/entry.html
// (<title>, meta description, JSON-LD email).

export const EMAIL = 'ssuhane31@gmail.com'

export const ROUTE_META = {
  home: {
    url: 'https://sajalsuhane.github.io/',
    title: 'Sajal Suhane — Software Engineer at Goldman Sachs',
    description:
      'Software engineer at Goldman Sachs (Tech Lead, distributed systems & cloud). ' +
      'Leads AI initiatives & an AI Guild lifting team productivity ~60%. ' +
      'Delivered $1M+ annual cost savings migrating Sybase IQ to Snowflake. Dallas, TX.',
  },
  research: {
    url: 'https://sajalsuhane.github.io/research/',
    title: 'Research & Publications — Sajal Suhane',
    description:
      'Published research by Sajal Suhane spanning AI/machine learning and ' +
      'bio-energy systems — peer-reviewed publications with links to full papers.',
  },
}

export const trackResumeDownload = () => {
  window.goatcounter?.count?.({ path: 'resume-download', event: true })
}

export const trackEmailCopy = () => {
  window.goatcounter?.count?.({ path: 'email-copy', event: true })
}
