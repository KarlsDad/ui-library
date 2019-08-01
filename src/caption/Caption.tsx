import React from 'react'
import cc from 'classcat'

import Button, { ButtonStatus } from 'button'

export const renderSecondary = (href?: string, secondaryText?: string) =>
  href ? (
    <Button status={ButtonStatus.UNSTYLED} href={href}>
      {secondaryText}
    </Button>
  ) : (
    <span>{secondaryText}</span>
  )

interface Caption {
  readonly className?: Classcat.Class
  readonly children: any
  readonly isoDate: string
  readonly href?: string
  readonly secondaryText?: string
}

const Caption = ({ className, children, href, secondaryText, isoDate }: Caption) => (
  <div className={cc(['kirk-caption', className])}>
    <time dateTime={isoDate || null}>{children}</time>
    {secondaryText && <span> - {renderSecondary(href, secondaryText)}</span>}
  </div>
)

export default Caption
