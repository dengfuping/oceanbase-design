// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DirectoryColoredSvg from '../asn/DirectoryColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DirectoryColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DirectoryColoredSvg} />;

DirectoryColored.displayName = 'DirectoryColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DirectoryColored);