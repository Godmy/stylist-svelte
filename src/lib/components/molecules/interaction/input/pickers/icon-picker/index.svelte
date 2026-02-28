<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Search = 'search';

  import { IconPickerStyleManager } from '$stylist/design-system/styles/interaction/icon-picker';
  import type { IIconItem, IIconPickerProps, TColumns } from '$stylist/design-system/contracts/interaction/icon-picker';

  /**
   * @component IconPicker
   * @description РљРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РІС‹Р±РѕСЂР° РёРєРѕРЅРѕРє СЃ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ РїРѕРёСЃРєР°
   *
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * - SRP: РљРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ Рё РІС‹Р±РѕСЂ РёРєРѕРЅРѕРє
   * - OCP: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµРј С‡РµСЂРµР· РїСЂРѕРїСЃС‹
   * - LSP: РџРѕРґРґРµСЂР¶РёРІР°РµС‚ РїРѕРґСЃС‚Р°РЅРѕРІРєСѓ СЂР°Р·Р»РёС‡РЅС‹С… С‚РёРїРѕРІ РёРєРѕРЅРѕРє
   * - ISP: РџСЂРµРґРѕСЃС‚Р°РІР»СЏРµС‚ РјРёРЅРёРјР°Р»СЊРЅРѕ РЅРµРѕР±С…РѕРґРёРјС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёСЏ
   * - DIP: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёР№ (С‚РёРїС‹ Рё СЃС‚РёР»Рё), Р° РЅРµ РѕС‚ РґРµС‚Р°Р»РµР№ СЂРµР°Р»РёР·Р°С†РёРё
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

  <div class={IconPickerStyleManager.getGridClasses(columns as TColumns, itemClass)}>
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

