<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Search } from 'lucide-svelte';
  import { IconPickerStyleManager } from '$stylist/design-system/styles/icon-picker';
  import type { IIconItem, IIconPickerProps, TColumns } from '$stylist/design-system/props/icon-picker';

  /**
   * @component IconPicker
   * @description Компонент для выбора иконок с возможностью поиска
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за отображение и выбор иконок
   * - OCP: Легко расширяем через пропсы
   * - LSP: Поддерживает подстановку различных типов иконок
   * - ISP: Предоставляет минимально необходимый интерфейс взаимодействия
   * - DIP: Зависит от абстракций (типы и стили), а не от деталей реализации
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
          <Search />
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
