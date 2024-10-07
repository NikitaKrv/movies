import { useGetFiltersQuery } from '../../api/moviesApi.ts'
import { years } from '../../data/years.ts'
import { useActions } from '../../hooks/useActions.ts'
import { useSelector } from 'react-redux'
import { selectFilters } from '../../redux/slices/selectedFiltersSlice.ts'
import { orders } from '../../data/orders.ts'
import { FilterId, OrderTitle } from '../../types/filters.ts'
import { IoClose } from 'react-icons/io5'
import Select from '../UI/Select/Select.tsx'
import styles from './Filters.module.scss'

const Filters = () => {
	const {data: filters, isLoading, isError} = useGetFiltersQuery()
	const {setCountry, setGenre, setOrder, setYear, clearFilters} = useActions()
	const {genres, year, countries, order} = useSelector(selectFilters)
	
	if (!filters || isLoading || isError) return ''
	
	const addGenre = (id: FilterId) => {
		if (typeof id === 'number') {
			setGenre(id)
		}
	}
	
	const addCountry = (id: FilterId) => {
		if (typeof id === 'number') {
			setCountry(id)
		}
	}
	
	const addYear = (id: FilterId) => {
		if (typeof id === 'number') {
			setYear(id)
		}
	}
	
	const addOrder = (id: FilterId | OrderTitle) => {
		if (id === 'YEAR' || id === 'RATING' || id === 'NUM_VOTE') {
			setOrder(id)
		}
	}
	
	return (
		<div className={ styles.filters }>
			<div className={ styles.items }>
				<Select
					title="Жанры"
					items={ filters.genres }
					selectedItems={ genres }
					onClick={ addGenre }
					className={ styles.genres }
				/>
				<Select
					title="Страны"
					items={ filters.countries }
					selectedItems={ countries }
					onClick={ addCountry }
				/>
				<Select
					title="Год"
					items={ years }
					selectedItems={ year }
					onClick={ addYear }
				/>
				<Select
					title="Сортировать по"
					items={ orders }
					selectedItems={ order }
					onClick={ addOrder }
				/>
			</div>
			<button className={ styles.btn } onClick={ () => clearFilters() }>
				<IoClose className={ styles.icon } />
				<span>Сбросить фильтры</span>
			</button>
		</div>
	)
}

export default Filters