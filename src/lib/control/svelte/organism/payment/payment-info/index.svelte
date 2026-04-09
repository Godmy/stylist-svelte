<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const CreditCard = 'credit-card';
const Shield = 'shield';
const Lock = 'lock';

  import { PaymentInfoStyleManager } from '$stylist';
  import type { PaymentMethodSelectorProps } from '$stylist/control/type/struct/payment-method-selector-props';
  import type { PaymentMethod } from '$stylist/control/type/struct/payment-method';

  let {
    methods: paymentMethods = [],
    acceptedCards = ['visa', 'mastercard', 'amex'],
    showMethods = true,
    showSecurityInfo = true,
    showAcceptedCards = true,
    showFees = true,
    showProcessingTime = true,
    class: className = '',
    onMethodSelect,
    ...restProps
  }: PaymentMethodSelectorProps & {
    acceptedCards?: string[];
    showMethods?: boolean;
    showSecurityInfo?: boolean;
    showAcceptedCards?: boolean;
    showFees?: boolean;
    showProcessingTime?: boolean;
  } = $props();

  let selectedMethodId = $state(paymentMethods.find((m: PaymentMethod) => m.enabled !== false)?.id ?? '');

  function handleMethodSelect(method: PaymentMethod): void {
    if (method.disabled) return;
    selectedMethodId = method.id;
    onMethodSelect?.(method);
  }
</script>

<div class={PaymentInfoStyleManager.root(className)} {...restProps}>
  <div class="border border-[var(--color-border-primary)] rounded-lg p-6">
    <div class="flex items-center gap-2">
      <BaseIcon name={CreditCard} class="h-5 w-5 text-[var(--color-primary-600)]" />
      <h3 class="text-lg font-semibold">Payment Information</h3>
    </div>
  </div>

  {#if showMethods}
    <div class="mt-4 border border-[var(--color-border-primary)] rounded-lg p-4 space-y-3">
      {#each paymentMethods as method}
        <button
          type="button"
          class={`w-full text-left rounded-md border p-3 ${selectedMethodId === method.id ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)]'}`}
          onclick={() => handleMethodSelect(method)}
          disabled={method.disabled}
        >
          <div class="font-medium">{method.name}</div>
          {#if method.description}
            <div class="text-sm text-[var(--color-text-secondary)]">{method.description}</div>
          {/if}
          <div class="text-xs text-[var(--color-text-secondary)] mt-1">
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
    <div class="mt-4 border border-[var(--color-border-primary)] rounded-lg p-4">
      <div class="text-sm font-medium mb-2">Accepted Cards</div>
      <div class="flex flex-wrap gap-2">
        {#each acceptedCards as card}
          <span class="px-2 py-1 rounded bg-[var(--color-background-secondary)] text-xs uppercase">{card}</span>
        {/each}
      </div>
    </div>
  {/if}

  {#if showSecurityInfo}
    <div class="mt-4 border border-[var(--color-border-primary)] rounded-lg p-4">
      <div class="flex items-center gap-2 text-sm font-medium"><BaseIcon name={Shield} class="h-4 w-4" /> Security</div>
      <div class="mt-2 text-sm text-[var(--color-text-secondary)] flex items-center gap-2"><BaseIcon name={Lock} class="h-4 w-4" /> Encrypted payment processing</div>
    </div>
  {/if}
</div>





