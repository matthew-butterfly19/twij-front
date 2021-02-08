import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "@store/quizSettings";

import QuestionsInputList from "@domain/Quizes/AddNewQuiz/QuizSettingsModal/QuestionsInputList/QuestionsInputList";
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
  const dispatch = useDispatch();
  const quizName = useSelector(selectors.name);
  const quizSubject = useSelector(selectors.subject);

  const onQuizNameChangeHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(actions.updateQuizName(event.target.value));
  }

  const onQuizSubjectChangeHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(actions.updateQuizSubject(event.target.value));
  }

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
          <TextInput
            id="quiz-name"
            label="Nazwa"
            value={quizName}
            onChange={onQuizNameChangeHandle}
          />
          <TextInput
            id="quiz-subject"
            label="Przedmiot"
            value={quizSubject}
            onChange={onQuizSubjectChangeHandle}
          />
        </div>
        <div className={styles.questionList}>
          <QuestionsInputList />
        </div>
      </div>
    </Modal>
  );
}

export default QuizSettingsModal;
