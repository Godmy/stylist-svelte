<script lang="ts">
  import { onMount } from 'svelte';
  import { playgroundStore } from '../stores/playground.svelte';
  import type { StoryConfig, ControlConfig } from '../types';
  import MarkdownRenderer from './MarkdownRenderer.svelte';

  type Props = {
    id: string;
    title: string;
    component?: any;
    description?: string;
    category?: string;
    controls?: ControlConfig[];
    tags?: string[];
    docs?: string;
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
    docs,
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
      tags,
      docs
    };

    if (component) {
      playgroundStore.registerStory(storyConfig);
    }
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
  {#if isActive}
    <div class="space-y-6">
      {#if docs}
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <MarkdownRenderer content={docs} />
        </div>
      {/if}

      {#if children}
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          {@render children(controlValues)}
        </div>
      {/if}
    </div>
  {/if}
</div>
