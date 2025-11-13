<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Check, X, Star, Zap, Crown, Users } from 'lucide-svelte';

  type Feature = {
    name: string;
    available: boolean | string; // boolean or specific value for the feature
  };

  type PricingPlan = {
    id: string;
    name: string;
    description: string;
    price: number;
    period: string;
    currency: string;
    popular?: boolean;
    features: Feature[];
    ctaText?: string;
    onCtaClick?: () => void;
    accentColor?: string;
  };

  type Props = {
    plans: PricingPlan[];
    title?: string;
    subtitle?: string;
    showPopularBadge?: boolean;
    showPeriodSelector?: boolean;
    periodOptions?: Array<{ value: string; label: string }>;
    currentPeriod?: string;
    onPeriodChange?: (period: string) => void;
    class?: string;
    headerClass?: string;
    planClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    plans = [],
    title = 'Pricing Plans',
    subtitle = 'Choose the perfect plan for your needs',
    showPopularBadge = true,
    showPeriodSelector = true,
    periodOptions = [
      { value: 'month', label: 'Monthly' },
      { value: 'year', label: 'Yearly' }
    ],
    currentPeriod = 'month',
    onPeriodChange,
    class: className = '',
    headerClass = '',
    planClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let selectedPeriod = $state(currentPeriod);

  function handlePeriodChange(period: string) {
    selectedPeriod = period;
    if (onPeriodChange) {
      onPeriodChange(period);
    }
  }

  // Format currency
  function formatCurrency(amount: number, currency: string) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="text-center">
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
      {#if subtitle}
        <p class="mt-1 text-sm text-gray-500">{subtitle}</p>
      {/if}
      
      {#if showPeriodSelector && periodOptions.length > 0}
        <div class="mt-4 flex justify-center">
          <div class="flex rounded-md shadow-sm">
            {#each periodOptions as option, i}
              <button
                type="button"
                class={`py-2 px-4 text-sm font-medium focus:outline-none ${
                  selectedPeriod === option.value
                    ? 'bg-blue-100 text-blue-700 border border-blue-300'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                } ${
                  i === 0 ? 'rounded-l-md' :
                  i === periodOptions.length - 1 ? 'rounded-r-md' :
                  '-ml-px'
                }`}
                onclick={() => handlePeriodChange(option.value)}
              >
                {option.label}
              </button>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
    {#each plans as plan}
      <div class={`border rounded-lg overflow-hidden ${
        plan.popular ? 'ring-2 ring-blue-500 transform scale-105 z-10' : ''
      } ${planClass}`}>
        {#if plan.popular && showPopularBadge}
          <div class="bg-blue-500 py-2 text-center">
            <span class="text-sm font-bold text-white flex items-center justify-center">
              <Star class="h-4 w-4 mr-1" />
              Popular
            </span>
          </div>
        {/if}
        
        <div class="p-6">
          <h3 class="text-lg font-medium text-gray-900">{plan.name}</h3>
          <p class="mt-2 text-gray-600 text-sm">{plan.description}</p>
          
          <div class="mt-6">
            <div class="flex items-baseline">
              <span class="text-4xl font-extrabold text-gray-900">
                {formatCurrency(plan.price, plan.currency)}
              </span>
              <span class="ml-1 text-xl font-medium text-gray-500">/{plan.period}</span>
            </div>
          </div>
          
          <button
            type="button"
            class={`mt-6 w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm ${
              plan.popular 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-800 text-white hover:bg-gray-900'
            }`}
            onclick={() => plan.onCtaClick && plan.onCtaClick()}
          >
            {plan.ctaText || `Get started`}
          </button>
          
          <ul class="mt-8 space-y-4">
            {#each plan.features as feature}
              <li class="flex items-start">
                {#if feature.available === true}
                  <Check class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span class="ml-3 text-sm text-gray-600">{feature.name}</span>
                {:else if feature.available === false}
                  <X class="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span class="ml-3 text-sm text-gray-400 line-through">{feature.name}</span>
                {:else}
                  <Check class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span class="ml-3 text-sm text-gray-600">
                    <span class="font-medium">{feature.name}</span>: {feature.available}
                  </span>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="text-xs text-gray-500 text-center">
      All plans include secure payment processing and 24/7 customer support
    </div>
  </div>
</div>