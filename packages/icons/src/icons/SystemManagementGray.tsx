// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SystemManagementGraySvg from '../asn/SystemManagementGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SystemManagementGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SystemManagementGraySvg} />;

SystemManagementGray.displayName = 'SystemManagementGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SystemManagementGray);