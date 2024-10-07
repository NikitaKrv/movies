import { Movie } from '../../types/movie.ts'
import StarRating from '../StarRating/StarRating.tsx'
import { Link } from 'react-router-dom'
import styles from './MoviesListItem.module.scss'

interface MoviesListItemProps extends Movie {
}

const MoviesListItem = (
	{nameRu, kinopoiskId, ratingKinopoisk, year, posterUrl}: MoviesListItemProps
) => {
	return (
		<Link to={ `/info/${ kinopoiskId }` } className={ styles.item }>
			<img src={ posterUrl } alt="poster" className={ styles.img } />
			
			<div className={ styles.title }>{ nameRu }</div>
			<div className={ styles.info }>
				<div className={ styles.rating }>
					{
						ratingKinopoisk
						&& <StarRating rating={ ratingKinopoisk } id={ kinopoiskId } />
					}
				</div>
				<div>{ year } год</div>
			</div>
		
		</Link>
	)
}

export default MoviesListItem