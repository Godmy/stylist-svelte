<script lang="ts">
  import type { IAdvancedAccordionProps } from '$stylist/control/interface/component/advanced-accordion';
  import { AdvancedAccordionStyleManager } from '$stylist/control/class/style-manager/advanced-accordion';
  import { createAdvancedAccordionState } from '$stylist/control/function/state/advanced-accordion';

  let {
    items = [],
    class: className = ''
  }: IAdvancedAccordionProps = $props();
  const state = createAdvancedAccordionState({ items, class: className });
</script>

<div class={AdvancedAccordionStyleManager.getContainerClass(className)}>
  {#each items as item, i}
    <div class={AdvancedAccordionStyleManager.getItemClass()}>
      <button
        type="button"
        class={AdvancedAccordionStyleManager.getHeaderClass(i === state.activeIndex)}
        onclick={() => state.setActiveIndex(i)}
      >
        <span>{item.title}</span>
        <svg
          class={AdvancedAccordionStyleManager.getChevronClass(i === state.activeIndex)}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {#if state.activeIndex === i}
        <div class={AdvancedAccordionStyleManager.getContentPanelClass()}>
          {@render item.content()}
        </div>
      {/if}
    </div>
  {/each}
</div>





