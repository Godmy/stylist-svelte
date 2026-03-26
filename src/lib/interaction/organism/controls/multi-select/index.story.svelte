<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import MultiSelect from './index.svelte';

  const options = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'solid', label: 'Solid' }
  ];

  type Props = {
    disabled: boolean;
    searchable: boolean;
    maxSelections: number;
    placeholder: string;
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'searchable', type: 'boolean', defaultValue: true },
    { name: 'maxSelections', type: 'number', defaultValue: 0, min: 0, max: 5, step: 1 },
    { name: 'placeholder', type: 'text', defaultValue: 'Select options...' }
  ];
</script>

<Story
  id="organisms-multi-select"
  title="Organisms / Interaction / Controls / Multi Select"
  component={MultiSelect}
  category="Organisms/Interaction/Controls"
  description="Multi-selection control with searchable dropdown."
  controls={controls}
>
  {#snippet children(values: any)}
    {@const typedProps = values as Props}
    <div class="sb-organisms-multi-select p-4">
      <div class="max-w-md">
        <MultiSelect
          {options}
          disabled={typedProps.disabled}
          searchable={typedProps.searchable}
          maxSelections={typedProps.maxSelections}
          placeholder={typedProps.placeholder}
        />
      </div>
    </div>
  {/snippet}
</Story>





