import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class InstagramIcon extends PureComponent<Icon> {
  static defaultProps: Icon = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
  }

  render() {
    const { className, iconColor, size, title } = this.props
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        { title && <title>{title}</title> }
        <g fill="none" fillRule="evenodd">
          <path
            // tslint:disable-next-line
            d="M12 3.802c2.67 0 2.987.01 4.042.058 1.137.052 2.193.28 3.005 1.092.813.813 1.042 1.869 1.092 3.008.05 1.053.059 1.37.059 4.04s-.009 2.987-.059 4.042c-.05 1.137-.279 2.193-1.091 3.005s-1.869 1.042-3.007 1.092c-1.055.05-1.372.059-4.042.059s-2.987-.009-4.042-.059c-1.137-.05-2.193-.279-3.005-1.091S3.91 17.178 3.86 16.04c-.05-1.055-.058-1.372-.058-4.042s.008-2.987.058-4.042c.05-1.137.28-2.193 1.092-3.005S6.82 3.91 7.958 3.86C9.013 3.81 9.33 3.802 12 3.802zM12 2c-2.717 0-3.057.012-4.123.06-1.625.075-3.052.473-4.199 1.618C2.533 4.825 2.133 6.252 2.06 7.877 2.012 8.943 2 9.285 2 12c0 2.717.012 3.057.06 4.123.075 1.625.472 3.053 1.618 4.199 1.146 1.146 2.574 1.544 4.199 1.618 1.066.048 1.408.06 4.123.06s3.057-.012 4.123-.06c1.625-.075 3.053-.472 4.199-1.618 1.146-1.146 1.544-2.574 1.618-4.199.048-1.066.06-1.408.06-4.123s-.012-3.057-.06-4.123c-.075-1.625-.472-3.053-1.618-4.199-1.147-1.145-2.574-1.545-4.199-1.618C15.057 2.012 14.715 2 12 2z"
            fill={iconColor}
            fillRule="nonzero"
          />
          <path
            // tslint:disable-next-line
            d="M12 6.865a5.136 5.136 0 1 0 .001 10.271A5.136 5.136 0 0 0 12 6.865zm0 8.468a3.332 3.332 0 1 1 0-6.666 3.332 3.332 0 1 1 0 6.666z"
            fill={iconColor}
            fillRule="nonzero"
          />
          <circle fill={iconColor} fillRule="nonzero" cx="17.338" cy="6.662" r="1.2"/>
        </g>
      </svg>
    )
  }
}

export default InstagramIcon
