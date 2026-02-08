<script lang="ts">
	import Container from './index.svelte';

	let maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' = 'full';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Container</h1>

	<div class="mb-6 flex items-center gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Max width</span>
			<select bind:value={maxWidth} class="rounded border p-1">
				<option value="sm">sm</option>
				<option value="md">md</option>
				<option value="lg">lg</option>
				<option value="xl">xl</option>
				<option value="2xl">2xl</option>
				<option value="full">full</option>
			</select>
		</label>
	</div>

	<Container {maxWidth}>
		{#snippet children()}
			<div class="rounded bg-slate-100 p-4">Container content</div>
		{/snippet}
	</Container>
</div>
