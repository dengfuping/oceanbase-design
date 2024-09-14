// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSquareGraySvg from '../asn/UserSquareGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSquareGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSquareGraySvg} />;

UserSquareGray.displayName = 'UserSquareGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSquareGray);