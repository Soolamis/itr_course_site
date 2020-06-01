import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import mainMenuReducer from './mainMenu/reducer';
import userReducer from './user/reducer';
import campaignReducer from './campaign/reducer';
import editCampaignReducer from './editCampaign/reducer';
import localeReducer from './locale/reducer';
import campaignTypesReducer from './campaignTypes/reducer';
import mainPageReducer from './mainPage/reducer';

var store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer,
        user: userReducer,
        campaign: campaignReducer,
        editCampaign: editCampaignReducer,
        locale: localeReducer,
        campaignTypes: campaignTypesReducer,
        mainPage: mainPageReducer,
    }, 
    middleware: [...getDefaultMiddleware(), thunk]
})

export default store;