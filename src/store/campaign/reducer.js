import {
    createSlice,
    createAsyncThunk,
    combineReducers,
    createSelector,
} from '@reduxjs/toolkit';
import * as service from '../../services/campaign';

function extractFromLocale(locale, field) {
    let res = {};
    Object.keys(locale).forEach((key) => {
        res = {...res, [key]: locale[key][field]}
    });
    return res;
}

function generateLabel(locale) {
    return extractFromLocale(locale, 'name');
}

function generateDescription(locale) {
    return extractFromLocale(locale, 'description');
}

const initPage = createAsyncThunk(
    'campaign/initPage',
    async (id) => {
        const data = await service.getCampaignData(id);
        const label = generateLabel(data.locale);
        const description = generateDescription(data.locale);

        return {
            label: label,
            owner: data.owner,
            media: data.media,
            goal: {
                goal: data.goal.goal,
                current: 0,
                finishDate: new Date(data.goal.date),
            },
            description: description,
            rewards: data.rewards,
        }
    },
);

const dataSlice = createSlice({
    name: 'campaign/data',
    initialState: {
        label: {},
        averageRating: 0,
        userRating: 0,
        media: [],
        goal: {
            goal: 0,
            current: 0,
            finishDate: Date.now(),
        },
        description: {},
        rewards: [],
        owner: '',
    },
    reducers: {
        setLabel(state, action) {
            state.label = action.payload;
        },
        setUserRating(state, action) {
            state.userRating = action.payload;
        },
        setMedia(state, action) {
            state.media = action.payload;
        },
    },
    extraReducers: {
        [initPage.fulfilled]: (state, action) => ({
            ...action.payload,
        }),
    }
});

export const actions = {
    setUserRating: dataSlice.actions.setUserRating,
    initPage: initPage,
}

const campaignSelector = state => state.campaign;
const dataSelector = createSelector(
    campaignSelector,
    (state) => state.data,
);
const labelValueSelector = createSelector(
    dataSelector,
    (data) => data.label,
);
const userRatingSelector = createSelector(
    dataSelector,
    (data) => data.userRating,
);
const averageRatingSelector = createSelector(
    dataSelector,
    (data) => data.averageRating,
);
const mediaSelector = createSelector(
    dataSelector,
    (data) => data.media,
);
const goalSelector = createSelector(
    dataSelector,
    (data) => data.goal,
);
const goalSumSelector = createSelector(
    goalSelector,
    (goal) => goal.goal,
);
const goalCurrentSelector = createSelector(
    goalSelector,
    (goal) => goal.current,
);
const goalEndDateSelector = createSelector(
    goalSelector,
    (goal) => goal.finishDate,
);
const descriptionSelector = createSelector(
    dataSelector,
    (data) => data.description,
);
const rewardsSelector = createSelector(
    dataSelector,
    (data) => data.rewards,
);
const ownerSelector = createSelector(
    dataSelector,
    (data) => data.owner,
);

export const selectors = {
    label: labelValueSelector,
    userRating: userRatingSelector,
    averageRating: averageRatingSelector,
    media: mediaSelector,
    goalSum: goalSumSelector,
    goalCurrent: goalCurrentSelector,
    goalEndDate: goalEndDateSelector,
    description: descriptionSelector,
    rewards: rewardsSelector,
    owner: ownerSelector,
}

export default combineReducers({
    data: dataSlice.reducer,
});