<script lang="ts">
	import type { GraphToolbarProps } from '$stylist/canvas/type/struct/graph/graph-toolbar-props';
	import { createGraphToolbarState } from '$stylist/canvas/function/state/graph-toolbar';
	import { IconButton } from '$stylist/control';
	import { Separator } from '$stylist/typography';

	let props: GraphToolbarProps = $props();
	const state = createGraphToolbarState(props);
</script>

<div
	class={state.classes}
	data-toolbar-id={props.id}
	{...state.restProps}
>
	{#each state.items as item (item.id)}
		{#if item.type === 'button'}
			<IconButton
				variant={item.active ? 'primary' : 'ghost'}
				size={state.size === 'sm' ? 'sm' : 'md'}
				disabled={item.disabled}
				icon={item.icon}
				aria-label={item.tooltip ?? item.label ?? item.id}
				title={state.showTooltips ? item.tooltip ?? item.label : undefined}
				onclick={() => state.handleItemClick(item)}
			>
				{#if !item.icon && item.label}
					{item.label}
				{/if}
			</IconButton>
		{:else if item.type === 'select'}
			<select
				class="graph-toolbar__select"
				value={String(item.value ?? '')}
				disabled={item.disabled}
				title={state.showTooltips ? item.tooltip : undefined}
				onchange={(event) => state.handleValueChange(item, (event.target as HTMLSelectElement).value)}
			>
				{#each item.options ?? [] as option}
					<option value={option}>{option}</option>
				{/each}
			</select>
		{:else if item.type === 'input'}
			<input
				type="text"
				class="graph-toolbar__input"
				value={String(item.value ?? '')}
				placeholder={item.label}
				disabled={item.disabled}
				title={state.showTooltips ? item.tooltip : undefined}
				onchange={(event) => state.handleValueChange(item, (event.target as HTMLInputElement).value)}
			/>
		{:else if item.type === 'separator'}
			<Separator
				orientation={state.orientation === 'vertical' ? 'horizontal' : 'vertical'}
				class="graph-toolbar__separator"
			/>
		{/if}
	{/each}

	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</div>

<style>
	:global(.graph-toolbar) {
		display: flex;
		gap: var(--spacing-1);
		padding: var(--spacing-2);
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-custom27);
	}

	:global(.graph-toolbar--horizontal) {
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}

	:global(.graph-toolbar--vertical) {
		flex-direction: column;
		align-items: stretch;
	}

	:global(.graph-toolbar--compact) {
		padding: var(--spacing-2);
		gap: var(--spacing-1);
	}

	:global(.graph-toolbar__separator) {
		margin: 0 var(--spacing-1);
	}

	:global(.graph-toolbar__select),
	:global(.graph-toolbar__input) {
		padding: var(--spacing-1) var(--spacing-2);
		font-size: var(--font-size-3);
		color: var(--color-text-primary);
		background: var(--color-background-secondary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base);
		outline: none;
		cursor: pointer;
		transition: border-color var(--duration-120) var(--animation-ease), box-shadow var(--duration-120) var(--animation-ease);
	}

	:global(.graph-toolbar__select:hover),
	:global(.graph-toolbar__input:hover) {
		border-color: var(--color-border-secondary);
	}

	:global(.graph-toolbar__select:focus),
	:global(.graph-toolbar__input:focus) {
		border-color: var(--color-primary-500);
		box-shadow: var(--shadow-custom07);
	}

	:global(.graph-toolbar__select:disabled),
	:global(.graph-toolbar__input:disabled) {
		background: color-mix(in srgb, var(--color-background-primary) 85%, var(--color-background-secondary) 15%);
		color: var(--color-text-tertiary);
		cursor: not-allowed;
	}
</style>

