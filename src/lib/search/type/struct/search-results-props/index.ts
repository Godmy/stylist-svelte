import type { HTMLAttributes } from 'svelte/elements';
import type { SearchResultItem } from '$stylist/search/type/struct/search-results-item';

export type SearchResultsProps = {
	results?: SearchResultItem[];
	query?: string;
	loading?: boolean;
	class?: string | null;
	onResultClick?: (result: SearchResultItem) => void;
	showMetadata?: boolean;
	maxResults?: number;
} & Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'results'>;
