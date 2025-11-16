<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Tag } from '$lib/components/atoms';

  type Props = {
    title: string;
    description?: string;
    time?: string;
    unread?: boolean;
    tags?: string[];
    actions?: Snippet;
    class?: string;
  };

  let {
    title,
    description,
    time,
    unread = false,
    tags = [],
    actions,
    class: className = ''
  }: Props = $props();
</script>

<article class="flex gap-4 rounded-lg border border-gray-200 bg-white p-4 transition hover:border-indigo-300 hover:shadow-sm {className}">
  <div class="mt-1">
    <span class="inline-flex h-2.5 w-2.5 rounded-full {unread ? 'bg-indigo-500' : 'border border-gray-300'}"></span>
  </div>

  <div class="flex-1 space-y-2">
    <div class="flex flex-wrap items-start gap-2">
      <h4 class="text-sm font-semibold text-gray-900">{title}</h4>
      {#if time}
        <span class="text-xs text-gray-400">{time}</span>
      {/if}
    </div>

    {#if description}
      <p class="text-sm text-gray-600">{description}</p>
    {/if}

    {#if tags.length > 0}
      <div class="flex flex-wrap gap-2">
        {#each tags as tag (tag)}
          <Tag text={tag} variant="neutral" closable={false} size="sm" />
        {/each}
      </div>
    {/if}
  </div>

  {#if actions}
    <div class="flex flex-shrink-0 items-start gap-2">
      {@render actions()}
    </div>
  {/if}
</article>
