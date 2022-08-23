import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    list: []
};
export const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        getCatsFetch: function (state) {
            state.isLoading = true;
        },
        getCatsSuccess: function (state, action) {
            state.list = action.payload;
            state.isLoading = false;
        },
        getCatsFailure: function (state) {
            state.isLoading = false;
        }
    }
});

export const {getCatsFetch, getCatsSuccess, getCatsFailure} = catSlice.actions;
export default catSlice.reducer;