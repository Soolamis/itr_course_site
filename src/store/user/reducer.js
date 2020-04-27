import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const userReducer = createReducer(
    {
        isAuthenticated: false,
        name: undefined,
        id: undefined,

    }, {
        [actions.login]: (state, action) => {
            return {
                isAuthenticated: true,
                name: action.payload.name,
                id: action.payload.id,
            }
        }
    }

);

export default userReducer;