<script lang="ts">
  import { CreditCard, Shield, Lock } from 'lucide-svelte';
  import { PaymentInfoStyleManager } from '$stylist/design-system/styles';
  import type { PaymentInfoProps, PaymentMethod } from '$stylist/design-system/props';

  let {
    paymentMethods = [],
    acceptedCards = ['visa', 'mastercard', 'amex'],
    showMethods = true,
    showSecurityInfo = true,
    showAcceptedCards = true,
    showFees = true,
    showProcessingTime = true,
    class: className = '',
    onMethodSelect,
    ...restProps
  }: PaymentInfoProps = $props();

  let selectedMethodId = $state(paymentMethods.find((m) => m.enabled !== false)?.id ?? '');

  function handleMethodSelect(method: PaymentMethod): void {
    if (method.disabled) return;
    selectedMethodId = method.id;
    onMethodSelect?.(method);
  }
</script>

<div class={PaymentInfoStyleManager.root(className)} {...restProps}>
  <div class="border border-gray-200 rounded-lg p-6">
    <div class="flex items-center gap-2">
      <CreditCard class="h-5 w-5 text-blue-600" />
      <h3 class="text-lg font-semibold">Payment Information</h3>
    </div>
  </div>

  {#if showMethods}
    <div class="mt-4 border border-gray-200 rounded-lg p-4 space-y-3">
      {#each paymentMethods as method}
        <button
          type="button"
          class={`w-full text-left rounded-md border p-3 ${selectedMethodId === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
          onclick={() => handleMethodSelect(method)}
          disabled={method.disabled}
        >
          <div class="font-medium">{method.name}</div>
          {#if method.description}
            <div class="text-sm text-gray-600">{method.description}</div>
          {/if}
          <div class="text-xs text-gray-500 mt-1">
            {#if showFees && method.fee !== undefined}Fee: {method.fee}%{/if}
            {#if showProcessingTime && method.processingTime}
              <span class="ml-2">{method.processingTime}</span>
            {/if}
          </div>
        </button>
      {/each}
    </div>
  {/if}

  {#if showAcceptedCards}
    <div class="mt-4 border border-gray-200 rounded-lg p-4">
      <div class="text-sm font-medium mb-2">Accepted Cards</div>
      <div class="flex flex-wrap gap-2">
        {#each acceptedCards as card}
          <span class="px-2 py-1 rounded bg-gray-100 text-xs uppercase">{card}</span>
        {/each}
      </div>
    </div>
  {/if}

  {#if showSecurityInfo}
    <div class="mt-4 border border-gray-200 rounded-lg p-4">
      <div class="flex items-center gap-2 text-sm font-medium"><Shield class="h-4 w-4" /> Security</div>
      <div class="mt-2 text-sm text-gray-600 flex items-center gap-2"><Lock class="h-4 w-4" /> Encrypted payment processing</div>
    </div>
  {/if}
</div>

