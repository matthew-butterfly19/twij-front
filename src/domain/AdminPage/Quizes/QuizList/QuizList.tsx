import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "@store/quizSettings";
import { Paper as PaperMt } from "@material-ui/core";
import QuizListItem from "@domain/AdminPage/Quizes/QuizList/QuizListItem/QuizListItem";
import AddNewQuiz from "@domain/AdminPage/Quizes/AddNewQuiz/AddNewQuiz";
import ScheduleQuizModal from "@domain/AdminPage/Quizes/ScheduleQuizModal/ScheduleQuizModal";

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
      <ScheduleQuizModal />
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
