import React, { Fragment } from 'react'
import cc from 'classcat'

import { Item } from '../_internals/item'
import { color } from '../_utils/branding'
import { Avatar } from '../avatar'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'

export type MessagingSummaryItemProps = NormalizeProps &
  Readonly<{
    className?: string
    url: string
    pictureUrl: string
    label: string
    subLabel: string | JSX.Element
    timeLabel: string
    hasUnreadMessages: boolean
  }>

const UNREAD_COLOR = color.midnightGreen
const READ_COLOR = color.lightMidnightGreen

const generateSubLabel = (subLabel: string | JSX.Element): JSX.Element => (
  <span className="kirk-messaging-summary-item-sub-label">{subLabel}</span>
)

export const MessagingSummaryItem = ({
  className,
  url,
  pictureUrl,
  label,
  subLabel,
  timeLabel,
  hasUnreadMessages,
  hasHorizontalSpacing = false,
}: MessagingSummaryItemProps) => (
  <Fragment>
    <Item
      className={cc(['kirk-messaging-summary-item', className])}
      leftTitle={label}
      leftTitleDisplay={TextDisplayType.TITLESTRONG}
      leftTitleColor={hasUnreadMessages ? UNREAD_COLOR : READ_COLOR}
      leftBody={generateSubLabel(subLabel)}
      leftBodyDisplay={TextDisplayType.BODYSTRONG}
      leftBodyColor={hasUnreadMessages ? UNREAD_COLOR : READ_COLOR}
      leftBodyAnnotation={timeLabel}
      leftBodyAnnotationDisplay={TextDisplayType.CAPTION}
      rightAddon={<Avatar image={pictureUrl} />}
      chevron
      href={url}
      isClickable
      hasHorizontalSpacing={hasHorizontalSpacing}
    />
  </Fragment>
)
