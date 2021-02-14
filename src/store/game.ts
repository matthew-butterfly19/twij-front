import { RootState } from '@store/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const GameResponseStatuses = {
  didntStart: 'didntStart',
  canBeStarted: 'canBeStarted',
  pending: 'pending',
  timeToStartOver: 'timeToStartOver',
  timeToFinishOver: 'timeToFinishOver',
  finished: 'finished',
}

export enum StoreStatuses {
  initial,
  gameStatusBeingFetch,
  gameNotFound,
  gameFounded,
}

export interface TokenProps {
  token: string;
}

export interface fetchGameDataSucceededPayload {
  gameStatus: string;
  storeStatus: StoreStatuses;
}

export interface UpdateAnswerPayload {
  id: string;
  answer: number;
}

export interface CommonGameData {
  name: string;
  subject: string;
}

export interface QuestionsProps {
  id: string;
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  answer: number;
}

export interface PendingGameData extends CommonGameData{
  status: string;
  endTime: string;
  questions: QuestionsProps[];
}

export interface AwaitingGameData extends CommonGameData{
  status: string;
  startTimeEnd: string;
  eventDurationInMinutes: number;
  questionsCount: number;
}

export interface GameDidntStartData extends CommonGameData{
  startTime: string;
}

interface GameModel {
  token: string;
  storeStatus: StoreStatuses;
  gameStatus: string;
  awaitingGameData?: AwaitingGameData;
  pendingGameData?: PendingGameData;
  gameDidntStartData?: GameDidntStartData;
}

const initialState: GameModel = {
  token: '',
  storeStatus: StoreStatuses.initial,
  gameStatus: '',
}
const reducers = {
  fetchGameData: (state: GameModel, action: PayloadAction<TokenProps>): void => {
    state.token = action.payload.token;
    state.storeStatus = StoreStatuses.gameStatusBeingFetch;
  },
  fetchGameDataSucceeded: (state: GameModel, action: PayloadAction<fetchGameDataSucceededPayload>): void => {
    state.storeStatus = action.payload.storeStatus;
    state.gameStatus = action.payload.gameStatus;
  },
  initializePendingGame: (state: GameModel, action: PayloadAction<PendingGameData>): void => {
    state.pendingGameData = action.payload;
  },
  initializeAwaitingGame: (state: GameModel, action: PayloadAction<AwaitingGameData>): void => {
    state.awaitingGameData = action.payload;
  },
  initializeNotStartedGame: (state: GameModel, action: PayloadAction<GameDidntStartData>): void => {
    state.gameDidntStartData = action.payload;
  },
  updateAnswer: (state: GameModel, action: PayloadAction<UpdateAnswerPayload>): void => {
    if (!state.pendingGameData) {
      return;
    }
    let question = state.pendingGameData?.questions.find(quest => quest.id === action.payload.id);
    if (!question) {
      return;
    }
    question.answer = action.payload.answer;
  },
  startGame: (state: GameModel): void => {
  },
  finishGame: (state: GameModel): void => {
  },
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers
});

export const selectors = {
  token: (state: RootState): string => state.game.token,
  storeStatus: (state: RootState): StoreStatuses => state.game.storeStatus,
  gameStatus: (state: RootState): string => state.game.gameStatus,
  awaitingGameData: (state: RootState): AwaitingGameData | undefined => state.game.awaitingGameData,
  pendingGameData: (state: RootState): PendingGameData | undefined => state.game.pendingGameData,
  didntStartGameData: (state: RootState): GameDidntStartData | undefined => state.game.gameDidntStartData,
};

export const actions = gameSlice.actions;

export default gameSlice.reducer;
