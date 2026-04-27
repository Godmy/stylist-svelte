<script lang="ts">
	import type { ThemeSeparatorRecipe } from '$stylist/typography/interface/recipe/separator';
	import { createSeparatorState } from '$stylist/typography/function/state/separator';

	let props: ThemeSeparatorRecipe = $props();

	const state = createSeparatorState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, orientation: _orientation, decorative: _decorative, ...rest } = props;
			return rest;
		})()
	);
</script>

<hr
	class={state.classes}
	aria-orientation={state.orientation}
	role={state.decorative ? 'presentation' : 'separator'}
	{...restProps}
/>


