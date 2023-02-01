import { configureStore } from "@reduxjs/toolkit";
import segmentReducer from "./reducers/segmentList";
import displayReducer from "./reducers/uiDisplay";

export const store = configureStore({
  reducer: {
    segmentList: segmentReducer,
    uiDisplay: displayReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: {ignoredPaths: ["segmentList.segments"]},
    serializableCheck: { ignoredPaths: ["segmentList.segments"] }
  })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;