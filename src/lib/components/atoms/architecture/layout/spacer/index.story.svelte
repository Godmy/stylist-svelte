<script lang="ts">
	import Spacer from './index.svelte';

	let size: string | number = 16;
	let axis: 'vertical' | 'horizontal' = 'vertical';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Spacer</h1>

	<div class="mb-6 flex flex-wrap items-center gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Size</span>
			<input type="number" bind:value={size} class="w-20 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Axis</span>
			<select bind:value={axis} class="rounded border p-1">
				<option value="vertical">vertical</option>
				<option value="horizontal">horizontal</option>
			</select>
		</label>
	</div>

	{#if axis === 'vertical'}
		<div class="inline-block bg-slate-100">
			<Spacer {size} {axis} />
		</div>
	{:else}
		<div class="flex items-center bg-slate-100 p-2">
			<span>Left</span>
			<Spacer {size} {axis} />
			<span>Right</span>
		</div>
	{/if}
</div>
