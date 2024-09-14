// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObOcpColoredSvg from '../asn/ObOcpColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObOcpColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObOcpColoredSvg} />;

ObOcpColored.displayName = 'ObOcpColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObOcpColored);