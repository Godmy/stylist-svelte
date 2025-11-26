<script lang="ts">
  import StepIcon from './StepIcon.svelte';
  import type { StepIconStatus } from './types';

  let status: StepIconStatus = 'pending';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">StepIcon Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">State examples</h2>
    <div class="flex gap-4 items-center">
      <StepIcon stepNumber={1} />
      <StepIcon stepNumber={2} status="active" />
      <StepIcon stepNumber={3} status="completed" />
      <StepIcon status="error" stepNumber={4} />
      <StepIcon>
        {#snippet children()}
          <span class="text-xs font-semibold tracking-wide">%</span>
        {/snippet}
      </StepIcon>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive demo</h2>
    <div class="flex flex-col gap-4">
      <StepIcon stepNumber={1} status={status} />

      <div class="flex gap-3 items-center">
        <label for="status-select" class="text-sm font-medium">Status</label>
        <select
          id="status-select"
          class="border rounded px-2 py-1 text-sm"
          bind:value={status}
        >
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="error">Error</option>
        </select>
      </div>
    </div>
  </div>
</div>
