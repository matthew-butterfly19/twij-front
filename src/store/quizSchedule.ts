import { RootState } from '@store/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from "moment";

export enum timeToStartUnitsEnum {
  'minutes',
  'hours',
  'days',
}

export interface TestProps {
  startTime: string;
  timeToStart: number;
  timeToStartUnit: timeToStartUnitsEnum;
  testDurationInMinutes: number;
  questionsIds: string[];
  emails: string[];
  emailMessage: string;
}

export interface QuizScheduleModel {
  modalVisibility: boolean;
  test: TestProps;
}

const initialState: QuizScheduleModel = {
  modalVisibility: false,
  test: {
    startTime: moment().add('21', 'minutes').toISOString(),
    timeToStart: 5,
    timeToStartUnit: timeToStartUnitsEnum.minutes,
    testDurationInMinutes: 25,
    questionsIds: [],
    emails: [],
    emailMessage: 'Zapraszam na quiz, aby rozpocząć nacisnij link ponizej :)',
  }
}

const reducers = {
    onScheduleQuizSubmit: (state: QuizScheduleModel, action: PayloadAction): void => {},
  onModalScheduleOpen: (state: QuizScheduleModel): void => {
    state.modalVisibility = true;
  },
  onModalScheduleClose: (state: QuizScheduleModel): void => {
    state.modalVisibility = false;
    state.test = {...initialState.test};
  },
  updateStartTime: (state: QuizScheduleModel, action: PayloadAction<string>): void => {
    state.test.startTime = action.payload;
  },
  updateTimeToStart: (state: QuizScheduleModel, action: PayloadAction<number>): void => {
    state.test.timeToStart = action.payload;
  },
  updateTimeToStartUnit: (state: QuizScheduleModel, action: PayloadAction<number>): void => {
    state.test.timeToStartUnit = action.payload;
  },
  updateTestDurationInMinutes: (state: QuizScheduleModel, action: PayloadAction<number>): void => {
    state.test.testDurationInMinutes = action.payload;
  },
  updateQuestionsIds: (state: QuizScheduleModel, action: PayloadAction<string[]>): void => {
    state.test.questionsIds = action.payload;
  },
  updateEmails: (state: QuizScheduleModel, action: PayloadAction<string[]>): void => {
    state.test.emails = action.payload;
  },
  updateEmailMessage: (state: QuizScheduleModel, action: PayloadAction<string>): void => {
    state.test.emailMessage = action.payload;
  },
}

export const quizScheduleSlice = createSlice({
  name: 'quizSchedule',
  initialState,
  reducers
});

export const selectors = {
  test: (state: RootState): TestProps => state.quizSchedule.test,
  modalVisibility: (state: RootState): boolean => state.quizSchedule.modalVisibility,
  startTime: (state: RootState): string => state.quizSchedule.test.startTime,
  timeToStart: (state: RootState): number => state.quizSchedule.test.timeToStart,
  timeToStartUnit: (state: RootState): timeToStartUnitsEnum => state.quizSchedule.test.timeToStartUnit,
  testDurationInMinutes: (state: RootState): number => state.quizSchedule.test.testDurationInMinutes,
  questionsIds: (state: RootState): string[] => state.quizSchedule.test.questionsIds,
  emails: (state: RootState): string[] => state.quizSchedule.test.emails,
  emailMessage: (state: RootState): string => state.quizSchedule.test.emailMessage,
};

export const actions = quizScheduleSlice.actions;

export default quizScheduleSlice.reducer;
