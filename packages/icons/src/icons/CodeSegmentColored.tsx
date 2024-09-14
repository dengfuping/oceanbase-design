// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CodeSegmentColoredSvg from '../asn/CodeSegmentColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSegmentColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSegmentColoredSvg} />;

CodeSegmentColored.displayName = 'CodeSegmentColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSegmentColored);