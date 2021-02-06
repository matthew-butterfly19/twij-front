import React from 'react';
import {
  FormControl as FormControlMt,
  TextField as TextFieldMt
} from "@material-ui/core";

import styles from "./TextInput.module.scss";

export type onChangePayload = (event: React.ChangeEvent<HTMLInputElement>) => void;

export interface TextInputProps {
  id: string;
  value?: string;
  onChange?: onChangePayload;
  label?: string;
  inputProps?: any;
  multiline?: boolean;
  variant?: "outlined" | "standard" | "filled" | undefined;
  rowsMax?: number;
  rows?: number;
  className?: string;
}

const TextInput = ({ id, label, inputProps, multiline, rowsMax, onChange, value, rows, className, variant='outlined' }: TextInputProps): JSX.Element => {
  return (
    <FormControlMt className={`${styles.formItemContainer} ${className}`}>
      <TextFieldMt
        onChange={onChange}
        value={value}
        autoComplete={'off'}
        fullWidth
        multiline={multiline}
        className={styles.textField}
        size={'small'}
        rows={rows}
        rowsMax={rowsMax}
        variant={variant}
        id={id}
        label={label}
        InputProps={inputProps}
      />
    </FormControlMt>
  )
}

export default TextInput;
