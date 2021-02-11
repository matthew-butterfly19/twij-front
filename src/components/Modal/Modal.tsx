import React, {ReactNode, useEffect, useState} from 'react';
import {
  Card as CardMt,
  Button as ButtonMt,
  Divider as DividerMt,
  Fade as FadeMt,
  Modal as ModalMt,
} from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "@components/Modal/Modal.module.scss";

export type onSubmitCallback = () => void;
export type onCancelCallback = () => void;

export interface ModalProps {
  isModalOpen: boolean;
  title: string | JSX.Element;
  description: string;
  onSubmit: onSubmitCallback;
  onCancel: onCancelCallback;
  children: ReactNode;
  loading?: boolean;
}

const Modal = ({ isModalOpen, title, description, children, onCancel, onSubmit, loading = false }: ModalProps): JSX.Element => {
  const [isModalLoading, setIsModalLoading] = useState<boolean>(loading);

  useEffect(() => {
    if (isModalLoading === loading) {
      return;
    }
    if (loading) {
      setIsModalLoading(true);
      return;
    }
    const timeout = setTimeout(() => {
      if (!loading) {
        setIsModalLoading(false);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  return <ModalMt
    aria-labelledby={title.toString()}
    aria-describedby={description}
    open={isModalOpen}
    closeAfterTransition
    className={styles.modal}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <>
      {isModalLoading
        ? <div className={styles.spinnerOverlay}>
            <CircularProgress color="inherit" />
          </div>
        : <FadeMt timeout={300} in={isModalOpen}>
            <CardMt className={styles.modalCard}>
              <header className={styles.modalCardHeader}>
                {typeof title === "string"
                    ? <h2 className={styles.modalCardTitle}>{title}</h2>
                    : title
                }
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
          </FadeMt>}
    </>
  </ModalMt>
}

export default Modal;