// tslint:disable:max-line-length
import React from 'react'

import StatusIcon, { IconPropsWithStatus } from '../_utils/icon/status'

export const Wifi = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M12 15.261c1.338 0 2.422 1.06 2.422 2.37C14.422 18.938 13.338 20 12 20s-2.422-1.06-2.422-2.37c0-1.308 1.084-2.369 2.422-2.369zm0 .985c-.781 0-1.415.62-1.415 1.384 0 .765.634 1.385 1.415 1.385s1.415-.62 1.415-1.385c0-.764-.634-1.384-1.415-1.384zm0-6.616c2.162 0 4.218.836 5.811 2.291a.485.485 0 01.025.697.511.511 0 01-.712.024c-1.412-1.29-3.224-2.026-5.124-2.026-1.9 0-3.712.737-5.124 2.026a.511.511 0 01-.712-.024.485.485 0 01.025-.697c1.593-1.455 3.65-2.29 5.811-2.29zM12 4c3.751 0 7.268 1.464 9.852 3.992a.485.485 0 010 .697.512.512 0 01-.712 0A13.046 13.046 0 0012 4.985c-3.48 0-6.743 1.358-9.14 3.704a.512.512 0 01-.712 0 .485.485 0 010-.697A14.064 14.064 0 0112 4z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

Wifi.defaultProps = StatusIcon.defaultProps

export default Wifi
