import React, {ChangeEvent, ReactNode} from 'react';
import {MenuItem, Select} from "@material-ui/core";

import styles from './NumberInput.module.scss';

export interface NumberInputProps {
  id: string;
  value: number;
  onChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: ReactNode) => void;
  min: number;
  max: number;
}

const range = (start: number, end: number): number[] => {
  return Array(end - start + 1).fill(0).map((_, idx) => start + idx)
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 400,
    },
  },
};

const NumberInput = ({ id, value, onChange, min, max }: NumberInputProps): JSX.Element => {
  return (
    <Select
      className={styles.numberInput}
      id={`standard-select-number-${id}`}
      onChange={onChange}
      value={value}
      MenuProps={MenuProps}
    >
      {range(min, max).map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}

export default NumberInput;
