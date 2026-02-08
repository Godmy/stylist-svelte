<script lang="ts">
	import type { DividerProps } from '$stylist/design-system';
	import { createDividerState } from '../state.svelte';

	let props: DividerProps = $props();
	const state = createDividerState(props);
</script>

{#if state.isHorizontal}
	<div class="flex items-center text-sm text-[--color-text-secondary] {props.class ?? ''}">
		<span class="{state.leftLineFlex} border-t {state.baseLineClass}"></span>
		{#if props.label}
			<span class="px-3 text-xs font-medium tracking-widest text-[--color-text-tertiary] uppercase">
				{props.label}
			</span>
		{/if}
		<span class="{state.rightLineFlex} border-t {state.baseLineClass}"></span>
	</div>
{:else}
	<span
		class="inline-block h-full w-px border-l {state.baseLineClass} {props.class ?? ''}"
		aria-hidden="true"
	></span>
{/if}
