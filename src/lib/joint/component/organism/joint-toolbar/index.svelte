<script lang="ts">
	import { JOINT_TOOLBAR_ITEMS } from '$stylist/joint/const/value/joint-toolbar-items';

	interface JointToolbarProps {
		active?: string;
		availableJoints?: readonly string[];
		orientation?: 'horizontal' | 'vertical';
		showLabel?: boolean;
		onSelect?: (name: string) => void;
		class?: string;
	}

	let {
		active,
		availableJoints,
		orientation = 'horizontal',
		showLabel = true,
		onSelect,
		class: className = ''
	}: JointToolbarProps = $props();

	const visibleItems = $derived(
		availableJoints
			? JOINT_TOOLBAR_ITEMS.filter((item) => availableJoints.includes(item.name))
			: JOINT_TOOLBAR_ITEMS
	);
</script>

<nav
	class="c-joint-toolbar {orientation} flex items-center gap-0.5 overflow-x-auto border-b border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-1 py-0.5 {className}"
>
	{#if showLabel}
		<div class="label">
			<span class="label-title">joint</span>
			<span class="label-text">{active ?? ''}</span>
		</div>
		<div class="separator"></div>
	{/if}
	{#each visibleItems as item (item.name)}
		<button
			type="button"
			title={item.name}
			aria-label={item.name}
			aria-current={active === item.name ? 'page' : undefined}
			class="relative flex h-7 w-7 shrink-0 items-center justify-center rounded
				transition-colors duration-100
				focus-visible:ring-1 focus-visible:ring-[var(--color-primary-500)] focus-visible:outline-none
				{active === item.name
				? 'bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
				: 'text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]'}"
			onclick={() => onSelect?.(item.name)}
		>
			<span class="icon">
				{@html item.svg}
			</span>
			{#if active === item.name}
				<span class="active-indicator"></span>
			{/if}
		</button>
	{/each}
	{#if visibleItems.length === 0}
		<span class="empty-label">no joints</span>
	{/if}
</nav>

<style>
	.icon {
		display: inline-flex;
		width: 16px;
		height: 16px;
		align-items: center;
		justify-content: center;
	}

	.icon :global(svg) {
		display: block;
		width: 16px;
		height: 16px;
	}

	.active-indicator {
		position: absolute;
		bottom: 0;
		left: 4px;
		right: 4px;
		height: 2px;
		border-radius: 1px;
		background-color: var(--color-primary-500);
	}

	.label {
		width: 120px;
		flex-shrink: 0;
		display: grid;
		align-content: center;
		padding: 0 8px;
		height: 28px;
		position: sticky;
		left: 0;
		z-index: 1;
		background: var(--color-background-primary);
	}

	.label-title {
		font-size: 9px;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		line-height: 1;
	}

	.label-text {
		font-size: 12px;
		font-weight: 500;
		color: var(--color-text-primary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-family: var(--font-mono, monospace);
	}

	.separator {
		width: 1px;
		height: 16px;
		flex-shrink: 0;
		background-color: var(--color-border-primary);
		margin: 0 4px;
	}

	.empty-label {
		padding: 0 8px;
		font-size: 12px;
		color: var(--color-text-secondary);
	}

	.vertical {
		width: 32px;
		height: 100%;
		flex-direction: column;
		align-items: center;
		overflow-y: auto;
		overflow-x: hidden;
		border-right: 1px solid var(--color-border-primary);
		border-bottom: 0;
		gap: 1px;
		padding: 2px;
	}

	.vertical button {
		width: 24px;
		height: 24px;
		min-height: 24px;
	}

	.vertical .icon,
	.vertical .icon :global(svg) {
		width: 14px;
		height: 14px;
	}

	.vertical .active-indicator {
		top: 3px;
		bottom: 3px;
		left: 0;
		right: auto;
		width: 2px;
		height: auto;
	}

	.vertical .empty-label {
		writing-mode: vertical-rl;
		padding: 8px 0;
	}
</style>
