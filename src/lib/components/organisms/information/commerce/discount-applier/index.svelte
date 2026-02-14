<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Percent, Tag, Check, X, LoaderCircle } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import Input from '$stylist/components/atoms/interaction/input/field/input-field/index.svelte';

  type DiscountType = 'percentage' | 'fixed' | 'free_shipping';

  type DiscountRule = {
    id: string;
    code: string;
    type: DiscountType;
    value: number; // percentage or fixed amount
    name: string;
    description?: string;
    minOrderAmount?: number;
    maxDiscountAmount?: number;
    startDate?: Date;
    endDate?: Date;
    usageLimit?: number;
    usedCount?: number;
    appliesTo?: 'all' | 'specific_products' | 'specific_categories';
    applicableItems?: string[]; // IDs of applicable products/categories
  };

  type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    rules: DiscountRule[];
    cartItems: CartItem[];
    cartTotal: number;
    class?: string;
    inputClass?: string;
    buttonClass?: string;
    appliedCodes?: string[];
    showCodeInput?: boolean;
    showRuleList?: boolean;
    showAppliedRules?: boolean;
    onApplyCode?: (code: string) => void;
    onApplyRule?: (rule: DiscountRule) => void;
    onRemoveRule?: (ruleId: string) => void;
    onValidateCode?: (code: string) => Promise<boolean>;
    currency?: string;
    locale?: string;
  };

  let {
    rules = [],
    cartItems = [],
    cartTotal = 0,
    class: hostClass = '',
    inputClass = '',
    buttonClass = '',
    appliedCodes = [],
    showCodeInput = true,
    showRuleList = true,
    showAppliedRules = true,
    onApplyCode,
    onApplyRule,
    onRemoveRule,
    onValidateCode,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let promoCode = $state('');
  let message = $state<{ type: 'success' | 'error'; text: string } | null>(null);
  let validating = $state(false);

  // Calculate eligible rules based on cart total and other constraints
  let eligibleRules = $derived(
    rules.filter((rule) => {
      if (rule.startDate && new Date() < new Date(rule.startDate)) return false;
      if (rule.endDate && new Date() > new Date(rule.endDate)) return false;
      if (rule.minOrderAmount && cartTotal < rule.minOrderAmount) return false;
      if (rule.usageLimit && rule.usedCount && rule.usedCount >= rule.usageLimit) return false;
      if (appliedCodes.includes(rule.code)) return false;

      return true;
    })
  );

  async function handleApplyCode() {
    if (!promoCode.trim()) {
      message = { type: 'error', text: 'Please enter a promo code' };
      return;
    }

    validating = true;

    try {
      // If a validation function is provided, use it
      if (onValidateCode) {
        const isValid = await onValidateCode(promoCode);
        if (!isValid) {
          message = { type: 'error', text: 'Invalid promo code' };
          setTimeout(() => message = null, 3000);
          return;
        }
      }

      // Find rule matching the code
      const rule = rules.find(r => r.code.toLowerCase() === promoCode.toLowerCase());

      if (!rule) {
        message = { type: 'error', text: 'Invalid promo code' };
        setTimeout(() => message = null, 3000);
        return;
      }

      // Check constraints
      if (rule.startDate && new Date() < new Date(rule.startDate)) {
        message = { type: 'error', text: 'This code is not yet active' };
        setTimeout(() => message = null, 3000);
        return;
      }

      if (rule.endDate && new Date() > new Date(rule.endDate)) {
        message = { type: 'error', text: 'This code has expired' };
        setTimeout(() => message = null, 3000);
        return;
      }

      if (rule.minOrderAmount && cartTotal < rule.minOrderAmount) {
        message = {
          type: 'error',
          text: `Minimum order amount of ${formatCurrency(rule.minOrderAmount)} not met`
        };
        setTimeout(() => message = null, 3000);
        return;
      }

      if (rule.usageLimit && rule.usedCount && rule.usedCount >= rule.usageLimit) {
        message = { type: 'error', text: 'This code has exceeded its usage limit' };
        setTimeout(() => message = null, 3000);
        return;
      }

      // Apply the rule
      onApplyCode?.(promoCode);
      message = { type: 'success', text: 'Promo code applied successfully!' };
      setTimeout(() => message = null, 3000);
      promoCode = '';
    } catch (err) {
      message = { type: 'error', text: 'Failed to apply promo code' };
      setTimeout(() => message = null, 3000);
    } finally {
      validating = false;
    }
  }

  function handleApplyRule(rule: DiscountRule) {
    onApplyRule?.(rule);
  }

  function handleRemoveRule(ruleId: string) {
    onRemoveRule?.(ruleId);
  }

  function calculateDiscountAmount(rule: DiscountRule): number {
    let applicableItems = cartItems;

    if (rule.appliesTo === 'specific_products') {
      applicableItems = cartItems.filter(item => rule.applicableItems?.includes(item.id));
    } else if (rule.appliesTo === 'specific_categories') {
      applicableItems = cartItems.filter(item => rule.applicableItems?.includes(item.category || ''));
    }

    let subtotal = applicableItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (rule.type === 'percentage') {
      let discountAmount = subtotal * (rule.value / 100);

      // Apply max discount if specified
      if (rule.maxDiscountAmount && discountAmount > rule.maxDiscountAmount) {
        discountAmount = rule.maxDiscountAmount;
      }

      return parseFloat(discountAmount.toFixed(2));
    } else if (rule.type === 'fixed') {
      return rule.value;
    } else {
      // Free shipping - return shipping cost as discount
      return 0; // In a real app, you'd have shipping cost info
    }
  }

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  }
</script>

