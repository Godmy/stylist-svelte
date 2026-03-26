<script lang="ts">
	import { useSemanticZoom } from '$stylist/architecture/function/semantic-zoom';
	import type { SceneCamera } from '$stylist/architecture/type/attribute/camera';
	import type { SceneNode } from '$stylist/architecture/type/attribute/scene-node';

	type Props = {
		node: SceneNode;
		camera: SceneCamera;
		selected?: boolean;
		class?: string;
		onselect?: (node: SceneNode) => void;
	};

	let { node, camera, selected = false, class: className = '', onselect }: Props = $props();

	const zoom = useSemanticZoom({
		node,
		get cameraDepth() {
			return camera.depth;
		}
	});

	const presentation = $derived.by(() => zoom.presentation);
	const projectedScale = $derived.by(() => presentation.scale * camera.zoom);

	const shellStyle = $derived.by(
		() =>
		[
			`left:${(node.position.x - camera.x) * camera.zoom}px`,
			`top:${(node.position.y - camera.y) * camera.zoom}px`,
			`width:${presentation.width}px`,
			`min-height:${presentation.height}px`,
			`transform:translate(-50%, -50%) scale(${projectedScale})`,
			`border-color:${node.accent}`,
			`box-shadow:${selected ? `0 0 0 2px ${node.accent}` : 'none'}`
		].join(';')
	);

	const showCard = $derived.by(
		() =>
			presentation.stage === 'compact' ||
			presentation.stage === 'detailed' ||
			presentation.stage === 'screen'
	);
</script>

<button
	type="button"
	class={`presenter-node-shell presenter-node-shell--stage-${presentation.stage} presenter-node-shell--architecture-${presentation.architecture} presenter-node-shell--layer-${presentation.layer} ${selected ? 'presenter-node-shell--selected' : ''} ${className}`.trim()}
	style={shellStyle}
	data-stage={presentation.stage}
	data-architecture={presentation.architecture}
	data-layer={presentation.layer}
	aria-pressed={selected}
	aria-label={`Focus ${node.title}`}
	onclick={() => onselect?.(node)}
>
	{#if presentation.stage === 'dot'}
		<span class="presenter-node-shell__star" aria-hidden="true"></span>
	{:else}
		<div class="presenter-node-shell__body">
			{#if presentation.showIcon}
				<div class="presenter-node-shell__icon" aria-hidden="true">
					{node.iconText ?? node.title.slice(0, 1)}
				</div>
			{/if}

			{#if presentation.showLabel}
				<div class="presenter-node-shell__copy">
					<div class="presenter-node-shell__title">{node.label ?? node.title}</div>
					{#if showCard && node.description}
						<div class="presenter-node-shell__description">{node.description}</div>
					{/if}
				</div>
			{/if}

			{#if presentation.showChildren && node.children?.length}
				<div class="presenter-node-shell__meta">
					{node.children.length} linked
				</div>
			{/if}
		</div>
	{/if}
</button>

<style>
	.presenter-node-shell {
		position: absolute;
		display: block;
		padding: 0;
		background: color-mix(in srgb, var(--color-background-primary) 92%, white 8%);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-lg);
		color: var(--color-text-primary);
		transform-origin: center center;
		transition:
			transform var(--duration-240) var(--animation-ease),
			box-shadow var(--duration-160) var(--animation-ease),
			background-color var(--duration-160) var(--animation-ease);
		cursor: pointer;
	}

	.presenter-node-shell:hover {
		background: color-mix(in srgb, var(--color-background-primary) 84%, white 16%);
	}

	.presenter-node-shell--stage-dot {
		width: 16px;
		min-height: 16px;
		border-radius: 999px;
		border-style: solid;
		background: transparent;
	}

	.presenter-node-shell__star {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 999px;
		background: currentColor;
		box-shadow: 0 0 18px color-mix(in srgb, currentColor 60%, transparent 40%);
	}

	.presenter-node-shell__body {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-3);
		text-align: left;
	}

	.presenter-node-shell__icon {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 999px;
		background: color-mix(in srgb, currentColor 16%, transparent 84%);
		font-size: var(--font-size-3);
		font-weight: 700;
	}

	.presenter-node-shell__copy {
		min-width: 0;
	}

	.presenter-node-shell__title {
		font-size: var(--font-size-3);
		font-weight: 600;
		line-height: 1.2;
	}

	.presenter-node-shell__description {
		margin-top: var(--spacing-1);
		font-size: var(--font-size-2);
		color: var(--color-text-secondary);
	}

	.presenter-node-shell__meta {
		margin-left: auto;
		font-size: var(--font-size-1);
		color: var(--color-text-secondary);
		white-space: nowrap;
	}

	.presenter-node-shell--stage-icon,
	.presenter-node-shell--stage-minimal {
		border-radius: 999px;
	}

	.presenter-node-shell--stage-screen {
		max-width: min(32rem, 80vw);
	}
</style>

