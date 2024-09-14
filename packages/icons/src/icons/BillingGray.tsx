// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BillingGraySvg from '../asn/BillingGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillingGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillingGraySvg} />;

BillingGray.displayName = 'BillingGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillingGray);