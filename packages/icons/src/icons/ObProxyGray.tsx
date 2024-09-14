// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObProxyGraySvg from '../asn/ObProxyGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObProxyGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObProxyGraySvg} />;

ObProxyGray.displayName = 'ObProxyGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObProxyGray);