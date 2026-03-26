<script lang="ts">
  import { TableExtendedStyleManager } from '$stylist/interaction/class/style-manager/table-extended';
  import type { TableWithGroupingProps } from '$stylist/interaction/interface/table-extended';
  import type { TableRecord } from '$stylist/interaction/interface/table-extended';

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
      <div class="px-3 py-2 bg-[var(--color-background-secondary)] text-sm font-semibold">{group} ({rows.length})</div>
      <table class="min-w-full">
        <tbody>
          {#each rows as r}
            <tr class="border-t">
              {#each Object.entries(r) as [k, v]}
                <td class="px-3 py-2 text-sm"><span class="text-[var(--color-text-secondary)]">{k}:</span> {String(v)}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/each}
</div>





