import styled from 'styled-components'

import { color, font, inputBorderSize, space } from '../_utils/branding'

export const StyledTimePicker = styled.div`
  & {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    max-width: 100%;
    font-size: 4em;
    font-weight: 500;
    line-height: 1;
    background-color: ${color.white};
    color: ${color.midnightGreen};
    border: 1px solid ${color.gray};
    border-radius: 2em;
    box-sizing: border-box;
    cursor: pointer;
    padding: ${inputBorderSize.focus};
  }

  &:hover {
    background-color: ${color.lightGray};
  }

  &.focus {
    border: ${inputBorderSize.focus} solid ${color.blue};
    padding: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    right: 32px;
    top: calc(50% - 8px);
    display: inline-block;
    padding: 5px;
    border: solid ${color.blue};
    border-width: 0 2px 2px 0;
    vertical-align: middle;
    transform: rotate(45deg);
  }

  &.focus::after {
    right: 30px;
  }

  &[aria-disabled='true'] {
    color: ${color.lightGray};
    border-color: transparent;
  }

  &[aria-disabled='true']::after {
    border-color: ${color.lightGray};
  }

  & > select,
  & > select:focus {
    z-index: 1; /* Needs to be above ::after so the arrow symbol appears clickable */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    font-size: ${font.base.size};
    /* Required to have <select /> with height 100% in Safari  */
    -webkit-appearance: menulist-button;
    cursor: pointer;
    outline: none;
  }

  & > time {
    display: inline-block;
    padding-top: 6px;
    vertical-align: middle;
  }

  &.small {
    font-size: ${font.xl.size};

    & > time {
      padding-top: ${space.s};
    }
  }
`
