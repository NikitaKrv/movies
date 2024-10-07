import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FiltersLocalResponse, FiltersResponse } from '../types/filters.ts'
import { GetMovieResponse, GetMoviesParams, MovieInfoResponse } from '../types/movie.ts'
import { getParams } from '../utils/getParams.ts'
import { Staff } from '../types/staff.ts'

const API_KEY = '68f2c7d6-bff8-4b72-985e-62d126775956'
const BASE_URL = 'https://kinopoiskapiunofficial.tech/api'

export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		headers: {
			'accept': 'application/json',
			'X-API-KEY': API_KEY,
		}
	}),
	endpoints: builder => ({
		getFilters: builder.query<FiltersLocalResponse, void>({
			query: () => '/v2.2/films/filters',
			transformResponse: (response: FiltersResponse) => ({
				genres: response.genres
					.filter(item => item.genre !== '')
					.map(item => ({id: item.id, title: item.genre})),
				countries: response.countries.slice(0, 36).map(item => ({id: item.id, title: item.country}))
			})
		}),
		getMovies: builder.query<GetMovieResponse, GetMoviesParams>({
			query: (params) => ({
				url: `/v2.2/films${ getParams(params) }`,
			})
		}),
		getMovieInfo: builder.query<MovieInfoResponse, string>({
			query: id => `/v2.2/films/${ id }`
		}),
		getStaff: builder.query<Staff[], number>({
			query: id => `/v1/staff?filmId=${ id }`
		})
	})
})

export const {
	useGetFiltersQuery, useLazyGetMoviesQuery,
	useGetMovieInfoQuery, useGetStaffQuery
} = moviesApi