// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import IntegrationGraySvg from '../asn/IntegrationGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IntegrationGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IntegrationGraySvg} />;

IntegrationGray.displayName = 'IntegrationGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IntegrationGray);