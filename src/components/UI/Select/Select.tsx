import { Filter, FilterId, OrderTitle } from '../../../types/filters.ts'
import { useEffect, useRef, useState } from 'react'
import { RiArrowDownWideFill } from 'react-icons/ri'
import { getSelectedText } from '../../../utils/getSelectedText.ts'
import Options from '../Options/Options.tsx'
import styles from './Select.module.scss'

interface SelectProps {
	title: string,
	items: Filter[],
	className?: string,
	selectedItems: FilterId[] | OrderTitle | number | null,
	onClick: (id: (FilterId | OrderTitle)) => void
}

const Select = ({title, items, selectedItems, onClick, className}: SelectProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = useState(false)
	const iconCls = [styles.icon]
	
	if (isOpen) {
		iconCls.push(styles.open)
	}
	
	useEffect(() => {
		if (!isOpen) return
		
		const handleClick = ({target}: MouseEvent) => {
			if (!ref.current?.contains(target as HTMLElement)) {
				setIsOpen(false)
			}
		}
		
		document.body.addEventListener('click', handleClick)
		
		return () => document.body.removeEventListener('click', handleClick)
	}, [isOpen])
	
	const handleSetIsOpen = () => {
		setIsOpen(prev => !prev)
	}
	
	return (
		<div className={ styles.select } ref={ ref }>
			<div className={ styles.header } onClick={ handleSetIsOpen }>
				<div className={ styles.left }>
					<div className={ styles.title }>{ title }</div>
					{
						<div className={ styles.selected }>
							{ getSelectedText(items, selectedItems) }
						</div>
						
					}
				</div>
				<RiArrowDownWideFill className={ iconCls.join(' ') } />
			</div>
			{
				isOpen
					? (
						<Options
							onClick={ onClick }
							className={ className }
							items={ items }
							selectedItems={ selectedItems }
						/>
					)
					: ''
			}
		</div>
	)
}

export default Select