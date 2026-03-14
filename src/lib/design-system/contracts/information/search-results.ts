import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { SearchResultItem } from '../../types/information/search-results';
export interface SearchResultsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'results'> {
  results: SearchResultItem[];
  query?: string;
  loading?: boolean;
  class?: string;
  onResultClick?: (result: SearchResultItem) => void;
  showMetadata?: boolean;
  maxResults?: number;
}


