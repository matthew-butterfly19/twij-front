import React, {useEffect} from 'react';

import styles from './QuizHistory.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "@store/quizHistory";
import Card from '@src/components/Card/Card';
import CollapsibleTable from "@components/Table/Table";


const QuizHistory = (): JSX.Element => {
  const dispatch = useDispatch();
  const quizHistory = useSelector(selectors.quizHistory);

  useEffect(() => {
    dispatch(actions.fetchQuizzesHistory());
  }, [dispatch, actions]);

  const getFunctionStatus = (status: string) => {
    if (status==='Finished') {
      return 'Quiz zakończony'
    }
    if (status==='Awaiting') {
      return 'Quiz jeszcze się nie rozpoczął';
    }
    return 'Quiz się rozpoczął'
  }
  return (
    <div className={styles.quizHistory}>
      {quizHistory && quizHistory.map((quizHistory, index) => {
        const header = (
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div>
              {quizHistory.subject} {quizHistory.name} {quizHistory.date}
            </div>
            <div>
              Status quizu: <b>{getFunctionStatus(quizHistory.status)}</b>
            </div>
          </div>
        );
        const content = (
          <CollapsibleTable rows={quizHistory.members} />
        );
        return (
          <div key={index}>
            <Card
              bigSize={true}
              header={header}
              content={content}
            />
          </div>
        )
      })}
    </div>
  )
}

export default QuizHistory;
