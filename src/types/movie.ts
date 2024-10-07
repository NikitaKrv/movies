import { OrderTitle } from './filters.ts'

export interface Movie {
	kinopoiskId: number,
	nameRu: string | null,
	ratingKinopoisk: number | null,
	year: number,
	posterUrl: string
}

export interface MovieInfoResponse extends Movie {
	description: string,
	genres: { genre: string }[],
	countries: { country: string }[],
	ratingKinopoisk: number
}

export interface GetMovieResponse {
	total: number,
	totalPages: number,
	items: Movie[]
}

export interface GetMoviesParams {
	countries: number[],
	genres: number[],
	order: OrderTitle,
	type: 'FILM' | 'TV_SERIES' | 'TV_SHOW',
	year: number | null,
	keyword: string,
	page: number
}