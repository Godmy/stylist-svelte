<script lang="ts">
  import type { IDataTableProps, IDataTableColumn, ISortConfig } from './types';
  import { DataTableStyleManager } from './styles';
  import { ChevronUp, ChevronDown } from 'lucide-svelte';

  /**
   * Компонент DataTable - таблица с возможностью сортировки
   *
   * Следует принципам SOLID:
   * - Принцип единственной ответственности (SRP): компонент отвечает только за отображение таблицы
   * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
   * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартной таблице
   * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
   * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через DataTableStyleManager)
   */

  let {
    data = [],
    columns = [],
    striped = true,
    hoverable = true,
    maxHeight = 'none',
    class: className = '',
    tableClass = '',
    theadClass = '',
    tbodyClass = '',
    trClass = '',
    thClass = '',
    tdClass = '',
    onRowClick,
    variant = 'default',
    ...restProps
  }: IDataTableProps = $props();

  let sortConfig: ISortConfig = $state({ key: null, direction: 'asc' });

  function handleSort(columnKey: string) {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    if (sortConfig.key === columnKey) {
      // Toggle direction if clicking the same column
      sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    } else {
      // Set new column with ascending direction
      sortConfig.key = columnKey;
      sortConfig.direction = 'asc';
    }
  }

  function getSortedData() {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      // Handle different data types
      let comparison = 0;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue;
      } else {
        // Convert to strings and compare
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }

  function getSortIcon(columnKey: string) {
    if (sortConfig.key !== columnKey) return null;

    return sortConfig.direction === 'asc'
      ? ChevronUp
      : ChevronDown;
  }

  // Вычисляем стили с использованием DataTableStyleManager
  const containerClasses = $derived(
    DataTableStyleManager.getContainerClasses(maxHeight, className)
  );
  const tableClasses = $derived(
    DataTableStyleManager.getTableClasses(variant, tableClass)
  );
  const theadClasses = $derived(
    DataTableStyleManager.getTheadClasses(theadClass)
  );
  const headerRowClasses = $derived(
    DataTableStyleManager.getHeaderRowClasses()
  );
  const tbodyClasses = $derived(
    DataTableStyleManager.getTbodyClasses(tbodyClass)
  );
  const sortIconClasses = $derived(
    DataTableStyleManager.getSortIconClasses()
  );
</script>

<div class={containerClasses} style={maxHeight !== 'none' ? `max-height: ${maxHeight}` : ''} {...restProps}>
  <table class={tableClasses}>
    <thead class={theadClasses}>
      <tr class={headerRowClasses}>
        {#each columns as column}
          <th
            scope="col"
            class={DataTableStyleManager.getHeaderCellClasses(
              !!column.sortable,
              column.headerClass || thClass
            )}
            onclick={() => column.sortable && handleSort(column.key)}
            role="button"
            tabindex="0"
            onkeydown={(e: KeyboardEvent) => (e.key === 'Enter' || e.key === ' ') && column.sortable && handleSort(column.key)}
          >
            <div class="flex items-center">
              <span>{column.title}</span>
              {#if column.sortable && sortConfig.key === column.key}
                {#if sortConfig.direction === 'asc'}
                  <span>
                    <ChevronUp class={sortIconClasses} />
                  </span>
                {:else}
                  <span>
                    <ChevronDown class={sortIconClasses} />
                  </span>
                {/if}
              {/if}
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class={tbodyClasses}>
      {#each getSortedData() as item, index}
        <tr
          class={DataTableStyleManager.getRowClasses(striped, hoverable, index, trClass)}
          onclick={() => onRowClick && onRowClick(item)}
        >
          {#each columns as column}
            <td class={DataTableStyleManager.getCellClasses(column.cellClass || tdClass)}>
              {#if column.render}
                {@html column.render(item[column.key], item)}
              {:else}
                {item[column.key]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>