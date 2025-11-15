<script lang="ts">
  import { StoryRoot } from '$lib/playground';

  type StoryModule = {
    default: any;
  };

  // @ts-ignore: import.meta.glob might not be typed in this context
  const modules = import.meta.glob('$lib/components/**/*.story.svelte', {
    eager: true
  }) as Record<string, StoryModule>;

  const stories = Object.entries(modules)
    .map(([path, module]) => ({
      path,
      component: module?.default
    }))
    .filter((entry) => entry.component)
    .sort((a, b) => a.path.localeCompare(b.path));
</script>

{#if stories.length > 0}
  <StoryRoot title="Stylist Component Playground">
    {#each stories as story (story.path)}
      <svelte:component this={story.component} />
    {/each}
  </StoryRoot>
{:else}
  <div class="min-h-screen flex flex-col items-center justify-center gap-4 text-center text-gray-600">
    <h1 class="text-2xl font-semibold text-gray-800">No stories yet</h1>
    <p class="max-w-md">
      Add co-located <code>.story.svelte</code> files next to your components in <code>src/lib/components</code>
      to see them appear in the playground.
    </p>
  </div>
{/if}
