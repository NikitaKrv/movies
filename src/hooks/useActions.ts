import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { selectedFiltersActions } from '../redux/slices/selectedFiltersSlice.ts'
import { keywordActions } from '../redux/slices/keywordSlice.ts'

const actions = {
	...selectedFiltersActions,
	...keywordActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	
	return bindActionCreators(actions, dispatch)
}