import { RootState } from './index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthorizationStore {
    isLogged: boolean;
}

const initialState: AuthorizationStore = {
    isLogged: false
}

const reducers = {
    login: (state: RootState, action: PayloadAction<boolean>): void => {
        console.log(action.payload)
    }
}

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers
});

export const selectors = {
    isLogged: (state: RootState): boolean => state.authorization.isLogged
};

export const actions = authorizationSlice.actions;

export default authorizationSlice.reducer;
