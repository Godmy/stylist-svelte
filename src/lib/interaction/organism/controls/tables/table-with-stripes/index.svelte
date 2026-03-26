<script lang="ts">
  import { TableExtendedStyleManager } from '$stylist/interaction/class/style-manager/table-extended';
  import type { TableWithStripesProps } from '$stylist/interaction/interface/table-extended';
  let { data = [], columns = [], class: className = '', ...restProps }: TableWithStripesProps = $props();
</script>
<div class={TableExtendedStyleManager.root('c-table-with-stripes', className)} {...restProps}>
  <div class="border rounded-lg overflow-hidden">
    <table class="min-w-full">
      <thead class="bg-[var(--color-background-secondary)]"><tr>{#each columns as c}<th class="px-3 py-2 text-left text-xs uppercase">{c}</th>{/each}</tr></thead>
      <tbody>{#each data as row, i}<tr class={i % 2 ? 'bg-[var(--color-background-secondary)]' : 'bg-[var(--color-background-primary)]'}>{#each columns as c}<td class="px-3 py-2 border-t text-sm">{(row as Record<string,unknown>)[c]}</td>{/each}</tr>{/each}</tbody>
    </table>
  </div>
</div>






