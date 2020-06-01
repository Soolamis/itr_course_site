import { 
    createSlice,
    createSelector,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import { getCampaigns } from '../../services/campaign';

const load = createAsyncThunk(
    'mainPage/load',
    async () => {
        return await getCampaigns();
    }
);

function groupByType(campaigns) {
    let res = {};
    Object.keys(campaigns).forEach((key) => {
        const type = campaigns[key].type;
        res = {
            ...res,
            [type]: res[type] ? [...res[type], key] : [key],
        }
    });
    return res;
}

function initPaggination(types) {
    let res = {};
    Object.keys(types).forEach(key => {
        res = {
            ...res,
            [key]: 0,
        }
    });
    return res;
}

const slice = createSlice( {
    name: 'mainPage',
    initialState: {
        campaigns: {},
        campaignsByTypes: {},
        paggination: {},
    },
    reducers: {
        setPage(state, action) {
            const { type, page } = action.payload;
            state.paggination[type] = page;
        }
    },
    extraReducers: {
        [load.fulfilled]: (state, action) => {
            state.campaigns = action.payload;
            state.campaignsByTypes = groupByType(action.payload);
            state.paggination = initPaggination(state.campaignsByTypes);
        }
    }
});

const mainPageSelector = state => state.mainPage;
const campaignsSelector = createSelector(
    mainPageSelector,
    data => data.campaigns,
);
const campaingsByTypesSelector = createSelector(
    mainPageSelector,
    state => state.campaignsByTypes,
);
const paginationSelector = createSelector(
    mainPageSelector,
    data => data.paggination,
);

export const actions = {
    ...slice.actions,
    load: load,
};

export const selectors = {
    campaigns: campaignsSelector,
    campaignsByTypes: campaingsByTypesSelector,
    pagination: paginationSelector,
}

export default slice.reducer;