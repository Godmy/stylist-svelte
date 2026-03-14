<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const CreditCard = 'credit-card';
const Calendar = 'calendar';
const DollarSign = 'dollar-sign';
const RefreshCw = 'refresh-cw';
const X = 'x';
const CheckCircle = 'check-circle';
const AlertCircle = 'alert-circle';
const Settings = 'settings';


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
        return { color: 'text-[var(--color-success-600)]', bg: 'bg-[var(--color-success-100)]', icon: CheckCircle, text: 'Active' };
      case 'cancelled':
        return { color: 'text-[var(--color-text-secondary)]', bg: 'bg-[var(--color-background-secondary)]', icon: X, text: 'Cancelled' };
      case 'expired':
        return { color: 'text-[var(--color-danger-600)]', bg: 'bg-[var(--color-danger-100)]', icon: X, text: 'Expired' };
      case 'trialing':
        return { color: 'text-[var(--color-primary-600)]', bg: 'bg-[var(--color-primary-100)]', icon: AlertCircle, text: 'Trial' };
      case 'paused':
        return { color: 'text-yellow-600', bg: 'bg-yellow-100', icon: AlertCircle, text: 'Paused' };
      case 'past_due':
        return { color: 'text-[var(--color-danger-600)]', bg: 'bg-[var(--color-danger-100)]', icon: AlertCircle, text: 'Past Due' };
      default:
        return { color: 'text-[var(--color-text-secondary)]', bg: 'bg-[var(--color-background-secondary)]', icon: AlertCircle, text: 'Unknown' };
    }
  }
</script>

<div class={`c-subscription-manager bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div>
        <div class="flex items-center">
          <BaseIcon name={RefreshCw} class="h-6 w-6 text-[var(--color-text-secondary)] mr-2" />
          <h3 class="text-lg font-medium text-[var(--color-text-primary)]">{title}</h3>
        </div>
        {#if subtitle}
          <p class="mt-1 text-sm text-[var(--color-text-secondary)]">{subtitle}</p>
        {/if}
      </div>

      {#if true}
        {@const statusInfo = getStatusInfo()}
        <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.bg} ${statusInfo.color}`}>
          <BaseIcon name={statusInfo.icon} class="h-4 w-4 mr-1" />
          {statusInfo.text}
        </span>
      {/if}
    </div>
  </div>

  <div class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Plan Information -->
      <div class={`border rounded-lg p-5 ${planClass}`}>
        <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-4">Plan Information</h4>
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-[var(--color-primary-100)]">
            <BaseIcon name={DollarSign} class="h-5 w-5 text-[var(--color-primary-600)]" />
          </div>
          <div class="ml-4">
            <h5 class="font-medium text-[var(--color-text-primary)]">{subscription.plan.name}</h5>
            <p class="text-sm text-[var(--color-text-secondary)]">{subscription.plan.description}</p>
            <p class="text-lg font-semibold text-[var(--color-text-primary)] mt-2">
              {formatCurrency(subscription.plan.price, subscription.plan.currency)} / {subscription.plan.period}
            </p>
          </div>
        </div>

        <div class="mt-4">
          <h6 class="text-sm font-medium text-[var(--color-text-primary)] mb-2">Features</h6>
          <ul class="space-y-1">
            {#each subscription.plan.features as feature}
              <li class="flex items-center text-sm text-[var(--color-text-secondary)]">
                <BaseIcon name={CheckCircle} class="h-4 w-4 text-[var(--color-success-500)] mr-2" />
                <span>{feature}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Subscription Details -->
      <div class="border rounded-lg p-5">
        <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-4">Subscription Details</h4>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-sm text-[var(--color-text-secondary)]">Started</span>
            <span class="text-sm font-medium text-[var(--color-text-primary)]">{formatDate(subscription.startDate)}</span>
          </div>

          {#if subscription.endDate}
            <div class="flex justify-between">
              <span class="text-sm text-[var(--color-text-secondary)]">Ends</span>
              <span class="text-sm font-medium text-[var(--color-text-primary)]">{formatDate(subscription.endDate)}</span>
            </div>
          {/if}

          {#if subscription.nextBillingDate}
            <div class="flex justify-between">
              <span class="text-sm text-[var(--color-text-secondary)]">Next Billing</span>
              <span class={`text-sm font-medium ${
                subscription.status === 'past_due' ? 'text-[var(--color-danger-600)]' : 'text-[var(--color-text-primary)]'
              }`}>
                {formatDate(subscription.nextBillingDate)}
              </span>
            </div>
          {/if}

          <div class="flex justify-between">
            <span class="text-sm text-[var(--color-text-secondary)]">Auto Renew</span>
            <span class={`text-sm font-medium ${
              subscription.autoRenew ? 'text-[var(--color-success-600)]' : 'text-[var(--color-danger-600)]'
            }`}>
              {subscription.autoRenew ? 'On' : 'Off'}
            </span>
          </div>
        </div>
      </div>

      <!-- Payment Information -->
      {#if showPaymentMethod && subscription.paymentMethod}
        <div class="border rounded-lg p-5">
          <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-4">Payment Method</h4>
          <div class="flex items-center">
            <div class="p-2 rounded-md bg-[var(--color-background-secondary)]">
              <BaseIcon name={CreditCard} class="h-5 w-5 text-[var(--color-text-secondary)]" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-[var(--color-text-primary)]">{subscription.paymentMethod}</p>
              <button
                type="button"
                class="mt-2 text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-800)]"
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
        <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-4">Subscription Actions</h4>
        <div class="flex flex-wrap gap-3">
          {#if subscription.status === 'active' || subscription.status === 'trialing'}
            {#if onUpgrade}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-success-600)] hover:bg-[var(--color-success-700)] focus:outline-none"
                onclick={onUpgrade}
              >
                Upgrade Plan
              </button>
            {/if}

            {#if onDowngrade}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-[var(--color-border-primary)] text-sm font-medium rounded-md shadow-sm text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none"
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
                class="inline-flex items-center px-4 py-2 border border-[var(--color-danger-300)] text-sm font-medium rounded-md shadow-sm text-[var(--color-danger-700)] bg-[var(--color-danger-50)] hover:bg-[var(--color-danger-100)] focus:outline-none"
                onclick={onCancel}
              >
                Cancel Subscription
              </button>
            {/if}
          {:else if subscription.status === 'paused'}
            {#if onResume}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none"
                onclick={onResume}
              >
                Resume Subscription
              </button>
            {/if}

            {#if onCancel}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-[var(--color-danger-300)] text-sm font-medium rounded-md shadow-sm text-[var(--color-danger-700)] bg-[var(--color-danger-50)] hover:bg-[var(--color-danger-100)] focus:outline-none"
                onclick={onCancel}
              >
                Cancel Subscription
              </button>
            {/if}
          {/if}

          {#if showBillingInfo && subscription.status === 'active' && onBillingChange}
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-[var(--color-border-primary)] text-sm font-medium rounded-md shadow-sm text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none"
              onclick={onBillingChange}
            >
              <BaseIcon name={Settings} class="h-4 w-4 mr-1" />
              Billing Settings
            </button>
          {/if}
        </div>
      </div>
    {/if}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center text-xs text-[var(--color-text-secondary)]">
      <BaseIcon name={AlertCircle} class="h-4 w-4 mr-1" />
      <span>Changes to your subscription will take effect at the start of the next billing cycle</span>
    </div>
  </div>
</div>





