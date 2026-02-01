<script lang="ts">
  import CardSkeleton from './index.svelte';

  let count: number = 3;
  let showAvatar: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CardSkeleton Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CardSkeleton</h2>
    <CardSkeleton {count} {showAvatar} />

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="card-count" class="block text-sm mb-1">Count:</label>
        <input
          id="card-count"
          type="number"
          min="1"
          max="10"
          bind:value={count}
          class="border rounded p-1 w-20"
        />
      </div>

      <div class="flex items-end">
        <label for="show-avatar" class="flex items-center gap-1">
          <input id="show-avatar" type="checkbox" bind:checked={showAvatar} />
          Show Avatar
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Different Counts</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Single Card</h3>
        <CardSkeleton count={1} showAvatar={false} />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Multiple Cards with Avatar</h3>
        <CardSkeleton count={2} showAvatar={true} />
      </div>
    </div>
  </div>
</div>
