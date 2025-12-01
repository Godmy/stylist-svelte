<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CreditCard, DollarSign, Calendar, CheckCircle, AlertCircle, Info, Clock } from 'lucide-svelte';

  type Item = {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    price: number;
    total: number;
  };

  type Discount = {
    id: string;
    name: string;
    amount: number;
    type: 'percentage' | 'fixed';
  };

  type Tax = {
    id: string;
    name: string;
    rate: number; // percentage
    amount: number;
  };

  type Props = {
    title?: string;
    subtitle?: string;
    items: Item[];
    discounts?: Discount[];
    taxes?: Tax[];
    total: number;
    currency?: string;
    paymentMethod?: string;
    transactionId?: string;
    date?: Date;
    status?: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
    showItems?: boolean;
    showDiscounts?: boolean;
    showTaxes?: boolean;
    showPaymentInfo?: boolean;
    showStatus?: boolean;
    showBreakdown?: boolean;
    showTotal?: boolean;
    class?: string;
    headerClass?: string;
    itemsClass?: string;
    summaryClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title = 'Payment Summary',
    subtitle = 'Review your payment details',
    items = [],
    discounts = [],
    taxes = [],
    total = 0,
    currency = 'USD',
    paymentMethod,
    transactionId,
    date = new Date(),
    status = 'completed',
    showItems = true,
    showDiscounts = true,
    showTaxes = true,
    showPaymentInfo = true,
    showStatus = true,
    showBreakdown = true,
    showTotal = true,
    class: className = '',
    headerClass = '',
    itemsClass = '',
    summaryClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  // Format currency
  function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);

  // Calculate discount total
  const discountTotal = discounts.reduce((sum, discount) => sum + discount.amount, 0);

  // Calculate tax total
  const taxTotal = taxes.reduce((sum, tax) => sum + tax.amount, 0);

  // Get status color and icon
  function getStatusInfo() {
    switch(status) {
      case 'pending':
        return { color: 'text-yellow-600', bg: 'bg-yellow-100', icon: Clock, text: 'Pending' };
      case 'processing':
        return { color: 'text-blue-600', bg: 'bg-blue-100', icon: Info, text: 'Processing' };
      case 'completed':
        return { color: 'text-green-600', bg: 'bg-green-100', icon: CheckCircle, text: 'Completed' };
      case 'failed':
        return { color: 'text-red-600', bg: 'bg-red-100', icon: AlertCircle, text: 'Failed' };
      case 'refunded':
        return { color: 'text-purple-600', bg: 'bg-purple-100', icon: DollarSign, text: 'Refunded' };
      default:
        return { color: 'text-gray-600', bg: 'bg-gray-100', icon: Info, text: 'Unknown' };
    }
  }
  
  let StatusIcon = $derived(getStatusInfo().icon);
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div>
        <div class="flex items-center">
          <DollarSign class="h-6 w-6 text-gray-500 mr-2" />
          <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        {#if subtitle}
          <p class="mt-1 text-sm text-gray-500">{subtitle}</p>
        {/if}
      </div>
      
      {#if showStatus}
        {@const statusInfo = getStatusInfo()}
        <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.bg} ${statusInfo.color}`}>
          <StatusIcon class="h-4 w-4 mr-1" />
          {statusInfo.text}
        </span>
      {/if}
    </div>
  </div>

  <div class={`p-6 ${summaryClass}`}>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Order summary -->
      <div class="md:col-span-2">
        {#if showItems && items.length > 0}
          <h4 class="text-sm font-medium text-gray-900 mb-4">Items</h4>
          <ul class="border rounded-lg divide-y divide-gray-200 ${itemsClass}">
            {#each items as item}
              <li class="p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium text-gray-900">{item.name}</p>
                    {#if item.description}
                      <p class="text-sm text-gray-500">{item.description}</p>
                    {/if}
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-medium text-gray-900">
                      {formatCurrency(item.price)} × {item.quantity}
                    </p>
                    <p class="text-sm text-gray-500">{formatCurrency(item.total)}</p>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
        
        {#if showDiscounts && discounts.length > 0}
          <div class="mt-6">
            <h4 class="text-sm font-medium text-gray-900 mb-4">Discounts</h4>
            <ul class="border rounded-lg divide-y divide-gray-200">
              {#each discounts as discount}
                <li class="p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium text-gray-900">{discount.name}</p>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-green-600">-{formatCurrency(discount.amount)}</p>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
        
        {#if showTaxes && taxes.length > 0}
          <div class="mt-6">
            <h4 class="text-sm font-medium text-gray-900 mb-4">Taxes</h4>
            <ul class="border rounded-lg divide-y divide-gray-200">
              {#each taxes as tax}
                <li class="p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium text-gray-900">{tax.name} ({tax.rate}%)</p>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">{formatCurrency(tax.amount)}</p>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
      
      <!-- Payment summary -->
      <div>
        <div class="border rounded-lg p-5 bg-gray-50">
          <h4 class="text-sm font-medium text-gray-900 mb-4">Payment Summary</h4>
          
          <div class="space-y-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Subtotal</span>
              <span class="text-gray-900">{formatCurrency(subtotal)}</span>
            </div>
            
            {#if discountTotal > 0}
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Discounts</span>
                <span class="text-green-600">-{formatCurrency(discountTotal)}</span>
              </div>
            {/if}
            
            {#if taxTotal > 0}
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Taxes</span>
                <span class="text-gray-900">{formatCurrency(taxTotal)}</span>
              </div>
            {/if}
            
            <div class="border-t border-gray-200 pt-3 flex justify-between">
              <span class="text-lg font-medium text-gray-900">Total</span>
              <span class="text-lg font-bold text-gray-900">{formatCurrency(total)}</span>
            </div>
          </div>
          
          {#if showPaymentInfo}
            <div class="mt-6 pt-6 border-t border-gray-200">
              <h5 class="text-sm font-medium text-gray-900 mb-3">Payment Information</h5>
              
              {#if paymentMethod}
                <div class="text-sm text-gray-600 flex items-center mb-1">
                  <CreditCard class="h-4 w-4 mr-2 text-gray-500" />
                  <span>Payment Method: {paymentMethod}</span>
                </div>
              {/if}
              
              {#if date}
                <div class="text-sm text-gray-600 flex items-center mb-1">
                  <Calendar class="h-4 w-4 mr-2 text-gray-500" />
                  <span>Date: {date.toLocaleDateString()}</span>
                </div>
              {/if}
              
              {#if transactionId}
                <div class="text-sm text-gray-600 flex items-center">
                  <span class="truncate">Transaction ID: {transactionId}</span>
                </div>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="text-xs text-gray-500 flex items-center">
      <Info class="h-4 w-4 mr-1" />
      <span>All payments are securely processed and encrypted</span>
    </div>
  </div>
</div>