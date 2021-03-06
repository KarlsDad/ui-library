import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { PhoneField } from './index'
import customDoc from './specifications/custom.md'
import defaultDoc from './specifications/default.md'

const stories = storiesOf('Widgets|PhoneField', module)
stories.addDecorator(withKnobs)

const countryWhitelist = ['FR', 'ES']

const customCountryNames = {
  FR: 'fr label',
  ES: 'es label',
}

stories.add(
  'Default',
  () => (
    <Section>
      <PhoneField name={text('name', 'phoneField')} onChange={action('changed')} />
    </Section>
  ),
  {
    readme: { content: defaultDoc },
  },
)

stories.add(
  'Custom content',
  () => (
    <Section>
      <h1 id="labelId">Accessibility label</h1>
      <PhoneField
        id={text('id', 'phoneFieldId')}
        name={text('name', 'phoneField')}
        innerWrapperClassName={text('className', 'additionalClass')}
        aria-labelledby={text('ariaLabelledBy', 'labelId')}
        selectFieldLabel={text('selectFieldLabel', 'Phone country code')}
        textFieldTitle={text('textFieldTitle', 'Phone number')}
        textFieldPlaceholder={text('textFieldPlaceholder', 'Phone number')}
        defaultRegionValue={text('defaultRegionValue', 'FR')}
        defaultPhoneValue={text('defaultPhoneValue', '0778674534')}
        onChange={action('changed')}
        countryWhitelist={countryWhitelist}
        customCountryNames={customCountryNames}
        isInline={boolean('isInline', false)}
        focus={boolean('focus', true)}
        selectAutoFocus={boolean('selectAutoFocus', true)}
        error={text('error message', '')}
      />
    </Section>
  ),
  {
    readme: { content: customDoc },
  },
)
