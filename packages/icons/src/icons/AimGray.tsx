// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AimGraySvg from '../asn/AimGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AimGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AimGraySvg} />;

AimGray.displayName = 'AimGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AimGray);