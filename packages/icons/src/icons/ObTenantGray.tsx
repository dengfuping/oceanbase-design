// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObTenantGraySvg from '../asn/ObTenantGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObTenantGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObTenantGraySvg} />;

ObTenantGray.displayName = 'ObTenantGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObTenantGray);