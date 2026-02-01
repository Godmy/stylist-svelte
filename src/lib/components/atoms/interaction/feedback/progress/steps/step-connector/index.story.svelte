<script lang="ts">
  import StepConnector from './step-connector/index.svelte';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">StepConnector Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default StepConnector</h2>
    <div class="flex items-center">
      <span>Step 1</span>
      <StepConnector />
      <span>Step 2</span>
      <StepConnector>Custom Content</StepConnector>
      <span>Step 3</span>
    </div>
  </div>
</div>

