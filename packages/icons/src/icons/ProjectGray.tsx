// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProjectGraySvg from '../asn/ProjectGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectGraySvg} />;

ProjectGray.displayName = 'ProjectGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectGray);