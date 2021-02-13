import axios from 'axios';
import { all, select, takeEvery, put } from "redux-saga/effects";
import {actions, TokenProps} from "@store/game";
import {baseUri} from "@sagas/quizSettings";
import {PayloadAction} from "@reduxjs/toolkit";

function* fetchGameData(action: PayloadAction<TokenProps>) {
  const gameDataResponse = yield axios.get(`${baseUri}/${action.payload}`);
  console.log(gameDataResponse);
}

export default function* gameSaga() {
  yield all([
    takeEvery(actions.fetchGameData.type, fetchGameData),
  ]);
}
