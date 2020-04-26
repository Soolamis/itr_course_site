import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import mainMenuReducer from './mainMenu/reducer';
import userReducer from './user/reducer'

var store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer,
        user: userReducer,
    }, 
    middleware: [thunk]
})

export default store;