// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObClusterGraySvg from '../asn/ObClusterGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObClusterGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObClusterGraySvg} />;

ObClusterGray.displayName = 'ObClusterGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObClusterGray);