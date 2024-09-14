// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HostGraySvg from '../asn/HostGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HostGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HostGraySvg} />;

HostGray.displayName = 'HostGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HostGray);