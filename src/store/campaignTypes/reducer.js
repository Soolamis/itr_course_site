import { 
    createSlice,
    createAsyncThunk,
    createSelector,
} from '@reduxjs/toolkit';
import { getCampaignTypes } from '../../services/campaign';

const initCampaignTypes = createAsyncThunk(
    'campaignTypes/init',
    async () => {
        return await getCampaignTypes();
    }
);

const types = createSlice({
    name: 'campaignTypes',
    initialState: {
        types: {},
    },
    extraReducers: {
        [initCampaignTypes.fulfilled]: (state, action) => {
            let res = {};
            action.payload.forEach((type) => {
                const {name, locale} = type;
                res = {...res, [name]: locale};
            });
            state.types = res;
        }
    }
});

const typesSelector = state => state.campaignTypes.types;
const typeNamesSelector = createSelector(
    typesSelector,
    (types) => {
        return Object.keys(types);
    }
);

export const selectors = {
    types: typesSelector,
    names: typeNamesSelector,
}

export const actions = {
    init: initCampaignTypes,
}

export default types.reducer;