// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TaskCenterGraySvg from '../asn/TaskCenterGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskCenterGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskCenterGraySvg} />;

TaskCenterGray.displayName = 'TaskCenterGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskCenterGray);