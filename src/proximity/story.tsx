import React from 'react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { Distances, Proximity } from './index'

const stories = storiesOf('Widgets|Proximity', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <Proximity
      value={select('Value', Distances, Distances.FAR)}
      title={text('Icon title', 'Distance to your position')}
    />
  </Section>
))
