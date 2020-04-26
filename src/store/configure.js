import { configureStore } from '@reduxjs/toolkit';
import mainMenuReducer from './mainMenu/reducer';

var store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer,
    }
})

export default store;