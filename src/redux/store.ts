import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { nodeSlice } from "./nodeSlice";
import { edgeSlice } from "./edgeSlice";

const NodesPersistConfig = {
  key: "nodes",
  storage,
};

const EdgesPersistConfig = {
  key: "edges",
  storage,
};

export const store = configureStore({
  reducer: {
    nodes: persistReducer(NodesPersistConfig, nodeSlice.reducer),
    edge: persistReducer(EdgesPersistConfig, edgeSlice.reducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
