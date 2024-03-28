import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    typescript: true,
    vue: true,
    markdown: true,
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
  },
  {
    rules: {
      'style/no-tabs': 'off',
      'no-console': 'off',
    },
  },
)
