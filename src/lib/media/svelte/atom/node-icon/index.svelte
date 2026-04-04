<script lang="ts">
	let {
		icon = '📦',
		size = 32,
		accent = 'var(--color-accent, #3498db)',
		background = 'var(--color-surface-primary, #ffffff)'
	}: {
		icon?: string;
		size?: number;
		accent?: string;
		background?: string;
	} = $props();
</script>

<div
	class="node-icon"
	style={`width: ${size}px; height: ${size}px; background: ${background};`}
	role="img"
	aria-label={icon}
>
	<span class="icon-text" style={`color: ${accent}; font-size: ${size * 0.6}px;`}>{icon}</span>
</div>

<style>
	.node-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-icon, 8px);
		box-shadow: var(--elevation-icon, 0 2px 4px rgba(0, 0, 0, 0.1));
		transition: all 200ms var(--easing-standard, ease);
	}

	.icon-text {
		line-height: 1;
	}
</style>
