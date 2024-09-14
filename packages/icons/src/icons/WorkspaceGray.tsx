// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkspaceGraySvg from '../asn/WorkspaceGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkspaceGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkspaceGraySvg} />;

WorkspaceGray.displayName = 'WorkspaceGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkspaceGray);