import { RootState } from '@store/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum GameStatuses {
  initial,
  gameStatusBeingFetch,
  gameNotFound,
  gameFounded,
}

export interface TokenProps {
  token: string;
}

export interface FetchGameDataSucceededPayload {
  gameData: GameData;
}

export interface GameData {
  startTime: string;
  startTimeEnd: string;
  questionCount: number;
  quizDurationInMinutes: number;
}

interface GameModel {
  token: string;
  gameStatus: GameStatuses;
  gameData: GameData;
}

const initialState: GameModel = {
  token: '',
  gameStatus: GameStatuses.initial,
  gameData: {
    startTime: '',
    startTimeEnd: '',
    questionCount: 0,
    quizDurationInMinutes: 0,
  }
}
const reducers = {
  fetchGameData: (state: GameModel, action: PayloadAction<TokenProps>): void => {
    state.token = action.payload.token;
    state.gameData = initialState.gameData;
    state.gameStatus = GameStatuses.gameStatusBeingFetch;
  },
  fetchGameDataSucceeded: (state: GameModel, action: PayloadAction<FetchGameDataSucceededPayload>): void => {
    state.gameData = action.payload.gameData;
    //state.gameStatus = GameStatuses.gameStatusBeingFetch;
  },
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers
});

export const selectors = {
  gameStatus: (state: RootState): GameStatuses => state.game.gameStatus,
};

export const actions = gameSlice.actions;

export default gameSlice.reducer;
