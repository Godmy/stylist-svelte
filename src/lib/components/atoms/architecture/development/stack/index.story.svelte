<script lang="ts">
	import Stack from './index.svelte';

	let direction: 'vertical' | 'horizontal' = 'vertical';
	let spacing: string | number = '1rem';
	let align: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = 'stretch';
	let justify: 'start' | 'center' | 'end' | 'between' | 'around' = 'start';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Stack</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Direction</span>
			<select bind:value={direction} class="rounded border p-1">
				<option value="vertical">vertical</option>
				<option value="horizontal">horizontal</option>
			</select>
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Spacing</span>
			<input type="text" bind:value={spacing} class="w-24 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Align</span>
			<select bind:value={align} class="rounded border p-1">
				<option value="start">start</option>
				<option value="center">center</option>
				<option value="end">end</option>
				<option value="stretch">stretch</option>
				<option value="baseline">baseline</option>
			</select>
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Justify</span>
			<select bind:value={justify} class="rounded border p-1">
				<option value="start">start</option>
				<option value="center">center</option>
				<option value="end">end</option>
				<option value="between">between</option>
				<option value="around">around</option>
			</select>
		</label>
	</div>

	<Stack {direction} {spacing} {align} {justify}>
		{#snippet children()}
			<div class="rounded bg-slate-100 p-2">Item A</div>
			<div class="rounded bg-slate-100 p-2">Item B</div>
			<div class="rounded bg-slate-100 p-2">Item C</div>
		{/snippet}
	</Stack>
</div>
