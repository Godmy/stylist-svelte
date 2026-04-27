<script lang="ts">
	import type { CountryFlagProps } from '$stylist/media/type/struct/country-flag';
	import { createCountryFlagState } from '$stylist/geo/function/state/country-flag';

	let props: CountryFlagProps = $props();
	const state = createCountryFlagState(props);
</script>

{#if state.isValid}
	<span class={state.classes} style={state.style} {...state.restProps}>
		{state.emoji}
	</span>
{:else}
	<div class={state.fallbackClasses} style={state.fallbackStyle}>
		{#if props.content}
			{props.content}
		{:else}
			?
		{/if}
	</div>
{/if}
