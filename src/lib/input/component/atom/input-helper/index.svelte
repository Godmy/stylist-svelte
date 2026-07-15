<script lang="ts">
	import type { RecipeInputHelper as IInputHelperProps } from '$stylist/input/interface/recipe/input-helper';
	import createInputHelperState from '$stylist/input/function/state/input-helper/index.svelte';

	let props: IInputHelperProps = $props();
	const state = createInputHelperState(props);
	const restProps = $derived.by(() => {
		const { class: _class, text: _text, variant: _variant, ...rest } = props;
		return rest;
	});
</script>

<p class={state.classes} {...restProps}>
	{props.text ?? ''}
</p>

<style>
</style>
