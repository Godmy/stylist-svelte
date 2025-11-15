<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CreditCard, Smartphone, Wallet, Building2, Landmark, User, Lock, Check } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type PaymentMethodType = 'credit_card' | 'debit_card' | 'paypal' | 'apple_pay' | 'google_pay' | 'bank_transfer' | 'cash_on_delivery';

  type PaymentMethod = {
    id: string;
    type: PaymentMethodType;
    name: string;
    lastFour?: string;
    expiry?: string;
    issuer?: string; // Visa, Mastercard, etc.
    icon?: string; // Custom icon
    isDefault?: boolean;
    isVerified?: boolean;
    nickname?: string;
    billingAddress?: {
      firstName: string;
      lastName: string;
      address1: string;
      address2?: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    methods: PaymentMethod[];
    selectedMethod?: string;
    class?: string;
    methodClass?: string;
    headerClass?: string;
    onMethodSelect?: (method: PaymentMethod) => void;
    onMethodAdd?: () => void;
    onMethodEdit?: (method: PaymentMethod) => void;
    onMethodRemove?: (methodId: string) => void;
    onMethodSetDefault?: (methodId: string) => void;
    showAddButton?: boolean;
    showEditButton?: boolean;
    showRemoveButton?: boolean;
    showSetDefaultButton?: boolean;
    disabled?: boolean;
  };

  let {
    methods = [],
    selectedMethod,
    class: hostClass = '',
    methodClass = '',
    headerClass = '',
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
  }: Props = $props();

  let selectedMethodId = $state(selectedMethod);

  $effect(() => {
    selectedMethodId = selectedMethod;
  });

  function handleSelect(method: PaymentMethod) {
    if (disabled) return;
    selectedMethodId = method.id;
    onMethodSelect?.(method);
  }

  function handleAdd() {
    onMethodAdd?.();
  }

  function handleEdit(method: PaymentMethod) {
    onMethodEdit?.(method);
  }

  function handleRemove(methodId: string) {
    onMethodRemove?.(methodId);
  }

  function handleSetDefault(methodId: string) {
    onMethodSetDefault?.(methodId);
  }

  function getMethodIcon(type: PaymentMethodType) {
    switch (type) {
      case 'credit_card':
      case 'debit_card':
        return CreditCard;
      case 'paypal':
        return Wallet;
      case 'apple_pay':
        return Smartphone;
      case 'google_pay':
        return Smartphone;
      case 'bank_transfer':
        return Building2;
      case 'cash_on_delivery':
        return Landmark;
      default:
        return CreditCard;
    }
  }

  function getIssuerIcon(issuer: string) {
    // In a real implementation, you might have specific logos for each issuer
    return issuer;
  }

  let selectedMethodObj = $derived(methods.find(m => m.id === selectedMethodId));
</script>

<div class={`payment-method-selector ${hostClass}`} {...restProps}>
  <div class="flex justify-between items-center mb-4">
    <h3 class={`font-medium text-gray-900 ${headerClass}`}>Payment Methods</h3>
    
    {#if showAddButton}
      <Button 
        variant="secondary" 
        size="sm" 
        onclick={handleAdd}
        disabled={disabled}
      >
        Add Payment Method
      </Button>
    {/if}
  </div>
  
  <div class="space-y-3">
    {#each methods as method}
      {@const MethodIcon = getMethodIcon(method.type)}
      <div 
        class={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
          selectedMethodId === method.id 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-200 hover:bg-gray-50'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${methodClass}`}
        onclick={() => handleSelect(method)}
        role="button"
        tabindex={disabled ? -1 : 0}
        aria-pressed={selectedMethodId === method.id}
        onkeydown={(event) => {
          if (disabled) return;
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleSelect(method);
          }
        }}
      >
        <input
          type="radio"
          name="payment-method"
          value={method.id}
          checked={selectedMethodId === method.id}
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          disabled={disabled}
          onchange={() => handleSelect(method)}
        />
        
        <div class="ml-3 flex items-center flex-1 min-w-0">
          <MethodIcon class="h-6 w-6 text-gray-600 mr-3" />
          
          <div class="min-w-0 flex-1">
            <div class="flex items-center">
              <span class="font-medium text-gray-900 truncate">
                {method.nickname || method.name}
              </span>
              
              {#if method.isDefault}
                <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Default
                </span>
              {/if}
              
              {#if method.isVerified}
                <span class="ml-2 inline-flex items-center text-xs text-green-600">
                  <Check class="h-3 w-3 mr-1" />
                  Verified
                </span>
              {/if}
            </div>
            
            <div class="flex items-center mt-1 text-sm text-gray-500">
              {#if method.type === 'credit_card' || method.type === 'debit_card'}
                <span>{method.issuer || 'Card'}</span>
                {#if method.lastFour}
                  <span class="mx-2">**** {method.lastFour}</span>
                {/if}
                {#if method.expiry}
                  <span class="mx-2">Expires {method.expiry}</span>
                {/if}
              {:else if method.type === 'paypal'}
                <span>PayPal ****{method.lastFour || ''}</span>
              {:else}
                <span class="capitalize">{method.type.replace('_', ' ')}</span>
              {/if}
            </div>
          </div>
        </div>
        
        <div class="flex space-x-2 ml-4">
          {#if showEditButton}
            <Button 
              variant="ghost" 
              size="sm" 
              onclick={(e) => {
                e.stopPropagation();
                handleEdit(method);
              }}
              disabled={disabled}
            >
              Edit
            </Button>
          {/if}
          
          {#if showRemoveButton}
            <Button 
              variant="ghost" 
              size="sm" 
              class="text-red-600 hover:text-red-900"
              onclick={(e) => {
                e.stopPropagation();
                handleRemove(method.id);
              }}
              disabled={disabled}
            >
              Remove
            </Button>
          {/if}
          
          {#if showSetDefaultButton && !method.isDefault}
            <Button 
              variant="ghost" 
              size="sm" 
              onclick={(e) => {
                e.stopPropagation();
                handleSetDefault(method.id);
              }}
              disabled={disabled}
            >
              Set Default
            </Button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
  
  {#if methods.length === 0}
    <div class="text-center py-8">
      <Wallet class="h-12 w-12 text-gray-400 mx-auto" />
      <h3 class="mt-2 text-sm font-medium text-gray-900">No payment methods</h3>
      <p class="mt-1 text-sm text-gray-500">Get started by adding a payment method.</p>
      {#if showAddButton}
        <div class="mt-6">
          <Button variant="primary" onclick={handleAdd} disabled={disabled}>
            Add Payment Method
          </Button>
        </div>
      {/if}
    </div>
  {/if}
</div>
