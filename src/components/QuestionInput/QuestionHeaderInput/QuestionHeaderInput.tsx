import React from 'react';
import {IconButton, Tooltip, Typography} from "@material-ui/core";

import styles from './QuestionHeaderInput.module.scss';
import DeleteIcon from "@material-ui/icons/Delete";

export type OnRemovePayload = (index: number) => void;

export interface QuestionHeaderProps {
  question: string;
  index: number;
  onRemove: OnRemovePayload;
}

const QuestionHeaderInput = ({ question, index, onRemove }: QuestionHeaderProps): JSX.Element => {
  const onRemoveHandle = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    onRemove(index);
  }

  return (
    <Typography className={styles.questionHeader}>
      <p>
        Pytanie {index + 1} {question ? ` - ${question}` : ''}
      </p>
      <label htmlFor="icon-button-remove" >
        <Tooltip title="Usuń" aria-label="remove">
          <IconButton aria-label="Remove question" component="span" onClick={onRemoveHandle}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </label>
    </Typography>
  )
}

export default QuestionHeaderInput;
