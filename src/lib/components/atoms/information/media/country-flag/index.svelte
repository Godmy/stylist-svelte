<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
	import type { CountryFlagProps } from '$stylist/design-system';
	import { createCountryFlagState } from '$stylist/design-system/models/information/country-flag.svelte';

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


