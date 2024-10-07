import { Filter, FilterId, OrderTitle } from '../types/filters.ts'

export const getSelectedText = (
	items: Filter[],
	selectedItems: FilterId[] | OrderTitle | number | null
): string => {
	if (Array.isArray(selectedItems)) {
		return selectedItems
			.map(value => items.find(item => item.id === value)?.title)
			.join(', ')
	} else {
		return items.find(item => item.id === selectedItems)?.title || ''
	}
}