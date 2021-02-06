import React from 'react';

import AddElementButton from "@components/AddElementButton/AddElementButton";

import styles from './CreateQuizButton.module.scss';

export type OnAddNewQuizCallback = () => void;

export interface AddNewQuizButtonProps {
  onAddNewQuiz: OnAddNewQuizCallback;
}

const CreateQuizButton = ({ onAddNewQuiz }: AddNewQuizButtonProps): JSX.Element => {
  return (
    <div className={styles.addNewItem}>
      <AddElementButton tooltip={'Dodaj nowy quiz'} onAddElement={onAddNewQuiz} />
    </div>
  );
}

export default CreateQuizButton;