// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSettingsGraySvg from '../asn/UserSettingsGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingsGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSettingsGraySvg} />;

UserSettingsGray.displayName = 'UserSettingsGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSettingsGray);