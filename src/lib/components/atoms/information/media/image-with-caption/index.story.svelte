<script lang="ts">
	import ImageWithCaption from './index.svelte';

	let src = 'https://placehold.co/640x360';
	let caption = 'Example caption';
	let rounded = false;
	let bordered = true;
	let shadow = true;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">ImageWithCaption</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Src</span>
			<input type="text" bind:value={src} class="w-64 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Caption</span>
			<input type="text" bind:value={caption} class="w-64 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Rounded</span>
			<input type="checkbox" bind:checked={rounded} />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Bordered</span>
			<input type="checkbox" bind:checked={bordered} />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Shadow</span>
			<input type="checkbox" bind:checked={shadow} />
		</label>
	</div>

	<div class="max-w-xl">
		<ImageWithCaption {src} {caption} {rounded} {bordered} {shadow} />
	</div>
</div>
