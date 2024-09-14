// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProjectColoredSvg from '../asn/ProjectColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectColoredSvg} />;

ProjectColored.displayName = 'ProjectColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectColored);