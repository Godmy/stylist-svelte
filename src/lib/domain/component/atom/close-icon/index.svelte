<script lang="ts">
	import { Icon } from '$stylist';

	let {
		expanded = false,
		onClick
	}: {
		expanded?: boolean;
		onClick?: () => void;
	} = $props();
</script>

<button type="button" class="close-bubble" class:expanded onclick={onClick} aria-label="Close card">
	<Icon name="x" size={14} container="none" />
</button>

<style>
	.close-bubble {
		position: absolute;
		top: 24px;
		right: 24px;
		width: 48px;
		height: 48px;
		border-radius: 999px;
		border: 1px solid rgba(29, 78, 216, 0.72);
		background: linear-gradient(145deg, #0f172a 0%, #1e3a8a 100%);
		display: grid;
		place-items: center;
		cursor: pointer;
		box-shadow: 0 8px 16px rgba(29, 144, 245, 0.26);
		transform: translate(50%, -50%) scale(0.6) rotate(-35deg);
		opacity: 0;
		transition:
			transform 380ms ease,
			opacity 260ms ease;
		z-index: 400;
	}

	.close-bubble.expanded {
		transform: translate(50%, -50%) scale(1) rotate(0deg);
		opacity: 1;
	}

	.close-bubble :global(svg) {
		color: rgba(255, 255, 255, 0.9);
		filter: drop-shadow(0 0 0.6px rgba(255, 255, 255, 0.35));
	}
</style>
