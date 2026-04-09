import type { TokenColumn } from '$stylist/layout/type/enum/column';
import type { ThemeIconItem, ThemeIconPickerRecipe } from '$stylist/media/interface/recipe/icon-picker';

export class ObjectManagerIconPicker {
	static resolveIcons(props: ThemeIconPickerRecipe): ThemeIconItem[] {
		return props.icons ?? [];
	}

	static resolveTitle(props: ThemeIconPickerRecipe): string {
		return props.title ?? 'Icon Picker';
	}

	static resolveSearchPlaceholder(props: ThemeIconPickerRecipe): string {
		return props.searchPlaceholder ?? 'Search icons...';
	}

	static resolveColumns(props: ThemeIconPickerRecipe): TokenColumn {
		const columns = props.columns ?? 6;
		const normalizedColumns = Math.max(2, Math.min(columns, 8));
		return normalizedColumns as TokenColumn;
	}

	static resolveHostClass(props: ThemeIconPickerRecipe): string {
		return props.class ?? '';
	}

	static resolveItemClass(props: ThemeIconPickerRecipe): string {
		return props.itemClass ?? '';
	}

	static resolveHeaderClass(props: ThemeIconPickerRecipe): string {
		return props.headerClass ?? '';
	}

	static resolveShowSearch(props: ThemeIconPickerRecipe): boolean {
		return props.showSearch ?? true;
	}

	static filterIcons(icons: ThemeIconItem[], searchQuery: string): ThemeIconItem[] {
		const normalizedQuery = searchQuery.trim().toLowerCase();

		if (!normalizedQuery) {
			return icons;
		}

		return icons.filter((icon) => {
			if (icon.name.toLowerCase().includes(normalizedQuery)) {
				return true;
			}

			return (
				icon.keywords?.some((keyword) => keyword.toLowerCase().includes(normalizedQuery)) ?? false
			);
		});
	}
}
