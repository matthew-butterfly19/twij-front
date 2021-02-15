import React, {ChangeEvent} from 'react';

import styles from './PendingGame.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {actions, GameResponseStatuses, selectors} from "@store/game";
import {Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import moment from "moment";

export interface PageProps {
}

const PendingGame = (): JSX.Element => {
  const dispatch = useDispatch();
  const pendingGameData = useSelector(selectors.pendingGameData);
  if (!pendingGameData) {
    return <>Ups</>;
  }

  const onAnswerChangeHandle = (questionId: string, answer: number) => {
    dispatch(actions.updateAnswer({
      id: questionId,
      answer
    }));
  }

  const onFinishTest = () =>{
    dispatch(actions.finishGame());
  }

  return (
    <div>
      {pendingGameData.name} <br/>
      {pendingGameData.subject}<br/>
      Czas się kończy: {moment(pendingGameData.finishTime).format('HH:mm')}<br/>
      <br/>
      <br/>
      <Divider />
      {pendingGameData.questions.map((question, index) => {
        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
          onAnswerChangeHandle(question.id, Number(event.target.value));
        }
        return (
          <div key={index} className={styles.question}>
            <br/>
            <FormLabel component="legend">{question.question}</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={question.answer.toString()} onChange={onChange}>
              <FormControlLabel value="0" control={<Radio />} label={question.answerA} />
              <FormControlLabel value="1" control={<Radio />} label={question.answerB} />
              <FormControlLabel value="2" control={<Radio />} label={question.answerC} />
              <FormControlLabel value="3" control={<Radio />} label={question.answerD} />
            </RadioGroup>
            <br/>
            <Divider />
          </div>
        )
      })}
      <br/>
      <Button onClick={onFinishTest}>Zakończ test</Button>
    </div>
  );
}

export default PendingGame;