<div class={`c-discount-applier ${hostClass}`} {...restProps}>
  {#if showCodeInput}
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
        <Tag class="h-4 w-4 mr-1" />
        Have a promo code?
      </label>

      <div class="flex">
        <Input
          id="promo-code"
          label="Promo code"
          type="text"
          placeholder="Enter promo code"
          value={promoCode}
          class={`flex-1 mb-0 [&>label]:sr-only [&>input]:rounded-r-none ${inputClass}`}
          oninput={(e: Event) => promoCode = (e.target as HTMLInputElement).value}
          onkeypress={(e: KeyboardEvent) => e.key === 'Enter' && handleApplyCode()}
        />
        <Button
          variant="secondary"
          class={`rounded-l-none border-l-0 ${buttonClass}`}
          onclick={handleApplyCode}
          disabled={validating}
        >
          {#if validating}
            <LoaderCircle class="h-4 w-4 animate-spin" />
          {:else}
            Apply
          {/if}
        </Button>
      </div>

      {#if message}
        <div class={`mt-2 text-sm ${
          message.type === 'success' ? 'text-green-600' : 'text-red-600'
        }`}>
          {message.text}
        </div>
      {/if}
    </div>
  {/if}

  {#if showAppliedRules && appliedCodes.length > 0}
    <div class="mb-6">
      <h3 class="text-sm font-medium text-gray-900 mb-2 flex items-center">
        <Check class="h-4 w-4 mr-1 text-green-500" />
        Applied Discounts
      </h3>

      <div class="space-y-2">
        {#each appliedCodes as code}
          {@const rule = rules.find(r => r.code === code)}
          {#if rule}
            <div class="flex items-center justify-between p-3 bg-green-50 rounded-md">
              <div>
                <div class="font-medium text-green-800">{rule.name}</div>
                <div class="text-sm text-green-600">-{formatCurrency(calculateDiscountAmount(rule))}</div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onclick={() => handleRemoveRule(rule.id)}
                aria-label="Remove discount"
              >
                <X class="h-4 w-4" />
              </Button>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}

  {#if showRuleList && eligibleRules.length > 0}
    <div>
      <h3 class="text-sm font-medium text-gray-900 mb-2 flex items-center">
        <Percent class="h-4 w-4 mr-1" />
        Available Discounts
      </h3>

      <div class="space-y-3">
        {#each eligibleRules as rule}
          <div class="p-4 border border-gray-200 rounded-lg">
            <div class="flex justify-between items-start">
              <div class="flex-1 min-w-0">
                <div class="flex items-center">
                  <span class="font-medium text-gray-900">{rule.name}</span>
                  {#if rule.code}
                    <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {rule.code}
                    </span>
                  {/if}
                </div>

                <p class="mt-1 text-sm text-gray-600">{rule.description}</p>

                <div class="mt-2 flex flex-wrap gap-2">
                  {#if rule.type === 'percentage'}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {rule.value}% off
                    </span>
                  {:else if rule.type === 'fixed'}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {formatCurrency(rule.value)} off
                    </span>
                  {:else if rule.type === 'free_shipping'}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Free shipping
                    </span>
                  {/if}

                  {#if rule.minOrderAmount}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Min. {formatCurrency(rule.minOrderAmount)}
                    </span>
                  {/if}

                  {#if rule.startDate || rule.endDate}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {rule.startDate ? formatDate(rule.startDate) : 'Now'} - {rule.endDate ? formatDate(rule.endDate) : 'Ongoing'}
                    </span>
                  {/if}
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onclick={() => handleApplyRule(rule)}
              >
                Apply
              </Button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if showRuleList && eligibleRules.length === 0 && rules.length > 0}
    <p class="text-sm text-gray-500">No discounts available for your cart</p>
  {/if}
</div>


