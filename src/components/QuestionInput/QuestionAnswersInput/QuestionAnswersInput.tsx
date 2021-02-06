import React, {useEffect, useState} from 'react';
import {FormControlLabel, InputAdornment, Radio, RadioGroup, Slider} from "@material-ui/core";
import TextInput from "@components/FormItems/TextInput/TextInput";

import styles from './QuestionAnswersInput.module.scss';

export interface QuestionProps {
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  answer: number;
  points: number;
}

export interface QuestionInputProps {
  onChange?: (newQuestion: QuestionProps) => void;
  questionProps: QuestionProps;
}

const QuestionAnswersInput = ({ onChange, questionProps }: QuestionInputProps): JSX.Element => {
  const [quizItem, setQuizItem] = useState<QuestionProps>(questionProps);

  useEffect(() => {
    if (!onChange) {
      return;
    }
    onChange(quizItem);
  }, [quizItem]);

  const answersArray = [quizItem.answerA, quizItem.answerB, quizItem.answerC, quizItem.answerD];
  const answersLabels = ['A', 'B', 'C', 'D'];

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuizItem({
      ...quizItem,
      question: event.target.value
    });
  }

  const handleProperAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuizItem({
      ...quizItem,
      answer: Number(event.target.value)
    });
  }

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>, answer: string) => {
    if (!quizItem.hasOwnProperty(answer)) {
      return;
    }
    setQuizItem({
      ...quizItem,
      [answer]: event.target.value
    });
  }

  const handlePointsChange = (_: any, value: (number | number[])) => {
    if (typeof value !== 'number') {
      return;
    }
    setQuizItem({
      ...quizItem,
      points: value
    });
  }

  return (
    <div className={styles.questionInputContainer}>
      <TextInput
        className={styles.question}
        value={quizItem.question}
        onChange={handleQuestionChange}
        id={'Question'}
        label={'Question'}
        variant={'outlined'}
        multiline={true}
        rowsMax={4}
        rows={3}
      />
      <RadioGroup aria-label='quiz' name='quiz' value={quizItem.answer} onChange={handleProperAnswerChange} className={styles.answers}>
        {
          answersArray.map((answer, index) => {
            const prop = `answer${answersLabels[index]}`;
            const answerInput = (
              <TextInput
                value={answer}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAnswerChange(event, prop)}
                id={index.toString()}
                className={styles.questionInput}
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {answersLabels[index]}
                    </InputAdornment>
                  )
                }}
              />
            )
            return (
              <FormControlLabel
                className={styles.answerOption}
                value={index}
                control={<Radio />}
                label={answerInput}
              />
            )
          })
        }
      </RadioGroup>
      <div>
        <p>Liczba punktów za poprawną odpowiedź:</p>
        <Slider
          value={quizItem.points}
          onChange={handlePointsChange}
          defaultValue={1}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          style={{
            width: 200,
            marginLeft: 20
          }}
          step={1}
          marks
          min={0}
          max={10}
        />
      </div>
    </div>
  )
}

export default QuestionAnswersInput;
