import { Filter, FilterId, OrderTitle } from '../../../types/filters.ts'
import styles from './Options.module.scss'

interface OptionsProps {
	items: Filter[],
	selectedItems: FilterId[] | string | number | null,
	className?: string,
	onClick: (id: FilterId | OrderTitle) => void
}

const Options = ({items, selectedItems, onClick, className}: OptionsProps) => {
	return (
		<div className={ `${ styles.options } ${ className }` }>
			{
				items.map(item => {
					const cls = [styles.option]
					
					if (Array.isArray(selectedItems)) {
						if (selectedItems.includes(item.id)) {
							cls.push(styles.selected)
						}
					} else {
						if (item.id === selectedItems) {
							cls.push(styles.selected)
						}
					}
					
					return (
						<div
							key={ item.id }
							className={ cls.join(' ') }
							onClick={ () => onClick(item.id) }
						>
							{ item.title }
						</div>
					)
				})
			}
		</div>
	)
}

export default Options