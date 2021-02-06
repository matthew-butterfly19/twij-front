import { all } from 'redux-saga/effects';

import quizSettings from '@sagas/quizSettings';

export default function* rootSaga() {
    yield all([
      quizSettings()
    ])
}
