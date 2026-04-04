import type { NodePaletteItem, NodePaletteProps } from '$stylist/control/interface/component/node-palette/other';

export class ObjectManagerNodePalette {
	static readonly defaultCategories = [
		'all',
		'default',
		'source',
		'processor',
		'output',
		'gateway',
		'custom'
	] as const;

	static filterItems(
		items: readonly NodePaletteItem[],
		selectedCategory: string,
		searchQuery: string
	): NodePaletteItem[] {
		let result = [...items];

		if (selectedCategory !== 'all') {
			result = result.filter((item) => item.category === selectedCategory);
		}

		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(item) =>
					item.title.toLowerCase().includes(query) ||
					item.description?.toLowerCase().includes(query) ||
					item.type.toLowerCase().includes(query)
			);
		}

		return result;
	}

	static groupItems(
		items: readonly NodePaletteItem[],
		viewMode: NonNullable<NodePaletteProps['viewMode']>
	): Record<string, NodePaletteItem[]> {
		if (viewMode !== 'list') {
			return { all: [...items] };
		}

		return items.reduce<Record<string, NodePaletteItem[]>>((groups, item) => {
			if (!groups[item.category]) {
				groups[item.category] = [];
			}

			groups[item.category].push(item);
			return groups;
		}, {});
	}

	static getCategories(categories?: readonly string[]): readonly string[] {
		return categories?.length ? categories : ObjectManagerNodePalette.defaultCategories;
	}

	static getCategoryLabel(category: string): string {
		return category === 'all' ? 'All' : category;
	}

	static toggleViewMode(viewMode: NonNullable<NodePaletteProps['viewMode']>): 'grid' | 'list' {
		return viewMode === 'grid' ? 'list' : 'grid';
	}
}
