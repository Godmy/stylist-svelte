<!--
/**
 * Accordion Component - Следует принципам SOLID:
 *
 * 1. Single Responsibility Principle (SRP):
 *    Компонент отвечает только за отображение аккордеона и управление его состоянием.
 *    Логика стилизации вынесена в AccordionStyleManager.
 *
 * 2. Open/Closed Principle (OCP):
 *    Легко расширяется через пропсы и CSS-переменные темы.
 *
 * 3. Liskov Substitution Principle (LSP):
 *    Соблюдает контракт, определённый интерфейсом IAccordionProps.
 *
 * 4. Interface Segregation Principle (ISP):
 *    Использует минимально необходимый интерфейс IAccordionProps.
 *
 * 5. Dependency Inversion Principle (DIP):
 *    Зависит от абстракции (типов и стилей) а не от конкретных реализаций.
 */
-->
<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';
  import { AccordionStyleManager } from '$stylist/design-system/styles/interaction/accordion';
  import type { IAccordionProps } from '$stylist/design-system/props/interaction/accordion';

  let {
    items,
    multiple = false,
    class: className = '',
    itemClass = '',
    headerClass = '',
    contentClass = '',
    ...restProps
  }: IAccordionProps & HTMLAttributes<HTMLElement> = $props();

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
            {@html item.content()}
          {:else}
            {@html item.content}
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
