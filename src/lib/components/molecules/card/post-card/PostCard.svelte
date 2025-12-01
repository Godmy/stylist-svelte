<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title = '',
    subtitle = '',
    image = '',
    date = '',
    excerpt = '',
    author = '',
    tags = [],
    actions = [],
    class: className = ''
  } = $props<{
    title?: string;
    subtitle?: string;
    image?: string;
    date?: string;
    excerpt?: string;
    author?: string;
    tags?: string[];
    actions?: Array<{label: string, onClick: () => void}>;
    class?: string;
  }>();
</script>

<div class={`max-w-sm bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
  {#if image}
    <img src={image} alt={title} class="w-full h-48 object-cover" />
  {/if}
  <div class="p-6">
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-xl font-bold">{title}</h3>
      {#if date}
        <span class="text-sm text-gray-500">{date}</span>
      {/if}
    </div>
    {#if subtitle}
      <p class="text-gray-600 mb-3">{subtitle}</p>
    {/if}
    {#if excerpt}
      <p class="text-gray-800 mb-4">{excerpt}</p>
    {/if}
    <div class="flex items-center mb-4">
      {#if author}
        <span class="text-sm text-gray-600">By {author}</span>
      {/if}
      {#if tags.length > 0}
        <div class="ml-auto flex space-x-1">
          {#each tags as tag}
            <span class="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
    <div class="flex space-x-2">
      {#each actions as action, i}
        <button
          onclick={action.onClick}
          class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          {action.label}
        </button>
      {/each}
    </div>
  </div>
</div>