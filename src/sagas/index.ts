import { all } from 'redux-saga/effects';

import quizSettings from './quizSettings';
import quizSchedule from './quizSchedule';
import game from './game';

export default function* rootSaga() {
    yield all([
      quizSettings(),
      quizSchedule(),
      game(),
    ])
}
