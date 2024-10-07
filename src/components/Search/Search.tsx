import { ChangeEvent } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { selectKeyword } from '../../redux/slices/keywordSlice.ts'
import { useActions } from '../../hooks/useActions.ts'
import styles from './Search.module.scss'

const Search = () => {
	const keyword = useSelector(selectKeyword)
	const {setKeyword} = useActions()
	
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value)
	}
	
	return (
		<div className={ styles.search }>
			<input
				placeholder="Введите название фильма, сериала..."
				value={ keyword }
				onChange={ onChange }
			/>
			<IoIosSearch />
		</div>
	)
}

export default Search