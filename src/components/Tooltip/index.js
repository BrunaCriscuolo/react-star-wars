import React from 'react';
import { Tooltip, Whisper } from 'rsuite';

const TooltipCustom = ({
  children,
  trigger = 'hover',
  placement = 'left',
  label
}) => {
  const tooltip = (
    <Tooltip>
      {label}
    </Tooltip>
  );
  return (
    <Whisper placement={placement} trigger={trigger} speaker={tooltip}>
      {children}
    </Whisper>
  );
};
export default TooltipCustom;
