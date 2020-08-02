import {
    configureStore,
  } from "@reduxjs/toolkit";
  import thunk from "redux-thunk";
  import { persistStore, persistReducer } from 'redux-persist'
  import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
  import rootReducer from './reducer';
  
  import logger from "redux-logger";
  
  const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth']
  }
  
  const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
  
  
  let store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger]
  });
  
  let persistor = persistStore(store);
  
  export {
    store,
    persistor,
  };
  
  function setAuthState(state) {
    try {
      localStorage.setItem('token', (state.auth || {}).token);
    } catch (err) { return undefined; }
  }
  
  store.subscribe(() => {
    setAuthState(store.getState())
  });