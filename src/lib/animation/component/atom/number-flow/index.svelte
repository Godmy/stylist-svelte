<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
	import type { NumberFlowRecipe as NumberFlowProps } from '$stylist/animation/interface/recipe/number-flow';
	import createNumberFlowState from '$stylist/animation/function/state/number-flow/index.svelte';

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

<style>
	.c-animation-number-flow {
		display: inline-flex;
		align-items: center;
		font-variant-numeric: tabular-nums;
	}

	.c-animation-number-flow__prefix {
		margin-inline-end: var(--space-1, 0.25rem);
	}

	.c-animation-number-flow__suffix {
		margin-inline-start: var(--space-1, 0.25rem);
	}

	.c-animation-number-flow__sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
