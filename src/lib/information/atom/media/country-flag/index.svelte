<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
	import type { CountryFlagProps } from '$stylist';
	import { createCountryFlagState } from '$stylist/information/state/country-flag';

	type Props = CountryFlagProps & InformationHTMLAttributes<HTMLSpanElement>;

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


