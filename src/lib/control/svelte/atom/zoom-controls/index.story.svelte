<script lang="ts">
	import ZoomControls from './index.svelte';

	let zoom = $state(1);

	const handleZoomIn = () => {
		zoom = Math.min(5, zoom * 1.2);
	};

	const handleZoomOut = () => {
		zoom = Math.max(0.1, zoom / 1.2);
	};

	const handleReset = () => {
		zoom = 1;
	};
</script>

<div style="display: flex; gap: 20px; padding: 40px; background: #f5f5f5;">
	<ZoomControls {zoom} {onZoomIn: handleZoomIn} {onZoomOut: handleZoomOut} {onReset: handleReset} />
</div>

<div style="padding: 20px; font-family: monospace; font-size: 12px;">
	<p>Zoom Controls — управление масштабом</p>
	<p>Текущий zoom: {Math.round(zoom * 100)}%</p>
	<p>Кликните на + / - / сброс</p>
</div>
