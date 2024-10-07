import { configureStore } from '@reduxjs/toolkit'
import { moviesApi } from '../api/moviesApi.ts'
import { selectedFiltersReducer } from './slices/selectedFiltersSlice.ts'
import { keywordReducer } from './slices/keywordSlice.ts'

export const store = configureStore({
	reducer: {
		selectedFilters: selectedFiltersReducer,
		keyword: keywordReducer,
		[moviesApi.reducerPath]: moviesApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(moviesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
