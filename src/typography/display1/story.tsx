import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../../_utils/branding'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { TextDisplay1 } from './index'

const stories = storiesOf('Design Tokens|Typography/', module)

stories.add('TextDisplay1', () => (
  <Section>
    <h1>
      <TextDisplay1 isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextDisplay1>
    </h1>
    <h1 style={{ backgroundColor: color.blue }}>
      <TextDisplay1 isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextDisplay1>
    </h1>
  </Section>
))
