export const SITE = {
  title: 'Installation',
  description: 'Your website description.',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Deutsch: 'de',
  English: 'en'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'dev_neelanjan',
  appId: 'K6XFFC65NG',
  apiKey: '22b49a8f07ac28a2d7586c26536e1759'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, {icon: string; text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  de: {
    Überschrift: [
      {icon: '<i class="fas fa-home"></i>', text: 'Einführung', link: 'de/introduction' },
      {icon: '<i class="fas fa-user"></i>', text: 'Seite 2', link: 'de/page-2' },
      {icon: '<i class="fas fa-cog"></i>', text: 'Seite 3', link: 'de/page-3' }
    ],
    // 'Ein weiterer Abschnitt': [{ text: 'Seite 4', link: 'de/page-4' }]
  },
  en: {
    'Section Header': [
      {icon: '<i class="fas fa-info"></i>', text: 'Introduction', link: 'en/introduction' },
      {icon: '<i class="fas fa-users"></i>', text: 'User Instruction', link: 'en/page-2' },
      {icon: '<i class="fas fa-wrench"></i>', text: 'Admin Instruction', link: 'en/page-3' }
    ],
    // 'Another Section': [{ text: 'Page 4', link: 'en/page-4' }]
  }
}

