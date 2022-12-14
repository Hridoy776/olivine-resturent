import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        },
    },
})
export default counterSlice.reducer;