<script lang="ts">
	import { PresetZoomToolbar } from '$stylist/control/const/preset/zoom-toolbar';
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import { createZoomToolbarState } from '$stylist/control/function/state/zoom-toolbar/index.svelte';
	import type { RecipeZoomToolbar } from '$stylist/control/interface/recipe/zoom-toolbar';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	let props: RecipeZoomToolbar = $props();
	const state = createZoomToolbarState(props);

	let restProps = $derived.by(() => {
		const {
			zoomLevel,
			minZoom,
			maxZoom,
			step,
			class: hostClass,
			buttonClass,
			onZoomChange,
			showReset,
			showPercentage,
			...rest
		} = props;
		return rest;
	});
</script>

<div class={state.rootClass} {...restProps}>
	<Button
		variant="ghost"
		size="sm"
		class={props.buttonClass}
		onclick={state.zoomOut}
		aria-label="Zoom out"
		disabled={state.currentZoom <= (props.minZoom ?? 50)}
	>
		<BaseIcon name={PresetZoomToolbar.ZoomOut} style="width:1rem;height:1rem;" aria-hidden="true" />
	</Button>

	{#if props.showPercentage !== false}
		<div class="c-zoom-toolbar__percentage">
			{Math.round(state.currentZoom)}%
		</div>
	{/if}

	<Button
		variant="ghost"
		size="sm"
		class={props.buttonClass}
		onclick={state.zoomIn}
		aria-label="Zoom in"
		disabled={state.currentZoom >= (props.maxZoom ?? 200)}
	>
		<BaseIcon name={PresetZoomToolbar.ZoomIn} style="width:1rem;height:1rem;" aria-hidden="true" />
	</Button>

	{#if props.showReset !== false}
		<div class="c-zoom-toolbar__divider"></div>
		<Button
			variant="ghost"
			size="sm"
			class={props.buttonClass}
			onclick={state.resetZoom}
			aria-label="Reset zoom"
		>
			<BaseIcon
				name={PresetZoomToolbar.RotateCcw}
				style="width:1rem;height:1rem;"
				aria-hidden="true"
			/>
		</Button>
	{/if}
</div>

<style>
	.c-zoom-toolbar {
		display: flex;
		align-items: center;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		overflow: hidden;
	}

	.c-zoom-toolbar__percentage {
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		min-width: 3.125rem;
		text-align: center;
	}

	.c-zoom-toolbar__divider {
		width: 1px;
		height: 100%;
		background: var(--color-border-primary);
	}
</style>
