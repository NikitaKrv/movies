import { Movie } from '../../types/movie.ts'
import MoviesListItem from '../MoviesListItem/MoviesListItem.tsx'
import styles from './MoviesList.module.scss'

interface MoviesListProps {
	items: Movie[]
}

const MoviesList = ({items}: MoviesListProps) => {
	return (
		<div className={ styles.list }>
			{
				items.map(item =>
					<MoviesListItem key={ item.kinopoiskId } { ...item } />
				)
			}
		</div>
	)
}

export default MoviesList