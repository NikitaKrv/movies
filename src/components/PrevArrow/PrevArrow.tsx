import Arrow from '../../assets/prev.svg?react'
import styles from './PrevArrow.module.scss'

interface PrevArrowProps {
	onClick?: () => void
}

const PrevArrow = ({onClick}: PrevArrowProps) => {
	return (
		<div onClick={ onClick } className={ styles.prevArrow }>
			<Arrow />
		</div>
	)
}

export default PrevArrow