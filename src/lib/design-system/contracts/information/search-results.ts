import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';

export interface SearchResultItem {
	id: string;
	title: string;
	description?: string;
	url?: string;
	type?: 'page' | 'document' | 'user' | 'event' | 'other';
	metadata?: {
		date?: string;
		author?: string;
		location?: string;
	};
	actions?: Snippet;
}

export interface SearchResultsProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'results'> {
	results: SearchResultItem[];
	query?: string;
	loading?: boolean;
	class?: string;
	onResultClick?: (result: SearchResultItem) => void;
	showMetadata?: boolean;
	maxResults?: number;
}
