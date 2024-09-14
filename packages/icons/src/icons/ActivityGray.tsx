// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ActivityGraySvg from '../asn/ActivityGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ActivityGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ActivityGraySvg} />;

ActivityGray.displayName = 'ActivityGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ActivityGray);