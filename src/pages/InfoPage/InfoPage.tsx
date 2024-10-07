import Header from '../../components/Header/Header.tsx'
import styles from './InfoPage.module.scss'
import { useParams } from 'react-router-dom'
import { useGetMovieInfoQuery } from '../../api/moviesApi.ts'
import MovieInfo from '../../components/MovieInfo/MovieInfo.tsx'

interface InfoParams {
	id: string
}

const InfoPage = () => {
	const {id} = useParams<keyof InfoParams>() as InfoParams
	const {data, isLoading, isError} = useGetMovieInfoQuery(id)
	
	return (
		<div className={ styles.info }>
			<Header />
			{
				data && <MovieInfo { ...data } />
			}
		</div>
	)
}

export default InfoPage