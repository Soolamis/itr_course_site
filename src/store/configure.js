import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import mainMenuReducer from './mainMenu/reducer';
import userReducer from './user/reducer';
import campaignReducer from './campaign/reducer';

var store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer,
        user: userReducer,
        campaign: campaignReducer,
    }, 
    middleware: [...getDefaultMiddleware(), thunk]
})

export default store;