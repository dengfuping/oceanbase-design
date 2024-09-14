// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TicketGraySvg from '../asn/TicketGray';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TicketGray = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TicketGraySvg} />;

TicketGray.displayName = 'TicketGray';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TicketGray);