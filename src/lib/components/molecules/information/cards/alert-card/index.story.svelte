<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import AlertCard from './index.svelte';
  import type { AlertCardElementProps } from '$stylist/design-system/props/alert-card';

  let {
    id = '',
    title = '',
    description = '',
    primaryScenario = undefined,
    variantScenarios = [],
    controls = [
      { name: 'variant', type: 'select', options: ['default', 'info', 'success', 'warning', 'danger', 'primary', 'secondary'], defaultValue: 'default' },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'title', type: 'text', defaultValue: 'Alert Title' },
      { name: 'subtitle', type: 'text', defaultValue: 'Alert subtitle' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    primaryScenario?: AlertCardElementProps;
    variantScenarios?: AlertCardElementProps[];
    controls?: ControlConfig[]
  }>();

  // Сценарии по умолчанию
  const defaultPrimaryScenario: AlertCardElementProps = {
    variant: 'default',
    size: 'md',
    title: 'Sample Alert',
    subtitle: 'This is a sample alert message'
  };

  const variantScenariosData: AlertCardElementProps[] = [
    { variant: 'info', size: 'md', title: 'Info Alert', subtitle: 'This is an informational message' },
    { variant: 'success', size: 'md', title: 'Success Alert', subtitle: 'This is a success message' },
    { variant: 'warning', size: 'md', title: 'Warning Alert', subtitle: 'This is a warning message' },
    { variant: 'danger', size: 'md', title: 'Error Alert', subtitle: 'This is an error message' },
    { variant: 'primary', size: 'md', title: 'Primary Alert', subtitle: 'This is a primary message' }
  ];

  // Использовать предоставленные сценарии или значения по умолчанию
  primaryScenario = primaryScenario || defaultPrimaryScenario;
  variantScenarios = variantScenarios.length > 0 ? variantScenarios : variantScenariosData;
  
  // Sample actions for the alert card
  const sampleActions = [
    { label: 'OK', onClick: () => console.log('OK clicked') },
    { label: 'Cancel', onClick: () => console.log('Cancel clicked') }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={AlertCard}
  category="Molecules"
  controls={controls}
>
  {#snippet children(values: any)}
    <AlertCard {...values} actions={sampleActions}>
      <!-- AlertCard doesn't typically use children slot -->
    </AlertCard>
  {/snippet}
</Story>
