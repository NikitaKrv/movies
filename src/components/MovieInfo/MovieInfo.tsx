import { MovieInfoResponse } from '../../types/movie.ts'
import MovieSubInfo from '../MovieSubInfo/MovieSubInfo.tsx'
import { useGetStaffQuery } from '../../api/moviesApi.ts'
import Staffs from '../Staffs/Staffs.tsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './MovieInfo.module.scss'

interface MovieInfoProps extends MovieInfoResponse {
}

const MovieInfo = ({
	                   nameRu, kinopoiskId, ratingKinopoisk,
	                   genres, posterUrl, description,
	                   countries, year
                   }: MovieInfoProps) => {
	const {data: staffs} = useGetStaffQuery(kinopoiskId)
	
	return (
		<>
			<div className={ styles.movieInfo }>
				<div className={ styles.poster }>
					<img className={ styles.logo } src={ posterUrl } alt="" />
				</div>
				<div className={ styles.row }>
					<div className={ styles.description }>
						<div className={ styles.title }>{ nameRu }</div>
						<div className={ styles.info }>{ description }</div>
					</div>
				</div>
				<MovieSubInfo
					genres={ genres }
					countries={ countries }
					ratingKinopoisk={ ratingKinopoisk }
					year={ year }
				/>
			</div>
			{ staffs && <Staffs items={ staffs } /> }
		
		</>
	)
}

export default MovieInfo