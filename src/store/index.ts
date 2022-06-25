import { createStore, combineReducers } from "redux";

import game from './game/reducer';

const reducer = combineReducers({
  game,
});

const store = createStore(reducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
