// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogServiceGraySvg from '../asn/LogServiceGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogServiceGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogServiceGraySvg} />;

LogServiceGray.displayName = 'LogServiceGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogServiceGray);