import React from 'react';
import {Button as ButtonMt, Tooltip} from "@material-ui/core";

export type OnClickCallback = () => void;

export interface ButtonProps {
  tooltip: string;
  children: string
  onClick: OnClickCallback;
}

const Button = ({ tooltip, onClick, children }: ButtonProps): JSX.Element => {
  return (
    <Tooltip title={tooltip} aria-label={tooltip}>
      <ButtonMt variant="contained" onClick={onClick} size={'small'} style={{height: 35}} disableElevation>
        {children}
      </ButtonMt>
    </Tooltip>
  );
};

export default Button;
