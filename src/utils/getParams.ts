import { GetMoviesParams } from '../types/movie.ts'

export const getParams = (
	{genres, type, countries, page, year, order, keyword}: GetMoviesParams
) => {
	let paramsStr = `?type=${ type }&page=${ page }&keyword=${ keyword }&order=${ order }`
	
	if (genres.length > 0) {
		paramsStr += `&genres=${ genres.join(',') }`
	}
	
	if (countries.length > 0) {
		paramsStr += `&countries=${ countries.join(',') }`
	}
	
	if (year) {
		paramsStr += `&yearFrom${ year }&yearTo=${ year }`
	}
	
	return paramsStr
}