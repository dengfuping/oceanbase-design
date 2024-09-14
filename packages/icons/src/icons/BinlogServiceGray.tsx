// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BinlogServiceGraySvg from '../asn/BinlogServiceGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BinlogServiceGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BinlogServiceGraySvg} />;

BinlogServiceGray.displayName = 'BinlogServiceGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BinlogServiceGray);