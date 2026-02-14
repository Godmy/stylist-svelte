<script lang="ts">
	import type { DividerProps } from '$stylist/design-system';
	import { createDividerState } from '$stylist/design-system/models/divider.svelte';

	let props: DividerProps = $props();
	const state = createDividerState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				orientation: _orientation,
				label: _label,
				align: _align,
				dashed: _dashed,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

{#if state.isHorizontal}
	<div class="flex items-center text-sm text-[--color-text-secondary] {props.class ?? ''}" {...restProps}>
		<span class="{state.leftLineFlex} border-t {state.baseLineClass}"></span>
		{#if props.label}
			<span class="px-3 text-xs font-medium tracking-widest text-[--color-text-tertiary] uppercase">
				{props.label}
			</span>
		{/if}
		<span class="{state.rightLineFlex} border-t {state.baseLineClass}"></span>
	</div>
{:else}
	<div
		class="inline-block h-full w-px border-l {state.baseLineClass} {props.class ?? ''}"
		aria-hidden="true"
		{...restProps}
	></div>
{/if}
