module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'compentum',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'compentum Hilfeseiten für Benutzer',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2577ed' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebar: {
      '/hilfe/': [
        {
          title: 'Hilfe',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            '',
            'verfahren',
            'konfiguration',
            'meldeportale',
            'persönliche-einstellungen',
            'abonnement',
            'verschlüsselung',
            'user-interface'
          ]
        }
      ],
      '/': []
    } ,
    nav: [
      { text: 'Hilfe', link: '/hilfe/', activeMatch: '^/hilfe/' },
      { text: 'Hinweisgeber', link: '/hinweisgeber/', activeMatch: '^/hinweisgeber/' },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
