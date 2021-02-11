import React from 'react';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import styles from './DateTimeInput.module.scss';

const getStartsInNote = (time: Date): void | string => {
  const expirationDate = moment(time)
  const currentTime = moment();
  const getTotalDatePartAndRemainder = (divisive: number, divisor: number) => {
    return [ Math.floor(divisive), (divisive % divisor) ];
  };

  const d = expirationDate.diff(currentTime, 'days', true);
  const [ fullDays, daysFraction ] = getTotalDatePartAndRemainder(d, 1);
  const [ fullHours, hoursFraction ] = getTotalDatePartAndRemainder(daysFraction * 24, 1);
  const [ fullMinutes]  = getTotalDatePartAndRemainder(hoursFraction * 60, 1);
  if (fullDays === 1) {
    return `${fullDays} dzień`;
  }
  if (fullDays > 1) {
    return `${fullDays} dni`;
  }
  if (fullHours > 0) {
    return `${fullHours}g i ${fullMinutes}min`;
  }
  if (fullMinutes > 0) {
    return `${fullMinutes} min`;
  }
  if (fullMinutes === 0) {
    return `Mniej niż 1 minuta`;
  }
}

export interface DataTimeInput {
  dateISOString: string;
  onDateChange: (date: Date | null) => void;
  label: string;
  startsInNote: string;
}

const DateTimeInput = ({ dateISOString, onDateChange, label, startsInNote }: DataTimeInput) => {
  const date = new Date(dateISOString);

  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <header className={styles.label}>
          <p>
            {label}
          </p>
          {
            (date && getStartsInNote(date))
            && <span className={styles.startsIn}>({startsInNote} {getStartsInNote(date)})</span>
          }
        </header>
        <div className={styles.inputsWrapper}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            id="date-picker-inline"
            value={date}
            onChange={onDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            minDate={Date()}
            minDateMessage={'Niepoprawny czas'}
            maxDateMessage={'Niepoprawny czas'}
            invalidDateMessage={'Niepoprawny format'}
          />
          <KeyboardTimePicker
            variant="inline"
            id="time-picker"
            value={date}
            onChange={onDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            minDateMessage={'ZNiepoprawny czas'}
            maxDateMessage={'Niepoprawny czas'}
            invalidDateMessage={'Niepoprawny format'}
          />
        </div>
      </MuiPickersUtilsProvider>
  );
}

export default DateTimeInput;
