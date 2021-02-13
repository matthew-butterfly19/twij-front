import { RootState } from '@store/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IdentifierProps {
  index: number;
}

export interface QuestionProps {
  id?: string;
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

export interface CommonQuizProps {
  id: number;
  name: string;
  date: string;
  subject: string;
  questionsCount: number;
}

interface DetailedQuizProps {
  id?: number;
  name: string;
  subject: string;
  questions: QuestionProps[];
}

export interface DetailedQuestionProps extends IdentifierProps {
  question: QuestionProps;
}

interface QuizSettingsModel {
  quizzes: CommonQuizProps[];
  isCurrentQuizBeingFetch: boolean;
  currentQuiz: DetailedQuizProps;
  modalVisibility: boolean;
}

const initialState: QuizSettingsModel = {
  quizzes: [],
  isCurrentQuizBeingFetch: false,
  currentQuiz: {
    id: undefined,
    name: '',
    subject: '',
    questions: [initialQuestion]
  },
  modalVisibility: false,
}

const reducers = {
  fetchQuizzes: (state: QuizSettingsModel): void => {},
  fetchQuizzesSucceeded: (state: QuizSettingsModel, action: PayloadAction<CommonQuizProps[]>): void => {
    state.quizzes = action.payload;
  },
  fetchQuiz: (state: QuizSettingsModel, action: PayloadAction<number>): void => {
    state.isCurrentQuizBeingFetch = true;
  },
  fetchQuizSucceeded: (state: QuizSettingsModel, action: PayloadAction<DetailedQuizProps>): void => {
    state.isCurrentQuizBeingFetch = false;
    state.currentQuiz = action.payload;
  },
  removeQuiz: (state: QuizSettingsModel, action: PayloadAction<number>): void => {},
  updateQuizName: (state: QuizSettingsModel, action: PayloadAction<string>): void => {
    state.currentQuiz.name = action.payload;
  },
  updateQuizSubject: (state: QuizSettingsModel, action: PayloadAction<string>): void => {
    state.currentQuiz.subject = action.payload;
  },
  updateQuiz: (): void => {},
  pushQuestion: (state: QuizSettingsModel): void => {
    state.currentQuiz.questions.push(initialQuestion);
  },
  removeQuestion: (state: QuizSettingsModel, action: PayloadAction<IdentifierProps>): void => {
    state.currentQuiz.questions.splice(action.payload.index, 1);
  },
  updateQuestion: (state: QuizSettingsModel, action: PayloadAction<DetailedQuestionProps>): void => {
    state.currentQuiz.questions[action.payload.index] = action.payload.question;
  },
  onModalSettingsOpen: (state: QuizSettingsModel): void => {
    state.modalVisibility = true;
  },
  onModalSettingsClose: (state: QuizSettingsModel): void => {
    state.modalVisibility = false;
    state.currentQuiz = initialState.currentQuiz;
  }
}

export const quizSettingsSlice = createSlice({
  name: 'quizSettings',
  initialState,
  reducers
});

const getQuestions = (state: RootState): DetailedQuestionProps[] => {
  return state.quizSettings.currentQuiz.questions.map((quest, index) => {
    return {
      question: quest,
      index
    }
  })
}

const getPoints = (state: RootState): number => {
  return state.quizSettings.currentQuiz.questions.reduce((sum, quest) => { return sum + quest.points }, 0);
}

export const selectors = {
  points: getPoints,
  questions: getQuestions,
  isCurrentQuizBeingFetch: (state: RootState): boolean => state.quizSettings.isCurrentQuizBeingFetch,
  name: (state: RootState): string => state.quizSettings.currentQuiz.name,
  subject: (state: RootState): string => state.quizSettings.currentQuiz.subject,
  quizzes: (state: RootState): CommonQuizProps[] => state.quizSettings.quizzes,
  modalVisibility: (state: RootState): boolean => state.quizSettings.modalVisibility,
  currentQuiz: (state: RootState): DetailedQuizProps => state.quizSettings.currentQuiz
};

export const actions = quizSettingsSlice.actions;

export default quizSettingsSlice.reducer;
