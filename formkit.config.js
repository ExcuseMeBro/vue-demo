import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './src/tailwind-theme.js'
import { uz, ru, en } from '@formkit/i18n'

export default {
  locales: { uz, ru, en },
  locale: 'en',
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}