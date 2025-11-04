<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { playgroundStore } from '../stores/playground.svelte';
  import type { StoryConfig, ControlConfig } from '../types';

  type Props = {
    id: string;
    title: string;
    component?: any;
    description?: string;
    category?: string;
    controls?: ControlConfig[];
    children?: any;
  };

  let {
    id,
    title,
    component,
    description,
    category = 'Components',
    controls = [],
    children
  }: Props = $props();

  // Register story on mount
  onMount(() => {
    const storyConfig: StoryConfig = {
      id,
      title,
      component,
      description,
      category,
      controls
    };

    playgroundStore.registerStory(storyConfig);
  });

  // Unregister on destroy
  onDestroy(() => {
    playgroundStore.unregisterStory(id);
  });

  // Get reactive control values
  let controlValues = $derived(playgroundStore.controlValues);
</script>

<div class="w-full h-full">
  {#if children}
    {@render children(controlValues)}
  {/if}
</div>
