<script lang="ts">
	let {
		accent = 'var(--color-accent, #3498db)',
		size = 16,
		opacity = 0.8
	}: {
		accent?: string;
		size?: number;
		opacity?: number;
	} = $props();
</script>

<div
	class="node-dot"
	style={`width: ${size}px; height: ${size}px; background: ${accent}; opacity: ${opacity}; box-shadow: 0 0 8px color-mix(in srgb, ${accent} 60%, transparent);`}
	role="img"
	aria-label="Node dot"
></div>

<style>
	.node-dot {
		border-radius: 9999px;
		transition: all 180ms var(--easing-standard, ease);
	}
</style>
