import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducerContacts} from './ContactSlice';
import {reducerFilter} from './FilterSlice';

  const phonebookPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
  };

  export const store = configureStore({
    reducer: {
      contacts: persistReducer(phonebookPersistConfig, reducerContacts),
      filter: reducerFilter,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  export const persistor = persistStore(store);