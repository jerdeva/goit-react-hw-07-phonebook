// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});


// export const persistor = persistStore(store);

// export const getContacts = state => state.contacts;
// export const getFilter = state => state.filter.inputValue;

