<!--
/**
 * Accordion Component - РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
 *
 * 1. Single Responsibility Principle (SRP):
 *    РљРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ Р°РєРєРѕСЂРґРµРѕРЅР° Рё СѓРїСЂР°РІР»РµРЅРёРµ РµРіРѕ СЃРѕСЃС‚РѕСЏРЅРёРµРј.
 *    Р›РѕРіРёРєР° СЃС‚РёР»РёР·Р°С†РёРё РІС‹РЅРµСЃРµРЅР° РІ AccordionStyleManager.
 *
 * 2. Open/Closed Principle (OCP):
 *    Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµС‚СЃСЏ С‡РµСЂРµР· РїСЂРѕРїСЃС‹ Рё CSS-РїРµСЂРµРјРµРЅРЅС‹Рµ С‚РµРјС‹.
 *
 * 3. Liskov Substitution Principle (LSP):
 *    РЎРѕР±Р»СЋРґР°РµС‚ РєРѕРЅС‚СЂР°РєС‚, РѕРїСЂРµРґРµР»С‘РЅРЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃРѕРј IAccordionProps.
 *
 * 4. Interface Segregation Principle (ISP):
 *    РСЃРїРѕР»СЊР·СѓРµС‚ РјРёРЅРёРјР°Р»СЊРЅРѕ РЅРµРѕР±С…РѕРґРёРјС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ IAccordionProps.
 *
 * 5. Dependency Inversion Principle (DIP):
 *    Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёРё (С‚РёРїРѕРІ Рё СЃС‚РёР»РµР№) Р° РЅРµ РѕС‚ РєРѕРЅРєСЂРµС‚РЅС‹С… СЂРµР°Р»РёР·Р°С†РёР№.
 */
-->
<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const ChevronDown = 'chevron-down';

  import { AccordionStyleManager } from '$stylist/design-system/styles/interaction/accordion';
  import type { IAccordionProps } from '$stylist/design-system/contracts/interaction/accordion';

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
          <BaseIcon name={ChevronDown}
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

