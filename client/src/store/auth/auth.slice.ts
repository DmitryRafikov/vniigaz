import { createSlice } from '@reduxjs/toolkit'
import { AuthState, setTokenPayload } from './types'
import { authApi } from './auth.api'

const LS_TOKEN = 'dk_auth_token'

const initialState: AuthState = {
	token: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => {
			console.log('logout')
			return initialState
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApi.endpoints.login.matchFulfilled,
			(state, {payload: token}: setTokenPayload) => {
				state.token = token
				localStorage.setItem(LS_TOKEN, JSON.stringify(state.token))
			}
		)
	}
})

export const authReducer = authSlice.reducer
export const { logout } = authSlice.actions
