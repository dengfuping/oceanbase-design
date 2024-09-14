// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DirectoryGraySvg from '../asn/DirectoryGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DirectoryGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DirectoryGraySvg} />;

DirectoryGray.displayName = 'DirectoryGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DirectoryGray);