import axios from 'axios';
import { all, takeEvery, put } from "redux-saga/effects";
import {actions} from "@store/quizHistory";
import {baseUri} from "@sagas/quizSettings";

function* fetchQuizzesHistory() {
  const events = yield axios.get(`${baseUri}/events`);
  yield put(actions.fetchQuizzesHistorySucceeded(events.data));
}

export default function* uploadSaga() {
  yield all([
    takeEvery(actions.fetchQuizzesHistory, fetchQuizzesHistory),
  ]);
}
