<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronsUpDown, ChevronUp, ChevronDown } from 'lucide-svelte';

  export type ColumnConfig = {
    key: string;
    header: string;
    visible: boolean;
    sortable?: boolean;
    filterable?: boolean;
    width?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    columns: ColumnConfig[];
    onColumnsChange?: (columns: ColumnConfig[]) => void;
    class?: string;
  };

  let {
    columns,
    onColumnsChange,
    class: hostClass = '',
    ...restProps
  }: Props = $props();

  let localColumns = $state<ColumnConfig[]>([]);

  $effect(() => {
    localColumns = columns.map((column) => ({ ...column }));
  });

  function emitChange(next: ColumnConfig[]) {
    localColumns = next;
    onColumnsChange?.(next.map((column) => ({ ...column })));
  }

  function toggleColumnVisibility(index: number) {
    const next = localColumns.map((column, idx) =>
      idx === index ? { ...column, visible: !column.visible } : column
    );
    emitChange(next);
  }

  function moveColumn(fromIndex: number, toIndex: number) {
    const next = [...localColumns];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(toIndex, 0, moved);
    emitChange(next);
  }

  function resetToDefault() {
    const next = columns.map((column) => ({ ...column, visible: true }));
    emitChange(next);
  }
</script>

<div class={`column-manager bg-white rounded-lg shadow p-4 ${hostClass}`} {...restProps}>
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-medium text-gray-900">Отображение столбцов</h3>
    <button
      class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      type="button"
      onclick={resetToDefault}
    >
      Сбросить
    </button>
  </div>

  <div class="border border-gray-200 rounded-md divide-y divide-gray-200">
    {#each localColumns as column, index}
      <div class="flex items-center justify-between p-3 hover:bg-gray-50">
        <div class="flex items-center gap-2">
          <span class="text-gray-400">
            <ChevronsUpDown class="h-4 w-4" />
          </span>

          <input
            id={`column-${index}`}
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            checked={column.visible}
            onchange={() => toggleColumnVisibility(index)}
          />
          <label for={`column-${index}`} class="ml-2 block text-sm text-gray-900">
            {column.header}
          </label>
        </div>

        <div class="flex items-center gap-1">
          <button
            type="button"
            class="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={index === 0}
            onclick={() => moveColumn(index, index - 1)}
            aria-label={`Переместить "${column.header}" вверх`}
          >
            <ChevronUp class="h-4 w-4" />
          </button>
          <button
            type="button"
            class="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={index === localColumns.length - 1}
            onclick={() => moveColumn(index, index + 1)}
            aria-label={`Переместить "${column.header}" вниз`}
          >
            <ChevronDown class="h-4 w-4" />
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-4 text-sm text-gray-500 space-y-1">
    <p>Всего столбцов: {localColumns.length}</p>
    <p>Отображается: {localColumns.filter((column) => column.visible).length}</p>
  </div>
</div>
