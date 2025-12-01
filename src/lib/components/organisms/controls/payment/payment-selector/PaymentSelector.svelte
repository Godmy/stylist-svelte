<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CreditCard, Wallet, Building, Smartphone, CheckCircle, Edit3, Plus, Trash2 } from 'lucide-svelte';

  type PaymentMethodType = 'credit_card' | 'debit_card' | 'bank_account' | 'digital_wallet';

  type PaymentMethod = {
    id: string;
    type: PaymentMethodType;
    name: string;
    details: string;
    expiry?: string;
    isDefault: boolean;
    brand?: string;
  };

  type Props = {
    methods: PaymentMethod[];
    selectedMethod?: string;
    onSelect?: (id: string) => void;
    onAdd?: () => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onSetDefault?: (id: string) => void;
    showAddButton?: boolean;
    showEditButton?: boolean;
    showDeleteButton?: boolean;
    showSetDefault?: boolean;
    title?: string;
    subtitle?: string;
    class?: string;
    headerClass?: string;
    methodClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    methods = [],
    selectedMethod,
    onSelect,
    onAdd,
    onEdit,
    onDelete,
    onSetDefault,
    showAddButton = true,
    showEditButton = true,
    showDeleteButton = true,
    showSetDefault = true,
    title = 'Payment Methods',
    subtitle = 'Manage your payment options',
    class: className = '',
    headerClass = '',
    methodClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let selectedMethodId = $state(selectedMethod);

  function handleSelect(id: string) {
    selectedMethodId = id;
    if (onSelect) {
      onSelect(id);
    }
  }

  // Get icon based on payment method type
  function getMethodIcon(type: PaymentMethodType) {
    switch(type) {
      case 'credit_card':
      case 'debit_card':
        return CreditCard;
      case 'bank_account':
        return Building;
      case 'digital_wallet':
        return Wallet;
      default:
        return CreditCard;
    }
  }

  // Get card brand icon
  function getBrandIcon(brand?: string) {
    if (!brand) return null;

    switch(brand.toLowerCase()) {
      case 'visa':
        return '<span class="font-bold">VISA</span>';
      case 'mastercard':
        return '<span class="font-bold">MC</span>';
      case 'amex':
        return '<span class="font-bold">AMEX</span>';
      case 'discover':
        return '<span class="font-bold">DISC</span>';
      default:
        return brand.toUpperCase();
    }
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        {#if subtitle}
          <p class="mt-1 text-sm text-gray-500">{subtitle}</p>
        {/if}
      </div>

      {#if showAddButton}
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          onclick={() => onAdd && onAdd()}
        >
          <Plus class="h-4 w-4 mr-1" />
          Add Method
        </button>
      {/if}
    </div>
  </div>

  <div class="p-6">
    {#if methods.length === 0}
      <div class="text-center py-12">
        <Wallet class="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 class="text-sm font-medium text-gray-900 mb-1">No payment methods</h3>
        <p class="text-sm text-gray-500 mb-4">Get started by adding a new payment method</p>
        {#if showAddButton}
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onclick={() => onAdd && onAdd()}
          >
            <Plus class="h-4 w-4 mr-1" />
            Add Payment Method
          </button>
        {/if}
      </div>
    {:else}
      <div class="space-y-4">
        {#each methods as method}
          <div class={`border rounded-lg p-4 flex items-center justify-between ${
            selectedMethodId === method.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
          } ${methodClass}`}>
            <div class="flex items-center">
              <div class="flex items-center h-5">
                <input
                  id={`method-${method.id}`}
                  name="payment-method"
                  type="radio"
                  class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  checked={selectedMethodId === method.id}
                  onclick={() => handleSelect(method.id)}
                />
                <label for={`method-${method.id}`} class="ml-3 flex items-center cursor-pointer">
                  {#if true}
                    {@const MethodIcon = getMethodIcon(method.type)}
                    <MethodIcon class="h-6 w-6 text-gray-500 mr-3" />
                  {/if}
                  <div>
                    <span class="block text-sm font-medium text-gray-900">
                      {method.name}
                      {#if method.isDefault}
                        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Default
                        </span>
                      {/if}
                    </span>
                    <span class="block text-sm text-gray-500">{method.details}</span>
                    {#if method.expiry}
                      <span class="block text-xs text-gray-400">Expires: {method.expiry}</span>
                    {/if}
                  </div>
                </label>
              </div>
            </div>

            <div class="flex items-center space-x-2">
              {#if showSetDefault && !method.isDefault}
                <button
                  type="button"
                  class="text-sm font-medium text-blue-600 hover:text-blue-800"
                  onclick={() => onSetDefault && onSetDefault(method.id)}
                >
                  Set as default
                </button>
              {/if}

              <div class="flex space-x-1">
                {#if showEditButton}
                  <button
                    type="button"
                    class="p-2 text-gray-400 hover:text-gray-600"
                    onclick={() => onEdit && onEdit(method.id)}
                    title="Edit"
                  >
                    <Edit3 class="h-4 w-4" />
                  </button>
                {/if}

                {#if showDeleteButton}
                  <button
                    type="button"
                    class="p-2 text-gray-400 hover:text-red-500"
                    onclick={() => onDelete && onDelete(method.id)}
                    title="Delete"
                  >
                    <Trash2 class="h-4 w-4" />
                  </button>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center text-xs text-gray-500">
      <CheckCircle class="h-4 w-4 mr-1" />
      <span>Securely stored and encrypted</span>
    </div>
  </div>
</div>