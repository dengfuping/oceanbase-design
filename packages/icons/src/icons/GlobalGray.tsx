// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GlobalGraySvg from '../asn/GlobalGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobalGraySvg} />;

GlobalGray.displayName = 'GlobalGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobalGray);