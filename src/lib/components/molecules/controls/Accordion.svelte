<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { ChevronDown } from 'lucide-svelte';
  import { AccordionStyleManager } from './Accordion.styles';

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(AccordionStyleManager.getContainerClass(className));
  const chevronClass = $derived(AccordionStyleManager.getChevronClass(isExpanded(items[0]?.id)));
</script>

<div class={containerClass} {...restProps}>
  {#each items as item}
    <div class={AccordionStyleManager.getItemClass(itemClass)}>
      <h3 class="m-0">
        <button
          type="button"
          class={AccordionStyleManager.getHeaderClass(isExpanded(item.id), item.disabled || false, headerClass)}
          onclick={() => !item.disabled && toggleAccordion(item.id)}
          aria-expanded={isExpanded(item.id)}
          aria-controls={`panel-${item.id}`}
        >
          <span>{item.title}</span>
          <ChevronDown
            class={AccordionStyleManager.getChevronClass(isExpanded(item.id))}
          />
        </button>
      </h3>

      <div
        id={`panel-${item.id}`}
        role="region"
        aria-labelledby={`accordion-header-${item.id}`}
        class={AccordionStyleManager.getContentPanelClass(isExpanded(item.id), contentClass)}
      >
        <div class={AccordionStyleManager.getContentWrapperClass()}>
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
