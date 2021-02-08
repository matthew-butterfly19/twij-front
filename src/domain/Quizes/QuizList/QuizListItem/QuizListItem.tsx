import React from 'react';
import {useDispatch} from "react-redux";

import {actions, CommonQuizProps} from "@store/quizSettings";
import { makeStyles as makeStylesMt } from '@material-ui/core/styles';
import CardActionsMt from '@material-ui/core/CardActions';
import CardMt from '@material-ui/core/Card';
import CardActionAreaMt from '@material-ui/core/CardActionArea';
import CardContentMt from '@material-ui/core/CardContent';
import TypographyMt from '@material-ui/core/Typography';
import ButtonMt from '@material-ui/core/Button';

const useStyles = makeStylesMt({
  root: {
    width: 190,
    height: 180
  }
});

const QuizListItem = ({ name, subject, questionsCount, date, id }: CommonQuizProps): JSX.Element => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onUpdateQuizHandle = (): void => {
    dispatch(actions.fetchQuiz(id));
  }

  const onRemoveQuizHandle = (): void => {
    dispatch(actions.removeQuiz(id));
  }

  return (
    <CardMt className={classes.root}>
      <CardActionAreaMt>
        <CardContentMt>
          <TypographyMt color="textSecondary" gutterBottom>
            {date}
          </TypographyMt>
          <TypographyMt variant="h5" component="h2">
            {name}
          </TypographyMt>
          <TypographyMt color="textSecondary">
            {subject}
          </TypographyMt>
          <TypographyMt variant="body2" component="p">
            Liczba pytań: {questionsCount}
          </TypographyMt>
        </CardContentMt>
      </CardActionAreaMt>
      <CardActionsMt>
        <ButtonMt onClick={onUpdateQuizHandle} size="small" color="primary">
          Modyfikuj
        </ButtonMt>
        <ButtonMt onClick={onRemoveQuizHandle} size="small" color="primary">
          Usuń
        </ButtonMt>
      </CardActionsMt>
    </CardMt>
  );
}

export default QuizListItem
