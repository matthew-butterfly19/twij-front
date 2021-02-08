import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "@store/quizSettings";

import { Paper as PaperMt } from "@material-ui/core";
import QuizListItem from "@domain/Quizes/QuizList/QuizListItem/QuizListItem";

import AddNewQuiz from "@domain/Quizes/AddNewQuiz/AddNewQuiz";
import styles from './QuizList.module.scss';

const QuizList = (): JSX.Element => {
  const dispatch = useDispatch();
  const quizzes = useSelector(selectors.quizzes);

  useEffect(() => {
    dispatch(actions.fetchQuizzes());
  }, [dispatch, actions]);

  return (
    <div className={styles.quizList}>
      <AddNewQuiz />
      {quizzes.map((quiz, index) => (
        <div className={styles.quizListItem} key={quiz.id}>
          <PaperMt elevation={index}>
            <QuizListItem {...quiz} />
          </PaperMt>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
