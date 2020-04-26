import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const userReducer = createReducer(
    {
        isAuthenticated: false,
        name: undefined,
        id: undefined,

    }, {
        [actions.login]: (state, payload) => {
            return {
                isAuthenticated: true,
                name: payload.name,
                id: payload.id,
            }
        }
    }

);

export default userReducer;