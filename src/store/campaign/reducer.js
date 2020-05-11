import {
    createSlice,
    createAsyncThunk,
    combineReducers,
    createSelector,
} from '@reduxjs/toolkit';
import * as service from '../../services/campaign';
import { 
    LOADING_PENDING, 
    LOADING_IDLE, 
    MODE_EDIT, 
    MODE_USE,
    SYNC_IDLE,
    SYNC_PENDING,
    SYNC_REJECTED,
    SYNC_COMPLETE,
} from '../../constants';

const initPage = createAsyncThunk(
    'campaign/initPage',
    async (id) => {
        return await service.getCampaignData(id);
    },
);
const syncLabel = createAsyncThunk(
    'campaign/syncLabel',
    async(_, thunkAPI) => {
        return await service.syncLabel(selectors.label(thunkAPI.getState()));
    }
);

const dataSlice = createSlice({
    name: 'campaign/data',
    initialState: {
        label: '',
        averageRating: 0,
        userRating: 0,
        media: [],
        goal: {
            goal: 0,
            current: 0,
            endDate: Date.now(),
        },
        description: '',
        rewards: [],
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

const uiSlice = createSlice({
    name: 'campaign/ui',
    initialState: {
        label: {
            mode: MODE_USE,
            syncStatus: SYNC_IDLE,
            error: '',
        },
        canEdit: false,
        loading: LOADING_IDLE,
    },
    reducers: {
        setLabelMode(state, action) {
            state.label.mode = action.payload;
        },
        toggleLabelMode(state, action) {
            state.label.mode = (state.label.mode === MODE_EDIT) ? MODE_USE : MODE_EDIT;
        }, 
    },
    extraReducers: {
        [initPage.pending]: (state, action) => { state.loading = LOADING_PENDING },
        [initPage.fulfilled]: (state) => { state.loading = LOADING_IDLE },

        [syncLabel.pending]: (state) => { state.label.syncStatus = SYNC_PENDING },
        [syncLabel.rejected]: (state) => { state.label.syncStatus = SYNC_REJECTED },
        [syncLabel.fulfilled]: (state) => { state.label.syncStatus = SYNC_COMPLETE },
    }
});

export const actions = {
    setLabel: dataSlice.actions.setLabel,
    setLabelMode: uiSlice.actions.setLabelMode,
    toggleLabelMode: uiSlice.actions.toggleLabelMode,
    setUserRating: dataSlice.actions.setUserRating,
    initPage: initPage,
    syncLabel: syncLabel,
}

const campaignSelector = state => state.campaign;
const dataSelector = createSelector(
    campaignSelector,
    (state) => state.data,
);
const uiSelector = createSelector(
    campaignSelector,
    (state) => state.ui,
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
    (goal) => goal.endDate,
);
const descriptionSelector = createSelector(
    dataSelector,
    (data) => data.description,
);
const rewardsSelector = createSelector(
    dataSelector,
    (data) => data.rewards,
);

const labelUiSelector = createSelector(
    uiSelector,
    (ui) => ui.label,
);
const labelModeSelector = createSelector(
    labelUiSelector,
    (label) => label.mode,
);
const labelSyncStatusSelector = createSelector(
    labelUiSelector,
    (label) => label.syncStatus,
);
const labelSyncErrorSelector = createSelector(
    labelUiSelector,
    (label) => label.error,
)
const canEditSelector = createSelector(
    uiSelector,
    (ui) => ui.canEdit,
);

export const selectors = {
    label: labelValueSelector,
    labelMode: labelModeSelector,
    canEdit: canEditSelector,
    labelSyncStatus: labelSyncStatusSelector,
    labelSyncError: labelSyncErrorSelector,
    userRating: userRatingSelector,
    averageRating: averageRatingSelector,
    media: mediaSelector,
    goalSum: goalSumSelector,
    goalCurrent: goalCurrentSelector,
    goalEndDate: goalEndDateSelector,
    description: descriptionSelector,
    rewards: rewardsSelector,
}

export default combineReducers({
    data: dataSlice.reducer,
    ui: uiSlice.reducer
});