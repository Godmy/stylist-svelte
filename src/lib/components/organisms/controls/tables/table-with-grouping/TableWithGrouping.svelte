<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronDown, ChevronRight, Layers } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type GroupedData<T> = {
    key: string;
    value: any;
    items: T[];
  };

  type ColumnDefinition<T> = {
    key: keyof T;
    header: string;
    renderCell?: (item: T) => string | number;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props<T> = RestProps & {
    data: T[];
    groupBy: keyof T;
    columns: ColumnDefinition<T>[];
    title?: string;
    expandedGroups?: string[];
    onGroupToggle?: (groupKeys: string[]) => void;
    collapsible?: boolean;
    class?: string;
    headerClass?: string;
    bodyClass?: string;
    rowClass?: string;
    cellClass?: string;
    groupHeaderClass?: string;
  };

  let {
    data = [],
    groupBy,
    columns = [],
    title,
    expandedGroups = [],
    onGroupToggle,
    collapsible = true,
    class: hostClass = '',
    headerClass = '',
    bodyClass = '',
    rowClass = '',
    cellClass = '',
    groupHeaderClass = '',
    ...restProps
  }: Props<any> = $props();

  let groupedData = $derived.by(() => {
    // Group the data by the specified property
    const groups: Record<string, GroupedData<any>> = {};
    
    for (const item of data) {
      const keyValue = item[groupBy];
      const keyString = String(keyValue);
      
      if (!groups[keyString]) {
        groups[keyString] = {
          key: keyString,
          value: keyValue,
          items: []
        };
      }
      
      groups[keyString].items.push(item);
    }
    
    return Object.values(groups) as GroupedData<any>[];
  });

  let expanded = $state([...expandedGroups]);

  $effect(() => {
    expanded = [...expandedGroups];
  });

  function toggleGroup(groupKey: string) {
    const index = expanded.indexOf(groupKey);
    if (index > -1) {
      expanded = expanded.filter(key => key !== groupKey);
    } else {
      expanded = [...expanded, groupKey];
    }
    
    onGroupToggle?.(expanded);
  }

  function isGroupExpanded(groupKey: string): boolean {
    return expanded.includes(groupKey);
  }
</script>

<div class={`table-with-grouping ${hostClass}`} {...restProps}>
  {#if title}
    <h2 class="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
  {/if}

  <div class="overflow-x-auto border border-gray-200 rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          {#if collapsible}
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
              Group
            </th>
          {/if}
          {#each columns as column}
            <th 
              scope="col" 
              class={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${headerClass}`}
            >
              {column.header}
            </th>
          {/each}
        </tr>
      </thead>
      <tbody class={`bg-white divide-y divide-gray-200 ${bodyClass}`}>
        {#each groupedData as group}
          <tr class={`bg-gray-100 ${groupHeaderClass}`}>
            <td 
              class={`px-6 py-4 text-sm font-medium text-gray-900 ${collapsible ? 'cursor-pointer' : ''}`}
              colspan={columns.length + (collapsible ? 1 : 0)}
              onclick={() => collapsible && toggleGroup(group.key)}
            >
              <div class="flex items-center">
                {#if collapsible}
                  {#if isGroupExpanded(group.key)}
                    <ChevronDown class="h-5 w-5 text-gray-500 mr-2" />
                  {:else}
                    <ChevronRight class="h-5 w-5 text-gray-500 mr-2" />
                  {/if}
                {/if}
                <Layers class="h-4 w-4 text-gray-500 mr-2" />
                <span class="font-semibold">
                  {group.key} ({group.items.length})
                </span>
              </div>
            </td>
          </tr>
          
          {#if isGroupExpanded(group.key) || !collapsible}
            {#each group.items as item}
              <tr class={`hover:bg-gray-50 ${rowClass}`}>
                {#if collapsible}
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                {/if}
                {#each columns as column}
                  <td class={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${cellClass}`}>
                    {#if column.renderCell}
                      {column.renderCell(item)}
                    {:else}
                      {item[column.key]}
                    {/if}
                  </td>
                {/each}
              </tr>
            {/each}
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
</div>
