import React from 'react';

import styles from './FoundedQuizStatusHandler.module.scss';
import {useSelector} from "react-redux";
import {GameResponseStatuses, selectors} from "@store/game";
import PendingGame from "@domain/Game/TheGame/PendingGame/PendingGame";
import AwaitingGame from "@domain/Game/TheGame/AwaitingGame/AwaitingGame";
import DidntStartGame from "@domain/Game/TheGame/DidntStartGame/DidntStartGame";

export interface PageProps {
}

const FoundedQuizStatusHandler = (): JSX.Element => {
  const gameStatus = useSelector(selectors.gameStatus);

  const renderGame = (): JSX.Element => {
    if (gameStatus === GameResponseStatuses.pending) {
      return <PendingGame />;
    }
    if (gameStatus === GameResponseStatuses.canBeStarted) {
      return <AwaitingGame />;

    }
    if (gameStatus === GameResponseStatuses.didntStart) {
      return <DidntStartGame />;
    }
    if (gameStatus === GameResponseStatuses.timeToStartOver) {
      return (
        <div>
          Skończył się czas na rozpoczęcie Quizu.
        </div>
      );
    }
    if (gameStatus === GameResponseStatuses.timeToFinishOver) {
      return (
        <div>
          Nie zdazyles nadeslac odpowiedzi.
        </div>
      );
    }
    if (gameStatus === GameResponseStatuses.finished) {
      return (
        <div>
          Quiz zakończony. Wszystko poszło dobrze! Oczekuj na wyniki od prowadzącego.
        </div>
      );
    }
    return <></>;
  }

  return (
    <div>
      {renderGame()}
    </div>
  );
}

export default FoundedQuizStatusHandler;
