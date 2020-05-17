import { createSlice } from '@reduxjs/toolkit';
import { LOCALE_DEFAULT } from '../../constants';

const locale = createSlice({
    name: 'locale',
    initialState: {
        locale: LOCALE_DEFAULT
    },
    reducers: {
        setLocale: (state, action)  => {
            state.locale = action.payload;
        }
    }
});

export const actions = {
    ...locale.actions
}

export const selectors = {
    locale: (state) => state.locale.locale,
}

export default locale.reducer;