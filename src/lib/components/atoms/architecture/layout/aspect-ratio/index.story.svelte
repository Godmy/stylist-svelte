<script lang="ts">
	import AspectRatio from './index.svelte';

	let ratio = 1;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">AspectRatio</h1>

	<div class="mb-6 flex items-center gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Ratio</span>
			<input type="number" bind:value={ratio} step="0.25" class="w-24 rounded border p-1" />
		</label>
	</div>

	<AspectRatio {ratio}>
		{#snippet children()}
			<div class="h-full w-full bg-slate-200" />
		{/snippet}
	</AspectRatio>
</div>
