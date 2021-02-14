import axios from 'axios';
import { all, select, takeEvery, put } from "redux-saga/effects";
import {actions, GameResponseStatuses, QuestionsProps, selectors, StoreStatuses, TokenProps} from "@store/game";
import {baseUri} from "@sagas/quizSettings";
import {PayloadAction} from "@reduxjs/toolkit";

function* fetchGameData(action: PayloadAction<TokenProps>) {
  const gameDataResponse = yield axios.get(`${baseUri}/${action.payload.token}`);
  const data = gameDataResponse.data;
  if (data.status === GameResponseStatuses.pending) {
    yield put(actions.initializePendingGame(data.gameData));
  } else if (data.status === GameResponseStatuses.canBeStarted) {
    yield put(actions.initializeAwaitingGame(data.gameData));
  } else if (data.status === GameResponseStatuses.didntStart) {
    yield put(actions.initializeNotStartedGame(data.gameData));
  }
  yield put(actions.fetchGameDataSucceeded({
    gameStatus: data.status,
    storeStatus: StoreStatuses.gameFounded,
  }));
}

function* startGameSaga() {
  const token = yield select(selectors.token);
  yield axios.post(`${baseUri}/start`, {
    token
  });
  yield put(actions.fetchGameData({
    token
  }));
}

function* finishGameSaga() {
  const token = yield select(selectors.token);
  const pendingGameData = yield select(selectors.pendingGameData);
  const answers = pendingGameData.questions.map((question: QuestionsProps) => ({
    id: question.id,
    answer: question.answer,
  }));
  yield axios.post(`${baseUri}/finish`, {
    token,
    answers,
  });
  yield put(actions.fetchGameData({
    token
  }));
}

export default function* gameSaga() {
  yield all([
    takeEvery(actions.fetchGameData.type, fetchGameData),
    takeEvery(actions.startGame.type, startGameSaga),
    takeEvery(actions.finishGame.type, finishGameSaga),
  ]);
}
