// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SecurityColoredSvg from '../asn/SecurityColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SecurityColoredSvg} />;

SecurityColored.displayName = 'SecurityColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SecurityColored);