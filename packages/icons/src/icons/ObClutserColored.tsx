// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObClutserColoredSvg from '../asn/ObClutserColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObClutserColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObClutserColoredSvg} />;

ObClutserColored.displayName = 'ObClutserColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObClutserColored);