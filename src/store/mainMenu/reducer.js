import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions.js';

const menu = createReducer(
    false,
    {
        [actions.toggleMenu]: (state) => !state
    },
);

export default menu;