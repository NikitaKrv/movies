import Arrow from '../../assets/prev.svg?react'
import styles from './NextArrow.module.scss'

interface NextArrowProps {
	onClick?: () => void
}

const NextArrow = ({onClick}: NextArrowProps) => {
	return (
		<div onClick={ onClick } className={ styles.nextArrow }>
			<Arrow />
		</div>
	)
}

export default NextArrow