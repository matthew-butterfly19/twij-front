import React from 'react';

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

export interface QuizListItemProps {
  title: string;
  subject: string;
  questions: number;
  date: string;
}

const QuizListItem = ({ title, subject, questions, date }: QuizListItemProps): JSX.Element => {
  const classes = useStyles();

  return (
    <CardMt className={classes.root}>
      <CardActionAreaMt>
        <CardContentMt>
          <TypographyMt color="textSecondary" gutterBottom>
            {date}
          </TypographyMt>
          <TypographyMt variant="h5" component="h2">
            {title}
          </TypographyMt>
          <TypographyMt color="textSecondary">
            {subject}
          </TypographyMt>
          <TypographyMt variant="body2" component="p">
            Liczba pytań: {questions}
          </TypographyMt>
        </CardContentMt>
      </CardActionAreaMt>
      <CardActionsMt>
        <ButtonMt size="small" color="primary">
          Modyfikuj
        </ButtonMt>
        <ButtonMt size="small" color="primary">
          Usuń
        </ButtonMt>
      </CardActionsMt>
    </CardMt>
  );
}

export default QuizListItem
