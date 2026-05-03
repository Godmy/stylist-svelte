<script lang="ts">
	import type { ThemeDotRecipe } from '$stylist/typography/interface/recipe/dot';
	import { createDotState } from '$stylist/typography/function/state/dot';

	let props: ThemeDotRecipe = $props();

	const state = createDotState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, color: _color, size: _size, ...rest } = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}></span>

