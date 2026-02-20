<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import BaseCard from './index.svelte';
  import type { IBaseCardElementProps } from '$stylist/design-system/props/base-card';

  let {
    id = '',
    title = '',
    description = '',
    primaryScenario = undefined,
    variantScenarios = [],
    controls = [
      { name: 'variant', type: 'select', options: ['default', 'outline', 'ghost', 'primary', 'secondary', 'success', 'warning', 'danger'], defaultValue: 'default' },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'title', type: 'text', defaultValue: 'Card Title' },
      { name: 'description', type: 'text', defaultValue: 'Card description' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    primaryScenario?: IBaseCardElementProps;
    variantScenarios?: IBaseCardElementProps[];
    controls?: ControlConfig[]
  }>();

  // Сценарии по умолчанию
  const defaultPrimaryScenario: IBaseCardElementProps = {
    variant: 'default',
    size: 'md',
    title: 'Sample Card',
    description: 'This is a sample card description'
  };

  const variantScenariosData: IBaseCardElementProps[] = [
    { variant: 'default', size: 'md', title: 'Default Card', description: 'This is a default card' },
    { variant: 'outline', size: 'md', title: 'Outline Card', description: 'This is an outline card' },
    { variant: 'ghost', size: 'md', title: 'Ghost Card', description: 'This is a ghost card' },
    { variant: 'primary', size: 'md', title: 'Primary Card', description: 'This is a primary card' },
    { variant: 'secondary', size: 'md', title: 'Secondary Card', description: 'This is a secondary card' }
  ];

  // Использовать предоставленные сценарии или значения по умолчанию
  primaryScenario = primaryScenario || defaultPrimaryScenario;
  variantScenarios = variantScenarios.length > 0 ? variantScenarios : variantScenariosData;
  
  // Sample content for the card
  const sampleCardContent = `
    This is sample content for the card. It can include various types of content
    like text, images, buttons, or any other Svelte components. The BaseCard
    component provides a flexible container for organizing content in a structured way.
  `;
</script>

<Story
  {id}
  {title}
  {description}
  component={BaseCard}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props)}
    <BaseCard {...props}>
      <div class="p-4">
        <p>{sampleCardContent}</p>
        <div class="mt-4 flex gap-2">
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Action 1</button>
          <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Action 2</button>
        </div>
      </div>
    </BaseCard>
  {/snippet}
</Story>

