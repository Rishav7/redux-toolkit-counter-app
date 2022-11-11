import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	count: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increament: (state, action) => {
			state.count += 1
		},
		decreament: (state, action) => {
			state.count -= 1
		},
		reset: (state, action) => {
			state.count = 0
		},
		increamentByAmount: (state, action) => {
			state.count += action.payload
		}
	}
})

//we need to export actions
export const { increament, decreament, reset, increamentByAmount } = counterSlice.actions
// export reducers
export default counterSlice.reducer