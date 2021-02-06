import React, { ReactNode } from 'react';
import {
  Card as CardMt,
  Button as ButtonMt,
  Divider as DividerMt,
  Fade as FadeMt,
  Modal as ModalMt
} from "@material-ui/core";

import styles from "@components/Modal/Modal.module.scss";

export type onSubmitCallback = () => void;
export type onCancelCallback = () => void;

export interface ModalProps {
  isModalOpen: boolean;
  title: string;
  description: string;
  onSubmit: onSubmitCallback;
  onCancel: onCancelCallback;
  children: ReactNode;
}

const Modal = ({ isModalOpen, title, description, children, onCancel, onSubmit }: ModalProps): JSX.Element => {
  return <ModalMt
    aria-labelledby={title}
    aria-describedby={description}
    open={isModalOpen}
    closeAfterTransition
    className={styles.modal}
    BackdropProps={{
      timeout: 0,
    }}
  >
    <FadeMt timeout={0} in={isModalOpen}>
      <CardMt className={styles.modalCard}>
        <header className={styles.modalCardHeader}>
          <h2 className={styles.modalCardTitle}>{title}</h2>
          <DividerMt />
        </header>
        <main className={styles.modalCardMain}>
          {children}
        </main>
        <footer className={styles.modalCardFooter}>
          <DividerMt />
          <div className={styles.footerActions}>
            <ButtonMt size="small" onClick={onCancel}>Anuluj</ButtonMt>
            <ButtonMt size="small"  onClick={onSubmit} color="primary">
              Zatwierdź
            </ButtonMt>
          </div>
        </footer>
      </CardMt>
    </FadeMt>
  </ModalMt>
}

export default Modal;