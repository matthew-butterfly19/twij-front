import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import { actions as QuizSettingsActions, selectors as QuizSettingsSelectors } from '@store/quizSettings';
import Accordion from "@components/Accordion/Accordion";
import QuestionHeaderInput from "@components/QuestionInput/QuestionHeaderInput/QuestionHeaderInput";
import QuestionInput, {QuestionProps} from "@components/QuestionInput/QuestionAnswersInput/QuestionAnswersInput";

import styles from "./QuestionsInputList.module.scss";
import Button from '@components/AddElementButton/Button';

const QuestionsInputList = ():JSX.Element => {
  const dispatch = useDispatch();
  const questions = useSelector(QuizSettingsSelectors.questions);
  const points = useSelector(QuizSettingsSelectors.points);

  const onAddQuestion = () => {
    dispatch(QuizSettingsActions.pushQuestion());
  }

  const onQuestionChange = (newQuestion: QuestionProps, index: number) => {
    dispatch(QuizSettingsActions.updateQuestion({
      question: newQuestion,
      index
    }))
  }

  const onRemoveChange = (index: number) => {
    dispatch(QuizSettingsActions.removeQuestion({ index }))
  }

  return (
    <div>
      <div className={styles.addNewQuestionDiv}>
        <p>
          Liczba punktów do zdobycia: <b>{points}</b>
        </p>
        <Button tooltip={'Dodaj'} onClick={onAddQuestion}>
          Dodaj nowe pytanie
        </Button>
      </div>
      {
        questions.map((quest, index) => {
          const header = <QuestionHeaderInput key={index} onRemove={onRemoveChange} index={quest.index} {...quest.question} />
          const questionInput = (
            <QuestionInput
              uniqueId={index}
              questionProps={{...quest.question}}
              onChange={(newQuestion) => onQuestionChange(newQuestion, quest.index)}
            />
          );
          return (
            <Accordion
              key={index}
              summary={header}
              details={questionInput}
            />
          );
        })
      }
    </div>
  );
}

export default QuestionsInputList;
