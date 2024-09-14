// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OceanbaseHorizontalColoredSvg from '../asn/OceanbaseHorizontalColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OceanbaseHorizontalColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OceanbaseHorizontalColoredSvg} />;

OceanbaseHorizontalColored.displayName = 'OceanbaseHorizontalColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OceanbaseHorizontalColored);