import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../../_utils/branding'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { TextTitleStrong } from './index'

const stories = storiesOf('Design Tokens|Typography/', module)

stories.add('TextTitleStrong', () => (
  <Section>
    <h1>
      <TextTitleStrong isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextTitleStrong>
    </h1>
    <h1 style={{ backgroundColor: color.blue }}>
      <TextTitleStrong isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextTitleStrong>
    </h1>
  </Section>
))
