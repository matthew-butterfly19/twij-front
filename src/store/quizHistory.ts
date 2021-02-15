import { RootState } from '@store/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AnswerProps {
  question: string;
  answer: string;
  points: number;
  correctAnswer: string;
}

export interface MemberProps {
  email: string;
  status: String;
  time: string;
  points: number;
  answers: AnswerProps[];
}

export interface QuizHistoryModel {
  date: string;
  name: string;
  subject: string;
  startTime: string;
  status: string;
  maxPoints: number;
  members: MemberProps[];
}

interface QuizSettingsModel {
  quizHistory?: QuizHistoryModel[];
}

const initialState: QuizSettingsModel = {
}

const reducers = {
  fetchQuizzesHistory: (state: QuizSettingsModel) => {
  },
  fetchQuizzesHistorySucceeded: (state: QuizSettingsModel, action: PayloadAction<QuizHistoryModel[]>) => {
    state.quizHistory = action.payload;
  }
}

export const quizHistorySlice = createSlice({
  name: 'quizHistory',
  initialState,
  reducers
});

export const selectors = {
  quizHistory: (state: RootState): QuizHistoryModel[] | undefined => state.quizHistory.quizHistory,
};

export const actions = quizHistorySlice.actions;

export default quizHistorySlice.reducer;
