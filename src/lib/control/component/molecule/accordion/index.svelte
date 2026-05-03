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
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import { Icon as BaseIcon } from '$stylist/media';
const ChevronDown = 'chevron-down';

  import { AccordionStyleManager } from '$stylist/control/class/style-manager/accordion';
  import type { SlotAccordion as IAccordionProps } from '$stylist/control/interface/slot/accordion';
  import { createAccordionState } from '$stylist/control/function/state/accordion';

  let {
    items,
    multiple = false,
    class: className = '',
    itemClass = '',
    headerClass = '',
    contentClass = '',
    ...restProps
  }: IAccordionProps & InteractionHTMLAttributes<HTMLElement> = $props();
  const state = createAccordionState({
    items,
    multiple,
    class: className,
    itemClass,
    headerClass,
    contentClass,
    ...restProps
  });

  // Generate CSS classes using the style manager
  const containerClass = $derived(AccordionStyleManager.getContainerClass(className));
</script>

<div class={containerClass} {...restProps}>
  {#each items as item}
    <div class={AccordionStyleManager.getItemClass(itemClass)}>
      <h3 class="m-0">
        <button
          type="button"
          class={AccordionStyleManager.getHeaderClass(state.isExpanded(item.id), item.disabled || false, headerClass)}
          onclick={() => !item.disabled && state.toggleAccordion(item.id)}
          aria-expanded={state.isExpanded(item.id)}
          aria-controls={`panel-${item.id}`}
        >
          <span>{item.title}</span>
          <BaseIcon name={ChevronDown}
            class={AccordionStyleManager.getChevronClass(state.isExpanded(item.id))}
          />
        </button>
      </h3>

      <div
        id={`panel-${item.id}`}
        role="region"
        aria-labelledby={`accordion-header-${item.id}`}
        class={AccordionStyleManager.getContentPanelClass(state.isExpanded(item.id), contentClass)}
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







