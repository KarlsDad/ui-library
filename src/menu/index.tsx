import React from 'react'
import cc from 'classcat'

import { ItemChoiceProps } from '../itemChoice'
import { ItemsList, ItemsListDivider } from '../itemsList'

export type MenuProps = Readonly<{
  children: React.ReactElement<ItemChoiceProps>[]
  className?: string
  withSeparators?: boolean
}>

export const Menu = ({ className, children, withSeparators = false }: MenuProps) => (
  /* TODO: BBC-7416 fix a11y issue */
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
  <nav className={cc(className)} role="menu">
    <ItemsList withSeparators={withSeparators}>{children}</ItemsList>
  </nav>
)

Menu.Divider = ItemsListDivider
export default Menu
