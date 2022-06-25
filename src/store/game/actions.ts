import { QuestionProps } from "../../components/pages/Game/Question/Question.types";
import { actionTypes } from "./reducer";

export const setQuestions = (questions: QuestionProps[]) => ({
  type: actionTypes.SET_QUESTIONS,
  payload: questions,
});
