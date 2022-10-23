const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'PrettyBlocks: Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  // Change base url for relative urls
  // base: "/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#5530be' }],
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
    nav: [
      {
        text: 'Présentation',
        link: '/how-it-works/',
      },
      {
        
        text: 'Get Started',
        link: '/docs/get-started/',
      },
      {
        text: 'Hooks',
        link: '/docs/hooks/',
      },
      {
        text: 'Templating',
        link: '/docs/tpl/',
      },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      {
        text: 'PrestaSafe',
        link: 'https://www.prestasafe.com'
      }
    ],
    sidebar: {
      '/how-it-works': [
        {
          title: 'Installation',
        }
      ],
      '/docs/get-started/': [
        {
          title: 'Getting started',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            '',
            'create-a-block',
            'fields-available'
          ]
        }
      ],

      '/docs/hooks/' : [
        {
          title: 'Hooks',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/docs/tpl/' : [
        {
          title: 'Templating',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            '',
            'zones',
            'settings'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
