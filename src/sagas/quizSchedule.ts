import axios from 'axios';
import { all, select, takeEvery, put } from "redux-saga/effects";
import {actions, selectors, timeToStartUnitsEnum} from "@store/quizSchedule";
import { selectors as quizSelectors } from "@store/quizSettings";
import {baseUri} from "@sagas/quizSettings";
import moment from 'moment';

function* onScheduleQuizSubmit() {
  const newTest = yield select(selectors.test);
  const currentQuiz = yield select(quizSelectors.currentQuiz);
  try {
    const startTime = moment(newTest.startTime);
    const startTimeEnd = startTime.add(newTest.timeToStart, timeToStartUnitsEnum[newTest.timeToStartUnit]).toISOString();
    yield axios.post(`${baseUri}/schedule`, {
      test: {
        startTime: newTest.startTime,
        startTimeEnd: startTimeEnd,
        eventDurationInMinutes: newTest.testDurationInMinutes,
        quizId: currentQuiz.id,
        questionsIds: newTest.questionsIds,
        emailMessage: newTest.emailMessage,
        emails: newTest.emails,
      }
    });
  } catch (err) {
    console.log(err);
  }

  yield put(actions.onModalScheduleClose());
}

export default function* uploadSaga() {
  yield all([
    takeEvery(actions.onScheduleQuizSubmit.type, onScheduleQuizSubmit),
  ]);
}
