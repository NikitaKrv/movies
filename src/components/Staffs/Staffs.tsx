import Slider, { Settings } from 'react-slick'
import { Staff } from '../../types/staff.ts'
import PrevArrow from '../PrevArrow/PrevArrow.tsx'
import NextArrow from '../NextArrow/NextArrow.tsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Staffs.module.scss'

interface StaffProps {
	items: Staff[]
}

const Staffs = ({items}: StaffProps) => {
	const settings: Settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 3,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		appendDots: dots => (
			<div className={ styles.dots }>
				<ul style={ {margin: '0px'} }> { dots } </ul>
			</div>
		),
		customPaging: () => (
			<div className={ styles.dotsItem } />
		),
	}
	
	return (
		<div className={ styles.staffs }>
			<h3 className={ styles.title }>Актеры и создатели</h3>
			<Slider { ...settings }>
				{
					items && items.map(staff => {
						return (
							<div className={ styles.staffItem }>
								<img src={ staff.posterUrl } alt="staff" />
								<div>
									{ staff.nameRu }
								</div>
								<div>
									{ staff.professionText }
								</div>
							</div>
						)
					})
				}
			</Slider>
		</div>
	)
}

export default Staffs