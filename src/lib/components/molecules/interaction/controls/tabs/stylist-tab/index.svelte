<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Icon as BaseIcon } from '$stylist/components/atoms';

	type StylistTabItem = {
		id: string;
		label: string;
		icon: string;
	};

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		class?: string;
		items?: StylistTabItem[];
		selectedId?: string;
		onSelect?: (item: StylistTabItem) => void;
	};

	const defaultItems: StylistTabItem[] = [
		{ id: 'architecture', label: 'Architecture', icon: 'grid-layout' },
		{ id: 'information', label: 'Information', icon: 'text' },
		{ id: 'interaction', label: 'Interaction', icon: 'controls' }
	];

	let {
		class: className = '',
		items = defaultItems,
		selectedId = 'architecture',
		onSelect,
		...restProps
	}: Props = $props();

	let activeId = $state(selectedId);

	$effect(() => {
		activeId = selectedId;
	});

	function handleSelect(item: StylistTabItem) {
		activeId = item.id;
		onSelect?.(item);
	}
</script>

<div class={`stylist-tab ${className}`} role="tablist" aria-label="Functional taxonomy" {...restProps}>
	{#each items as item}
		<button
			type="button"
			class="tab-item"
			class:is-active={activeId === item.id}
			role="tab"
			aria-selected={activeId === item.id}
			aria-label={item.label}
			data-tooltip={item.label}
			onclick={() => handleSelect(item)}
		>
			<BaseIcon name={item.icon} class="tab-icon" />
			<span class="tab-text">{item.label}</span>
		</button>
	{/each}
</div>

<style>
	.stylist-tab {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-1);
		padding-left: var(--spacing-1);
	}

	.tab-item {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		gap: var(--spacing-2);
		width: var(--size-custom22);
		height: var(--size-custom22);
		padding: 0 var(--spacing-2);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 35%, transparent);
		border-radius: var(--border-radius-xl);
		background: color-mix(in srgb, var(--color-background-primary) 80%, transparent);
		color: var(--color-text-primary);
		cursor: pointer;
		overflow: hidden;
		white-space: nowrap;
		transition:
			width 220ms ease,
			border-color 160ms ease,
			background-color 160ms ease;
	}

	.tab-item:hover {
		border-color: color-mix(in srgb, var(--color-primary-600) 40%, transparent);
		background: color-mix(in srgb, var(--color-background-primary) 96%, transparent);
	}

	.tab-item:focus-visible {
		outline: 2px solid var(--color-primary-600);
		outline-offset: 2px;
	}

	.tab-item.is-active {
		width: clamp(7.4rem, 12vw, 9.4rem);
		border-color: color-mix(in srgb, var(--color-primary-600) 50%, transparent);
		background: var(--color-primary-100);
	}

	.tab-text {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		opacity: var(--opacity-0);
		transform: translateX(-0.2rem);
		transition: opacity var(--duration-120) var(--animation-ease), transform var(--duration-150) var(--animation-ease);
	}

	.tab-item.is-active .tab-text {
		opacity: var(--opacity-100);
		transform: translateX(0);
	}

	.tab-item::after {
		content: attr(data-tooltip);
		position: absolute;
		left: 50%;
		top: calc(100% + 0.3rem);
		transform: translateX(-50%);
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: var(--border-radius-md);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		background: var(--color-text-primary);
		color: var(--color-text-inverse);
		opacity: var(--opacity-0);
		pointer-events: none;
		transition: opacity var(--duration-120) var(--animation-ease);
		z-index: var(--z-index-layer55);
	}

	.tab-item:hover::after {
		opacity: var(--opacity-100);
	}

	.tab-item.is-active::after {
		opacity: var(--opacity-0);
	}

	.tab-icon {
		width: var(--size-custom095);
		height: var(--size-custom095);
		flex: 0 0 auto;
	}
</style>


