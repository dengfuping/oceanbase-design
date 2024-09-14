// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseOpsGraySvg from '../asn/DatabaseOpsGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseOpsGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseOpsGraySvg} />;

DatabaseOpsGray.displayName = 'DatabaseOpsGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseOpsGray);