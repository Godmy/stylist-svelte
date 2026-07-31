<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import ConcentricCirclesScene from '$stylist/webgl/component/molecule/concentric-circles-scene/index.svelte';

	type Props = {
		ringCount?: number;
		label?: string;
	};

	let { ringCount = 100, label = 'Open fullscreen' }: Props = $props();

	let container: HTMLDivElement;
	let isFullscreen = $state(false);

	function handleFullscreenChange() {
		isFullscreen = document.fullscreenElement === container;
	}

	function open() {
		container.requestFullscreen();
	}

	$effect(() => {
		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
	});
</script>

<div bind:this={container} class="concentric-circles-launcher">
	{#if isFullscreen}
		<ConcentricCirclesScene {ringCount} />
	{:else}
		<Button variant="primary" size="lg" onclick={open}>{label}</Button>
	{/if}
</div>

<style>
	.concentric-circles-launcher {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.concentric-circles-launcher:fullscreen {
		background: #000;
	}
</style>
