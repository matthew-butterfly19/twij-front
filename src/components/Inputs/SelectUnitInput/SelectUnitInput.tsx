import React from 'react';
import {MenuItem, TextField} from "@material-ui/core";

import styles from './SelectInput.module.scss';

export interface OptionProps {
  label: string;
  value: string | number;
}

export interface NumberInputProps {
  id: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: OptionProps[];
}

const SelectUnitInput = ({ id, value, onChange, options }: NumberInputProps): JSX.Element => {
  return (
    <TextField
      id={`standard-select-number-${id}`}
      select
      value={value}
      onChange={onChange}
      className={styles.selectUnit}
    >
      {options.map((option, index) => (
        <MenuItem key={`${option}-${index}`} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectUnitInput;
