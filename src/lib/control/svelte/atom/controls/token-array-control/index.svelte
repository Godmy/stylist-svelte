<script lang="ts">
	type TokenArrayControlProps = {
		title: string;
		tokens: readonly string[];
		value?: string;
		class?: string;
		dedupe?: boolean;
		onSelect?: (token: string) => void;
	};

	let {
		title,
		tokens = [],
		value = undefined,
		class: className = '',
		dedupe = true,
		onSelect
	}: TokenArrayControlProps = $props();

	const displayTokens = $derived(dedupe ? Array.from(new Set(tokens)) : [...tokens]);
</script>

<div class={`token-array-control ${className}`.trim()}>
	<div class="token-array-control__title">{title}</div>
	<div class="token-array-control__items">
		{#each displayTokens as token}
			<button
				type="button"
				class={`token-array-control__chip ${value === token ? 'token-array-control__chip--active' : ''}`.trim()}
				onclick={() => onSelect?.(token)}
			>
				{token}
			</button>
		{/each}
	</div>
</div>

<style>
	.token-array-control {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-1);
		align-items: center;
	}

	.token-array-control__title {
		width: var(--size-9rem);
		font-size: var(--font-size-3);
		color: var(--muted);
	}

	.token-array-control__items {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-1);
	}

	.token-array-control__chip {
		border: 1px solid var(--line);
		background: var(--surface);
		color: var(--text);
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: var(--border-radius-full);
		font-size: var(--font-size-3);
		cursor: pointer;
	}

	.token-array-control__chip--active {
		border-color: color-mix(in srgb, var(--accent) 70%, var(--line) 30%);
		background: color-mix(in srgb, var(--accent) 18%, var(--surface) 82%);
		color: var(--text);
	}

	@media (max-width: 720px) {
		.token-array-control__title {
			width: 100%;
		}
	}
</style>


