<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import RecipePlaygroundErrorBoundary from './index.svelte';

</script>

<Story
  component={RecipePlaygroundErrorBoundary}
  title="Playground Error Boundary"
  description="Error boundary wrapper for dynamic component rendering."
>
  {#snippet children()}
    <RecipePlaygroundErrorBoundary component={null}>
      {#snippet children()}
        <div class="rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-700">
          Boundary active. Inject a runtime error in this area to test fallback UI.
        </div>
      {/snippet}
    </RecipePlaygroundErrorBoundary>
  {/snippet}
</Story>


