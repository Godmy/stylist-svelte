<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import createToolbarState from './state.svelte';
	import { toolbarHandleExport } from '$stylist/control/function/script/toolbar-handle-export';
	import { toolbarHandleFitView } from '$stylist/control/function/script/toolbar-handle-fit-view';
	import { toolbarHandleLegendToggle } from '$stylist/control/function/script/toolbar-handle-legend-toggle';
	import { toolbarHandleResetView } from '$stylist/control/function/script/toolbar-handle-reset-view';
	import { toolbarHandleSearchToggle } from '$stylist/control/function/script/toolbar-handle-search-toggle';
	import { toolbarHandleZoomOut } from '$stylist/control/function/script/toolbar-handle-zoom-out';
	import { toolbarHandleZoomIn } from '$stylist/control/function/script/toolbar';
	import type { ExportFormat } from '$stylist/file/type/alias/export-format';

	let props = $props<{
		onZoomIn?: () => void;
		onZoomOut?: () => void;
		onFitView?: () => void;
		onResetView?: () => void;
		onExportImage?: (format: ExportFormat) => void;
		onToggleLegend?: () => void;
		onToggleSearch?: () => void;
	}>();

	const state = createToolbarState();
</script>

<div class="toolbar">
	<div class="toolbar-group">
		<Button size="sm" onclick={() => toolbarHandleZoomIn(props.onZoomIn)}>
			<span>+</span> <span>Zoom In</span>
		</Button>
		<Button size="sm" onclick={() => toolbarHandleZoomOut(props.onZoomOut)}>
			<span>-</span> <span>Zoom Out</span>
		</Button>
		<Button size="sm" onclick={() => toolbarHandleFitView(props.onFitView)}>
			<span> Fit View</span>
		</Button>
		<Button size="sm" onclick={() => toolbarHandleResetView(props.onResetView)}>
			<span> Reset View</span>
		</Button>
	</div>

	<div class="toolbar-separator"></div>

	<div class="toolbar-group">
		<Button size="sm" onclick={() => toolbarHandleExport('png', props.onExportImage)}>
			<span> PNG</span>
		</Button>
		<Button size="sm" onclick={() => toolbarHandleExport('jpeg', props.onExportImage)}>
			<span> JPEG</span>
		</Button>
		<Button size="sm" onclick={() => toolbarHandleExport('svg', props.onExportImage)}>
			<span> SVG</span>
		</Button>
	</div>

	<div class="toolbar-separator"></div>

	<div class="toolbar-group">
		<Button
			size="sm"
			variant={state.isLegendVisible ? 'primary' : 'secondary'}
			onclick={() => toolbarHandleLegendToggle(state.isLegendVisible, props.onToggleLegend)}
		>
			<span> Legend</span>
		</Button>
		<Button
			size="sm"
			variant={state.isSearchVisible ? 'primary' : 'secondary'}
			onclick={() => toolbarHandleSearchToggle(state.isSearchVisible, props.onToggleSearch)}
		>
			<span> Search</span>
		</Button>
	</div>
</div>

<style>
	.toolbar {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
		background-color: white;
		border-radius: var(--layout-border-radius-lg, 0.5rem);
		border: 1px solid var(--color-border-primary);
		box-shadow: var(
			--layout-box-shadow-custom40,
			0 4px 6px color-mix(in srgb, var(--color-text-primary) 5%, transparent)
		);
	}

	.toolbar-group {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.toolbar-separator {
		height: 1px;
		background-color: var(--color-border-primary);
		margin: 0.25rem 0;
	}
</style>
