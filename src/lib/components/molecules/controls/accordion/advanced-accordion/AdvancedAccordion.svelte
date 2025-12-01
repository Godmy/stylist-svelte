<script lang="ts">
  import type { IAdvancedAccordionProps, IAdvancedAccordionItem } from './types';
  import { AdvancedAccordionStyleManager } from './styles';

  let {
    items = [],
    class: className = ''
  }: IAdvancedAccordionProps = $props();

  let activeIndex = $state(0);
</script>

<div class={AdvancedAccordionStyleManager.getContainerClass(className)}>
  {#each items as item, i}
    <div class={AdvancedAccordionStyleManager.getItemClass()}>
      <button
        type="button"
        class={AdvancedAccordionStyleManager.getHeaderClass(i === activeIndex)}
        onclick={() => (activeIndex = i)}
      >
        <span>{item.title}</span>
        <svg
          class={AdvancedAccordionStyleManager.getChevronClass(i === activeIndex)}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {#if activeIndex === i}
        <div class={AdvancedAccordionStyleManager.getContentPanelClass()}>
          {@render item.content()}
        </div>
      {/if}
    </div>
  {/each}
</div>