import sessionStorage from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'appkey',
      storage: sessionStorage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
