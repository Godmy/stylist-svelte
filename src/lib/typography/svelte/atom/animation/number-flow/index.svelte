<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
	import type { NumberFlowRecipe as NumberFlowProps } from '$stylist/typography/interface/recipe/number-flow';
	import { createNumberFlowState } from '$stylist/typography/function/state/number-flow';

	let {
		class: className,
		value,
		locales,
		format,
		prefix,
		suffix,
		...restProps
	}: NumberFlowProps & InformationHTMLAttributes<HTMLDivElement> = $props();

	const state = createNumberFlowState({ value, locales, format, prefix, suffix, class: className });
</script>

<div class={state.classes.container} role="status" aria-live="polite" {...restProps}>
	{#if state.prefix}
		<span class={state.classes.prefix} aria-hidden="true">{state.prefix}</span>
	{/if}

	<span>{state.formattedValue}</span>

	{#if state.suffix}
		<span class={state.classes.suffix} aria-hidden="true">{state.suffix}</span>
	{/if}

	<span class={state.classes.srOnly} aria-live="assertive">
		{state.prefix}{state.formattedValue}{state.suffix}
	</span>
</div>
