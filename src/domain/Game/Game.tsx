import React, {useEffect} from 'react';
import {actions, GameStatuses, selectors} from "@store/game";
import {useDispatch, useSelector} from "react-redux";
import Page from "@domain/Game/Components/Page/Page";

import SpinnerOverlay from "@domain/SpinnerOverlay/SpinnerOverlay";
import TheGame from "@domain/Game/TheGame/TheGame";
import styles from './Game.module.scss';

const Game = (): JSX.Element => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(selectors.gameStatus);

  useEffect(() => {
    if (gameStatus === GameStatuses.initial) {
      const token = window.location.pathname.slice(1);
      dispatch(actions.fetchGameData({
        token
      }));
    }
  }, [dispatch, actions, gameStatus, GameStatuses]);

  const renderGame = (): JSX.Element => {
    if (gameStatus === GameStatuses.gameStatusBeingFetch) {
      return <Page>Pobieranie informacji o grze...</Page>;
    }
    if (gameStatus === GameStatuses.gameNotFound) {
      return <Page>Gra nie znaleziona</Page>;
    }
    if (gameStatus === GameStatuses.gameFounded) {
      return (
        <Page>
          <TheGame />
        </Page>
      );
    }
    return (
      <SpinnerOverlay />
    );
  }

  return (
    <div className={styles.root}>
      {renderGame()}
    </div>
  );
}

export default Game;
