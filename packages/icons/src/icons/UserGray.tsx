// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserGraySvg from '../asn/UserGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserGraySvg} />;

UserGray.displayName = 'UserGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserGray);