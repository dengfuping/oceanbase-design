// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatasourceGraySvg from '../asn/DatasourceGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatasourceGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatasourceGraySvg} />;

DatasourceGray.displayName = 'DatasourceGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatasourceGray);