<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import PriceAlert from './index.svelte';
  import type { PriceAlertElementProps } from '$stylist/design-system/props/price-alert';

  let {
    id = '',
    title = '',
    description = '',
    primaryScenario = undefined,
    variantScenarios = [],
    controls = [
      { name: 'variant', type: 'select', options: ['monitoring', 'reached', 'exceeded', 'primary', 'secondary'], defaultValue: 'monitoring' },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'currentPrice', type: 'number', defaultValue: 89.99 },
      { name: 'targetPrice', type: 'number', defaultValue: 99.99 },
      { name: 'productName', type: 'text', defaultValue: 'Wireless Headphones' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    primaryScenario?: PriceAlertElementProps;
    variantScenarios?: PriceAlertElementProps[];
    controls?: ControlConfig[]
  }>();

  // Сценарии по умолчанию
  const defaultPrimaryScenario: PriceAlertElementProps = {
    variant: 'monitoring',
    size: 'md',
    currentPrice: 89.99,
    targetPrice: 99.99,
    productName: 'Wireless Headphones'
  };

  const variantScenariosData: PriceAlertElementProps[] = [
    { variant: 'monitoring', size: 'md', currentPrice: 89.99, targetPrice: 99.99, productName: 'Monitoring Alert' },
    { variant: 'reached', size: 'md', currentPrice: 79.99, targetPrice: 89.99, productName: 'Reached Alert' },
    { variant: 'exceeded', size: 'md', currentPrice: 109.99, targetPrice: 99.99, productName: 'Exceeded Alert' },
    { variant: 'reached', size: 'md', currentPrice: 79.99, targetPrice: 89.99, productName: 'Reached Alert (Alt)' },
    { variant: 'exceeded', size: 'md', currentPrice: 109.99, targetPrice: 99.99, productName: 'Exceeded Alert (Alt)' }
  ];

  // Использовать предоставленные сценарии или значения по умолчанию
  primaryScenario = primaryScenario || defaultPrimaryScenario;
  variantScenarios = variantScenarios.length > 0 ? variantScenarios : variantScenariosData;
</script>

<Story
  {id}
  {title}
  {description}
  component={PriceAlert}
  category="Molecules"
  controls={controls}
>
  {#snippet children(values: any)}
    <PriceAlert {...values} />
  {/snippet}
</Story>
