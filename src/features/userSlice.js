import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user= null;
        },

    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
// Pullling the user from the 'user' slice of the store
export const selectUser = state => state.user.user;