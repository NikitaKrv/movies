import { CiCalendar } from 'react-icons/ci'
import { FaCity, FaRegStar } from 'react-icons/fa'
import { PiSquaresFourLight } from 'react-icons/pi'
import { MovieInfoResponse } from '../../types/movie.ts'
import StarRating from '../StarRating/StarRating.tsx'
import styles from './MovieSubInfo.module.scss'

interface MovieSubInfoProps extends Pick<
	MovieInfoResponse,
	'year' | 'countries' | 'ratingKinopoisk' | 'genres'> {
}

const MovieSubInfo = ({genres, countries, year, ratingKinopoisk}: MovieSubInfoProps) => {
	return (
		<div className={ styles.subInfo }>
			<div className={ styles.year }>
				<div className={ styles.title }>
					<CiCalendar />
					<span>Дата выхода</span>
				</div>
				<div className={ styles.info }>{ year }</div>
			</div>
			<div className={ styles.country }>
				<div className={ styles.title }>
					<FaCity />
					<span>Страны</span>
				</div>
				<div className={ styles.info }>
					{
						countries.map(item => item.country).join(', ')
					}
				</div>
			</div>
			<div className={ styles.rating }>
				<div className={ styles.title }>
					<FaRegStar />
					<span>Рейтинг</span>
				</div>
				<div className={ styles.info }>
					<StarRating rating={ ratingKinopoisk } id={ ratingKinopoisk } />
				</div>
			</div>
			<div className={ styles.genres }>
				<div className={ styles.title }>
					<PiSquaresFourLight />
					<span>Жанры</span>
				</div>
				<div className={ styles.info }>
					{
						genres.map(item => item.genre).join(', ')
					}
				</div>
			</div>
		</div>
	)
}

export default MovieSubInfo