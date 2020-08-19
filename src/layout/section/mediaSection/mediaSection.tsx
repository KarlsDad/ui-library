import React from 'react'
import cc from 'classcat'

export type MediaSectionProps = Readonly<{
  className?: string
  role?: string
  children: React.ReactNode
}>

/**
 * The media section: Renders a fullscreen div without margins on small devices
 * and a standard sized "section" on large ones
 */
export const MediaSection = (props: MediaSectionProps) => {
  const { children, className, role = 'presentation' } = props

  return (
    <div role={role} className={cc(['media-section', className])}>
      {children}
    </div>
  )
}
