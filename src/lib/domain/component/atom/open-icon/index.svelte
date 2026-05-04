<script lang="ts">
	import { Icon } from '$stylist';

	let {
		orbitOpen = false,
		dragging = false,
		style = '',
		onPointerDown,
		onClick
	}: {
		orbitOpen?: boolean;
		dragging?: boolean;
		style?: string;
		onPointerDown?: (event: PointerEvent) => void;
		onClick?: () => void;
	} = $props();
</script>

<button
	type="button"
	class="seed-icon"
	class:orbit-open={orbitOpen}
	class:dragging
	{style}
	onpointerdown={onPointerDown}
	onclick={onClick}
	aria-label="Toggle L6 controls"
>
	<span class="seed-face icon-face" aria-hidden={orbitOpen}>
		<Icon name="ontology-node-component" size={14} container="none" />
	</span>
	<span class="seed-face close-face" aria-hidden={!orbitOpen}>
		<Icon name="x" size={14} container="none" />
	</span>
</button>

<style>
	.seed-icon {
		position: absolute;
		width: 48px;
		height: 48px;
		border-radius: 999px;
		border: 1px solid #1d4ed8;
		background: linear-gradient(145deg, #0f172a 0%, #1e3a8a 100%);
		color: #fff;
		display: grid;
		place-items: center;
		cursor: pointer;
		z-index: 400;
		box-shadow: 0 12px 22px rgba(15, 23, 42, 0.32);
		touch-action: none;
	}

	.seed-face {
		position: absolute;
		display: grid;
		place-items: center;
		transition:
			opacity 180ms ease,
			transform 220ms ease;
	}

	.icon-face {
		opacity: 1;
		transform: scale(1) rotate(0deg);
	}

	.close-face {
		opacity: 0;
		transform: scale(0.6) rotate(-40deg);
	}

	.seed-icon.orbit-open .icon-face {
		opacity: 0;
		transform: scale(0.6) rotate(40deg);
	}

	.seed-icon.orbit-open .close-face {
		opacity: 1;
		transform: scale(1) rotate(0deg);
	}

	.seed-icon:hover,
	.seed-icon.dragging {
		border-color: #60a5fa;
		box-shadow:
			0 0 0 2px rgba(96, 165, 250, 0.28),
			0 10px 20px rgba(15, 23, 42, 0.3);
	}

	.seed-icon.dragging {
		cursor: grabbing;
	}
</style>
