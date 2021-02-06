import React from 'react';

import QuestionsInputList from "@domain/Quizes/QuizSettingsModal/QuestionsInputList/QuestionsInputList";
import TextInput from "@components/FormItems/TextInput/TextInput";
import Modal from "@components/Modal/Modal";

import styles from './QuizSettingsModal.module.scss';

export type onAddQuizCallback = () => void;
export type onCancelQuizCreationCallback = () => void;

export interface CreateQuizModalProps {
  isCreateQuizModalVisible: boolean;
  onAddQuiz: onAddQuizCallback;
  onCancelQuizCreation: onCancelQuizCreationCallback;
}

const QuizSettingsModal = ({ isCreateQuizModalVisible, onCancelQuizCreation, onAddQuiz }: CreateQuizModalProps): JSX.Element => {
  return (
    <Modal
      isModalOpen={isCreateQuizModalVisible}
      title={'Tworzenie quizu'}
      description={'Stwórz quiz by móc go wykorzystać w planowaniu testów'}
      onCancel={onCancelQuizCreation}
      onSubmit={onAddQuiz}
    >
      <div className={styles.formRoot}>
        <div className={styles.formRow}>
          <TextInput id="quiz-name" label="Nazwa" />
          <TextInput id="quiz-subject" label="Przedmiot" />
        </div>
        <div className={styles.questionList}>
          <QuestionsInputList />
        </div>
      </div>
    </Modal>
  );
}

export default QuizSettingsModal;
