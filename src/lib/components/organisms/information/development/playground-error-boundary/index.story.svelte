<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import PlaygroundErrorBoundary from './index.svelte';

</script>

<Story
  component={PlaygroundErrorBoundary}
  title="Playground Error Boundary"
  description="Error boundary wrapper for dynamic component rendering."
>
  {#snippet children()}
    <PlaygroundErrorBoundary component={null}>
      {#snippet children()}
        <div class="rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-700">
          Boundary active. Inject a runtime error in this area to test fallback UI.
        </div>
      {/snippet}
    </PlaygroundErrorBoundary>
  {/snippet}
</Story>
