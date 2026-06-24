<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	interface DomainSearchToggleProps {
		open?: boolean;
		onToggle?: () => void;
		class?: string;
	}

	let { open = false, onToggle, class: className = '' }: DomainSearchToggleProps = $props();
</script>

<button
	type="button"
	class="c-domain-search-toggle {className}"
	class:is-open={open}
	aria-label={open ? 'Close search' : 'Open search'}
	aria-pressed={open}
	onclick={onToggle}
>
	<Icon name="search" size={16} />
</button>

<style>
	.c-domain-search-toggle {
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

	.c-domain-search-toggle:hover,
	.c-domain-search-toggle.is-open {
		color: var(--color-text-primary);
		border-color: var(--color-primary-500);
		background: color-mix(in srgb, var(--color-primary-500) 10%, var(--color-background-primary));
	}
</style>
