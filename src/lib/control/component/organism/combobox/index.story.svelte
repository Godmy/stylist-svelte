<script lang="ts">
  import type { ComboboxItem } from '$stylist/control/type/struct/combobox/item';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import Combobox from './index.svelte';

  const items: ComboboxItem[] = [
    { id: '1', label: 'Apple', description: 'A sweet, edible fruit' },
    { id: '2', label: 'Banana', description: 'A yellow, curved fruit' },
    { id: '3', label: 'Cherry', description: 'A small, round stone fruit' }
  ];

  const controls: InterfaceControllerSettings[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'Start typing...' },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'clearable', type: 'boolean', defaultValue: true },
    { name: 'loading', type: 'boolean', defaultValue: false },
    { name: 'emptyText', type: 'text', defaultValue: 'Nothing found' }
  ];
</script>

<Story
  id="organisms-combobox"
  title="Organisms / Interaction / Controls / Combobox"
  component={Combobox}
  category="Organisms/Interaction/Controls"
  description="Combobox component with searchable dropdown."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="space-y-4 p-8">
      <Combobox
        id="demo-combobox"
        label="Sample Combobox"
        description="Demo of the combobox component"
        {items}
        value="2"
        placeholder={values.placeholder as string}
        disabled={values.disabled as boolean}
        clearable={values.clearable as boolean}
        loading={values.loading as boolean}
        emptyText={values.emptyText as string}
      />

      <p>Initial value: 2</p>
    </div>
  {/snippet}
</Story>
