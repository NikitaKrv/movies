import styles from './StarRating.module.scss'

interface StarRatingProps {
	rating: number,
	id: number
}

const StarRating = ({rating, id}: StarRatingProps) => {
	const offset = Math.round((rating / 2) * 100) - Math.trunc(rating / 2) * 100 + '%'
	const stars = new Array(5).fill(1)
	
	return (
		<div className={ styles.rating }>
			<svg width={ 0 } height={ 0 } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
				<defs>
					<linearGradient id={ String(id) } x1="0" x2="100%" y1="0" y2="0">
						<stop offset={ offset } stopColor="#ef4234"></stop>
						<stop offset={ offset } stopColor="#0f0f0f"></stop>
					</linearGradient>
					
					<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="star">
						<path
							d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
					</symbol>
				</defs>
			</svg>
			
			<div className={ styles.starRating }>
				{
					stars.map((_, idx) => {
						if (idx < Math.trunc(rating / 2)) {
							return (
								<svg key={ idx } className={ styles.cStar + ' ' + styles.active } width="32" height="32"
								     viewBox="0 0 32 32">
									<use xlinkHref="#star"></use>
								</svg>
							)
						} else if (idx === Math.trunc(rating / 2)) {
							return (
								<svg key={ idx } className={ styles.cStar + ' ' + styles.active } width="32" height="32"
								     viewBox="0 0 32 32">
									<use xlinkHref="#star" fill={ `url(#${ id })` }></use>
								</svg>
							)
						} else {
							return (
								<svg key={ idx } className={ styles.cStar } width="32" height="32" viewBox="0 0 32 32">
									<use xlinkHref="#star"></use>
								</svg>
							)
						}
						
					})
				}
			</div>
		</div>
	)
}

export default StarRating