<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
import { Icon as BaseIcon } from '$stylist'; const Search = 'search';
import { IconPickerStyleManager } from '$stylist/interaction/class/style-manager/icon-picker';
import type { IIconItem, IIconPickerProps } from '$stylist/interaction/interface/icon-picker';
import type { TokenColumn } from '$stylist/architecture/type/token/column';

  /**
   * @component IconPicker
   * @description Р С™Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљ Р Т‘Р В»РЎРЏ Р Р†РЎвЂ№Р В±Р С•РЎР‚Р В° Р С‘Р С”Р С•Р Р…Р С•Р С” РЎРѓ Р Р†Р С•Р В·Р СР С•Р В¶Р Р…Р С•РЎРѓРЎвЂљРЎРЉРЎР‹ Р С—Р С•Р С‘РЎРѓР С”Р В°
   *
   * Р РЋР В»Р ВµР Т‘РЎС“Р ВµРЎвЂљ Р С—РЎР‚Р С‘Р Р…РЎвЂ Р С‘Р С—Р В°Р С SOLID:
   * - SRP: Р С™Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљ Р С•РЎвЂљР Р†Р ВµРЎвЂЎР В°Р ВµРЎвЂљ РЎвЂљР С•Р В»РЎРЉР С”Р С• Р В·Р В° Р С•РЎвЂљР С•Р В±РЎР‚Р В°Р В¶Р ВµР Р…Р С‘Р Вµ Р С‘ Р Р†РЎвЂ№Р В±Р С•РЎР‚ Р С‘Р С”Р С•Р Р…Р С•Р С”
   * - OCP: Р вЂєР ВµР С–Р С”Р С• РЎР‚Р В°РЎРѓРЎв‚¬Р С‘РЎР‚РЎРЏР ВµР С РЎвЂЎР ВµРЎР‚Р ВµР В· Р С—РЎР‚Р С•Р С—РЎРѓРЎвЂ№
   * - LSP: Р СџР С•Р Т‘Р Т‘Р ВµРЎР‚Р В¶Р С‘Р Р†Р В°Р ВµРЎвЂљ Р С—Р С•Р Т‘РЎРѓРЎвЂљР В°Р Р…Р С•Р Р†Р С”РЎС“ РЎР‚Р В°Р В·Р В»Р С‘РЎвЂЎР Р…РЎвЂ№РЎвЂ¦ РЎвЂљР С‘Р С—Р С•Р Р† Р С‘Р С”Р С•Р Р…Р С•Р С”
   * - ISP: Р СџРЎР‚Р ВµР Т‘Р С•РЎРѓРЎвЂљР В°Р Р†Р В»РЎРЏР ВµРЎвЂљ Р СР С‘Р Р…Р С‘Р СР В°Р В»РЎРЉР Р…Р С• Р Р…Р ВµР С•Р В±РЎвЂ¦Р С•Р Т‘Р С‘Р СРЎвЂ№Р в„– Р С‘Р Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓ Р Р†Р В·Р В°Р С‘Р СР С•Р Т‘Р ВµР в„–РЎРѓРЎвЂљР Р†Р С‘РЎРЏ
   * - DIP: Р вЂ”Р В°Р Р†Р С‘РЎРѓР С‘РЎвЂљ Р С•РЎвЂљ Р В°Р В±РЎРѓРЎвЂљРЎР‚Р В°Р С”РЎвЂ Р С‘Р в„– (РЎвЂљР С‘Р С—РЎвЂ№ Р С‘ РЎРѓРЎвЂљР С‘Р В»Р С‘), Р В° Р Р…Р Вµ Р С•РЎвЂљ Р Т‘Р ВµРЎвЂљР В°Р В»Р ВµР в„– РЎР‚Р ВµР В°Р В»Р С‘Р В·Р В°РЎвЂ Р С‘Р С‘
   */
  let {
    icons = [],
    title = 'Icon Picker',
    searchPlaceholder = 'Search icons...',
    selectedIcon,
    columns = 6,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    onIconSelect,
    showSearch = true,
    showCategories = true,
    ...restProps
  }: IIconPickerProps = $props();

  let searchQuery = $state('');
  let filteredIcons = $derived(
    searchQuery
      ? icons.filter(icon =>
          icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (icon.keywords && icon.keywords.some(kw =>
            kw.toLowerCase().includes(searchQuery.toLowerCase())
          ))
        )
      : icons
  );

  function handleIconClick(icon: IIconItem) {
    onIconSelect?.(icon);
  }
</script>

<div class={IconPickerStyleManager.getHostClasses(hostClass)} {...restProps}>
  <div class={IconPickerStyleManager.getHeaderClasses(headerClass)}>
    {#if title}
      <h3 class={IconPickerStyleManager.getTitleClasses()}>{title}</h3>
    {/if}

    {#if showSearch}
      <div class={IconPickerStyleManager.getSearchContainerClasses()}>
        <div class={IconPickerStyleManager.getSearchIconClasses()}>
          <BaseIcon name={Search} />
        </div>
        <input
          type="text"
          class={IconPickerStyleManager.getSearchInputClasses()}
          placeholder={searchPlaceholder}
          value={searchQuery}
          oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
        />
      </div>
    {/if}
  </div>

  <div class={IconPickerStyleManager.getGridClasses(columns as TokenColumn, itemClass)}>
    {#each filteredIcons as icon}
      <button
        type="button"
        class={IconPickerStyleManager.getItemClasses(itemClass, selectedIcon === icon.name)}
        onclick={() => handleIconClick(icon)}
        title={icon.name}
      >
        <div class={IconPickerStyleManager.getIconContainerClasses()}>
          {@render icon.component({ class: 'w-6 h-6' })}
        </div>
        <div class={IconPickerStyleManager.getIconNameClasses()}>
          {icon.name}
        </div>
      </button>
    {/each}
  </div>
</div>







