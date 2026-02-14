<script lang="ts">
	import SkeletonRectangle from './index.svelte';
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	let width = $state(180);
	let height = $state(32);
	let animate = $state(true);

	const controls: ControlConfig[] = [
		{ name: 'width', type: 'number', min: 60, max: 400, step: 10, defaultValue: 180 },
		{ name: 'height', type: 'number', min: 12, max: 120, step: 4, defaultValue: 32 },
		{ name: 'animate', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={SkeletonRectangle} {controls}>
	{#snippet children()}
		{@const widthValue = `${Math.round(width)}px`}
		{@const heightValue = `${Math.round(height)}px`}
		{@const compactWidthValue = `${Math.round(width * 0.6)}px`}
		{@const tallWidthValue = `${Math.round(width * 0.9)}px`}
		{@const tallHeightValue = `${Math.round(height * 2)}px`}
		<div class="space-y-6 p-6">
			<div class="flex flex-col gap-3">
				<SkeletonRectangle {...({ width: widthValue, height: heightValue, class: animate ? '' : '!animate-none' } as any)} />
				<SkeletonRectangle {...({ width: compactWidthValue, height: heightValue, class: 'opacity-80' } as any)} />
				<SkeletonRectangle {...({ width: tallWidthValue, height: tallHeightValue, class: 'opacity-90' } as any)} />
			</div>

			<div class="grid gap-4 sm:grid-cols-2">
				<label class="flex flex-col gap-1 text-sm">
					Width ({Math.round(width)}px)
					<input type="range" min="60" max="400" step="10" bind:value={width} />
				</label>
				<label class="flex flex-col gap-1 text-sm">
					Height ({Math.round(height)}px)
					<input type="range" min="12" max="120" step="4" bind:value={height} />
				</label>
				<label class="flex items-center gap-2 text-sm">
					<input type="checkbox" bind:checked={animate} />
					Animate pulse
				</label>
			</div>
		</div>
	{/snippet}
</Story>



