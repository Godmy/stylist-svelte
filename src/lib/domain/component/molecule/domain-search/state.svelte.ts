import { tick } from 'svelte';
import type { RecipeDomainSearch } from '$stylist/domain/interface/recipe/domain-search';

export function createDomainSearchState(props: RecipeDomainSearch) {
	let open = $state(false);
	let query = $state('');
	let inputRef = $state<HTMLInputElement | null>(null);
	let pathCopied = $state(false);
	let copyResetTimeout: ReturnType<typeof setTimeout> | undefined;

	const filteredEntries = $derived.by(() => {
		const normalizedQuery = query.trim().toLowerCase();
		const entries = props.entries ?? [];

		if (!normalizedQuery) {
			return [];
		}

		return entries
			.map((entry) => {
				let score = 0;

				if (entry.family.toLowerCase() === normalizedQuery) score += 100;
				if (entry.entityPath.toLowerCase() === normalizedQuery) score += 90;
				if (entry.family.toLowerCase().startsWith(normalizedQuery)) score += 60;
				if (entry.entityPath.toLowerCase().includes(normalizedQuery)) score += 40;
				if (entry.searchText.includes(normalizedQuery)) score += 20;

				return { entry, score };
			})
			.filter((item) => item.score > 0)
			.sort(
				(left, right) =>
					right.score - left.score ||
					left.entry.entityPath.length - right.entry.entityPath.length ||
					left.entry.entityPath.localeCompare(right.entry.entityPath)
			)
			.slice(0, 24)
			.map((item) => item.entry);
	});

	async function openSearch(): Promise<void> {
		open = true;
		await tick();
		inputRef?.focus();
		inputRef?.select();
	}

	function closeSearch(): void {
		open = false;
		query = '';
	}

	function handleToggle(): void {
		if (open) {
			closeSearch();
			return;
		}

		void openSearch();
	}

	function handleSelect(entryId: string): void {
		props.onSelect?.(entryId);
		closeSearch();
	}

	async function handleCopyPath(): Promise<void> {
		if (!props.currentPath) return;
		await navigator.clipboard.writeText(props.currentPath);
		pathCopied = true;
		clearTimeout(copyResetTimeout);
		copyResetTimeout = setTimeout(() => (pathCopied = false), 1600);
	}

	return {
		get open() {
			return open;
		},
		get query() {
			return query;
		},
		set query(value: string) {
			query = value;
		},
		get inputRef() {
			return inputRef;
		},
		set inputRef(value: HTMLInputElement | null) {
			inputRef = value;
		},
		get pathCopied() {
			return pathCopied;
		},
		get filteredEntries() {
			return filteredEntries;
		},
		closeSearch,
		handleToggle,
		handleSelect,
		handleCopyPath
	};
}

export default createDomainSearchState;
