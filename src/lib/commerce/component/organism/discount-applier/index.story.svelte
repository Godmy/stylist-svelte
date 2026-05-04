<script lang="ts">
  import type { SlotDiscountRule } from '$stylist/commerce/interface/slot/discount-rule';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import RecipeDiscountApplier from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'showCodeInput', type: 'boolean', defaultValue: true },
    { name: 'showRuleList', type: 'boolean', defaultValue: true }
  ];

  const discountRules = [
    { id: 'rule1', code: 'SAVE10', type: 'percentage' as const, value: 10, name: '10% Off', description: 'Get 10% off your order', minOrderAmount: 50 },
    { id: 'rule2', code: 'FREESHIP', type: 'free-shipping' as const, value: 0, name: 'Free Shipping', description: 'Free shipping on orders over $75', minOrderAmount: 75 }
  ];

  const cartItems = [
    { id: 'item1', name: 'Wireless Headphones', price: 129.99, quantity: 1 },
    { id: 'item2', name: 'Bluetooth Speaker', price: 79.99, quantity: 1 }
  ];
</script>

<Story component={RecipeDiscountApplier} title="Discount Applier" description="Promo code and discount rules panel." controls={controls}>
  {#snippet children(values: any)}
    <RecipeDiscountApplier
      rules={discountRules}
      cartItems={cartItems}
      cartTotal={209.98}
      showCodeInput={values.showCodeInput as boolean}
      showRuleList={values.showRuleList as boolean}
      showAppliedRules={true}
      onApplyCode={(code: string) => {
        console.log('Applying code:', code);
      }}
      onApplyRule={(rule: SlotDiscountRule) => {
        console.log('Applying rule:', rule.name);
      }}
      onRemoveRule={(ruleId: string) => {
        console.log('Removing rule:', ruleId);
      }}
      onValidateCode={async (code: string) => {
        console.log('Validating code:', code);
        return true;
      }}
      currency="USD"
    />
  {/snippet}
</Story>
