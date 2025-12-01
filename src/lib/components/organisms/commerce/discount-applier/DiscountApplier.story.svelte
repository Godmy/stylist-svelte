<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DiscountApplier from './DiscountApplier.svelte';

  type Props = {
    showCodeInput: boolean;
    showRuleList: boolean;
    showAppliedRules: boolean;
  };

  type DiscountType = 'percentage' | 'fixed' | 'free_shipping';

  type DiscountRule = {
    id: string;
    code: string;
    type: DiscountType;
    value: number;
    name: string;
    description?: string;
    minOrderAmount?: number;
    maxDiscountAmount?: number;
    startDate?: Date;
    endDate?: Date;
    usageLimit?: number;
    usedCount?: number;
    appliesTo?: 'all' | 'specific_products' | 'specific_categories';
    applicableItems?: string[];
  };

  const rules: DiscountRule[] = [
    {
      id: 'rule-1',
      code: 'SPRING25',
      type: 'percentage',
      value: 25,
      name: 'Spring refresh',
      description: 'Save 25% on annual plans.',
      minOrderAmount: 200,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 86400000)
    },
    {
      id: 'rule-2',
      code: 'VIP50',
      type: 'fixed',
      value: 50,
      name: 'VIP loyalty',
      description: '$50 off for returning customers.',
      minOrderAmount: 100
    },
    {
      id: 'rule-3',
      code: 'SHIPFREE',
      type: 'free_shipping',
      value: 0,
      name: 'Free shipping',
      description: 'Complimentary shipping on hardware kits.'
    }
  ];

  const cartItems = [
    { id: 'item-1', name: 'Command Console', price: 180, quantity: 1, category: 'hardware' },
    { id: 'item-2', name: 'Automation add-on', price: 49, quantity: 2, category: 'software' }
  ];

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const controls: ControlConfig[] = [
    { name: 'showCodeInput', type: 'boolean', defaultValue: true },
    { name: 'showRuleList', type: 'boolean', defaultValue: true },
    { name: 'showAppliedRules', type: 'boolean', defaultValue: true }
  ];

  let appliedCodes = $state<string[]>([]);

  function handleApplyCode(code: string) {
    if (!appliedCodes.includes(code)) {
      appliedCodes = [...appliedCodes, code];
    }
  }

  function handleApplyRule(rule: DiscountRule) {
    if (!appliedCodes.includes(rule.code)) {
      appliedCodes = [...appliedCodes, rule.code];
    }
  }

  function handleRemoveRule(ruleId: string) {
    const matchedRule = rules.find(rule => rule.id === ruleId);
    if (!matchedRule) {
      return;
    }
    appliedCodes = appliedCodes.filter((code) => code !== matchedRule.code);
  }
</script>

<Story
  id="molecules-discount-applier"
  title="DiscountApplier"
  component={DiscountApplier}
  category="Molecules"
  description="Promo-code input plus eligible rule list for checkout surfaces."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Cart total</p>
            <p class="text-lg text-[--color-text-primary]">${cartTotal.toFixed(2)}</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            Applied codes: {appliedCodes.length}
          </span>
        </header>

        <div class="mt-6">
          <DiscountApplier
            rules={rules}
            cartItems={cartItems}
            cartTotal={cartTotal}
            appliedCodes={appliedCodes}
            showCodeInput={props.showCodeInput}
            showRuleList={props.showRuleList}
            showAppliedRules={props.showAppliedRules}
            onApplyCode={handleApplyCode}
            onApplyRule={handleApplyRule}
            onRemoveRule={handleRemoveRule}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Rule cookbook</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Pair percentage, fixed, and shipping incentives with min spend thresholds.
        </p>
        <div class="mt-5 space-y-3 text-sm text-[--color-text-primary]">
          {#each rules as rule}
            <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
              <div class="flex items-center justify-between">
                <span class="font-semibold">{rule.name}</span>
                <span class="text-xs font-mono text-[--color-text-secondary]">{rule.code}</span>
              </div>
              <p class="text-xs text-[--color-text-secondary]">{rule.description}</p>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>
