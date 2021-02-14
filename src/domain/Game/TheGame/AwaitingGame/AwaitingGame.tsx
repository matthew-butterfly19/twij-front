import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {GameResponseStatuses, selectors, actions} from "@store/game";
import {Button} from "@material-ui/core";
import moment from "moment";

export interface PageProps {
}

const AwaitingGame = (): JSX.Element => {
  const dispatch = useDispatch();
  const awaitingGameData = useSelector(selectors.awaitingGameData);
  if (!awaitingGameData) {
    return <>ups</>;
  }

  const onStartGameClick = () => {
    dispatch(actions.startGame());
  }

  return (
    <div>
      temat: {awaitingGameData.name}<br/>
      przedmiot: {awaitingGameData.subject}<br/>
      Ilosc pytan: {awaitingGameData.questionsCount} <br/>
      Czas na rozwiązanie: {awaitingGameData.eventDurationInMinutes} <br/>
      Musisz quiz rozpocząć przed: {moment(awaitingGameData.startTimeEnd).format('HH:mm')}<br/>
      <Button onClick={onStartGameClick}>ROZPOCZNIJ GRĘ</Button>
    </div>
  );
}

export default AwaitingGame;
