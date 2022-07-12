import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('increment/counter');
export const decrement = createAction('decrement/counter');
export const increaseAmount = createAction('increaseAmount/counter');

let action = increment(10);
console.log('action', action);

// reducer
// 1. using builder notation

const initialState = {
  value: 0,
};

// export const counterSlices = createReducer(initialState, (builder) => {
//   builder.addCase(increment, (state, action) => {
//     state.value++;
//   });
//   builder.addCase(decrement, (state, action) => {
//     state.value--;
//   });
//   builder.addCase(increaseAmount, (state, action) => {
//     state.value += action.payload;
//   });
// });

// 2.Map notation

export const counterSlices = createReducer(initialState, {
  [increment]: (state, action) => {
    state.value++;
  },
  [decrement]: (state, action) => {
    state.value--;
  },
  [increaseAmount]: (state, action) => {
    state.value += action.payload;
  },
});
