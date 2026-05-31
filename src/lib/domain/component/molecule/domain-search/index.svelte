<script lang="ts">
	import { tick } from 'svelte';
	import DomainSearchField from '$stylist/domain/component/atom/domain-search-field/index.svelte';
	import DomainSearchToggle from '$stylist/domain/component/atom/domain-search-toggle/index.svelte';
	import TaxonomyBreadcrumbs from '$stylist/domain/component/molecule/taxonomy-breadcrumbs/index.svelte';

	interface SearchEntry {
		id: string;
		domain: string;
		cluster: string;
		joint: string;
		family: string;
		entityPath: string;
		searchText: string;
	}

	interface DomainSearchProps {
		entries?: SearchEntry[];
		onSelect?: (entryId: string) => void;
		class?: string;
	}

	let { entries = [], onSelect, class: className = '' }: DomainSearchProps = $props();

	let open = $state(false);
	let query = $state('');
	let inputRef = $state<HTMLInputElement | null>(null);

	const filteredEntries = $derived.by(() => {
		const normalizedQuery = query.trim().toLowerCase();

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
		onSelect?.(entryId);
		closeSearch();
	}
</script>

<div class="c-domain-search {className}">
	{#if open}
		<div class="search-shell">
			<DomainSearchField bind:inputRef bind:value={query} onEscape={closeSearch} />

			{#if query.trim()}
				<div class="search-results" role="listbox" aria-label="Search results">
					{#if filteredEntries.length === 0}
						<p class="empty-state">No matching entities.</p>
					{:else}
						{#each filteredEntries as entry (entry.id)}
							<button
								type="button"
								class="search-result"
								role="option"
								aria-selected="false"
								title={entry.entityPath}
								onclick={() => handleSelect(entry.id)}
							>
								<TaxonomyBreadcrumbs
									domain={entry.domain}
									cluster={entry.cluster}
									joint={entry.joint}
									family={entry.family}
								/>
							</button>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	{/if}

	<DomainSearchToggle {open} onToggle={handleToggle} />
</div>

<style>
	.c-domain-search {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: flex-end;
		flex-shrink: 0;
	}

	.search-shell {
		position: absolute;
		right: calc(100% + 0.35rem);
		top: 0;
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		width: var(--domain-search-overlay-width, 500px);
	}

	.search-results {
		position: absolute;
		top: calc(100% + 0.35rem);
		left: 0;
		z-index: 1000;
		width: 510px;
		max-height: min(22rem, 60vh);
		overflow: auto;
		padding: 0.35rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 12px;
		background: var(--color-background-primary);
		box-shadow: 0 12px 30px rgba(15, 23, 42, 0.16);
	}

	.search-result {
		width: 100%;
		padding: 0.2rem 0.3rem;
		border: 1px solid transparent;
		border-radius: 10px;
		background: transparent;
		text-align: left;
		cursor: pointer;
	}

	.search-result:hover {
		border-color: var(--color-border-primary);
		background: var(--color-background-secondary);
	}

	.search-result :global(.c-taxonomy-breadcrumbs) {
		width: 100%;
		padding: 0.45rem 0.35rem;
		border-bottom: none;
	}

	.empty-state {
		margin: 0;
		padding: 0.7rem;
		color: var(--color-text-secondary);
		font-size: 12px;
	}
</style>
