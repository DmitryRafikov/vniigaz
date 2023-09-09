import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rootApi } from './root.api'
import { uiReducer } from './ui/ui.slice'

const rootReducer = combineReducers({
	[rootApi.reducerPath]: rootApi.reducer,
	ui: uiReducer,
})

const middlewares = [
	rootApi.middleware
]

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		const defaultMiddlewares = getDefaultMiddleware({
			immutableCheck: true,
			serializableCheck: false,
			thunk: true,
		})
		return [...defaultMiddlewares, ...middlewares]
	},
	devTools: process.env.NODE_ENV !== 'production'
})

setupListeners(store.dispatch)

export const AppDispatch = store.dispatch