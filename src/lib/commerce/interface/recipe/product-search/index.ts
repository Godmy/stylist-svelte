/**
 * ProductSearch — поиск продуктов.
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductSearchRecipe extends ThemeAttributes<HTMLDivElement> {
	placeholder?: string;
	onSearch?: (query: string) => void;
	suggestions?: string[];
	onSuggestionSelect?: (suggestion: string) => void;
}
