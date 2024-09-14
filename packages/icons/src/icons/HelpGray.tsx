// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HelpGraySvg from '../asn/HelpGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HelpGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HelpGraySvg} />;

HelpGray.displayName = 'HelpGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HelpGray);