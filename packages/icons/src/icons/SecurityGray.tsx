// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SecurityGraySvg from '../asn/SecurityGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SecurityGraySvg} />;

SecurityGray.displayName = 'SecurityGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SecurityGray);