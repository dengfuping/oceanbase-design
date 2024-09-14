// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BackupRecoveryGraySvg from '../asn/BackupRecoveryGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackupRecoveryGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackupRecoveryGraySvg} />;

BackupRecoveryGray.displayName = 'BackupRecoveryGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackupRecoveryGray);