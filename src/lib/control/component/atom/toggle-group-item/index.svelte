<script lang="ts">
	import { getContext } from 'svelte';
	import createToggleGroupItemState from './state.svelte';
	import type { RecipeToggleGroupItemProps as RecipeToggleGroupItemProps } from '$stylist/control/interface/recipe/toggle-group-item-props';
	import type { ToggleGroupContext } from '$stylist/control/type/object/toggle-group-context';

	let props: RecipeToggleGroupItemProps = $props();

	const context = getContext<ToggleGroupContext>('toggleGroup') ?? {
		updateValue: () => {},
		value: null,
		disabled: false
	};
	const state = createToggleGroupItemState({
		...props,
		groupValue: context.value,
		groupDisabled: context.disabled,
		updateValue: context.updateValue
	});

	const restProps = $derived(
		(() => {
			const { value: _value, disabled: _disabled, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<button
	class="c-toggle-group-item"
	data-active={state.isActive || undefined}
	data-disabled={state.disabled || undefined}
	disabled={state.disabled}
	onclick={state.handleClick}
	type="button"
	{...restProps}
>
	{#if props.children}{@render props.children()}{/if}
</button>

<style>
	.c-toggle-group-item {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.375rem;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		background: transparent;
		color: var(--color-text-secondary);
		border: 1px solid transparent;
		cursor: pointer;
		transition:
			background-color var(--motion-duration-200, 200ms),
			color var(--motion-duration-200, 200ms);
	}

	.c-toggle-group-item:hover:not([data-disabled]) {
		background: var(--color-background-secondary, #f8fafc);
		color: var(--color-text-primary);
	}

	.c-toggle-group-item[data-active] {
		background: var(--color-primary-600, #2563eb);
		color: var(--color-text-inverse, #fff);
	}

	.c-toggle-group-item[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}
</style>
