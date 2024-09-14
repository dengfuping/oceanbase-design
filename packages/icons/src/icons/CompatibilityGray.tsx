// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CompatibilityGraySvg from '../asn/CompatibilityGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompatibilityGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompatibilityGraySvg} />;

CompatibilityGray.displayName = 'CompatibilityGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompatibilityGray);