import { createAction } from '@reduxjs/toolkit';

export const login = createAction('user/login', (id, name) => {
    return {
        payload: {
            id: id,
            name: name,
        }
    }
});