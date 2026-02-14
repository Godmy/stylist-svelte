<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type TimelineItem = {
    id: string;
    title: string;
    content?: Snippet;
    date?: string;
    status?: 'completed' | 'current' | 'pending';
    icon?: Snippet;
  };

  type Props = {
    items: TimelineItem[];
    orientation?: 'vertical' | 'horizontal';
    class?: string;
    itemClass?: string;
    connectorClass?: string;
    iconClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    items = [],
    orientation = 'vertical',
    class: className = '',
    itemClass = '',
    connectorClass = '',
    iconClass = '',
    ...restProps
  }: Props = $props();
</script>

<div class={`w-full ${className} ${orientation === 'vertical' ? 'flex flex-col' : 'flex'}`} {...restProps}>
  {#each items as item, index}
    <div class={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row items-center'}`}>
      <!-- Timeline item -->
      <div class={`flex ${orientation === 'vertical' ? 'flex-row' : 'flex-col items-center'}`}>
        <!-- Icon/container for the timeline marker -->
        <div class={`flex items-center justify-center z-10 ${
          orientation === 'vertical' ? 'mr-4' : 'mb-4'
        }`}>
          {#if item.icon}
            <div class={`flex items-center justify-center w-8 h-8 rounded-full ${
              item.status === 'completed' ? 'bg-green-500 text-white' :
              item.status === 'current' ? 'bg-blue-500 text-white' :
              'bg-gray-300 text-gray-500'
            } ${iconClass}`}>
              {@render item.icon()}
            </div>
          {:else}
            <div class={`flex items-center justify-center w-8 h-8 rounded-full ${
              item.status === 'completed' ? 'bg-green-500 text-white' :
              item.status === 'current' ? 'bg-blue-500 text-white' :
              'bg-gray-300 text-gray-500'
            } ${iconClass}`}>
              {index + 1}
            </div>
          {/if}
        </div>

        <!-- Content -->
        <div class={`mb-6 ${itemClass} ${
          orientation === 'vertical' ? 'flex-1' : ''
        }`}>
          <div class={`p-4 rounded-lg ${
            item.status === 'completed' ? 'bg-green-50' :
            item.status === 'current' ? 'bg-blue-50' :
            'bg-gray-50'
          }`}>
            <div class="flex justify-between items-start">
              <h3 class="text-lg font-semibold text-gray-900">{item.title}</h3>
              {#if item.date}
                <span class="text-sm text-gray-500">{item.date}</span>
              {/if}
            </div>
            {#if item.content}
              <div class="mt-2 text-gray-600">
                {@render item.content()}
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- Connector line -->
      {#if index < items.length - 1}
        <div class={`${
          orientation === 'vertical' 
            ? 'absolute left-4 h-full w-0.5 bg-gray-200 ml-4' 
            : 'h-0.5 w-full bg-gray-200 mt-4'
        } ${connectorClass}`}></div>
      {/if}
    </div>
  {/each}
</div>
