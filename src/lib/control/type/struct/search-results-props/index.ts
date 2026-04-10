import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SearchResultItem } from '../search-results-item';

export type SearchResultsProps = {
	results?: SearchResultItem[];
	query?: string;
	loading?: boolean;
	class?: string | null;
	onResultClick?: (result: SearchResultItem) => void;
	showMetadata?: boolean;
	maxResults?: number;
} & Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class' | 'results'>;
