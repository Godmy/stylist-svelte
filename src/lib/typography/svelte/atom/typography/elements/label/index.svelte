<script lang="ts">
	import type { ThemeLabelRecipe } from '$stylist/typography/interface/recipe/label';
	import { createLabelState } from '$stylist/typography/function/state/label';

	let props: ThemeLabelRecipe = $props();

	const state = createLabelState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				children: _children,
				size: _size,
				required: _required,
				disabled: _disabled,
				htmlFor: _htmlFor,
				text: _text,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<label for={state.htmlFor} class={state.classes} {...restProps}>
	{#if children}
		{@render children?.()}
	{:else if state.text}
		{state.text}
	{/if}
	{#if state.required}
		<span class={state.requiredIndicatorClasses} aria-hidden="true">*</span>
	{/if}
</label>


