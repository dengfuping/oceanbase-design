// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DistributedTransactionGraySvg from '../asn/DistributedTransactionGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DistributedTransactionGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DistributedTransactionGraySvg} />;

DistributedTransactionGray.displayName = 'DistributedTransactionGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DistributedTransactionGray);