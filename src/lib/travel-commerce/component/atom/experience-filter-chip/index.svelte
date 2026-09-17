<script lang="ts">
	import VectorScene from '$stylist/animation/component/atom/vector-scene/index.svelte';

	type Props = {
		label: string;
		active?: boolean;
		tone?: string;
		motif?: { id: string; d: string; fill?: string; stroke?: string; strokeWidth?: number }[];
		onToggle?: () => void;
	};

	let { label, active = false, tone = '#227d91', motif, onToggle }: Props = $props();

	const motifLayers = $derived(
		motif?.map((layer) => ({
			...layer,
			fill: layer.fill ?? (active ? 'white' : tone),
			stroke: layer.stroke === 'currentColor' ? (active ? 'white' : tone) : layer.stroke
		}))
	);
</script>

<button
	type="button"
	class="tc-filter-chip"
	data-active={active || undefined}
	style:--tc-filter-tone={tone}
	aria-pressed={active}
	onclick={() => onToggle?.()}
>
	{#if motifLayers && motifLayers.length > 0}
		<VectorScene
			mode="interaction"
			{active}
			viewBox="0 0 24 24"
			layers={motifLayers}
			class="tc-filter-chip__motif"
		/>
	{:else}
		<span aria-hidden="true"></span>
	{/if}
	{label}
</button>

<style>
	.tc-filter-chip {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		border: 1px solid color-mix(in srgb, var(--tc-filter-tone) 24%, rgba(23, 35, 31, 0.14));
		border-radius: 999px;
		padding: 10px 14px;
		background: rgba(255, 255, 255, 0.72);
		color: #17231f;
		font-weight: 650;
		cursor: pointer;
		transition:
			background 180ms ease,
			color 180ms ease,
			transform 180ms ease;
	}

	.tc-filter-chip span {
		width: 9px;
		height: 9px;
		border-radius: 999px;
		background: var(--tc-filter-tone);
		box-shadow: 0 0 0 5px color-mix(in srgb, var(--tc-filter-tone) 16%, transparent);
	}

	.tc-filter-chip :global(.tc-filter-chip__motif) {
		width: 16px;
		height: 16px;
		flex: none;
	}

	.tc-filter-chip[data-active] {
		background: var(--tc-filter-tone);
		color: white;
		transform: translateY(-1px);
	}

	.tc-filter-chip[data-active] span {
		background: white;
		box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.18);
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-filter-chip {
			transition: none;
			transform: none;
		}
	}
</style>
