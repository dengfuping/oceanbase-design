// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CodeSegmentGraySvg from '../asn/CodeSegmentGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSegmentGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSegmentGraySvg} />;

CodeSegmentGray.displayName = 'CodeSegmentGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSegmentGray);