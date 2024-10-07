import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store.ts'

const keywordSlice = createSlice({
	name: 'keyword',
	initialState: '',
	reducers: {
		setKeyword: (_, action: PayloadAction<string>) => action.payload
	}
})

export const keywordReducer = keywordSlice.reducer
export const keywordActions = keywordSlice.actions

export const selectKeyword = (state: RootState) => state.keyword