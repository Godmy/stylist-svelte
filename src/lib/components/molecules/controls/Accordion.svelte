<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { ChevronDown } from 'lucide-svelte';

  type AccordionItem = {
    id: string;
    title: string;
    content: Snippet | string;
    disabled?: boolean;
  };

  type Props = {
    items: AccordionItem[];
    multiple?: boolean;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    contentClass?: string;
  } & HTMLAttributes<HTMLElement>;

  let {
    items,
    multiple = false,
    class: className = '',
    itemClass = '',
    headerClass = '',
    contentClass = '',
    ...restProps
  }: Props = $props();

  let activeIds = $state<string[]>([]);

  function toggleAccordion(id: string) {
    if (activeIds.includes(id)) {
      activeIds = activeIds.filter(activeId => activeId !== id);
    } else {
      if (multiple) {
        activeIds = [...activeIds, id];
      } else {
        activeIds = [id];
      }
    }
  }

  function isExpanded(id: string): boolean {
    return activeIds.includes(id);
  }
</script>

<div class={`accordion-container ${className}`} {...restProps}>
  {#each items as item}
    <div class={`accordion-item border border-gray-200 rounded-lg mb-2 ${itemClass}`}>
      <h3 class="m-0">
        <button
          type="button"
          class={`w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-lg ${headerClass} ${
            isExpanded(item.id) ? 'bg-gray-50' : ''
          } ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          onclick={() => !item.disabled && toggleAccordion(item.id)}
          aria-expanded={isExpanded(item.id)}
          aria-controls={`panel-${item.id}`}
        >
          <span>{item.title}</span>
          <ChevronDown
            class={`w-5 h-5 transition-transform duration-200 ease-in-out ${
              isExpanded(item.id) ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>

      <div
        id={`panel-${item.id}`}
        role="region"
        aria-labelledby={`accordion-header-${item.id}`}
        class={`overflow-hidden transition-all duration-200 ease-in-out ${
          isExpanded(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${contentClass}`}
      >
        <div class="p-4 border-t border-gray-200">
          {#if typeof item.content === 'function'}
            {@render item.content()}
          {:else}
            {item.content}
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
