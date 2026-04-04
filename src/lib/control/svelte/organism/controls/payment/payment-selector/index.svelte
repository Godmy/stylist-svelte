<script lang="ts">
  import { PaymentSelectorStyleManager } from '$stylist';
  import type { PaymentSelectorProps } from '$stylist';

  let {
    methods = [],
    selectedMethod,
    title = 'Payment Methods',
    subtitle = '',
    class: className = '',
    onSelect,
    onAdd,
    onEdit,
    onDelete,
    onSetDefault,
    showAddButton = true,
    showEditButton = true,
    showDeleteButton = true,
    showSetDefault = true,
    ...restProps
  }: PaymentSelectorProps = $props();

  let selectedMethodId = $state(selectedMethod);
</script>

<div class={PaymentSelectorStyleManager.root(className)} {...restProps}>
  <div class="border border-[var(--color-border-primary)] rounded-lg p-4">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="font-semibold">{title}</h3>
        {#if subtitle}<p class="text-sm text-[var(--color-text-secondary)]">{subtitle}</p>{/if}
      </div>
      {#if showAddButton}<button class="px-3 py-1 rounded bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]" onclick={onAdd}>Add</button>{/if}
    </div>

    <div class="mt-4 space-y-2">
      {#each methods as method}
        <div class={`border rounded-md p-3 ${selectedMethodId === method.id ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)]'}`}>
          <button type="button" class="w-full text-left" onclick={() => { selectedMethodId = method.id; onSelect?.(method.id); }}>
            <div class="font-medium">{method.name}</div>
            <div class="text-sm text-[var(--color-text-secondary)]">{method.details || method.description || method.type}</div>
          </button>
          <div class="mt-2 flex gap-2 text-sm">
            {#if showSetDefault && !method.isDefault}<button onclick={() => onSetDefault?.(method.id)}>Set default</button>{/if}
            {#if showEditButton}<button onclick={() => onEdit?.(method.id)}>Edit</button>{/if}
            {#if showDeleteButton}<button class="text-[var(--color-danger-600)]" onclick={() => onDelete?.(method.id)}>Delete</button>{/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>




