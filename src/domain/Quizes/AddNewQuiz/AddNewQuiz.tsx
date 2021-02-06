import React, { useState } from 'react';

import CreateQuizButton from "@domain/Quizes/AddNewQuiz/AddNewQuizButton/CreateQuizButton";
import QuizSettingsModal from "@domain/Quizes/QuizSettingsModal/QuizSettingsModal";

const AddNewQuiz = (): JSX.Element => {
  const [isCreateQuizModalVisible, setIsCreateQuizModalVisible] = useState<boolean>(false);

  const onStartAddingQuiz = () => {
    setIsCreateQuizModalVisible(true);
  }

  const onCancelQuizCreation = () => {
    setIsCreateQuizModalVisible(false);
  }

  const onAddNewQuiz = () => {

  }

  return (
    <div>
      <CreateQuizButton onAddNewQuiz={onStartAddingQuiz}/>
      <QuizSettingsModal
        isCreateQuizModalVisible={isCreateQuizModalVisible}
        onAddQuiz={onAddNewQuiz}
        onCancelQuizCreation={onCancelQuizCreation}
      />
    </div>
  );
}

export default AddNewQuiz;