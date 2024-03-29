import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'sa1l',
  description: 'todo',
  srcDir: 'posts',
  themeConfig: {
    nav: [
      { text: '文章', link: '/archive' },
      {
        text: '类别',
        items: [
          { text: 'Vue3', link: '/vue3' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],
  },
})
