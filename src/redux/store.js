import {
  configureStore,
  // getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import {
  registratedUsers,
  name,
  email,
  password,
  isRegistrationUrl,
} from './reducers'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const middleware = [logger, ...getDefaultMiddleware()];
const rootReducer = combineReducers({
  registratedUsers,
  name,
  email,
  password,
  isRegistrationUrl,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  // reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
})

export default store

export const persistor = persistStore(store)
