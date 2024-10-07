import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectFilters } from '../../redux/slices/selectedFiltersSlice.ts'
import { selectKeyword } from '../../redux/slices/keywordSlice.ts'
import { useLazyGetMoviesQuery } from '../../api/moviesApi.ts'
import MoviesList from '../../components/MoviesList/MoviesList.tsx'

const MoviesPage = () => {
	const {genres, countries, order, year} = useSelector(selectFilters)
	const keyword = useSelector(selectKeyword)
	const [getMovies, {data, isLoading, isError}] = useLazyGetMoviesQuery()
	
	useEffect(() => {
		getMovies({
			genres, countries, order, year, keyword, page: 5, type: 'FILM'
		})
	}, [genres, countries, order, year, keyword])
	
	if (!data || isLoading || isError) return ''
	
	return (
		<MoviesList items={ data.items } />
	)
}

export default MoviesPage