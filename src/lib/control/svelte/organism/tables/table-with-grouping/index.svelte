<script lang="ts">
  import { createTableWithGroupingState } from '$stylist/control/function/state/table-with-grouping';
  import type { TableWithGroupingProps } from '$stylist/control/interface/component/table-extended/other';

  let props: TableWithGroupingProps = $props();
  const state = createTableWithGroupingState(props);
</script>

<div class={state.rootClass} {...state.restProps}>
  {#each Object.entries(state.groups) as [group, rows]}
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




