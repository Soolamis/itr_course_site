import {
    createSlice,
    combineReducers,
    createSelector,
} from '@reduxjs/toolkit';
import { CAMPAING_TYPES, LOCALE_DEFAULT } from '../../constants';

const dataSlice = createSlice({
    name: 'editCampaign/data',
    initialState: {
        name: {
            enUS: '',
            ruRU: '',
        },
        nameLocale: LOCALE_DEFAULT,
        campaignType: CAMPAING_TYPES.EDUCATION,
        descriptionLocale: LOCALE_DEFAULT,
        description: {
            enUS: '',
            ruRU: '',
        },
        avatar: undefined,
        goalFinishDate: new Date(),
        goalSum: '',
    },
    reducers: {
        setName(state, action) {
            state.name[state.nameLocale] = action.payload;
        },
        setCampaignType(state, action) {
            state.campaignType = action.payload;
        },
        setNameLocale(state, action) {
            state.nameLocale = action.payload;
        },
        setDescriptionLocale(state, action) {
            state.descriptionLocale = action.payload;
        },
        setDescription(state, action) {
            state.description[state.descriptionLocale] = action.payload;
        },
        setAvatar(state, action) {
            state.avatar = action.payload;
        },
        setGoalFinishDate(state, action) {
            state.goalFinishDate = action.payload;
        },
        setGoalSum(state, action) {
            if (/^[\d]*$/g.test(action.payload)) {
                state.goalSum = action.payload;
            }
        },
    }

});

const editCampaignSelector = state => state.editCampaign;
const dataSelector = createSelector(
    editCampaignSelector,
    (state) => state.data,
);
const nameSelector = createSelector(
    dataSelector,
    (data) => data.name[data.nameLocale],
);
const campaignTypeSelector = createSelector(
    dataSelector,
    (data) => data.campaignType,
);
const nameLocaleSelector = createSelector(
    dataSelector,
    (data) => data.nameLocale,
);
const descriptionLocaleSelector = createSelector(
    dataSelector,
    (data) => data.descriptionLocale,
);
const descriptionSelector = createSelector(
    dataSelector,
    (data) => data.description[data.descriptionLocale],
);
const avatarSelector = createSelector(
    dataSelector,
    (data) => data.avatar,
);
const goalFinishDateSelector = createSelector(
    dataSelector,
    (data) => data.goalFinishDate,
);
const goalSumSelector = createSelector(
    dataSelector,
    (data) => data.goalSum,
);

export const selectors = {
    name: nameSelector,
    campaignType: campaignTypeSelector,
    nameLocale: nameLocaleSelector,
    descriptionLocale: descriptionLocaleSelector,
    description: descriptionSelector,
    avatar: avatarSelector,
    goalFinishDate: goalFinishDateSelector,
    goalSum: goalSumSelector,
}

export const actions = {
    ...dataSlice.actions,
}

export default combineReducers({
    data: dataSlice.reducer,
})