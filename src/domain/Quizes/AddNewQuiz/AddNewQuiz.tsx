import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from '@store/quizSettings';
import CreateQuizButton from "@domain/Quizes/AddNewQuiz/AddNewQuizButton/CreateQuizButton";
import QuizSettingsModal from "@domain/Quizes/QuizSettingsModal/QuizSettingsModal";

const AddNewQuiz = (): JSX.Element => {
  const dispatch = useDispatch();
  const isCreateQuizModalVisible = useSelector(selectors.modalVisibility);

  const onOpenQuizCreation = () => {
    dispatch(actions.onModalSettingsOpen());
  }

  const onCancelQuizCreation = () => {
    dispatch(actions.onModalSettingsClose());
  }

  const onAddNewQuiz = () => {
    dispatch(actions.updateQuiz());
  }

  return (
    <div>
      <CreateQuizButton onAddNewQuiz={onOpenQuizCreation}/>
      <QuizSettingsModal
        isCreateQuizModalVisible={isCreateQuizModalVisible}
        onAddQuiz={onAddNewQuiz}
        onCancelQuizCreation={onCancelQuizCreation}
      />
    </div>
  );
}

export default AddNewQuiz;