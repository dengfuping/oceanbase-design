// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GlobalTimeGraySvg from '../asn/GlobalTimeGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalTimeGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobalTimeGraySvg} />;

GlobalTimeGray.displayName = 'GlobalTimeGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobalTimeGray);