import React, {useEffect} from 'react';
import {actions, StoreStatuses, selectors} from "@store/game";
import {useDispatch, useSelector} from "react-redux";
import Page from "@domain/Game/Components/Page/Page";

import FoundedQuizStatusHandler from "@domain/Game/TheGame/FoundedQuizStatusHandler";
import styles from './Game.module.scss';

const Game = (): JSX.Element => {
  const dispatch = useDispatch();
  const storeStatus = useSelector(selectors.storeStatus);

  useEffect(() => {
    if (storeStatus === StoreStatuses.initial) {
      const token = window.location.pathname.slice(1);
      dispatch(actions.fetchGameData({
        token
      }));
    }
  }, [dispatch, actions, storeStatus, StoreStatuses]);

  const renderGame = (): JSX.Element => {
    if (storeStatus === StoreStatuses.gameStatusBeingFetch) {
      return <Page>Pobieranie informacji o grze...</Page>;
    }
    if (storeStatus === StoreStatuses.gameNotFound) {
      return <Page>Gra nie znaleziona</Page>;
    }
    if (storeStatus === StoreStatuses.gameFounded) {
      return (
        <Page>
          <FoundedQuizStatusHandler />
        </Page>
      );
    }
    return (
      <></>
    );
  }

  return (
    <div className={styles.root}>
      {renderGame()}
    </div>
  );
}

export default Game;
