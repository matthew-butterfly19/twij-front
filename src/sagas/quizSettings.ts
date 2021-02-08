import axios from 'axios';
import { all, takeEvery, put, select } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { actions, selectors } from '@store/quizSettings';

const baseUri = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:3025' : 'https://twij-api.herokuapp.com';

function* fetchQuizzes() {
  const quizzesRes = yield axios.get(`${baseUri}/quizzes`);
  yield put(actions.fetchQuizzesSucceeded(quizzesRes.data.quizzes));
}

function* fetchQuiz(action: PayloadAction<number>) {
  const id = action.payload;
  const quizRes = yield axios.get(`${baseUri}/quiz`, {
    params: {
      id
    }
  });
  yield put(actions.fetchQuizSucceeded(quizRes.data.quiz));
  yield put(actions.onModalSettingsOpen());
}

function* removeQuiz(action: PayloadAction<number>) {
  const id = action.payload;
  yield axios.delete(`${baseUri}/quiz`, {
    params: {
      id
    }
  });
  yield put(actions.fetchQuizzes());
}

function* updateQuiz() {
  const currentQuiz = yield select(selectors.currentQuiz);
  yield axios.post(`${baseUri}/quiz`, {
    quiz: currentQuiz
  });
  yield put(actions.fetchQuizzes());
  yield put(actions.onModalSettingsCancel());
}

export default function* uploadSaga() {
  yield all([
    takeEvery(actions.fetchQuizzes.type, fetchQuizzes),
    takeEvery(actions.fetchQuiz.type, fetchQuiz),
    takeEvery(actions.removeQuiz.type, removeQuiz),
    takeEvery(actions.updateQuiz.type, updateQuiz)
  ]);
}