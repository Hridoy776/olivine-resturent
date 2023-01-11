
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.init";
const initialState = {
    user: {
        email: ''
    },
    isLoading: true,
    isError: false,
    error: ''
}

export const createUser = createAsyncThunk('auth/createUser', async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
})

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user.email = payload;
                state.isError = false;
                state.error = '';
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user.email = "";
                state.isError = true;
                state.error = action.error.message;
            })

    }
})
export default authSlice.reducer;