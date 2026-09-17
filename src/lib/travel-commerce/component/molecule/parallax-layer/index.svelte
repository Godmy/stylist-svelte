<script lang="ts">
	type Props = {
		progress?: number;
		depth?: number;
		class?: string;
		children?: import('svelte').Snippet;
	};

	let props: Props = $props();
	const progress = $derived(props.progress ?? 0);
	const depth = $derived(props.depth ?? 1);
	const transform = $derived(`translate3d(0, ${progress * depth * -64}px, 0) scale(${1 + progress * 0.04})`);
</script>

<div class={['tc-parallax-layer', props.class].filter(Boolean).join(' ')} style:transform>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.tc-parallax-layer {
		position: absolute;
		inset: 0;
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-parallax-layer {
			transform: none !important;
		}
	}
</style>
