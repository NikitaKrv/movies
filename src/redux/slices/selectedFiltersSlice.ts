import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderTitle } from '../../types/filters.ts'
import { RootState } from '../store.ts'

interface selectedFiltersState {
	genres: number[],
	countries: number[],
	year: number | null,
	order: OrderTitle
}

const initialState: selectedFiltersState = {
	order: 'RATING',
	countries: [],
	year: null,
	genres: []
}

const selectedFiltersSlice = createSlice({
	name: 'selectedFilters',
	initialState,
	reducers: {
		setGenre: (state, action: PayloadAction<number>) => {
			if (state.genres.includes(action.payload)) {
				state.genres = state.genres.filter(id => id !== action.payload)
			} else {
				state.genres.push(action.payload)
			}
		},
		setCountry: (state, action: PayloadAction<number>) => {
			if (state.countries.includes(action.payload)) {
				state.countries = state.countries.filter(id => id !== action.payload)
			} else {
				state.countries.push(action.payload)
			}
		},
		setOrder: (state, action: PayloadAction<OrderTitle>) => {
			state.order = action.payload
		},
		setYear: (state, action: PayloadAction<number>) => {
			state.year = action.payload
		},
		clearFilters: () => initialState
	}
})

export const selectedFiltersReducer = selectedFiltersSlice.reducer
export const selectedFiltersActions = selectedFiltersSlice.actions

export const selectFilters = (state: RootState) => state.selectedFilters