<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import type { Snippet } from 'svelte';
const X = 'x';

	import type { ChipRecipe } from '$stylist/typography/interface/recipe/chip';
	import { createChipState } from '$stylist/control/function/state/chip';

	type Props = ChipRecipe & {
		text?: string;
		icon?: Snippet;
		content?: Snippet;
	};

	let props: Props = $props();

	const state = createChipState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				label: _label,
				variant: _variant,
				size: _size,
				closable: _closable,
				disabled: _disabled,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.classes} {...restProps}>
	{#if children}
		{@render children?.()}
	{:else}
		{state.label}
	{/if}

	{#if state.closable}
		<button class={state.closeButtonClasses} aria-label="Close" disabled={state.disabled}>
			<BaseIcon name={X} class={state.closeButtonIconClasses} />
		</button>
	{/if}
</div>







