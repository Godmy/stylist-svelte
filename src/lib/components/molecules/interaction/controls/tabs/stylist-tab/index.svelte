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
		gap: 0.3rem;
		padding-left: 0.25rem;
	}

	.tab-item {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.4rem;
		width: 2.2rem;
		height: 2.2rem;
		padding: 0 0.6rem;
		border: 1px solid rgba(148, 163, 184, 0.35);
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.8);
		color: #0f172a;
		cursor: pointer;
		overflow: hidden;
		white-space: nowrap;
		transition:
			width 220ms ease,
			border-color 160ms ease,
			background-color 160ms ease;
	}

	.tab-item:hover {
		border-color: rgba(37, 99, 235, 0.4);
		background: rgba(255, 255, 255, 0.96);
	}

	.tab-item:focus-visible {
		outline: 2px solid #2563eb;
		outline-offset: 2px;
	}

	.tab-item.is-active {
		width: clamp(7.4rem, 12vw, 9.4rem);
		border-color: rgba(37, 99, 235, 0.5);
		background: #dbeafe;
	}

	.tab-text {
		font-size: 0.74rem;
		font-weight: 600;
		opacity: 0;
		transform: translateX(-0.2rem);
		transition: opacity 150ms ease, transform 150ms ease;
	}

	.tab-item.is-active .tab-text {
		opacity: 1;
		transform: translateX(0);
	}

	.tab-item::after {
		content: attr(data-tooltip);
		position: absolute;
		left: 50%;
		top: calc(100% + 0.3rem);
		transform: translateX(-50%);
		padding: 0.2rem 0.45rem;
		border-radius: 0.4rem;
		font-size: 0.68rem;
		font-weight: 600;
		background: #0f172a;
		color: #f8fafc;
		opacity: 0;
		pointer-events: none;
		transition: opacity 120ms ease;
		z-index: 55;
	}

	.tab-item:hover::after {
		opacity: 1;
	}

	.tab-item.is-active::after {
		opacity: 0;
	}

	.tab-icon {
		width: 0.95rem;
		height: 0.95rem;
		flex: 0 0 auto;
	}
</style>
