import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        // add: (state, action) => {
        //     const existingOrderIndex = action.payload;
            
        //     if (existingOrderIndex >= 0 && existingOrderIndex < state.length) {
        //         state[existingOrderIndex].count += 1;
        //     } else {
        //         state.push({ ...state[existingOrderIndex], count: 1 });
        //     }
        // }
        add: (state, action) => {
            state.push(action.payload)
        }
        // add: (state, action) => {
        //     const { item } = action.payload;
        //     const existingProduct = state.find((item) => item.name === item.name);
            
        //     if (existingProduct) {
        //         existingProduct.count += 1
        //     } else {
        //         state.push({ ...item, count: 1 })
        //     }
        // }
        // decrement: (state) => {
        //     state.value -= 1
        // },
    },
});

export const { add } = orderSlice.actions;
export default orderSlice.reducer;
