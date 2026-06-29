<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CubeControl from './index.svelte';
	import type { CubeDebugLogEntry } from '$stylist/control/type/struct/cube-debug-log-entry';
	import type { Point2D } from '$stylist/architecture/type/struct/point-2d';
	import type { CubeSelectionState } from '$stylist/control/type/struct/cube-selection-state';

	let currentRotation = $state<Point2D>({ x: -22, y: 32 });
	let selectionState = $state<CubeSelectionState>({
		selectedIconId: null,
		selectedTitleFace: null,
		selectedCellByFace: [-1, -1, -1, -1, -1, -1]
	});
	let debugLogs = $state<CubeDebugLogEntry[]>([]);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'size', type: 'number', defaultValue: 380, min: 80, max: 520, step: 10 },
		{ name: 'perspective', type: 'number', defaultValue: 700, min: 300, max: 1400, step: 50 },
		{ name: 'rotationDuration', type: 'number', defaultValue: 24, min: 2, max: 40, step: 1 },
		{ name: 'autoRotate', type: 'boolean', defaultValue: true },
		{ name: 'interactive', type: 'boolean', defaultValue: true },
		{ name: 'inertiaEnabled', type: 'boolean', defaultValue: true },
		{
			name: 'inertiaFriction',
			type: 'number',
			defaultValue: 0.94,
			min: 0.82,
			max: 0.99,
			step: 0.01
		},
		{ name: 'inertiaSensitivity', type: 'number', defaultValue: 1, min: 0.2, max: 3, step: 0.1 },
		{ name: 'faceLabels', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="atoms-cube-control"
	title="CubeControl"
	category="Atoms/Interaction/Controls"
	component={CubeControl}
	description="Interactive CSS 3D cube control with drag rotation, auto-rotate mode, and directional actions."
	tags={['cube', '3d', 'control', 'interaction', 'css-3d']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<CubeControl
				size={values.size}
				perspective={values.perspective}
				rotationDuration={values.rotationDuration}
				autoRotate={values.autoRotate}
				interactive={values.interactive}
				inertiaEnabled={values.inertiaEnabled}
				inertiaFriction={values.inertiaFriction}
				inertiaSensitivity={values.inertiaSensitivity}
				faceLabels={values.faceLabels}
				onRotate={(rotation) => (currentRotation = rotation)}
				onSelectionChange={(selection) => (selectionState = selection)}
				onDebugLog={(entry) => {
					debugLogs = [...debugLogs.slice(-19), entry];
				}}
			/>

			<p class="_c2">
				Rotation X: {currentRotation.x.toFixed(1)}deg, Rotation Y: {currentRotation.y.toFixed(1)}deg
			</p>
			<p class="_c3">Tip: hold and drag inside the cube area to rotate manually.</p>
			<p class="_c4">
				Selected icon: {selectionState.selectedIconId ?? 'none'} | Selected title face: {selectionState.selectedTitleFace ??
					'none'}
			</p>
			<div class="_c5">
				<p class="_c6">Click Log (last {debugLogs.length})</p>
				<div class="_c7">
					{#each debugLogs as log}
						<div class="_c8">
							{new Date(log.ts).toLocaleTimeString()} | {log.source}:{log.action}
							{#if log.id}
								| {log.id}{/if}
							{#if log.faceIndex !== undefined}
								| f={log.faceIndex}{/if}
							{#if log.cellIndex !== undefined}
								| c={log.cellIndex}{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
	._c2 {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-tertiary);
	}
	._c4 {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c5 {
		margin-top: 0.75rem;
		border-radius: 0.375rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c6 {
		margin-bottom: 0.25rem;
		font-weight: 600;
	}
	._c7 {
		max-height: 10rem;
		overflow: auto;
	}
	._c7 > * + * {
		margin-top: 0.25rem;
	}
	._c8 {
		font-family: ui-monospace, monospace;
	}

	._c5 {
		background-color: color-mix(in srgb, var(--color-background-primary) 50%, transparent);
	}
</style>
