import React, {useEffect, useState} from 'react';
import TextInput from "@components/Inputs/TextInput/TextInput";
import {Chip, Tooltip} from "@material-ui/core";

import styles from './EmailsInput.module.scss';

export interface EmailInput {
  onChange: (emails: string[]) => void;
  value: string[];
}

const EmailsInput = ({ onChange, value }: EmailInput): JSX.Element => {
  const [emailAddresses, setEmailAddresses] = useState<string>('');
  const [emailAddressesSep, setEmailAddressesSep] = useState<string>(' ');

  useEffect(() => {
    const addresses = emailAddresses.split(emailAddressesSep || ' ');
    onChange(addresses);
  }, [emailAddresses, emailAddressesSep]);

  const onUpdateEmailAddresses = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailAddresses(event.target.value);
  }

  const onUpdateEmailAddressesSep = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailAddressesSep(event.target.value);
  }

  return (
    <div>
      <TextInput
        id={'email-addresses-input'}
        value={emailAddresses}
        placeholder={'Umieść listę adresów email'}
        onChange={onUpdateEmailAddresses}
        variant={'outlined'}
        multiline={true}
        rowsMax={5}
        rows={4}
      />
      <div className={styles.sepInputDiv}>
        <span>Separator: </span>
        <TextInput
          id={'email-addresses-sep'}
          value={emailAddressesSep}
          onChange={onUpdateEmailAddressesSep}
        />
      </div>
      <div className={styles.addressesDiv}>
        <span>Adresy email biorące udział w quizie: </span>
        <div className={styles.chips}>
          {
            emailAddresses.length
            ? (value.map(email => (
                <Tooltip title={email} aria-label={email}>
                  <Chip label={email} />
                </Tooltip>
              )))
            : <Chip label={'przykladowy.adres@email.com'} />
          }
        </div>
      </div>
    </div>
  );
}

export default EmailsInput;
