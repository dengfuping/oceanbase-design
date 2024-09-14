// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DirectoryOutlinedSvg from '../asn/DirectoryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DirectoryOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DirectoryOutlinedSvg} />;

DirectoryOutlined.displayName = 'DirectoryOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DirectoryOutlined);