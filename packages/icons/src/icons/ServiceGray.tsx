// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ServiceGraySvg from '../asn/ServiceGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServiceGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ServiceGraySvg} />;

ServiceGray.displayName = 'ServiceGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ServiceGray);