import React from 'react';
import {Fab, Tooltip} from "@material-ui/core";
import AddIconMt from '@material-ui/icons/Add';

export type OnAddElementCallback = () => void;

export interface AddElementButtonProps {
  tooltip: string;
  onAddElement: OnAddElementCallback;
}

const AddElementButton = ({ tooltip, onAddElement }: AddElementButtonProps): JSX.Element => {
  return (
    <Tooltip title={tooltip} aria-label={tooltip}>
      <Fab color="primary" onClick={onAddElement}>
        <AddIconMt />
      </Fab>
    </Tooltip>
  );
};

export default AddElementButton;
