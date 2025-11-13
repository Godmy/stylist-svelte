<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CreditCard, Calendar, DollarSign, RefreshCw, X, CheckCircle, AlertCircle, Settings } from 'lucide-svelte';

  type SubscriptionPlan = {
    id: string;
    name: string;
    description: string;
    price: number;
    period: string; // e.g., 'month', 'year'
    currency: string;
    features: string[];
  };

  type Subscription = {
    id: string;
    plan: SubscriptionPlan;
    startDate: Date;
    endDate?: Date; // For recurring subscriptions this might be indefinite
    nextBillingDate?: Date;
    status: 'active' | 'cancelled' | 'expired' | 'trialing' | 'past_due' | 'paused';
    paymentMethod?: string;
    autoRenew: boolean;
  };

  type Props = {
    subscription: Subscription;
    onUpgrade?: () => void;
    onDowngrade?: () => void;
    onCancel?: () => void;
    onPause?: () => void;
    onResume?: () => void;
    onBillingChange?: () => void;
    onPaymentMethodChange?: () => void;
    showActions?: boolean;
    showBillingInfo?: boolean;
    showPaymentMethod?: boolean;
    title?: string;
    subtitle?: string;
    class?: string;
    headerClass?: string;
    planClass?: string;
    actionsClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    subscription,
    onUpgrade,
    onDowngrade,
    onCancel,
    onPause,
    onResume,
    onBillingChange,
    onPaymentMethodChange,
    showActions = true,
    showBillingInfo = true,
    showPaymentMethod = true,
    title = 'Subscription Manager',
    subtitle = 'Manage your subscription settings',
    class: className = '',
    headerClass = '',
    planClass = '',
    actionsClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  // Format currency
  function formatCurrency(amount: number, currency: string) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  // Format date
  function formatDate(date?: Date) {
    if (!date) return 'N/A';
    return date.toLocaleDateString([], {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Get status color and icon
  function getStatusInfo() {
    switch(subscription.status) {
      case 'active':
        return { color: 'text-green-600', bg: 'bg-green-100', icon: CheckCircle, text: 'Active' };
      case 'cancelled':
        return { color: 'text-gray-600', bg: 'bg-gray-100', icon: X, text: 'Cancelled' };
      case 'expired':
        return { color: 'text-red-600', bg: 'bg-red-100', icon: X, text: 'Expired' };
      case 'trialing':
        return { color: 'text-blue-600', bg: 'bg-blue-100', icon: AlertCircle, text: 'Trial' };
      case 'paused':
        return { color: 'text-yellow-600', bg: 'bg-yellow-100', icon: AlertCircle, text: 'Paused' };
      case 'past_due':
        return { color: 'text-red-600', bg: 'bg-red-100', icon: AlertCircle, text: 'Past Due' };
      default:
        return { color: 'text-gray-600', bg: 'bg-gray-100', icon: AlertCircle, text: 'Unknown' };
    }
  }

  let StatusIcon = $derived(getStatusInfo().icon);
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div>
        <div class="flex items-center">
          <RefreshCw class="h-6 w-6 text-gray-500 mr-2" />
          <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        {#if subtitle}
          <p class="mt-1 text-sm text-gray-500">{subtitle}</p>
        {/if}
      </div>
      
      {#if true}
        {@const statusInfo = getStatusInfo()}
        <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.bg} ${statusInfo.color}`}>
          <StatusIcon class="h-4 w-4 mr-1" />
          {statusInfo.text}
        </span>
      {/if}
    </div>
  </div>

  <div class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Plan Information -->
      <div class={`border rounded-lg p-5 ${planClass}`}>
        <h4 class="text-sm font-medium text-gray-900 mb-4">Plan Information</h4>
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-blue-100">
            <DollarSign class="h-5 w-5 text-blue-600" />
          </div>
          <div class="ml-4">
            <h5 class="font-medium text-gray-900">{subscription.plan.name}</h5>
            <p class="text-sm text-gray-500">{subscription.plan.description}</p>
            <p class="text-lg font-semibold text-gray-900 mt-2">
              {formatCurrency(subscription.plan.price, subscription.plan.currency)} / {subscription.plan.period}
            </p>
          </div>
        </div>
        
        <div class="mt-4">
          <h6 class="text-sm font-medium text-gray-700 mb-2">Features</h6>
          <ul class="space-y-1">
            {#each subscription.plan.features as feature}
              <li class="flex items-center text-sm text-gray-600">
                <CheckCircle class="h-4 w-4 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Subscription Details -->
      <div class="border rounded-lg p-5">
        <h4 class="text-sm font-medium text-gray-900 mb-4">Subscription Details</h4>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-sm text-gray-500">Started</span>
            <span class="text-sm font-medium text-gray-900">{formatDate(subscription.startDate)}</span>
          </div>
          
          {#if subscription.endDate}
            <div class="flex justify-between">
              <span class="text-sm text-gray-500">Ends</span>
              <span class="text-sm font-medium text-gray-900">{formatDate(subscription.endDate)}</span>
            </div>
          {/if}
          
          {#if subscription.nextBillingDate}
            <div class="flex justify-between">
              <span class="text-sm text-gray-500">Next Billing</span>
              <span class={`text-sm font-medium ${
                subscription.status === 'past_due' ? 'text-red-600' : 'text-gray-900'
              }`}>
                {formatDate(subscription.nextBillingDate)}
              </span>
            </div>
          {/if}
          
          <div class="flex justify-between">
            <span class="text-sm text-gray-500">Auto Renew</span>
            <span class={`text-sm font-medium ${
              subscription.autoRenew ? 'text-green-600' : 'text-red-600'
            }`}>
              {subscription.autoRenew ? 'On' : 'Off'}
            </span>
          </div>
        </div>
      </div>

      <!-- Payment Information -->
      {#if showPaymentMethod && subscription.paymentMethod}
        <div class="border rounded-lg p-5">
          <h4 class="text-sm font-medium text-gray-900 mb-4">Payment Method</h4>
          <div class="flex items-center">
            <div class="p-2 rounded-md bg-gray-100">
              <CreditCard class="h-5 w-5 text-gray-600" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-900">{subscription.paymentMethod}</p>
              <button
                type="button"
                class="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                onclick={() => onPaymentMethodChange && onPaymentMethodChange()}
              >
                Change Payment Method
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <!-- Actions -->
    {#if showActions}
      <div class={`mt-6 ${actionsClass}`}>
        <h4 class="text-sm font-medium text-gray-900 mb-4">Subscription Actions</h4>
        <div class="flex flex-wrap gap-3">
          {#if subscription.status === 'active' || subscription.status === 'trialing'}
            {#if onUpgrade}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                onclick={onUpgrade}
              >
                Upgrade Plan
              </button>
            {/if}
            
            {#if onDowngrade}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                onclick={onDowngrade}
              >
                Downgrade Plan
              </button>
            {/if}
            
            {#if onPause}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-yellow-300 text-sm font-medium rounded-md shadow-sm text-yellow-700 bg-yellow-50 hover:bg-yellow-100 focus:outline-none"
                onclick={onPause}
              >
                Pause Subscription
              </button>
            {/if}
            
            {#if onCancel}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md shadow-sm text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none"
                onclick={onCancel}
              >
                Cancel Subscription
              </button>
            {/if}
          {:else if subscription.status === 'paused'}
            {#if onResume}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                onclick={onResume}
              >
                Resume Subscription
              </button>
            {/if}
            
            {#if onCancel}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md shadow-sm text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none"
                onclick={onCancel}
              >
                Cancel Subscription
              </button>
            {/if}
          {/if}
          
          {#if showBillingInfo && subscription.status === 'active' && onBillingChange}
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              onclick={onBillingChange}
            >
              <Settings class="h-4 w-4 mr-1" />
              Billing Settings
            </button>
          {/if}
        </div>
      </div>
    {/if}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center text-xs text-gray-500">
      <AlertCircle class="h-4 w-4 mr-1" />
      <span>Changes to your subscription will take effect at the start of the next billing cycle</span>
    </div>
  </div>
</div>