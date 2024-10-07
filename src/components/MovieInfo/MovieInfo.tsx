import { MovieInfoResponse } from '../../types/movie.ts'
import MovieSubInfo from '../MovieSubInfo/MovieSubInfo.tsx'
import { useGetStaffQuery } from '../../api/moviesApi.ts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
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
		<div className={ styles.movieInfo }>
			<div className={ styles.poster }>
				<img className={ styles.logo } src={ posterUrl } alt="" />
			</div>
			<div className={ styles.row }>
				<div className={ styles.description }>
					<div className={ styles.title }>{ nameRu }</div>
					<div className={ styles.info }>{ description }</div>
				</div>
				
				<div>
					
					<Swiper
						slidesPerView={ 3 }
						spaceBetween={ 30 }
						pagination={ {
							clickable: true,
						} }
						modules={ [Navigation, Pagination] }
						className="slider"
					>
						{
							staffs && staffs.map(staff => {
								return (
									<SwiperSlide>
										<img src={ staff.posterUrl } alt="staff" />
										<div>
											{ staff.nameRu }
										</div>
										<div>
											{ staff.professionText }
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
				</div>
			</div>
			<MovieSubInfo
				genres={ genres }
				countries={ countries }
				ratingKinopoisk={ ratingKinopoisk }
				year={ year }
			/>
		</div>
	)
}

export default MovieInfo