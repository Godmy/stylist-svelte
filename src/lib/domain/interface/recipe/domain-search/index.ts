import type { DomainSearchEntry } from '$stylist/domain/type/object/domain-search-entry';
export interface RecipeDomainSearch {
	entries?: DomainSearchEntry[];
	currentPath?: string;
	onSelect?: (entryId: string) => void;
	class?: string;
}
