<script lang="ts">
  import { TableExtendedStyleManager } from '$stylist/design-system/styles/interaction/table-extended';
  import type { TableRecord, TableWithGroupingProps } from '$stylist/design-system/props/interaction/table-extended';

  let { data = [], groupBy = 'group', class: className = '', ...restProps }: TableWithGroupingProps = $props();

  const groups = $derived.by(() => {
    return data.reduce<Record<string, TableRecord[]>>((acc, row) => {
      const key = String((row as TableRecord)[groupBy] ?? 'Other');
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(row);
      return acc;
    }, {});
  });
</script>

<div class={TableExtendedStyleManager.root('c-table-with-grouping', className)} {...restProps}>
  {#each Object.entries(groups) as [group, rows]}
    <div class="border rounded-lg mb-3 overflow-hidden">
      <div class="px-3 py-2 bg-gray-100 text-sm font-semibold">{group} ({rows.length})</div>
      <table class="min-w-full">
        <tbody>
          {#each rows as r}
            <tr class="border-t">
              {#each Object.entries(r) as [k, v]}
                <td class="px-3 py-2 text-sm"><span class="text-gray-500">{k}:</span> {String(v)}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/each}
</div>