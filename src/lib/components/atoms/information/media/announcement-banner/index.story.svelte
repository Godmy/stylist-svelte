<script lang="ts">
	import AnnouncementBanner from './index.svelte';

	let title = 'New feature';
	let description = 'Try our new announcement banner component.';
	let icon = '';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">AnnouncementBanner</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Title</span>
			<input type="text" bind:value={title} class="w-64 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Description</span>
			<input type="text" bind:value={description} class="w-64 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Icon URL</span>
			<input type="text" bind:value={icon} class="w-64 rounded border p-1" />
		</label>
	</div>

	<AnnouncementBanner {title} {description} {icon}>
		<div>Extra content slot</div>
	</AnnouncementBanner>
</div>
