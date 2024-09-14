// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OverviewGraySvg from '../asn/OverviewGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OverviewGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OverviewGraySvg} />;

OverviewGray.displayName = 'OverviewGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OverviewGray);