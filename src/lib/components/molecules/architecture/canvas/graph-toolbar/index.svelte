<script lang="ts">
	import type { GraphToolbarItem, GraphToolbarProps } from '$stylist/design-system/contracts';
	import { createGraphToolbarState } from '$stylist/design-system/models/information/graph-toolbar.svelte';
	import { IconButton, Separator } from '$stylist/components/atoms';

	let props: GraphToolbarProps = $props();

	const state = createGraphToolbarState(props);
	const items = $derived(props.items ?? []);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			items: _items,
			size: _size,
			orientation: _orientation,
			compact: _compact,
			showTooltips: _showTooltips,
			onItemClick: _onItemClick,
			onValueChange: _onValueChange,
			children: _children,
			...rest
		} = props;

		return rest;
	});

	function handleItemClick(item: GraphToolbarItem) {
		item.onclick?.();
		props.onItemClick?.(item.id);
	}

	function handleValueChange(item: GraphToolbarItem, value: unknown) {
		props.onValueChange?.(item.id, value);
	}
</script>

<div
	class={`${state.classes} ${props.class ?? ''}`}
	data-toolbar-id={props.id}
	{...restProps}
>
	{#each items as item (item.id)}
		{#if item.type === 'button'}
			<IconButton
				variant={item.active ? 'primary' : 'ghost'}
				size={props.size === 'sm' ? 'sm' : 'md'}
				disabled={item.disabled}
				icon={item.icon}
				aria-label={item.tooltip ?? item.label ?? item.id}
				title={state.showTooltips ? item.tooltip ?? item.label : undefined}
				onclick={() => handleItemClick(item)}
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
				onchange={(event) => handleValueChange(item, (event.target as HTMLSelectElement).value)}
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
				onchange={(event) => handleValueChange(item, (event.target as HTMLInputElement).value)}
			/>
		{:else if item.type === 'separator'}
			<Separator
				orientation={props.orientation === 'vertical' ? 'horizontal' : 'vertical'}
				class="graph-toolbar__separator"
			/>
		{/if}
	{/each}

	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>

<style>
	:global(.graph-toolbar) {
		display: flex;
		gap: 0.25rem;
		padding: 0.5rem;
		background: #1e1e1e;
		border: 1px solid #374151;
		border-radius: 8px;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.3);
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
		padding: 0.375rem;
		gap: 0.125rem;
	}

	:global(.graph-toolbar__separator) {
		margin: 0 0.25rem;
	}

	:global(.graph-toolbar__select),
	:global(.graph-toolbar__input) {
		padding: 0.375rem 0.5rem;
		font-size: 0.75rem;
		color: #f8fafc;
		background: #2d2d2d;
		border: 1px solid #374151;
		border-radius: 4px;
		outline: none;
		cursor: pointer;
		transition: border-color 120ms ease, box-shadow 120ms ease;
	}

	:global(.graph-toolbar__select:hover),
	:global(.graph-toolbar__input:hover) {
		border-color: #4b5563;
	}

	:global(.graph-toolbar__select:focus),
	:global(.graph-toolbar__input:focus) {
		border-color: #3b82f6;
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.2);
	}

	:global(.graph-toolbar__select:disabled),
	:global(.graph-toolbar__input:disabled) {
		background: #1f1f1f;
		color: #6b7280;
		cursor: not-allowed;
	}
</style>
