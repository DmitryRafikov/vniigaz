import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
	pageTitle: null
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setPageTitle: (state, { payload }) => {
			state.pageTitle = payload
		}
	}
})

export const { setPageTitle } = uiSlice.actions
export const uiReducer = uiSlice.reducer