// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkbenchGraySvg from '../asn/WorkbenchGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkbenchGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkbenchGraySvg} />;

WorkbenchGray.displayName = 'WorkbenchGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkbenchGray);