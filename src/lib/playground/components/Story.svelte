<script lang="ts">
  import { onMount } from 'svelte';
  import { playgroundStore } from '../stores/playground.svelte';
  import type { StoryConfig, ControlConfig } from '../types';

  type Props = {
    id: string;
    title: string;
    component: any;
    description?: string;
    category?: string;
    controls?: ControlConfig[];
    tags?: string[];
    children?: any;
  };

  let {
    id,
    title,
    component,
    description,
    category = 'Components',
    controls = [],
    tags = [],
    children
  }: Props = $props();

  let controlValues = $derived(playgroundStore.controlValues);
  let currentStoryId = $derived(playgroundStore.state.currentStoryId);
  let isActive = $derived(currentStoryId === id);

  function syncStory() {
    const storyConfig: StoryConfig = {
      id,
      title,
      component,
      description,
      category,
      controls,
      tags
    };

    playgroundStore.registerStory(storyConfig);
  }

  let mounted = false;

  onMount(() => {
    mounted = true;
    syncStory();

    return () => {
      playgroundStore.unregisterStory(id);
    };
  });

  $effect(() => {
    if (!mounted) return;
    syncStory();
  });
</script>

<div class="w-full h-full">
  {#if isActive && children}
    {@render children(controlValues)}
  {/if}
</div>
