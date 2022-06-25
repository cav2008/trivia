import { QuestionProps } from "../../components/pages/Game/Question/Question.types";
import { actionTypes } from "./reducer";

export const setQuestions = (questions: QuestionProps[]) => ({
  type: actionTypes.SET_QUESTIONS,
  payload: questions
});

export const incrementScore = () => ({
  type: actionTypes.INCREMENT_SCORE,
});

export const setUserAnswers = (userAnswers: string[]) => ({
  type: actionTypes.SET_USER_ANSWERS,
  payload: userAnswers
});

export const resetUserAnswer = () => ({
  type: actionTypes.RESET_USER_ANSWERS,
});

export const setCurrentQuestionIndex = (currentQuestionIndex: number) => ({
  type: actionTypes.SET_CURRENT_QUESTION_INDEX,
  payload: currentQuestionIndex
});

export const resetGame = () => ({
  type: actionTypes.RESET_GAME,
})
