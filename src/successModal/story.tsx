import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { SuccessModal, SuccessModalProps } from '../successModal'
import spec from './specifications/successModal.md'

const stories = storiesOf('Widgets|Modal|SuccessModal', module)

stories.addDecorator(withKnobs)

class SuccessModalOpener extends Component<SuccessModalProps> {
  state = {
    successModalOpen: false,
  }

  openSuccessModal = () => {
    this.setState({ successModalOpen: true })
  }

  closeSuccessModal = () => {
    this.setState({ successModalOpen: false })
    this.props.onClose()
  }

  render() {
    return (
      <Section>
        <button onClick={this.openSuccessModal}>Open SuccessModal</button>
        <SuccessModal
          {...this.props}
          onClose={this.closeSuccessModal}
          isOpen={this.state.successModalOpen}
        >
          {text('SuccessText', 'Booking approved!\nBuddy will travel with you.')}
        </SuccessModal>
      </Section>
    )
  }
}

stories.add(
  'success',
  () => (
    <SuccessModalOpener
      isOpen={false}
      onClose={action('onClose')}
      imageSrc={text(
        'SuccessImageSrc',
        'https://cdn.blablacar.com/insurance/assets/2b950c73301c3b8526772644de550035.svg',
      )}
      imageText={text('SuccessImagText', 'Illustation description')}
      confirmLabel={text('SuccessConfirmationLabel', 'Got it!')}
      closeOnEsc={boolean('SuccessCloseOnEsc', false)}
    />
  ),
  {
    readme: { content: spec },
  },
)
