// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PerformanceGraySvg from '../asn/PerformanceGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PerformanceGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PerformanceGraySvg} />;

PerformanceGray.displayName = 'PerformanceGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PerformanceGray);