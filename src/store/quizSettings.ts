import { RootState } from '@store/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IdentifierProps {
  index: number;
}

export interface QuestionProps {
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  answer: number;
  points: number;
}

export const initialQuestion: QuestionProps = {
  question: '',
  answerA: '',
  answerB: '',
  answerC: '',
  answerD: '',
  answer: 0,
  points: 1
}

export interface DetailedQuestionProps extends IdentifierProps {
  question: QuestionProps;
}

interface QuizSettingsModel {
  questions: QuestionProps[]
}

const initialState: QuizSettingsModel = {
  questions: []
}

const reducers = {
  pushNewQuestion: (state: QuizSettingsModel): void => {
    state.questions.push(initialQuestion);
  },
  removeQuestion: (state: QuizSettingsModel, action: PayloadAction<IdentifierProps>): void => {
    state.questions.splice(action.payload.index, 1);
  },
  setQuestion: (state: QuizSettingsModel, action: PayloadAction<DetailedQuestionProps>): void => {
    state.questions[action.payload.index] = action.payload.question;
  },
  onModalSettingsOpen: (state: QuizSettingsModel): void => {
    state.questions = [initialQuestion];
  }
}

export const authorizationSlice = createSlice({
  name: 'quizSettings',
  initialState,
  reducers
});

const getQuestions = (state: RootState): DetailedQuestionProps[] => {
  return state.quizSettings.questions.map((quest, index) => {
    return {
      question: quest,
      index
    }
  })
}

const getPoints = (state: RootState): number => {
  return state.quizSettings.questions.reduce((sum, quest) => { return sum + quest.points }, 0);
}

export const selectors = {
  questions: getQuestions,
  points: getPoints
};

export const actions = authorizationSlice.actions;

export default authorizationSlice.reducer;
