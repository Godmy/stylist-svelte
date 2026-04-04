<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
	import type { CountryFlagRecipe } from '$stylist/information/interface/recipe/country-flag';
	import { createCountryFlagState } from '$stylist/information/function/state/country-flag';

	type Props = CountryFlagRecipe & InformationHTMLAttributes<HTMLSpanElement>;

	let { content, ...restProps }: Props = $props();

	const state = createCountryFlagState(restProps);
</script>

{#if state.isValid}
	<span class={state.classes} style={state.style} {...restProps}>
		{state.emoji}
	</span>
{:else}
	<div class={state.fallbackClasses} style={state.fallbackStyle}>
		{#if content}
			{content}
		{:else}
			?
		{/if}
	</div>
{/if}


