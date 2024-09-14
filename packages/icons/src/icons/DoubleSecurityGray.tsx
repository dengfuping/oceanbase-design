// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DoubleSecurityGraySvg from '../asn/DoubleSecurityGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleSecurityGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleSecurityGraySvg} />;

DoubleSecurityGray.displayName = 'DoubleSecurityGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleSecurityGray);