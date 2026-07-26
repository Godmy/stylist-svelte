import type { TableListItem } from '$stylist/table/type/struct/table-list-item';

export interface RecipeTableListPanel {
	class?: string;
	items: TableListItem[];
	selectedName: string | null;
	onSelect: (name: string) => void;
}
