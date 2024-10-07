export interface Genre {
	id: number,
	genre: string
}

export interface Country {
	id: number,
	country: string
}

export interface Order {
	id: OrderTitle,
	title: string
}

export type OrderTitle = 'RATING' | 'NUM_VOTE' | 'YEAR'

export interface Year {
	id: number,
	title: string
}

export interface FiltersLocalResponse {
	genres: Filter[],
	countries: Filter[]
}

export interface Filter {
	id: FilterId,
	title: string
}

export type FilterId = number | string

export interface FiltersResponse {
	genres: Genre[],
	countries: Country[]
}