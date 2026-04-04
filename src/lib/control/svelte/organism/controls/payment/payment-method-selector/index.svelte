<script lang="ts">
  import { Button } from '$stylist';
  import { PaymentMethodSelectorStyleManager } from '$stylist';
  import type { PaymentMethodSelectorProps } from '$stylist/control/type/struct/payment-controls';
  import type { PaymentMethod } from '$stylist/control/type/struct/payment-controls';

  let {
    methods = [],
    selectedMethod,
    class: className = '',
    onMethodSelect,
    onMethodAdd,
    onMethodEdit,
    onMethodRemove,
    onMethodSetDefault,
    showAddButton = true,
    showEditButton = true,
    showRemoveButton = true,
    showSetDefaultButton = true,
    disabled = false,
    ...restProps
  }: PaymentMethodSelectorProps = $props();

  let selectedMethodId = $state(selectedMethod);
  $effect(() => { selectedMethodId = selectedMethod; });

  function select(method: PaymentMethod): void {
    if (disabled) return;
    selectedMethodId = method.id;
    onMethodSelect?.(method);
  }
</script>

<div class={PaymentMethodSelectorStyleManager.root(className)} {...restProps}>
  <div class="flex items-center justify-between mb-3">
    <h3 class="font-medium">Payment Methods</h3>
    {#if showAddButton}<Button size="sm" onclick={onMethodAdd}>Add</Button>{/if}
  </div>

  <div class="space-y-2">
    {#each methods as method}
      <div class={`border rounded-md p-3 ${selectedMethodId === method.id ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)]'}`}>
        <button type="button" class="w-full text-left" onclick={() => select(method)}>
          <div class="font-medium">{method.nickname || method.name}</div>
          <div class="text-sm text-[var(--color-text-secondary)]">{method.description || method.details || method.type}</div>
        </button>
        <div class="mt-2 flex gap-2">
          {#if showEditButton}<Button variant="ghost" size="sm" onclick={() => onMethodEdit?.(method)}>Edit</Button>{/if}
          {#if showRemoveButton}<Button variant="ghost" size="sm" onclick={() => onMethodRemove?.(method.id)}>Remove</Button>{/if}
          {#if showSetDefaultButton && !method.isDefault}<Button variant="ghost" size="sm" onclick={() => onMethodSetDefault?.(method.id)}>Set Default</Button>{/if}
        </div>
      </div>
    {/each}
  </div>
</div>




