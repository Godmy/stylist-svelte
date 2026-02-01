<script lang="ts">
  import AnnouncementBanner from './index.svelte';

  let title = 'New feature';
  let description = 'Try our new announcement banner component.';
  let icon = '';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">AnnouncementBanner</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Title</span>
      <input type="text" bind:value={title} class="border rounded p-1 w-64" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Description</span>
      <input type="text" bind:value={description} class="border rounded p-1 w-64" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Icon URL</span>
      <input type="text" bind:value={icon} class="border rounded p-1 w-64" />
    </label>
  </div>

  <AnnouncementBanner {title} {description} {icon}>
    <div>Extra content slot</div>
  </AnnouncementBanner>
</div>
