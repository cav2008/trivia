export const actionTypes = {
  SET_USER_ANSWERS: "SET_USER_ANSWERS",
  RESET_USER_ANSWERS: "RESET_USER_ANSWERS",
  SET_QUESTIONS: "SET_QUESTIONS",
  INCREMENT_SCORE: "INCREMENT_SCORE",
  SET_CURRENT_QUESTION_INDEX: "SET_CURRENT_QUESTION_INDEX",
  RESET_GAME: "RESET_GAME",
};

const initialState = {
  score: 0,
  userAnswers: [],
  questions: [],
  currentQuestionIndex: 0,
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER_ANSWERS:
      return {
        ...state,
        userAnswers: action.payload,
      };
    case actionTypes.RESET_USER_ANSWERS:
      return {
        ...state,
        userAnswers: initialState.userAnswers,
      };
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case actionTypes.INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case actionTypes.SET_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };
    case actionTypes.RESET_GAME:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default gameReducer;
