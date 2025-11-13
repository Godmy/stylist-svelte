<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { DollarSign, Calendar, Clock, Receipt, TrendingUp, TrendingDown } from 'lucide-svelte';

  type BillingItem = {
    id: string;
    description: string;
    amount: number;
    currency: string;
    date: Date;
    status: 'paid' | 'pending' | 'failed' | 'refunded';
  };

  type Props = {
    title?: string;
    subtitle?: string;
    totalAmount: number;
    currency: string;
    dueDate?: Date;
    status: 'paid' | 'pending' | 'overdue' | 'cancelled';
    items: BillingItem[];
    showDetails?: boolean;
    showDueDate?: boolean;
    showStatus?: boolean;
    class?: string;
    headerClass?: string;
    summaryClass?: string;
    itemsClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title = 'Billing Summary',
    subtitle = 'Payment summary for your subscription',
    totalAmount = 0,
    currency = 'USD',
    dueDate,
    status = 'pending',
    items = [],
    showDetails = true,
    showDueDate = true,
    showStatus = true,
    class: className = '',
    headerClass = '',
    summaryClass = '',
    itemsClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  // Format currency
  function formatCurrency(amount: number, curr: string) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr
    }).format(amount);
  }

  // Format date
  function formatDate(date?: Date) {
    if (!date) return '';
    return date.toLocaleDateString([], {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Get status color
  function getStatusColor() {
    switch(status) {
      case 'paid': return 'text-green-600 bg-green-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      case 'cancelled': return 'text-gray-600 bg-gray-100';
      default: return 'text-yellow-600 bg-yellow-100';
    }
  }

  // Get status text
  function getStatusText() {
    switch(status) {
      case 'paid': return 'Paid';
      case 'overdue': return 'Overdue';
      case 'cancelled': return 'Cancelled';
      default: return 'Pending';
    }
  }

  // Calculate total amount
  const total = items.reduce((sum, item) => sum + item.amount, 0);
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
      
      <div class="text-right">
        <p class="text-2xl font-semibold text-gray-900">
          {formatCurrency(total, currency)}
        </p>
        {#if showStatus}
          <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        {/if}
      </div>
    </div>
  </div>

  {#if showDetails}
    <div class={`p-6 ${summaryClass}`}>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Total amount -->
        <div class="border rounded-lg p-4">
          <div class="flex items-center">
            <div class="p-2 rounded-md bg-blue-100">
              <DollarSign class="h-5 w-5 text-blue-600" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">Total Amount</p>
              <p class="text-xl font-semibold text-gray-900">
                {formatCurrency(total, currency)}
              </p>
            </div>
          </div>
        </div>

        <!-- Due date -->
        {#if showDueDate && dueDate}
          <div class="border rounded-lg p-4">
            <div class="flex items-center">
              <div class={`p-2 rounded-md ${
                status === 'overdue' ? 'bg-red-100' : 'bg-gray-100'
              }`}>
                <Calendar class={`h-5 w-5 ${
                  status === 'overdue' ? 'text-red-600' : 'text-gray-600'
                }`} />
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500">Due Date</p>
                <p class={`text-lg font-semibold ${
                  status === 'overdue' ? 'text-red-600' : 'text-gray-900'
                }`}>
                  {formatDate(dueDate)}
                </p>
              </div>
            </div>
          </div>
        {/if}

        <!-- Status -->
        {#if showStatus}
          <div class="border rounded-lg p-4">
            <div class="flex items-center">
              <div class={`p-2 rounded-md ${
                status === 'paid' ? 'bg-green-100' :
                status === 'overdue' ? 'bg-red-100' :
                status === 'cancelled' ? 'bg-gray-100' : 'bg-yellow-100'
              }`}>
                {#if status === 'paid'}
                  <TrendingUp class="h-5 w-5 text-green-600" />
                {:else if status === 'overdue'}
                  <TrendingDown class="h-5 w-5 text-red-600" />
                {:else if status === 'cancelled'}
                  <Receipt class="h-5 w-5 text-gray-600" />
                {:else}
                  <Clock class="h-5 w-5 text-yellow-600" />
                {/if}
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500">Status</p>
                <p class={`text-lg font-semibold ${
                  status === 'paid' ? 'text-green-600' :
                  status === 'overdue' ? 'text-red-600' :
                  status === 'cancelled' ? 'text-gray-600' : 'text-yellow-600'
                }`}>
                  {getStatusText()}
                </p>
              </div>
            </div>
          </div>
        {/if}
      </div>

      <!-- Billing items -->
      {#if items.length > 0}
        <div class="mt-8">
          <h4 class="text-sm font-medium text-gray-900 mb-4">Billing Details</h4>
          <div class={`border rounded-lg ${itemsClass}`}>
            <ul class="divide-y divide-gray-200">
              {#each items as item}
                <li class="p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium text-gray-900">{item.description}</p>
                      <p class="text-sm text-gray-500">{formatDate(item.date)}</p>
                    </div>
                    <div class="text-right">
                      <p class="text-sm font-medium text-gray-900">
                        {formatCurrency(item.amount, item.currency)}
                      </p>
                      <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.status === 'paid' ? 'bg-green-100 text-green-800' :
                        item.status === 'refunded' ? 'bg-blue-100 text-blue-800' :
                        item.status === 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/if}
    </div>
  {/if}

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="text-xs text-gray-500">
        Invoice ID: <span class="font-mono">#INV-{Math.floor(Math.random() * 900000) + 100000}</span>
      </div>
      <div class="text-sm text-gray-500">
        Generated: {new Date().toLocaleDateString()}
      </div>
    </div>
  </div>
</div>