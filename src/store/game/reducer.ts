export const actionTypes = {
  SET_USER_ANSWERS: "SET_USER_ANSWERS",
  SET_QUESTIONS: "SET_QUESTIONS",
};

const initialState = {
  score: 0,
  userAnswers: [],
  questions: [],
  currentQuestionIndex: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_ANSWERS:
      return {
        ...state,
        userAnswers: action.payload,
      };
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
