<script lang="ts">
  import { TableExtendedStyleManager } from '$stylist/design-system/styles/table-extended';
  import type { TableWithGroupingProps } from '$stylist/design-system/props/table-extended';
  let { data = [], groupBy = 'group', class: className = '', ...restProps }: TableWithGroupingProps = $props();
  const groups = $derived(data.reduce((acc,row)=>{const key=String((row as Record<string,unknown>)[groupBy] ?? 'Other'); (acc[key]??=[]).push(row); return acc;}, {} as Record<string,Record<string,unknown>[]>));
</script>
<div class={TableExtendedStyleManager.root('c-table-with-grouping', className)} {...restProps}>
  {#each Object.entries(groups) as [group, rows]}
    <div class="border rounded-lg mb-3 overflow-hidden">
      <div class="px-3 py-2 bg-gray-100 text-sm font-semibold">{group} ({rows.length})</div>
      <table class="min-w-full"><tbody>{#each rows as r}<tr class="border-t">{#each Object.entries(r) as [k,v]}<td class="px-3 py-2 text-sm"><span class="text-gray-500">{k}:</span> {String(v)}</td>{/each}</tr>{/each}</tbody></table>
    </div>
  {/each}
</div>
