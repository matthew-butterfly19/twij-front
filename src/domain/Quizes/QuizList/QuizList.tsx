import React from 'react';

import { Paper as PaperMt } from "@material-ui/core";

import QuizListItem from "@domain/Quizes/QuizList/QuizListItem/QuizListItem";
import AddNewQuiz from "@domain/Quizes/AddNewQuiz/AddNewQuiz";

import styles from './QuizList.module.scss';

const quizList = [
  {
    title: 'Html',
    subject: 'Twij',
    questions: 15,
    date: '13.12.22'
  },
  {
    title: 'Html',
    subject: 'Twij',
    questions: 15,
    date: '13.12.22'
  },
  {
    title: 'Html',
    subject: 'Twij',
    questions: 15,
    date: '13.12.22'
  },
  {
    title: 'Html',
    subject: 'Twij',
    questions: 15,
    date: '13.12.22'
  },
  {
    title: 'Html',
    subject: 'Twij',
    questions: 15,
    date: '13.12.22'
  },
  {
    title: 'Html',
    subject: 'Twij',
    questions: 15,
    date: '13.12.22'
  }
]

const QuizList = (): JSX.Element => {

  const onAddNewQuiz = () => {

  }

  return (
    <div className={styles.quizList}>
      <AddNewQuiz />
      {quizList.map((question, index) => (
        <div className={styles.quizListItem} key={index}>
          <PaperMt elevation={index}>
            <QuizListItem {...question} />
          </PaperMt>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
