import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ConfirmationModal, { ConfirmationModalProps } from 'confirmationModal'
import confirmationModalDoc from './specifications/confirmationModal.md'

const stories = storiesOf('ConfirmationModal', module)
stories.addDecorator(withKnobs)

class ConfirmationModalOpener extends Component<ConfirmationModalProps> {
  state = {
    confirmationModalOpen: false,
  }

  openConfirmationModal = () => {
    this.setState({ confirmationModalOpen: true })
  }

  closeConfirmationModal = () => {
    this.setState({ confirmationModalOpen: false })
    this.props.onClose()
  }

  confirmConfirmationModal = () => {
    this.setState({ confirmationModalOpen: false })
    this.props.onConfirm()
  }

  render() {
    return (
      <div>
        <button onClick={this.openConfirmationModal}>Open ConfirmationModal</button>
        <ConfirmationModal
          {...this.props}
          onClose={this.closeConfirmationModal}
          onConfirm={this.confirmConfirmationModal}
          isOpen={this.state.confirmationModalOpen}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </ConfirmationModal>
      </div>
    )
  }
}

stories.add(
  'Warning',
  () => (
    <ConfirmationModalOpener
      status={ConfirmationModal.STATUS.WARNING}
      onClose={action('onClose')}
      onConfirm={action('onConfirm')}
      confirmLabel={text('confirmLabel', 'Fhtagn')}
      large={boolean('large', false)}
      closeOnEsc={boolean('closeOnEsc', true)}
    />
  ),
  {
    readme: { content: confirmationModalDoc },
  },
)

stories.add(
  'Reminder',
  () => (
    <ConfirmationModalOpener
      status={ConfirmationModal.STATUS.REMINDER}
      onClose={action('onClose')}
      confirmLabel={text('confirmLabel', 'Fhtagn')}
      onConfirm={action('onConfirm')}
      large={boolean('large', false)}
      closeOnEsc={boolean('closeOnEsc', true)}
    />
  ),
  {
    readme: { content: confirmationModalDoc },
  },
)