import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import '../stories/stories.css'

addParameters({
  options: {
    showPanel: true,
    isToolshown: true,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

// Ignore leftAddon as it breaks previews.
addDecorator(withSmartKnobs({ ignoreProps: ['leftAddon'] }))
addDecorator(withKnobs)
addDecorator(withA11y)
