<script lang="ts">
	import SkeletonText from './index.svelte';
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	let lines = $state(3);
	let width = $state(80);
	let animate = $state(true);

	const controls: ControlConfig[] = [
		{ name: 'lines', type: 'number', min: 1, max: 6, step: 1, defaultValue: 3 },
		{ name: 'width', type: 'number', min: 30, max: 100, step: 5, defaultValue: 80 },
		{ name: 'animate', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={SkeletonText} {controls}>
	<div class="space-y-4 p-6">
		{#each Array.from({ length: lines }) as _, index}
			<SkeletonText
				width={`${Math.max(40, width - index * 8)}%`}
				class={animate ? '' : '!animate-none'}
			/>
		{/each}

		<div class="grid gap-3 md:grid-cols-2">
			<label class="flex flex-col gap-1 text-sm">
				Lines ({lines})
				<input type="range" min="1" max="6" step="1" bind:value={lines} />
			</label>
			<label class="flex flex-col gap-1 text-sm">
				Base width ({width}%)
				<input type="range" min="30" max="100" step="5" bind:value={width} />
			</label>
			<label class="flex items-center gap-2 text-sm">
				<input type="checkbox" bind:checked={animate} />
				Animate pulse
			</label>
		</div>
	</div>
</Story>



