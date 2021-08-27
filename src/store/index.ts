import { configureStore } from '@reduxjs/toolkit';

import { menuReducer } from './menu/menu-slice';
import { menuFormReducer } from './menu-form/menu-form-slice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    menuForm: menuFormReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
