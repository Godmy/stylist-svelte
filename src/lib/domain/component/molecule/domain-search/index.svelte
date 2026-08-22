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
		currentPath?: string;
		onSelect?: (entryId: string) => void;
		class?: string;
	}

	let {
		entries = [],
		currentPath = '',
		onSelect,
		class: className = ''
	}: DomainSearchProps = $props();

	let open = $state(false);
	let query = $state('');
	let inputRef = $state<HTMLInputElement | null>(null);
	let pathCopied = $state(false);
	let copyResetTimeout: ReturnType<typeof setTimeout> | undefined;

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

	async function handleCopyPath(): Promise<void> {
		if (!currentPath) return;
		await navigator.clipboard.writeText(currentPath);
		pathCopied = true;
		clearTimeout(copyResetTimeout);
		copyResetTimeout = setTimeout(() => (pathCopied = false), 1600);
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

	<button
		type="button"
		class="copy-path-button"
		class:is-copied={pathCopied}
		disabled={!currentPath}
		title={currentPath ? `Copy path: ${currentPath}` : 'No entity selected'}
		aria-label="Copy component path"
		onclick={handleCopyPath}
	>
		{#if pathCopied}
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="M20 6 9 17l-5-5" />
			</svg>
		{:else}
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<rect x="9" y="9" width="12" height="12" rx="2" />
				<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
			</svg>
		{/if}
	</button>
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

	.copy-path-button {
		display: inline-grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		padding: 0;
		border: 1px solid var(--color-border-primary);
		border-radius: 8px;
		background: var(--color-background-primary);
		color: var(--color-text-secondary);
		cursor: pointer;
	}

	.copy-path-button:hover:not(:disabled) {
		color: var(--color-text-primary);
		border-color: var(--color-primary-500);
		background: color-mix(in srgb, var(--color-primary-500) 10%, var(--color-background-primary));
	}

	.copy-path-button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.copy-path-button.is-copied {
		color: var(--color-success-500, var(--color-text-primary));
		border-color: var(--color-success-500, var(--color-border-primary));
	}
</style>
